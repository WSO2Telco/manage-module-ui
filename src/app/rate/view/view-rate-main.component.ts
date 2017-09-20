import {Component, Input, OnInit} from '@angular/core';
import {RateDefinition} from '../../commons/models/common-data-models';
import {TypeaheadMatch} from 'ng2-bootstrap';
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
    private showRateDef: boolean;


    private rateDefinitions: RateDefinition[];

    constructor(private rateService: RateService, private message: MessageService) {
    }

    ngOnInit() {
        this.selectedRate = '';
        this.showRateDef = false;
        this.rateDefinitions = [];
        this.getRateDefinitionList();
    }

    /**
     * when a rate value is selected
     * @param event
     */
    onRateSelected() {
        for (const entry of this.rateDefinitions) {
            if (entry.rateDefName == this.selectedRate) {
                this.rateDefinition = entry;
                this.showRateDef = true;
            }
        }
    }

    /**
     * load available rate definitions
     */
    getRateDefinitionList() {
        this.rateService.getRateDefinitionList((response, status) => {
            if (status) {
                this.rateDefinitions = response.payload;
                if(this.rateDefinitions.length == 0){
                    this.message.warning('No Records Found');
                }
            } else {
                this.message.error(response.message);
            }
        });
    }


}
