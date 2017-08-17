import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RateService} from '../../commons/services/rate.service';
import {Tariff} from '../../commons/models/common-data-models';
import {AuthenticationService} from '../../commons/services/authentication.service';

@Component({
    selector: 'app-addtariff',
    templateUrl: './tariff.component.html',
    styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {

    private tariff: Tariff;

    @Input()
    private existingNames: string[];

    @Output()
    private onAddTask: EventEmitter<boolean> = new EventEmitter();

    @Output()
    private modalClose: EventEmitter<boolean> = new EventEmitter();

    private submissionError: string;

    private isNameError: boolean;
    private isDescriptionError: boolean;

    private nameError: string;
    private descriptionError: string;

    constructor(private rateService: RateService, private authService: AuthenticationService) {
    }

    ngOnInit() {
        const loginInfo = this.authService.loginUserInfo.getValue();
        this.tariff = new Tariff();

        this.tariff.tariffName = '';
        this.tariff.tariffDescription = '';
        this.tariff.tariffDefaultVal = 0;
        this.tariff.tariffAdsCommission = 0;
        this.tariff.tariffSPCommission = 0;
        this.tariff.tariffSurChargeAds = 0;
        this.tariff.tariffSurChargeOpco = 0;
        this.tariff.tariffSurChargeval = 0;
        this.tariff.tariffOpcoCommission = 0;
        this.tariff.tariffMaxCount = 0;
        this.tariff.tariffExcessRate = 0;
        this.tariff.tariffDefRate = 0;
        this.tariff.createdBy = loginInfo.userName;
        this.clearErrors();
    }


    onSubmit(addTariffForm) {
        this.clearErrors();

        if (this.tariff.tariffName.length != 0 && this.tariff.tariffDescription.length != 0) {
            this.rateService.addTariff(this.tariff, (response, status) => {
                if (status) {
                    this.onAddTask.emit(true);
                    this.modalClose.emit(true);
                } else {
                    this.submissionError = response;
                    setTimeout(() => {
                        this.submissionError = null;
                    }, 5000);

                }
            });

        } else {
            if (this.tariff.tariffName.length == 0) {
                this.isNameError = true;
                this.nameError = 'Name can not be empty';
            }
            if (this.tariff.tariffDescription.length == 0) {
                this.isDescriptionError = true;
                this.descriptionError = 'Description can not be empty';
            }
        }

    }

    clearErrors() {
        this.isNameError = false;
        this.isDescriptionError = false;
        this.nameError = '';
        this.descriptionError = '';
    }

    isNameUnique(name) {
        let state = false;
        for (const entry of this.existingNames) {
            if (name == entry) {
                state = true;
            }
        }
        if (state) {
            this.isNameError = true;
            this.nameError = 'Name Already Existing';
        } else {
            this.isNameError = false;
            this.nameError = '';
        }
    }

}
