import {Component, OnInit} from '@angular/core';
import {RateDefinition} from '../../commons/models/common-data-models';
import {RateService} from '../../commons/services/rate.service';
import {MessageService} from '../../commons/services/message.service';

@Component({
    selector: 'app-view-rate-main',
    templateUrl: './view-rate-main.component.html',
    styleUrls: ['../create/rate-main/rate-main.component.scss']
})

export class ViewRateMainComponent implements OnInit {

    private selectedRate: string;
    private rateDefinition: RateDefinition;
    private rateCategory;
    private rateTax;
    private showRateDef: boolean;
    private showCreateRate: string;


    private rateDefinitions;
    private rates;

    constructor(private rateService: RateService, private message: MessageService) {
    }

    ngOnInit() {
        this.selectedRate = '';
        this.showRateDef = false;
        this.rateDefinitions = [];
        this.rates = [];
        this.getRateCards();
        this.showCreateRate = 'rate:add';
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
    getRateCards() {
        this.rateService.getRateCards((response) => {
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
