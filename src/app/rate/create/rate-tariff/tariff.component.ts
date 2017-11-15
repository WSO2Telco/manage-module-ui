import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RateService} from '../../../commons/services/rate.service';
import {Tariff} from '../../../commons/models/common-data-models';
import {AuthenticationService} from '../../../commons/services/authentication.service';
import {MessageService} from '../../../commons/services/message.service';

@Component({
    selector: 'app-addtariff',
    templateUrl: './tariff.component.html',
    styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {

    private tariff: Tariff;

    @Input()
    private existingTariffList: Tariff[];

    @Output()
    private onAddTask: EventEmitter<boolean> = new EventEmitter();

    @Output()
    private modalClose: EventEmitter<boolean> = new EventEmitter();

    private submissionError: string;

    private isNameError: boolean;
    private isDescriptionError: boolean;

    private nameError: string;
    private descriptionError: string;

    private IsInvalidtariffSurChargeAds: boolean;
    private IsInvalidtariffSurChargeOpco: boolean;
    private IsInvalidspCommission: boolean;
    private IsInvalidadsCommission: boolean;
    private IsInvalidopcoCommission: boolean;
    private IsExceedCommision: boolean;
    private ValidCommisionTotal: boolean;
    private InValidCommisionTotal: boolean;
    private IsValidMinusCommision: boolean;
    private IsMinusExceedCommision: boolean;
    private IsInvalidMinusSpCommission: boolean;
    private IsInvalidMinusAdsCommission: boolean;
    private IsInvalidMinusOpcoCommission: boolean;


    constructor(private rateService: RateService, private authService: AuthenticationService, private message: MessageService) {
    }

    ngOnInit() {
        const loginInfo = this.authService.loginUserInfo.getValue();
        this.tariff = new Tariff();
        this.clearForm();
        this.tariff.createdBy = loginInfo.userName;
        this.ValidCommisionTotal = true;
        // this.IsInvalidMinusSpCommission = true;
        //  this.IsInvalidMinusAdsCommission = true;
        // this.IsInvalidMinusOpcoCommission = true;
    }

    clearForm() {
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
        this.InValidCommisionTotal = false;
        this.clearErrors();
    }


    onSubmit(addTariffForm) {
        if (!this.isNameError && !this.isDescriptionError && this.tariff.tariffName.length != 0 &&
            this.tariff.tariffDescription.length != 0 && !this.IsInvalidtariffSurChargeAds && !this.IsInvalidtariffSurChargeOpco &&
            !this.IsInvalidspCommission && !this.IsInvalidadsCommission && !this.IsInvalidopcoCommission &&
            !this.IsExceedCommision && this.ValidCommisionTotal) {
            this.rateService.addTariff(this.tariff, (response) => {
                if (response.success) {
                    this.onAddTask.emit(true);
                    this.modalClose.emit(true);
                    this.message.success(response.message);
                } else {
                    this.message.error(response.message);
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

    /*
     * surCharge field validation
     */
    tariffSurChargeAds(val) {
        this.tariff.tariffSurChargeAds = val;
        if ((Number(this.tariff.tariffSurChargeAds) < 0) || (Number(this.tariff.tariffSurChargeAds) > 100) || (this.tariff.tariffSurChargeAds == null)) {
            this.IsInvalidtariffSurChargeAds = true;
        } else {
            this.IsInvalidtariffSurChargeAds = false;
            this.tariff.tariffSurChargeOpco = (100 - this.tariff.tariffSurChargeAds);
        }
    }

    tariffSurChargeOpco(val) {
        this.tariff.tariffSurChargeOpco = val;
        if ((Number(this.tariff.tariffSurChargeOpco) < 0 ) || (Number(this.tariff.tariffSurChargeOpco) > 100) || (this.tariff.tariffSurChargeOpco == null)) {
            this.IsInvalidtariffSurChargeOpco = true;
        } else {
            this.IsInvalidtariffSurChargeOpco = false;
            this.tariff.tariffSurChargeAds = ( 100 - this.tariff.tariffSurChargeOpco);
        }
    }


    tariffSPCommission(val) {
        this.tariff.tariffSPCommission = val;
        if (Number(this.tariff.tariffSPCommission) < 0 && Number(this.tariff.tariffSPCommission) > -100) {
            this.IsInvalidMinusSpCommission = false;
            this.IsMinusExceedCommision = false;
            console.log('sds');
        } else if (!this.IsInvalidMinusAdsCommission || !this.IsInvalidMinusOpcoCommission) {
            this.IsInvalidMinusSpCommission = false;
            console.log('sds2');
        } else {
            this.IsInvalidMinusSpCommission = true;
            console.log('sds3');
        }
        if (!this.IsInvalidMinusSpCommission && Number(this.tariff.tariffSPCommission) > 100 || this.tariff.tariffSPCommission == null) {
            this.IsInvalidspCommission = true;
            this.IsExceedCommision = false;
        } else {
            this.IsInvalidspCommission = false;
        }
        if (!this.IsInvalidMinusSpCommission && (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission)) > 100) {
            this.IsExceedCommision = true;
            this.IsInvalidspCommission = false;
        } else {
            this.IsExceedCommision = false;
        }

        if (!this.IsInvalidMinusSpCommission && (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission)) < -100) {
            //    this.IsValidMinusCommision = false;
            this.IsMinusExceedCommision = true;
        } else {
            this.IsMinusExceedCommision = false;
        }

        if ((Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission) === 100) && (Number(this.tariff.tariffSPCommission) !== 0 && Number(this.tariff.tariffAdsCommission) !== 0 && Number(this.tariff.tariffOpcoCommission) !== 0)) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
        } else if (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission) === -100) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
        } else {
            this.ValidCommisionTotal = false;
            this.InValidCommisionTotal = true;
        }
    }

    tariffAdsCommission(val) {
        this.tariff.tariffAdsCommission = val;

        if (Number(this.tariff.tariffAdsCommission) < 0 && Number(this.tariff.tariffAdsCommission) > -100) {
            this.IsInvalidMinusAdsCommission = false;
            this.IsMinusExceedCommision = false;
        } else if (!this.IsInvalidMinusSpCommission || !this.IsInvalidMinusOpcoCommission) {
            this.IsInvalidMinusAdsCommission = false;
        } else {
            this.IsInvalidMinusAdsCommission = true;
        }

        if (!this.IsInvalidMinusAdsCommission && (Number(this.tariff.tariffAdsCommission) > 100) || (this.tariff.tariffAdsCommission == null)) {
            this.IsInvalidadsCommission = true;
            this.IsExceedCommision = false;
        } else {
            this.IsInvalidadsCommission = false;
        }
        if (!this.IsInvalidMinusAdsCommission && (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission)) > 100) {
            this.IsExceedCommision = true;
            this.IsInvalidadsCommission = false;
        } else {
            this.IsExceedCommision = false;
        }

        if (!this.IsInvalidMinusAdsCommission && (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission)) < -100) {
            //    this.IsValidMinusCommision = false;
            this.IsMinusExceedCommision = true;
        } else {
            this.IsMinusExceedCommision = false;
        }

        if ((Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission) === 100) && (Number(this.tariff.tariffSPCommission) !== 0 && Number(this.tariff.tariffAdsCommission) !== 0 && Number(this.tariff.tariffOpcoCommission) !== 0)) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
        } else if (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission) === -100) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
        } else {
            this.ValidCommisionTotal = false;
            this.InValidCommisionTotal = true;
        }
    }

    tariffOpcoCommission(val) {
        this.tariff.tariffOpcoCommission = val;

        if (Number(this.tariff.tariffOpcoCommission) < 0 && Number(this.tariff.tariffOpcoCommission) > -100) {
            this.IsInvalidMinusOpcoCommission = false;
            this.IsMinusExceedCommision = false;
        } else if (!this.IsInvalidMinusAdsCommission || !this.IsInvalidMinusSpCommission) {
            this.IsInvalidMinusOpcoCommission = false;
        } else {
            this.IsInvalidMinusOpcoCommission = true;
        }


        if (!this.IsInvalidMinusOpcoCommission && (Number(this.tariff.tariffOpcoCommission) > 100) || (this.tariff.tariffOpcoCommission == null)) {
            this.IsInvalidopcoCommission = true;
            this.IsExceedCommision = false;
        } else {
            this.IsInvalidopcoCommission = false;
        }
        if (!this.IsInvalidMinusOpcoCommission && (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission)) > 100) {
            this.IsExceedCommision = true;
            this.IsInvalidopcoCommission = false;
        } else {
            this.IsExceedCommision = false;
        }

        if (!this.IsInvalidMinusOpcoCommission && (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission)) < -100) {
            //    this.IsValidMinusCommision = false;
            this.IsMinusExceedCommision = true;
        } else {
            this.IsMinusExceedCommision = false;
        }

        if ((Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission) === 100) && (Number(this.tariff.tariffSPCommission) !== 0 && Number(this.tariff.tariffAdsCommission) !== 0 && Number(this.tariff.tariffOpcoCommission) !== 0)) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
        } else if (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission) === -100) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
        } else {
            this.ValidCommisionTotal = false;
            this.InValidCommisionTotal = true;
        }
    }


    isNameUnique(name) {
        let state = false;
        for (const entry of this.existingTariffList) {
            if (name.trim() == entry.tariffName.trim()) {
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

    /**
     * if the description is invalid
     * @param description
     */
    descriptionInvalid(description) {
        if (description.length == 0) {
            this.isDescriptionError = true;
            this.descriptionError = 'Description can not be empty';
        } else if (description.length > 45) {
            this.isDescriptionError = true;
            this.descriptionError = 'Ony 45 Characters Allowed';
        } else {
            this.isDescriptionError = false;
            this.descriptionError = '';
        }
    }

}
