import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { payloadParam } from '../../commons/models/reporing-data-models';

@Component({
    selector: 'app-response-filter-payload',
    templateUrl: './response-filter-payload.component.html',
    styleUrls: ['./response-filter-payload.component.scss']
})

export class responseFilterPayloadComponent implements OnInit {

    private payloadDesc: string;

    private list: payloadParam;

    private selectedEnv: string = 'production';

    @Input() httpTypes: string;

    @Output()
    private onSetAdditionalParam: EventEmitter<payloadParam> = new EventEmitter();

    @Output()
    private modalClose: EventEmitter<boolean> = new EventEmitter();


    constructor() {
        this.clearForm();
    }

    ngOnInit() {
        this.payloadDesc = '';
       
    }

    /**
     * when form submitted
     * @param payloadForm
     */
    onAdditionalValueSubmit(payloadForm) {
        this.list = new payloadParam();

        this.list.enviormentName = this.selectedEnv;
        this.list.payloadBody = this.payloadDesc;

        this.onSetAdditionalParam.emit(this.list);
        this.modalClose.emit(true);

    }

    /**
     * clear all the fields in the form
     */
    clearForm() {
        this.selectedEnv = 'production';
        this.payloadDesc = '';
    }
}

