import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RateService} from '../../../commons/services/rate.service';
import {RateTax} from '../../../commons/models/common-data-models';
import {AuthenticationService} from '../../../commons/services/authentication.service';
import {MessageService} from '../../../commons/services/message.service';

@Component({
    selector: 'app-addtax',
    templateUrl: './tax.component.html',
    styleUrls: ['./tax.component.scss']
})
export class TaxComponent implements OnInit {

    public tax: RateTax;

    @Input() existingTaxList: RateTax[];

    @Output() onAddTask: EventEmitter<boolean> = new EventEmitter();

    @Output() modalClose: EventEmitter<boolean> = new EventEmitter();

    public isNameError: boolean;
    public isCodeError: boolean;
    public disableAddButton: boolean;
    public is_invalid_period: boolean;
    public isCalenderEnable: boolean;
    public isCalendarEmpty: boolean;
    public isvalueError: boolean;
    public isdateError: boolean;
    public datepickvalue: string;
    public fromdate: string;
    public todate: string;
    public taxValue: string;

    public nameError: string;
    public codeError: string;
    public valueError: string;
    public dateError: string;
    public date = new Date();

    public myDateRangePickerOptions = {
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

    public defaultcalval: string;

    public model: Object = {
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
        this.defaultcalval = '';
        this.taxValue = '';
        this.tax.taxesValidityDates = [];
        this.existingTaxList = [];
        this.disableAddButton = false;
        this.getExistingTaxesList();
    }

    clearForm() {
        this.tax.taxName = '';
        this.tax.taxCode = '';
        this.taxValue = '';
        this.defaultcalval = '';
        this.clearErrors();
    }

    onDateRangeChanged(event) {
        this.datepickvalue = event.formatted;
        this.fromdate = this.datepickvalue.split('-')[0].trim();
        this.todate = this.datepickvalue.split('-')[1].trim();
    }

    onSubmit(addTaxForm) {
        this.disableAddButton = true;
        if(!this.isNameError && !this.isCodeError &&
            this.tax.taxCode != null && this.tax.taxCode != '' && this.tax.taxName != null &&
            this.tax.taxName != '' && this.defaultcalval != null && this.defaultcalval != '' &&
            this.taxValue != null && this.taxValue != ''){
            this.tax.taxCode = this.tax.taxCode;
            this.tax.taxName = this.tax.taxName;
            this.tax.taxesValidityDates = [{taxValidityactdate:this.fromdate,taxValiditydisdate:this.todate,taxValidityval:Number(this.taxValue) / 100}];
            this.rateService.addTax(this.tax, (response) => {
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
            if (this.tax.taxName.length == 0) {
                this.isNameError = true;
                this.nameError = 'Tax Name can not be empty';
            }else{
                this.isNameError = false;
            }
            if (this.tax.taxCode.length == 0) {
                this.isCodeError = true;
                this.codeError = 'Tax Code can not be empty';
            }else{
                this.isCodeError = false;
            }
            if (this.taxValue.length == 0) {
                this.isvalueError = true;
                this.valueError = 'Tax Value can not be empty';
            }else{
                this.isvalueError = false;
            }
            if (this.defaultcalval.length == 0) {
                this.isdateError = true;
                this.dateError = 'Date can not be empty';
            }else{
                this.isdateError = false;
            }
            this.disableAddButton = false;
        }  

    }

    clearErrors() {
        this.isNameError = false;
        this.isCodeError = false;
        this.isvalueError = false;
        this.isdateError = false;
        this.nameError = '';
        this.codeError = '';
        this.valueError = '';
        this.dateError = '';
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

    isCodeUnique(code) {
        let state = false;
        for (const entry of this.existingTaxList) {
            if (code.trim() == entry.taxCode.trim()) {
                state = true;
            }
        }
        if (state) {
            this.isCodeError = true;
            this.codeError = 'Code Already Existing';
        } else if (code.length == 0) {
            this.isCodeError = true;
            this.codeError = 'Code Cannot Be Empty';
        } else if (code.length > 45) {
            this.isCodeError = true;
            this.codeError = 'Ony 45 Characters Allowed';
        } else {
            this.isCodeError = false;
            this.codeError = '';
        }
    }

    getExistingTaxesList() {
        this.rateService.getRateTaxList((response) => {
            if (response.success) {
                this.existingTaxList = response.payload;
            } else {
                this.message.error(response.message);
            }
        });
    }

}
