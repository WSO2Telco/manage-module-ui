/**
 * Created by manoj on 7/24/17.
 */
import {Component, OnInit, } from '@angular/core';

@Component({
    selector: 'app-whitelist-main',
    templateUrl: './whitelist-main.component.html',
    styleUrls: ['./whitelist-main.component.scss']
})
export class WhitelistMainComponent implements OnInit {

    private option1;
    private option2;
    private option3;
    ngOnInit() {

        this.option1='hi hi';

    }


    onSubmit(){

        // this.rateService.addNewRateCard(this.name, this.description, this.date, this.currency,
        //     this.rateType, this.tariff, (errorMsg) => {
        //         this.submissionError = errorMsg;
        //         setTimeout(() => {
        //             this.submissionError = null;
        //         }, 5000);
        //     });
    }

}

