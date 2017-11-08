import {Component, OnInit} from '@angular/core';
import {BlackListService} from '../../commons/services/blacklist.service';
import {MessageService} from '../../commons/services/message.service';
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
    private format;

    private invalidApiOperation: boolean;
    private invalidOperator: boolean;
    private invalidApi: boolean;

    constructor(private rateService: RateService, private blackListService: BlackListService,
                private message: MessageService, private quotaService: QuotaService,
                private _authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {

        this.display = 'rateDefName';
        this.key = 'rateDefId';
        this.format = {
            add: 'AddTo List',
            remove: 'Remove from List',
            all: 'Select All',
            none: 'Select None',
            direction: 'left-to-right'
        }

        this.loginInfo = this._authenticationService.loginUserInfo.getValue();

        this.reloadPage();
    }

    /**
     *  Get The List of API's
     */
    getApis() {
        this.blackListService.getApiList((response) => {
            if (response.success) {
                this.apiList = [];
                for (const entry of response.payload) {
                    const splited = entry.split(':');
                    this.apiList.push(splited[1]+ ':' + splited[2]);
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
        this.rateService.getOperatorList((response) => {
            if (response.success) {
                this.operatorList = response.payload;
                if (this.loginInfo.isAdmin) {
                    const admin = {
                        'operatorId': null,
                        'operatorName': 'ALL',
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
        this.rateService.getApiOperations(this.api.split(':')[0], (response, status) => {
            if (status) {
                this.apiOperation = '';
                this.apiOperationList = response.payload;
                if (this.apiOperationList.length == 0) {
                    this.message.warning('No API Operations Available for The Selected API');
                }
            } else {
                this.apiOperationList = [];
                this.apiOperation = '';
                this.message.error(response.message);
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
                    this.rateService.getAPIOperationRates(this.api, apiOperationId, operatorId, (response, status) => {
                        if (status) {
                            this.sourceList = response.payload.source;
                            this.assignedList = response.payload.destination;
                            this.destinationList = [];
                            if(this.sourceList.length == 0){
                                this.message.warning('No Rate Values Available for Selected Combination');
                            }
                        } else {
                            this.sourceList = [];
                            this.assignedList = [];
                            this.destinationList = [];
                            this.message.error(response.message);
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
    onRateAssigSubmition(rateAssignForm) {
        if (this.validate()) {

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

            for (const item of this.destinationList) {
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

            if (data.length > 0) {
                this.rateService.assignRatesForAPIOperation(data, this.api, apiOperationId, operatorId, (response) => {
                    if (response.success) {
                        this.message.success(response.message);
                        this.reloadPage();
                    } else {
                        this.message.error(response.message);
                    }
                });
            } else {
                this.message.warning('No Rates Selected');
            }
        }
    }

    reloadPage() {

        this.apiList = [];
        this.operatorList = [];
        this.apiOperationList = [];

        this.api = '';
        this.operator = '';
        this.apiOperation = '';

        this.sourceList = [];
        this.destinationList = [];
        this.assignedList = [];

        this.getApis();
        this.getOperators();
        this.clearErrors();

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

    /**
     * clear error fields
     */
    clearErrors() {
        this.invalidApiOperation = false;
        this.invalidOperator = false;
        this.invalidApi = false;
    }


}
