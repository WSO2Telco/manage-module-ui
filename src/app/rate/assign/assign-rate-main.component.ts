import {Component, OnInit} from '@angular/core';
import {BlackListService} from '../../commons/services/blacklist.service';
import {MessageService} from '../../commons/services/message.service';
import {TypeaheadMatch} from 'ng2-bootstrap';
import {QuotaService} from '../../commons/services/quotacap.service';
import {APIOperation, AssignRates, Operator, RateDefinition} from '../../commons/models/common-data-models';
import {RateService} from '../../commons/services/rate.service';
import {AuthenticationService} from '../../commons/services/authentication.service';

@Component({
    selector: 'app-assign-rate-main',
    templateUrl: './assign-rate-main.component.html',
    styleUrls: ['./assign-rate.component.scss']
})

export class AssignRateMainComponent implements OnInit {

    private operatorList: Operator[];
    private apiOperationList: APIOperation[];
    private apiList: string[];

    private sourceList: RateDefinition[];
    private destinationList: RateDefinition[];
    private assignedList: RateDefinition[];

    private api: string;
    private operator: string;
    private apiOperation: string;

    private loginInfo;
    private display: string;
    private key: string;

    private invalidApiOperation: boolean;
    private invalidOperator: boolean;
    private invalidApi: boolean;

    constructor(private rateService: RateService, private blackListService: BlackListService,
                private message: MessageService, private quotaService: QuotaService,
                private _authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {

        this.apiList = [];
        this.operatorList = [];
        this.apiOperationList = [];

        this.display = 'rateDefName';
        this.key = 'rateDefId';

        this.api = '';
        this.operator = '';
        this.apiOperation = '';

        this.sourceList = [];
        this.destinationList = [];
        this.assignedList = [];

        this.loginInfo = this._authenticationService.loginUserInfo.getValue();

        this.getApis();
        this.getOperators();
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
                    };
                    this.operatorList.splice(0, 0, admin);
                }
            } else {
                this.message.error(response.message);
            }
        });
    }

    /**
     * to get api operations according to selected API
     */
    getApiOperations() {
        this.rateService.getApiOperations(this.api, (response, status) => {
            if (status) {
                this.apiOperationList = response;
            } else {
                this.apiOperationList = [];
                this.apiOperation = '';
                this.message.warning('No API Operations Available for The Selected API');
            }
        });
    }

    /**
     * load the Available and Assigned Rates For selected API Operation
     */
    loadRates() {
        if (this.api.length != 0 && this.apiOperation.length != 0 && this.operator.length != 0) {
            if (this.validate()) {
                let apiOperationId;
                let operatorId;
                /**for loop to set the api operation id*/
                for (const item of this.apiOperationList) {
                    if (item.apiOperation == this.apiOperation) {
                        apiOperationId = item.apiOperationId;
                    }
                }

                /**condition to set the operator id*/
                if (this.loginInfo.isAdmin && this.operator == 'Admin') {
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
                            this.sourceList = response.source;
                            this.assignedList = response.destination;
                        } else {
                            this.message.error(response);
                        }
                    });
                }
            }
        }
    }


    /**
     * on form submission
     * @param rateAssigForm
     */
    onRateAssigSubmition(rateAssignForm){
        if (this.validate()){

            const data = [];
            let apiOperationId;
            let operatorId;

            const operator = new Operator();
            const apiOperation = new APIOperation();

            /**for loop to set the api operation id*/
            for (const item of this.apiOperationList) {
                if (item.apiOperation == this.apiOperation) {
                    apiOperationId = item.apiOperationId;
                }
            }

            /**condition to set the operator id*/
            if (this.loginInfo.isAdmin && this.operator == 'Admin') {
                operatorId = null;
            } else {
                for (const entry of this.operatorList) {
                    if (entry.operatorName == this.operator) {
                        operatorId = entry.operatorId;
                    }
                }
            }


            operator.operatorId = operatorId;
            apiOperation.apiOperationId = apiOperationId;

            let count = 0;

            for (const item of this.destinationList){
                const rateDefinition = new RateDefinition();
                rateDefinition.rateDefId = item.rateDefId;
                const entry = new AssignRates();
                entry.operator = operator;
                entry.apiOperation = apiOperation;
                entry.rateDefinition = rateDefinition;
                entry.createdBy = this.loginInfo.userName;
                data[count] = entry;
                count++;
            }

            if (data.length > 0){
                this.rateService.assignRatesForAPIOperation(data, operatorId, (response, status) => {
                    if (status) {
                        this.sourceList = response.source;
                        this.assignedList = response.destination;
                    } else {
                        this.message.error(response);
                    }
                });
            }

        }
    }

    clearForm(){

    }

    /**
     * to validate parameters before loading api operation rates.
     * @returns {boolean}
     */
    validate() {

        this.invalidApiOperation = true;
        this.invalidOperator = true;
        this.invalidApi = true;

        for (const item of this.apiOperationList) {
            if (item.apiOperation == this.apiOperation) {
                this.invalidApiOperation = false;
            }
        }

        for (const item of this.apiList) {
            if (item == this.api) {
                this.invalidApi = false;
            }
        }

        if (this.loginInfo.isAdmin) {
            for (const item of this.operatorList) {
                if (item.operatorName == this.operator) {
                    this.invalidOperator = false;
                }
            }
        } else {
            this.invalidOperator = false;
        }

        if (this.loginInfo.isAdmin) {
            return (!this.invalidOperator && !this.invalidApi && !this.invalidApiOperation);
        } else {
            return (!this.invalidApi && !this.invalidApiOperation);
        }
    }


    /**
     * when an api is selected or api input field is modified
     */
    onApiSelected() {
        let invalid = true;
        this.invalidApi = false;
        for (const item of this.apiList) {
            if (item == this.api) {
                invalid = false;
            }
        }

        if (!invalid) {
            this.getApiOperations();
        } else {
            this.apiOperationList = [];
            this.apiOperation = '';
            this.invalidApi = true;
        }
    }

    /**
     * when an api operation is selected or api operation input field is modified
     */
    onApiOperationSelected() {
        let invalid = true;
        this.invalidApiOperation = false;
        for (const item of this.apiOperationList) {
            if (item.apiOperation == this.apiOperation) {
                invalid = false;
            }
        }

        if (!invalid) {
            this.loadRates();
        } else {
            this.invalidApiOperation = true;
        }
    }

    /**
     * when an operator is selected or operator input field is modified
     */
    onOperatorSelected() {
        let invalid = true;
        this.invalidOperator = false;
        for (const item of this.operatorList) {
            if (item.operatorName == this.operator) {
                invalid = false;
            }
        }

        if (!invalid) {
            this.loadRates();
        } else {
            this.invalidOperator = true;
        }
    }

    clearErrors() {
        this.invalidApiOperation = false;
        this.invalidOperator = false;
        this.invalidApi = false;
    }


}
