import {Component, OnInit} from '@angular/core';
import {RateDefinition, OperatorList} from '../../commons/models/common-data-models';
import {RateService} from '../../commons/services/rate.service';
import {AuthenticationService} from '../../commons/services/authentication.service';
import {MessageService} from '../../commons/services/message.service';

@Component({
    selector: 'app-view-rate-main',
    templateUrl: './view-rate-main.component.html',
    styleUrls: ['../create/rate-main/rate-main.component.scss']
})

export class ViewRateMainComponent implements OnInit {

    public selectedRate: string;
    public rateDefinition: RateDefinition;
    public rateCategory;
    public rateTax;
    public showRateDef: boolean;
    public showCreateRate: string;
    public operatorsList: OperatorList[];
    public loggeduser: string;
    public loggedusername: string;
    public isadminUser;
    public isAdmin: boolean;
    public operatorId: string;


    public rateDefinitions;
    public rates;

    constructor(private rateService: RateService, private message: MessageService, private authService: AuthenticationService) {
    }

    ngOnInit() {
        this.selectedRate = '';
        this.operatorId = '';
        this.showRateDef = false;
        this.rateDefinitions = [];
        this.operatorsList = [];
        this.rates = [];

        const loginInfo = this.authService.loginUserInfo.getValue();
        this.loggedusername = loginInfo.operatorName;
        this.getOperatorList();
        this.showCreateRate = 'rate:add';
    }

    /**
     * to load the Operator list
     */
    getOperatorList() {

        if (this.loggedusername == null || this.loggedusername == 'null') {
            this.operatorId = '__ALL';
            this.getRateCards(this.operatorId);
        } else {

            this.rateService.getOperatorList((response) => {
                if (response.success) {
                    for (const entry of response.payload) {
                        if (new String(entry.operatorName.toLowerCase()).valueOf() == new String(this.loggedusername.toLowerCase()).valueOf()) {
                            this.operatorId = entry.operatorId;
                            this.getRateCards(this.operatorId);
                        }

                    }


                } else {
                    this.message.error(response.message);
                }
            });

        }
    }

    /**
     * when a rate value is selected
     * @param event
     */
    onRateSelected() {
        for (const entry of this.rateDefinitions) {
            if (entry.rateDefinition.rateDefName == this.selectedRate) {
                this.rateDefinition = entry.rateDefinition;
                this.rateCategory = entry.rateCategories;
                this.rateTax = entry.rateTaxes;
                this.showRateDef = true;
            }
        }
    }

    /**
     * load available rate definitions
     */
    getRateCards(opID: string) {
        this.rateService.getRateCards(opID, (response) => {
            if (response.success) {
                this.rateDefinitions = response.payload;
                let count = 0;
                for (const entry of this.rateDefinitions) {
                    this.rates[count] = entry.rateDefinition;
                    count++;
                }
                if (this.rateDefinitions.length == 0) {
                    this.message.warning('No Records Found');
                }
            } else {
                this.message.error(response.message);
            }
        });
    }
}
