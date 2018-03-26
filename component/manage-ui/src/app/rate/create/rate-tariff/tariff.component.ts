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

    private isNameError: boolean;
    private isDescriptionError: boolean;
    private disableAddButton: boolean;

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
    private IsMinusExceedCommision: boolean;
    private IsInvalidMinusSpCommission: boolean;
    private IsInvalidMinusAdsCommission: boolean;
    private IsInvalidMinusOpcoCommission: boolean;
    private isDisabled: boolean;
    private IsEmptySurchargeAddOpco: boolean;
    private IsEmptySurchargeval: boolean;


    constructor(private rateService: RateService, private authService: AuthenticationService, private message: MessageService) {
    }

    ngOnInit() {
        const loginInfo = this.authService.loginUserInfo.getValue();
        this.tariff = new Tariff();
        this.clearForm();
        this.tariff.createdBy = loginInfo.userName;
        this.ValidCommisionTotal = true;
        this.disableAddButton = false;
    }

    clearForm() {
        this.tariff.tariffName = '';
        this.tariff.tariffDescription = '';
        this.tariff.tariffDefaultVal = null;
        this.tariff.tariffAdsCommission = 0;
        this.tariff.tariffSPCommission = 0;
        this.tariff.tariffSurChargeAds = null;
        this.tariff.tariffSurChargeOpco = null;
        this.tariff.tariffSurChargeval = null;
        this.tariff.tariffOpcoCommission = 0;
        this.tariff.tariffMaxCount = 0;
        this.tariff.tariffExcessRate = 0;
        this.tariff.tariffDefRate = 0;
        this.InValidCommisionTotal = false;
        this.IsEmptySurchargeval = false;
        this.IsEmptySurchargeAddOpco = false;
        this.clearErrors();
    }


    onSubmit(addTariffForm) {
        console.log(this.tariff);
        this.disableAddButton = true;
        if (!this.isNameError && !this.isDescriptionError && this.tariff.tariffName.length != 0 &&
            this.tariff.tariffDescription.length != 0 && !this.IsInvalidtariffSurChargeAds && !this.IsInvalidtariffSurChargeOpco &&
            !this.IsInvalidspCommission && !this.IsInvalidadsCommission && !this.IsInvalidopcoCommission &&
            !this.IsExceedCommision && this.ValidCommisionTotal && !this.IsEmptySurchargeAddOpco && !this.IsEmptySurchargeval) {
            this.rateService.addTariff(this.tariff, (response) => {
                if (response.success) {
                    this.onAddTask.emit(true);
                    this.modalClose.emit(true);
                    this.message.success(response.message);
                } else {
                    this.message.error(response.message);
                }
                this.disableAddButton = false;
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
            this.disableAddButton = false;
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
        this.IsEmptySurchargeAddOpco = false;
        if ((Number(this.tariff.tariffSurChargeAds) < 0) || (Number(this.tariff.tariffSurChargeAds) > 100)) {
            this.IsInvalidtariffSurChargeAds = true;
        } else {
            this.IsInvalidtariffSurChargeAds = false;
            this.tariff.tariffSurChargeOpco = (100 - this.tariff.tariffSurChargeAds);
            this.IsEmptySurchargeAddOpco = false;
        }

        if (this.tariff.tariffSurChargeval == null) {
            this.IsEmptySurchargeval = true;
        } else {
            this.IsEmptySurchargeval = false;
        }
    }

    tariffSurChargeOpco(val) {
        this.tariff.tariffSurChargeOpco = val;
        this.IsEmptySurchargeAddOpco = false;
        if ((Number(this.tariff.tariffSurChargeOpco) < 0 ) || (Number(this.tariff.tariffSurChargeOpco) > 100)) {
            this.IsInvalidtariffSurChargeOpco = true;
        } else {
            this.IsInvalidtariffSurChargeOpco = false;
            this.tariff.tariffSurChargeAds = ( 100 - this.tariff.tariffSurChargeOpco);
            this.IsEmptySurchargeAddOpco = false;
        }

        if (this.tariff.tariffSurChargeval == null) {
            this.IsEmptySurchargeval = true;
        } else {
            this.IsEmptySurchargeval = false;
        }
    }


    tariffSPCommission(val) {
        this.tariff.tariffSPCommission = val;
        console.log(this.tariff.tariffSPCommission);
        this.isDisabled = false;
        if (Number(this.tariff.tariffSPCommission) < 0 && Number(this.tariff.tariffSPCommission) > -100) {
            this.IsInvalidMinusSpCommission = false;
            this.IsMinusExceedCommision = false;
        } else if (!this.IsInvalidMinusAdsCommission || !this.IsInvalidMinusOpcoCommission) {
            this.IsInvalidMinusSpCommission = false;
        } else {
            this.IsInvalidMinusSpCommission = true;
        }
        if (!this.IsInvalidMinusSpCommission && Number(this.tariff.tariffSPCommission) > 100) {
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
            this.IsMinusExceedCommision = true;
        } else {
            this.IsMinusExceedCommision = false;
        }

        if (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission) === 100) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
            this.isDisabled = true;
            this.tariff.tariffSurChargeval = null;
            this.tariff.tariffSurChargeOpco = null;
            this.tariff.tariffSurChargeAds = null;
            this.IsEmptySurchargeval = false;
            this.IsEmptySurchargeAddOpco = false;
            if (this.tariff.tariffSPCommission != null && this.tariff.tariffAdsCommission != null && this.tariff.tariffOpcoCommission == null || this.tariff.tariffOpcoCommission == 0) {
                this.tariff.tariffOpcoCommission = 0;
            } else if (this.tariff.tariffSPCommission == null || this.tariff.tariffSPCommission == 0 && this.tariff.tariffAdsCommission != null && this.tariff.tariffOpcoCommission != null) {
                this.tariff.tariffSPCommission = 0;
            } else if (this.tariff.tariffSPCommission != null && this.tariff.tariffAdsCommission == null || this.tariff.tariffAdsCommission == 0 && this.tariff.tariffOpcoCommission != null) {
                this.tariff.tariffAdsCommission = 0;
            }
        } else if (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission) === -100) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
            this.isDisabled = false;
            if (this.tariff.tariffSPCommission != null && this.tariff.tariffAdsCommission != null && this.tariff.tariffOpcoCommission == null || this.tariff.tariffOpcoCommission == 0) {
                this.tariff.tariffOpcoCommission = 0;
            } else if (this.tariff.tariffSPCommission == null || this.tariff.tariffSPCommission == 0 && this.tariff.tariffAdsCommission != null && this.tariff.tariffOpcoCommission != null) {
                this.tariff.tariffSPCommission = 0;
            } else if (this.tariff.tariffSPCommission != null && this.tariff.tariffAdsCommission == null || this.tariff.tariffAdsCommission == 0 && this.tariff.tariffOpcoCommission != null) {
                this.tariff.tariffAdsCommission = 0;
            }
        } else if (this.tariff.tariffSPCommission == null && this.tariff.tariffAdsCommission == null && this.tariff.tariffOpcoCommission == null) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
        } else {
            this.ValidCommisionTotal = false;
            this.InValidCommisionTotal = true;
        }
    }

    tariffAdsCommission(val) {
        this.tariff.tariffAdsCommission = val;
        this.isDisabled = false;
        if (Number(this.tariff.tariffAdsCommission) < 0 && Number(this.tariff.tariffAdsCommission) > -100) {
            this.IsInvalidMinusAdsCommission = false;
            this.IsMinusExceedCommision = false;
        } else if (!this.IsInvalidMinusSpCommission || !this.IsInvalidMinusOpcoCommission) {
            this.IsInvalidMinusAdsCommission = false;
        } else {
            this.IsInvalidMinusAdsCommission = true;
        }

        if (!this.IsInvalidMinusAdsCommission && (Number(this.tariff.tariffAdsCommission) > 100)) {
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
            this.IsMinusExceedCommision = true;
        } else {
            this.IsMinusExceedCommision = false;
        }

        if (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission) === 100) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
            this.isDisabled = true;
            this.tariff.tariffSurChargeval = null;
            this.tariff.tariffSurChargeOpco = null;
            this.tariff.tariffSurChargeAds = null;
            this.IsEmptySurchargeval = false;
            this.IsEmptySurchargeAddOpco = false;

            if (this.tariff.tariffSPCommission != null && this.tariff.tariffAdsCommission != null && this.tariff.tariffOpcoCommission == null || this.tariff.tariffOpcoCommission == 0) {
                this.tariff.tariffOpcoCommission = 0;
            } else if (this.tariff.tariffSPCommission == null || this.tariff.tariffSPCommission == 0 && this.tariff.tariffAdsCommission != null && this.tariff.tariffOpcoCommission != null) {
                this.tariff.tariffSPCommission = 0;
            } else if (this.tariff.tariffSPCommission != null && this.tariff.tariffAdsCommission == null || this.tariff.tariffAdsCommission == 0 && this.tariff.tariffOpcoCommission != null) {
                this.tariff.tariffAdsCommission = 0;
            }
        } else if (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission) === -100) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
            this.isDisabled = false;
            if (this.tariff.tariffSPCommission != null && this.tariff.tariffAdsCommission != null && this.tariff.tariffOpcoCommission == null || this.tariff.tariffOpcoCommission == 0) {
                this.tariff.tariffOpcoCommission = 0;
            } else if (this.tariff.tariffSPCommission == null || this.tariff.tariffSPCommission == 0 && this.tariff.tariffAdsCommission != null && this.tariff.tariffOpcoCommission != null) {
                this.tariff.tariffSPCommission = 0;
            } else if (this.tariff.tariffSPCommission != null && this.tariff.tariffAdsCommission == null || this.tariff.tariffAdsCommission == 0 && this.tariff.tariffOpcoCommission != null) {
                this.tariff.tariffAdsCommission = 0;
            }
        } else if (this.tariff.tariffSPCommission == null && this.tariff.tariffAdsCommission == null && this.tariff.tariffOpcoCommission == null) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
        } else {
            this.ValidCommisionTotal = false;
            this.InValidCommisionTotal = true;
        }

    }

    tariffOpcoCommission(val) {
        this.tariff.tariffOpcoCommission = val;
        this.isDisabled = false;
        if (Number(this.tariff.tariffOpcoCommission) < 0 && Number(this.tariff.tariffOpcoCommission) > -100) {
            this.IsInvalidMinusOpcoCommission = false;
            this.IsMinusExceedCommision = false;
        } else if (!this.IsInvalidMinusAdsCommission || !this.IsInvalidMinusSpCommission) {
            this.IsInvalidMinusOpcoCommission = false;
        } else {
            this.IsInvalidMinusOpcoCommission = true;
        }


        if (!this.IsInvalidMinusOpcoCommission && (Number(this.tariff.tariffOpcoCommission) > 100)) {
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
            this.IsMinusExceedCommision = true;
        } else {
            this.IsMinusExceedCommision = false;
        }

        if (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission) === 100) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
            this.isDisabled = true;
            this.tariff.tariffSurChargeval = null;
            this.tariff.tariffSurChargeOpco = null;
            this.tariff.tariffSurChargeAds = null;
            this.IsEmptySurchargeval = false;
            this.IsEmptySurchargeAddOpco = false;

            if (this.tariff.tariffSPCommission != null && this.tariff.tariffAdsCommission != null && this.tariff.tariffOpcoCommission == null || this.tariff.tariffOpcoCommission == 0) {
                this.tariff.tariffOpcoCommission = 0;
            } else if (this.tariff.tariffSPCommission == null || this.tariff.tariffSPCommission == 0 && this.tariff.tariffAdsCommission != null && this.tariff.tariffOpcoCommission != null) {
                this.tariff.tariffSPCommission = 0;
            } else if (this.tariff.tariffSPCommission != null && this.tariff.tariffAdsCommission == null || this.tariff.tariffAdsCommission == 0 && this.tariff.tariffOpcoCommission != null) {
                this.tariff.tariffAdsCommission = 0;
            }


        } else if (Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission) === -100) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
            this.isDisabled = false;
            if (this.tariff.tariffSPCommission != null && this.tariff.tariffAdsCommission != null && this.tariff.tariffOpcoCommission == null || this.tariff.tariffOpcoCommission == 0) {
                this.tariff.tariffOpcoCommission = 0;
            } else if (this.tariff.tariffSPCommission == null || this.tariff.tariffSPCommission == 0 && this.tariff.tariffAdsCommission != null && this.tariff.tariffOpcoCommission != null) {
                this.tariff.tariffSPCommission = 0;
            } else if (this.tariff.tariffSPCommission != null && this.tariff.tariffAdsCommission == null || this.tariff.tariffAdsCommission == 0 && this.tariff.tariffOpcoCommission != null) {
                this.tariff.tariffAdsCommission = 0;
            }

        } else if (this.tariff.tariffSPCommission == null && this.tariff.tariffAdsCommission == null && this.tariff.tariffOpcoCommission == null) {
            this.ValidCommisionTotal = true;
            this.InValidCommisionTotal = false;
        } else {
            this.ValidCommisionTotal = false;
            this.InValidCommisionTotal = true;
        }


    }

    surChargeValue(val) {
        this.tariff.tariffSurChargeval = val;
        this.IsEmptySurchargeval = false;

        if (this.tariff.tariffSurChargeval !== null) {
            if (this.tariff.tariffSPCommission > 0 || this.tariff.tariffAdsCommission > 0 || this.tariff.tariffOpcoCommission > 0) {
                this.IsInvalidMinusOpcoCommission = true;
                this.IsInvalidMinusAdsCommission = true;
                this.IsInvalidMinusSpCommission = true;
            }

            if (this.tariff.tariffSurChargeAds == null || this.tariff.tariffSurChargeOpco == null) {
                this.IsEmptySurchargeAddOpco = true;
            }

        } else if (this.tariff.tariffSurChargeAds !== null || this.tariff.tariffSurChargeOpco !== null) {
            this.IsEmptySurchargeval = true;
        }

        else {
            this.IsEmptySurchargeAddOpco = false;
        }

    }


    tariffmaxcountchange(val) {
        this.tariff.tariffMaxCount = val;

        if ((this.tariff.tariffMaxCount == null) && (this.tariff.tariffExcessRate != null || this.tariff.tariffDefRate != null)) {
            this.tariff.tariffMaxCount = 0;
        }

        if (this.tariff.tariffExcessRate == 0 || this.tariff.tariffExcessRate == null) {
            this.tariff.tariffExcessRate = 0;
        }

        if (this.tariff.tariffDefRate == 0 || this.tariff.tariffDefRate == null) {
            this.tariff.tariffDefRate = 0;
        }

    }

    tariffExcessRatechange(val) {
        this.tariff.tariffExcessRate = val;

        if ((this.tariff.tariffExcessRate == null) && (this.tariff.tariffMaxCount != null || this.tariff.tariffDefRate != null)) {
            this.tariff.tariffExcessRate = 0;
        }


        if (this.tariff.tariffMaxCount == 0 || this.tariff.tariffMaxCount == null) {
            this.tariff.tariffMaxCount = 0;
        }

        if (this.tariff.tariffDefRate == 0 || this.tariff.tariffDefRate == null) {
            this.tariff.tariffDefRate = 0;
        }

    }

    tariffDefRatechange(val) {
        this.tariff.tariffDefRate = val;
        console.log(val);

        if ((this.tariff.tariffDefRate == null) && (this.tariff.tariffMaxCount != null || this.tariff.tariffExcessRate != null)) {
            this.tariff.tariffDefRate = 0;
            console.log(this.tariff.tariffDefRate);
        }

        if (this.tariff.tariffExcessRate == 0 || this.tariff.tariffExcessRate == null) {
            this.tariff.tariffExcessRate = 0;
        }

        if (this.tariff.tariffMaxCount == 0 || this.tariff.tariffMaxCount == null) {
            this.tariff.tariffMaxCount = 0;
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
        } else if (name.length == 0) {
            this.isNameError = true;
            this.nameError = 'Name Cannot Be Empty';
        } else if (name.length > 45) {
            this.isNameError = true;
            this.nameError = 'Ony 45 Characters Allowed';
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
