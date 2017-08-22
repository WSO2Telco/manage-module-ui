/**
 * Created by rajithk on 7/25/17.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RateService} from '../../commons/services/rate.service';
import {AuthenticationService} from '../../commons/services/authentication.service';
import {MessageService} from '../../commons/services/message.service';
import {RateDefinition} from '../../commons/models/common-data-models';
import {TypeaheadMatch} from 'ng2-bootstrap';

@Component({
    selector: 'app-ratedefinition',
    templateUrl: './definition.component.html',
    styleUrls: ['../rate-main/rate-main.component.scss']
})

export class DefinitionComponent implements OnInit {

    private selectedRate: string;
    private rateDefinition: RateDefinition;
    private showRateDef: boolean;


    @Input()
    private rateDfinitions: RateDefinition[];

    @Input()
    private rateDefNames: string[];

    @Output()
    private onAddTask: EventEmitter<boolean> = new EventEmitter();

    @Output()
    private modalClose: EventEmitter<boolean> = new EventEmitter();


    constructor(private rateService: RateService, private authService: AuthenticationService, private message: MessageService) {
    }

    ngOnInit() {
        this.selectedRate = '';
        this.showRateDef = false;
    }

    onRateSelected(event: TypeaheadMatch) {
        for(const entry of this.rateDfinitions){
            if(entry.rateDefName == this.selectedRate){
                this.rateDefinition = entry;
            }
        }
    }


}
