import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RateService} from '../../../commons/services/rate.service';
import {RateTax} from '../../../commons/models/common-data-models';
import {AuthenticationService} from '../../../commons/services/authentication.service';
import {MessageService} from '../../../commons/services/message.service';
import {IMyDrpOptions} from 'mydaterangepicker';

@Component({
    selector: 'app-addtax',
    templateUrl: './tax.component.html',
    styleUrls: ['./tax.component.scss']
})
export class TaxComponent implements OnInit {

    private tax: RateTax;

    @Input()
    private existingTaxList: RateTax[];

    @Output()
    private onAddTask: EventEmitter<boolean> = new EventEmitter();

    @Output()
    private modalClose: EventEmitter<boolean> = new EventEmitter();

    private isNameError: boolean;
    private isDescriptionError: boolean;
    private disableAddButton: boolean;
    private is_invalid_period: boolean;
    private isCalenderEnable: boolean;
    private isCalendarEmpty: boolean;

    private nameError: string;
    private descriptionError: string;
    private date = new Date();

    private myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'yyyy/mm/dd',
        sunHighlight: true,
        indicateInvalidDateRange: true,
        markCurrentDay: true,
        disableUntil: {
            year: this.date.getFullYear(),
            month: this.date.getMonth() + 1,
            day: this.date.getDate() - 1
        },
        editableDateRangeField: false,
        showClearDateRangeBtn: false
    };

    private defaultcalval: string;

    private model: Object = {
        beginDate: {
            year: this.date.getFullYear(),
            month: this.date.getMonth() + 1,
            day: this.date.getDate()
        },
        endDate: {
            year: this.date.getFullYear() + 200,
            month: 1,
            day: 1
        }
    };

    constructor(private rateService: RateService, private authService: AuthenticationService, private message: MessageService) {
    }

    ngOnInit() {
        const loginInfo = this.authService.loginUserInfo.getValue();
        this.tax = new RateTax();
        this.clearForm();
        this.tax.createdBy = loginInfo.userName;
        this.disableAddButton = false;
        this.defaultcalval = '';
    }

    clearForm() {
        this.tax.taxName = '';
        this.tax.taxCode = '';
        this.clearErrors();
    }

    onSubmit(addTaxForm) {
       /* this.disableAddButton = true;
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
        } */

    }

    clearErrors() {
        this.isNameError = false;
        this.isDescriptionError = false;
        this.nameError = '';
        this.descriptionError = '';
    }

    isNameUnique(name) {
        let state = false;
        for (const entry of this.existingTaxList) {
            if (name.trim() == entry.taxName.trim()) {
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


}
