import {Component, OnInit} from '@angular/core';
import {BlackListService} from '../../commons/services/blacklist.service';
import {MessageService} from '../../commons/services/message.service';
import {TypeaheadMatch} from 'ng2-bootstrap';
import {QuotaService} from '../../commons/services/quotacap.service';
import {APIOperation, Operator} from '../../commons/models/common-data-models';
import {RateService} from "../../commons/services/rate.service";
import {AuthenticationService} from "../../commons/services/authentication.service";

@Component({
    selector: 'app-assign-rate-main',
    templateUrl: './assign-rate-main.component.html',
    styleUrls: ['./assign-rate.component.scss']
})

export class AssignRateMainComponent implements OnInit {

    private operatorList: Operator[];
    private apiOperationList: APIOperation[];
    private apiList: string[];

    private api: string;
    private operator: string;
    private apiOperation: string;

    private loginInfo;

    private invalidapiOperation: boolean;
    private invalidOperator: boolean;
    private invalidApi: boolean;

    constructor(private rateService: RateService, private blackListService: BlackListService,
                private message: MessageService, private quotaService: QuotaService,
                private _authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {

        this.apiList = [];
        this.operatorList = [];
        this.apiOperationList = [{
            'api_operationid': 1,
            'api_operation': 'Send SMS'
        }, {
            'api_operationid': 2,
            'api_operation': 'Retrieve SMS'
        }, {
            'api_operationid': 4,
            'api_operation': 'Refund'
        }, {
            'api_operationid': 3,
            'api_operation': 'Charge'
        }];

        this.api = '';
        this.operator = '';
        this.apiOperation = '';

        this.loginInfo = this._authenticationService.loginUserInfo.getValue();

        this.getApis();
        this.getOperators();
        this.getApiOperations();
        this.clearErrors();
    }

    /**
     *  Get The List of API's
     */
    getApis() {
        this.blackListService.getApiList((response, status) => {
            if (status) {
                let count = 0;
                for (const entry of response) {
                    const splited = entry.split(':');
                    this.apiList[count] = splited[1];
                    count++;
                }
            } else {
                this.message.error(response.message);
            }
        });
    }


    /**
     * to load the Operator list
     */
    getOperators() {
        this.quotaService.getOperatorList((response, status) => {
            if (status) {
                this.operatorList = response;
                if (this.loginInfo.isAdmin) {
                    const admin = {
                        'operatorId': null,
                        'operatorName': 'Admin',
                        'operatorDescription': 'hub admin'
                    }
                    this.operatorList.splice(0, 0, admin);
                }
            } else {
                this.message.error(response.message);
            }
        });
    }

    getApiOperations() {
        // write the service to get api operation values
    }

    onValueSelected(event: TypeaheadMatch) {

        if (this.api.length != 0 && this.apiOperation.length != 0 && this.operator.length != 0) {
            if (this.validate()) {
                // console.log('%%%%');
                let apiOperationId;
                let operatorId;

                for (const item of this.apiOperationList) {
                    if (item.api_operation == this.apiOperation) {
                        apiOperationId = item.api_operationid;
                    }
                }

                if (this.loginInfo.isAdmin) {
                    operatorId = null;
                } else {
                    for (const entry of this.operatorList) {
                        if (entry.operatorName == this.operator) {
                            operatorId = entry.operatorId;
                        }
                    }
                }

                if (apiOperationId) {
                    this.rateService.getRatesForAPIOperation(this.api, apiOperationId, operatorId, (response, status) => {
                        if (status) {
                            console.log('$$$  ' + JSON.stringify(response));
                        } else {
                            this.message.error(response);
                        }
                    });
                }
            }
        }

    }

    validate() {

        console.log('%%%%');

        this.invalidapiOperation = true;
        this.invalidOperator = true;
        this.invalidApi = true;

        for (const item of this.apiOperationList) {
            if (item.api_operation == this.apiOperation) {
                this.invalidapiOperation = false;
            }
        }

        for (const item of this.apiList) {
            if (item == this.api) {
                this.invalidApi = false;
            }
        }

        if (this.loginInfo.isAdmin && this.operator != 'Admin') {
            for (const item of this.operatorList) {
                if (item.operatorName == this.operator) {
                    this.invalidOperator = false;
                }
            }
        } else {
            this.invalidOperator = false;
        }

        if (this.loginInfo.isAdmin) {
            return (!this.invalidOperator && !this.invalidApi && !this.invalidapiOperation);
        } else {
            return (!this.invalidApi && !this.invalidapiOperation);
        }
    }

    clearErrors() {
        this.invalidapiOperation = false;
        this.invalidOperator = false;
        this.invalidApi = false;
    }


}
