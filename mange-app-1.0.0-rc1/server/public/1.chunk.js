webpackJsonp([1],{

/***/ "../../../../../src/app/rate/rate-category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\" style=\"animation-delay: 0.2s\">\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"form-container newtypeContainer\">\n\n                <form class=\"form-horizontal\" #addCategoryForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(addCategoryForm)\">\n\n                    <div class=\"form-group\">\n                        <label class=\"control-label col-sm-3\">{{type}} Name</label>\n                        <div class=\"col-sm-4\">\n                            <input class=\"form-control\"\n                                   type=\"text\"\n                                   autocomplete=\"off\"\n                                   placeholder=\"Name\"\n                                   name=\"name\"\n                                   #nameRef=\"ngModel\"\n                                   required\n                                   [(ngModel)]=\"name\"\n                                   (input)=\"isNameUnique($event.target.value)\">\n                            <span class=\"error\" *ngIf=\"isNameError\">{{nameError}}</span>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label col-sm-3\">{{type}} Code</label>\n                        <div class=\"col-sm-4\">\n                            <input class=\"form-control\"\n                                   type=\"text\"\n                                   autocomplete=\"off\"\n                                   placeholder=\"Code\"\n                                   name=\"code\"\n                                   #codeRef=\"ngModel\"\n                                   required\n                                   [(ngModel)]=\"code\"\n                                   (input)=\"isCodeUnique($event.target.value)\">\n                            <span class=\"error\" *ngIf=\"isCodeError\">{{codeError}}</span>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label col-sm-3\">{{type}} Description</label>\n                        <div class=\"col-sm-4\">\n                <textarea rows=\"4\" cols=\"50\" class=\"form-control\"\n                          type=\"text\"\n                          autocomplete=\"off\"\n                          placeholder=\"Description\"\n                          name=\"description\"\n                          #descriptionRef=\"ngModel\"\n                          required\n                          [(ngModel)]=\"description\">\n                </textarea>\n                            <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\" *ngIf=\"!isNameError && !isCodeError\">\n                        <div class=\"col-sm-1 col-sm-offset-3\">\n                            <button type=\"submit\" class=\"btn btn-success\">Add</button>\n                        </div>\n                        <div class=\"col-sm-1\">\n                            <a class=\"btn btn-warning\" (click)=\"clearForm()\">Clear</a>\n                        </div>\n                    </div>\n\n\n                </form>\n\n            </div>\n\n            <div class=\"error-container animated bounceIn\" *ngIf=\"submissionError\">{{submissionError}}</div>\n\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/rate/rate-category/category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".newtypeContainer {\n  padding: 5px;\n  font-size: 15px;\n  margin: 10px; }\n\n.btn {\n  margin: 5px; }\n\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rate/rate-category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__ = __webpack_require__("../../../../../src/app/commons/services/rate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_services_authentication_service__ = __webpack_require__("../../../../../src/app/commons/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryComponent = (function () {
    function CategoryComponent(rateService, authService, message) {
        this.rateService = rateService;
        this.authService = authService;
        this.message = message;
        this.onAddTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modalClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.name = '';
        this.code = '';
        this.description = '';
        this.clearErrors();
    };
    /**
     * add button is clicked and on form submission
     * @param addCategoryForm
     */
    CategoryComponent.prototype.onSubmit = function (addCategoryForm) {
        var _this = this;
        this.clearErrors();
        var loginInfo = this.authService.loginUserInfo.getValue();
        if (this.name.length != 0 && this.code.length != 0 && this.description.length != 0) {
            // console.log('form submitted : ' + this.name + '  ' + this.code + '  ' + this.description);
            this.rateService.addCategory(this.name, this.code, this.description, loginInfo.userName, function (response, status) {
                if (status) {
                    _this.onAddTask.emit(true);
                    _this.modalClose.emit(true);
                    _this.message.success(response.message);
                }
                else {
                    _this.message.error(response);
                }
            });
        }
        else {
            if (this.name.length == 0) {
                this.isNameError = true;
                this.nameError = 'Name can not be empty';
            }
            if (this.code.length == 0) {
                this.isCodeError = true;
                this.codeError = 'Code can not be empty';
            }
            if (this.description.length == 0) {
                this.isDescriptionError = true;
                this.descriptionError = 'Description can not be empty';
            }
        }
    };
    /**
     * clear all the error fields
     */
    CategoryComponent.prototype.clearErrors = function () {
        this.isCodeError = false;
        this.isNameError = false;
        this.isDescriptionError = false;
        this.nameError = '';
        this.codeError = '';
        this.descriptionError = '';
    };
    /**
     * check for duplicate category names
     * @param name
     */
    CategoryComponent.prototype.isNameUnique = function (name) {
        var state = false;
        for (var _i = 0, _a = this.existingCategories; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (name == entry.categoryName) {
                state = true;
            }
        }
        if (state) {
            this.isNameError = true;
            this.nameError = 'Name Already Existing';
        }
        else {
            this.isNameError = false;
            this.nameError = '';
        }
    };
    /**
     * check for duplicate category codes
     * @param code
     */
    CategoryComponent.prototype.isCodeUnique = function (code) {
        var state = false;
        for (var _i = 0, _a = this.existingCategories; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (code == entry.categoryCode) {
                state = true;
            }
        }
        if (state) {
            this.isCodeError = true;
            this.codeError = 'Code Already Existing';
        }
        else {
            this.isCodeError = false;
            this.codeError = '';
        }
    };
    /**
     * clear all the fields in the form
     */
    CategoryComponent.prototype.clearForm = function () {
        this.name = '';
        this.code = '';
        this.description = '';
        this.clearErrors();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CategoryComponent.prototype, "type", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], CategoryComponent.prototype, "onAddTask", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CategoryComponent.prototype, "modalClose", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], CategoryComponent.prototype, "existingCategories", void 0);
    CategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/rate/rate-category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rate/rate-category/category.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__["a" /* RateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__["a" /* RateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */]) === 'function' && _e) || Object])
    ], CategoryComponent);
    return CategoryComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manage-module-ui/src/category.component.js.map

/***/ }),

/***/ "../../../../../src/app/rate/rate-currency/currencies.ts":
/***/ (function(module, exports) {

/**
 * Created by rajithk on 7/21/17.
 */
module.exports = [
    'AED',
    'AFN',
    'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BOV',
    'BRL',
    'BSD',
    'BTN',
    'BWP',
    'BYR',
    'BZD',
    'CAD',
    'CDF',
    'CHE',
    'CHF',
    'CHW',
    'CLF',
    'CLP',
    'CNY',
    'COP',
    'COU',
    'CRC',
    'CUC',
    'CUP',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'ERN',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'GBP',
    'GEL',
    'GHS',
    'GIP',
    'GMD',
    'GNF',
    'GTQ',
    'GYD',
    'HKD',
    'HNL',
    'HRK',
    'HTG',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'KMF',
    'KPW',
    'KRW',
    'KWD',
    'KYD',
    'KZT',
    'LAK',
    'LBP',
    'LKR',
    'LRD',
    'LSL',
    'LTL',
    'LVL',
    'LYD',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRO',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
    'MXV',
    'MYR',
    'MZN',
    'NAD',
    'NGN',
    'NIO',
    'NOK',
    'NPR',
    'NZD',
    'OMR',
    'PAB',
    'PEN',
    'PGK',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD',
    'RUB',
    'RWF',
    'SAR',
    'SBD',
    'SCR',
    'SDG',
    'SEK',
    'SGD',
    'SHP',
    'SLL',
    'SOS',
    'SRD',
    'SSP',
    'STD',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRY',
    'TTD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'USD',
    'USN',
    'USS',
    'UYI',
    'UYU',
    'UZS',
    'VEF',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XAG',
    'XAU',
    'XBA',
    'XBB',
    'XBC',
    'XBD',
    'XCD',
    'XDR',
    'XOF',
    'XPD',
    'XPF',
    'XPT',
    'XTS',
    'XXX',
    'YER',
    'ZAR',
    'ZMW',
];
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manage-module-ui/src/currencies.js.map

/***/ }),

/***/ "../../../../../src/app/rate/rate-currency/currency.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\" style=\"animation-delay: 0.1s\">\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"form-container currencyContainer\">\n                <form #currencyForm=\"ngForm\" class=\"form-horizontal\" novalidate\n                      (ngSubmit)=\"onCurrencyValueSubmit(currencyForm)\">\n\n                    <div class=\"form-group\">\n                        <label class=\"control-label col-sm-3\">Currency code<span>*</span></label>\n                        <div class=\"col-sm-4\">\n                            <input (input)=\"isCurrencyCode($event.target.value)\"\n                                   [(ngModel)]=\"currencycode\"\n                                   class=\"form-control\"\n                                   name=\"currencycode\"\n                                   #inputc\n                                   type=\"text\"\n                                   placeholder=\"Currency code\"\n                                   required />\n                            <!--Throw error if currency validator fails-->\n                            <span class=\"error\" *ngIf=\"isCurrencyError\">{{currencyCodeError}}</span>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label class=\"control-label col-sm-3\">Currency description<span>*</span></label>\n                        <div class=\"col-sm-4\">\n                             <textarea rows=\"2\" cols=\"50\"\n                                       class=\"form-control\"\n                                       type=\"text\"\n                                       autocomplete=\"off\"\n                                       placeholder=\"Description\"\n                                       [(ngModel)]=\"currencydesc\"\n                                       name=\"currencydesc\"\n                                       required>\n                             </textarea>\n                            <span class=\"error\" *ngIf=\"isCurrencyDescError\">{{currencyDescError}}</span>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\" *ngIf=\"!isCurrencyError\">\n                        <div class=\"col-sm-1 col-sm-offset-3\">\n                            <button type=\"submit\" class=\"btn btn-primary animated fadeIn\">Add</button>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <a class=\"btn btn-warning\" (click)=\"clearForm()\">Clear</a>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/rate/rate-currency/currency.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.currencyContainer{\n  background-color: #32c5d2;\n  padding: 5px;\n  font-size: 15px;\n  margin: 10px;\n}\n\n.btn{\n  margin: 5px;\n} */\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n.btn {\n  border-radius: 0px !important; }\n\n.control-label span {\n  color: #dd0d0d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rate/rate-currency/currency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__ = __webpack_require__("../../../../../src/app/commons/services/rate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_services_authentication_service__ = __webpack_require__("../../../../../src/app/commons/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var currencyCodes = __webpack_require__("../../../../../src/app/rate/rate-currency/currencies.ts");
var CurrencyComponent = (function () {
    function CurrencyComponent(rateService, authService, message) {
        this.rateService = rateService;
        this.authService = authService;
        this.message = message;
        this.onAddTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modalClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        this.currencycode = '';
        this.currencydesc = '';
        this.clearErrors();
    };
    /**
     * when form submitted
     * @param currencyForm
     */
    CurrencyComponent.prototype.onCurrencyValueSubmit = function (currencyForm) {
        var _this = this;
        this.clearErrors();
        var loginInfo = this.authService.loginUserInfo.getValue();
        // console.log('form submitted : ' + this.currencycode + '  ' + this.currencydesc);
        this.clearErrors();
        if (this.currencycode.length != 0 && this.currencydesc.length != 0) {
            this.rateService.addCurrency(this.currencycode, this.currencydesc, loginInfo.userName, function (response, status) {
                if (status) {
                    _this.onAddTask.emit(true);
                    _this.modalClose.emit(true);
                    _this.message.success(response.message);
                }
                else {
                    _this.message.error(response);
                }
            });
        }
        else {
            if (this.currencycode.length == 0) {
                this.currencyCodeError = 'Currency Cannot Be Empty';
                this.isCurrencyError = true;
            }
            if (this.currencydesc.length == 0) {
                this.currencyDescError = 'Currency Description Cannot Be Empty';
                this.isCurrencyDescError = true;
            }
        }
    };
    /**
     *  Check currency code against valid currency list
     * @param name
     */
    CurrencyComponent.prototype.isCurrencyCode = function (name) {
        if (currencyCodes.indexOf(name) < 0) {
            this.isCurrencyError = true;
            this.currencyCodeError = 'Not a Valid Currency Type';
        }
        else {
            var state = false;
            for (var _i = 0, _a = this.existingCodes; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (name == entry) {
                    state = true;
                }
            }
            if (state) {
                this.isCurrencyError = true;
                this.currencyCodeError = 'Currency Type Already Existing';
            }
            else {
                this.isCurrencyError = false;
                this.currencyCodeError = '';
            }
        }
    };
    /**
     * clear error fields
     */
    CurrencyComponent.prototype.clearErrors = function () {
        this.currencyCodeError = '';
        this.currencyDescError = '';
        this.isCurrencyError = false;
        this.isCurrencyDescError = false;
    };
    /**
     * clear all the fields in the form
     */
    CurrencyComponent.prototype.clearForm = function () {
        this.currencycode = '';
        this.currencydesc = '';
        this.clearErrors();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], CurrencyComponent.prototype, "existingCodes", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], CurrencyComponent.prototype, "onAddTask", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CurrencyComponent.prototype, "modalClose", void 0);
    CurrencyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-currency',
            template: __webpack_require__("../../../../../src/app/rate/rate-currency/currency.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rate/rate-currency/currency.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__["a" /* RateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__["a" /* RateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */]) === 'function' && _e) || Object])
    ], CurrencyComponent);
    return CurrencyComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manage-module-ui/src/currency.component.js.map

/***/ }),

/***/ "../../../../../src/app/rate/rate-definition/definition.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"animated fadeInUp row\">-->\n\n    <!--<div class=\"col-sm-12\">-->\n        <!--&lt;!&ndash;Form Container - START&ndash;&gt;-->\n        <!--<div class=\"form-container rateInputContainer\">-->\n            <!--<div class=\"tbl-header\">-->\n                <!--Rate Definitions-->\n            <!--</div>-->\n            <!--<div class=\"searchFilter\">-->\n                <!--<div class=\"col-sm-4\">-->\n                    <!--<input type=\"text\" class=\"form-control\"-->\n                           <!--[(ngModel)]=\"selectedRate\"-->\n                           <!--[typeaheadMinLength]=\"0\"-->\n                           <!--container=\"body\"-->\n                           <!--[typeahead]=\"rateDefNames\"-->\n                           <!--typeaheadOptionField=\"apiId\"-->\n                           <!--(typeaheadOnSelect)=\"onRateSelected($event)\"-->\n                           <!--placeholder=\"Select the Rate\">-->\n                <!--</div>-->\n\n            <!--</div>-->\n\n        <!--</div>-->\n    <!--</div>-->\n<!--</div>-->\n\n<div class=\"animated fadeInUp row\" style=\"animation-delay: 0.1s\">\n    <div class=\"col-sm-12\">\n        <div class=\"form-container quotaInputContainer\">\n            <div class=\"tbl-header\">\n                Rate Definitions\n                <br>\n            </div>\n            <div class=\"searchFilter\">\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\"\n                           [(ngModel)]=\"selectedRate\"\n                           [typeaheadMinLength]=\"0\"\n                           container=\"body\"\n                           [typeahead]=\"rateDefNames\"\n                           typeaheadOptionField=\"apiId\"\n                           (typeaheadOnSelect)=\"onRateSelected($event)\"\n                           placeholder=\"Select the Rate\">\n                </div>\n\n            </div>\n\n            <div *ngIf=\"showRateDef\">\n                <label>Name: {{rateDefinition.rateDefName}}</label><br>\n                <label>Description: {{rateDefinition.rateDefDescription}}</label><br>\n                <label>Currency : {{rateDefinition.currency.currencyCode}}</label><br>\n                <label>Rate Type: {{rateDefinition.rateType.rateTypeCode}}</label><br>\n                <label>Tariff: {{rateDefinition.tariff.tariffName}}</label>\n            </div>\n\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/rate/rate-definition/definition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefinitionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefinitionComponent = (function () {
    function DefinitionComponent() {
        this.onAddTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modalClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DefinitionComponent.prototype.ngOnInit = function () {
        this.selectedRate = '';
        this.showRateDef = false;
    };
    DefinitionComponent.prototype.onRateSelected = function (event) {
        for (var _i = 0, _a = this.rateDefinitions; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.rateDefName == this.selectedRate) {
                this.rateDefinition = entry;
                this.showRateDef = true;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], DefinitionComponent.prototype, "rateDefinitions", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], DefinitionComponent.prototype, "rateDefNames", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], DefinitionComponent.prototype, "onAddTask", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], DefinitionComponent.prototype, "modalClose", void 0);
    DefinitionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ratedefinition',
            template: __webpack_require__("../../../../../src/app/rate/rate-definition/definition.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rate/rate-main/rate-main.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], DefinitionComponent);
    return DefinitionComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manage-module-ui/src/definition.component.js.map

/***/ }),

/***/ "../../../../../src/app/rate/rate-main/rate-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n     aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">{{dialogactionTitile}}</h4>\n                <button type=\"button\" class=\"close pull-right\"\n                        (click)=\"lgModal.hide(); clearModalContent()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <app-currency\n                        *ngIf=\"showAddCurrency\"\n                        [existingCodes]=\"currencyCodeList\"\n                        (onAddTask)=\"onAddCurrencyHandler($event)\"\n                        (modalClose)=\"lgModal.hide(); clearModalContent()\"></app-currency>\n\n                <app-addtariff *ngIf=\"showAddTariff\"\n                               [existingNames]=\"tariffNameList\"\n                               (onAddTask)=\"onAddTariffHandler($event)\"\n                               (modalClose)=\"lgModal.hide(); clearModalContent()\"></app-addtariff>\n\n                <app-addtariff *ngIf=\"showChildNewTariff\"\n                               [existingNames]=\"tariffNameList\"\n                               (onAddTask)=\"onAddTariffHandler($event)\"\n                               (modalClose)=\"lgModal.hide(); clearModalContent()\"></app-addtariff>\n\n                <app-category *ngIf=\"showChildNewCategory\"\n                              type=\"Category\"\n                              [existingCategories]=\"categoryList\"\n                              (onAddTask)=\"onAddCategoryHandler($event)\"\n                              (modalClose)=\"lgModal.hide(); clearModalContent()\"></app-category>\n\n                <app-category *ngIf=\"showChildNewSubCategory\"\n                              type=\"Sub Category\"\n                              [existingCategories]=\"categoryList\"\n                              (onAddTask)=\"onAddCategoryHandler($event)\"\n                              (modalClose)=\"lgModal.hide(); clearModalContent()\"></app-category>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--<app-ratedefinition [rateDefinitions]=\"rateDefinitions\"-->\n                    <!--[rateDefNames]=\"rateDefNameList\"></app-ratedefinition>-->\n\n<div class=\"animated fadeInUp row\">\n\n    <div class=\"col-sm-12\">\n        <!--Form Container - START-->\n        <div class=\"form-container rateInputContainer\">\n            <div class=\"tbl-header\">\n                Create New Rate Card\n            </div>\n\n            <form class=\"form-horizontal\" #ratecardForm=\"ngForm\" novalidate\n                  (ngSubmit)=\"onRateCardSubmition(ratecardForm)\">\n                <div class=\"form-group\" [ngClass]=\"{'has-danger': isNameError}\">\n                    <label class=\"control-label col-sm-2\">Rate Name  <span>*</span></label>\n                    <div class=\"col-sm-4\">\n                        <input class=\"form-control\"\n                               type=\"text\"\n                               autocomplete=\"off\"\n                               placeholder=\"Name\"\n                               name=\"name\"\n                               #nameRef=\"ngModel\"\n                               required\n                               [(ngModel)]=\"rateDefName\"\n                               (input)=\"isNameUnique($event.target.value)\">\n                        <span class=\"error\" *ngIf=\"isNameError\">{{nameError}}</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\" [ngClass]=\"{'has-danger': isDescriptionEmpty}\">\n                    <label class=\"control-label col-sm-2\">Rate Description  <span>*</span></label>\n                    <div class=\"col-sm-4\">\n                            <textarea rows=\"2\" cols=\"50\" class=\"form-control\"\n                                      type=\"text\"\n                                      autocomplete=\"off\"\n                                      placeholder=\"Description\"\n                                      name=\"description\"\n                                      #descriptionRef=\"ngModel\"\n                                      required\n                                      [(ngModel)]=\"rateDefDescription\">\n                            </textarea>\n                        <span class=\"error\" *ngIf=\"isDescriptionEmpty\">Description can not be empty</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\" [ngClass]=\"{'has-danger': isCurrencyEmpty}\">\n                    <label class=\"control-label col-sm-2\">Currency <span>*</span></label>\n                    <div class=\"col-sm-4\">\n                        <input [(ngModel)]=\"currency\"\n                               [typeahead]=\"currencyCodeList\"\n                               [typeaheadMinLength]=\"0\"\n                               placeholder=\"Currency\"\n                               name=\"typecurrency\"\n                               class=\"form-control\"\n                               required\n                        >\n                        <span class=\"error\" *ngIf=\"isCurrencyError\">{{currencyError}}</span>\n                    </div>\n                    <span class=\"glyphicon glyphicon-plus info-tooltip\"\n                          tooltip=\"Click here to Add a new currency to the list\" placement=\"right\"\n                          (click)=\"showAddCurrency=true;changeDialogTitle();lgModal.show();\"></span>\n                </div>\n\n                <div class=\"form-group\" [ngClass]=\"{'has-danger': isRateTypeEmpty}\">\n                    <label class=\"control-label col-sm-2\">Rate Type <span>*</span></label>\n                    <div class=\"col-sm-4\">\n                        <input [(ngModel)]=\"rateType\"\n                               [typeahead]=\"rateTypeCodeList\"\n                               [typeaheadMinLength]=\"0\"\n                               autocomplete=\"off\"\n                               placeholder=\"Rate Type\"\n                               name=\"rateType\"\n                               #rateTypeRef=\"ngModel\"\n                               class=\"form-control\"\n                               required\n                        >\n                        <span class=\"error\" *ngIf=\"isRateTypeError\">{{rateTypeError}}</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\" [ngClass]=\"{'has-danger': isTariffEmpty}\">\n                    <label class=\"control-label col-sm-2\">Tariff <span>*</span></label>\n                    <div class=\"col-sm-4\">\n                        <input [(ngModel)]=\"tariff\"\n                               [typeahead]=\"tariffNameList\"\n                               [typeaheadMinLength]=\"0\"\n                               autocomplete=\"off\"\n                               placeholder=\"Tariff\"\n                               name=\"tariff\"\n                               #tariffRef=\"ngModel\"\n                               required\n                               class=\"form-control\"\n                               required\n                        >\n                        <span class=\"error\" *ngIf=\"isTariffError\">{{tariffError}}</span>\n                    </div>\n                    <span class=\"glyphicon glyphicon-plus info-tooltip\"\n                          tooltip=\"Click here to Add a new tariff to the list\" placement=\"right\"\n                          (click)=\"showAddTariff=true;changeDialogTitle();lgModal.show();\"></span>\n                </div>\n\n                <div class=\"form-group\" [ngClass]=\"{'has-danger': isTaxEmpty}\">\n                    <label class=\"control-label col-sm-2\">Tax</label>\n                    <div class=\"col-sm-4\">\n                        <select multiple\n                                [(ngModel)]=\"rateTax\"\n                                class=\"form-control\"\n                                name=\"tax\"\n                                required\n                                id=\"taxlist\">\n                            <option\n                                    *ngFor=\"let c of rateTaxList\"\n                                    [ngValue]=\"c.taxId\">{{c.taxName}}\n                            </option>\n\n                        </select>\n                        <span class=\"error\" *ngIf=\"isTaxEmpty\">Tax can not be empty</span>\n                    </div>\n                    <span class=\"glyphicon glyphicon-question-sign info-tooltip\"\n                          tooltip=\"Press CTR and click to select multiple tax item or leave empty\" placement=\"right\"\n                    ></span>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\">Add Sub Category:</label>\n                    <div class=\"col-sm-4\">\n                        <label class=\"switch\">\n                            <input type=\"checkbox\"\n                                   (change)=\"(showSubcategory)?showSubcategory=false:showSubcategory=true\">\n                            <span class=\"slider round\"></span>\n                        </label>\n                        &nbsp;&nbsp; <span class=\"glyphicon glyphicon-question-sign info-tooltip\"\n                                           tooltip=\"Please enable this option In oder to add subcategories\"\n                                           placement=\"right\"></span>\n                    </div>\n                </div>\n                <app-ratecategory *ngIf=\"showSubcategory\"\n                                  [categoryList]=\"categoryNameList\"\n                                  [tariffList]=\"tariffNameList\"\n                                  [rateCategories] = \"mappingList\"\n                                  (modalfire)=\"onmodalfireHandler($event);lgModal.show();changeDialogTitle();\"\n                                  (rateCatetgorySubmition)=\"onRateCategorySubmitionHandler($event)\"></app-ratecategory>\n\n                <div class=\"form-group\">\n                    <div class=\"col-sm-4 col-sm-offset-2\">\n                        <button type=\"submit\" class=\"btn btn-primary animated fadeIn\">Add</button>&nbsp;\n                        <a class=\"btn btn-warning\" (click)=\"reloadPage()\">Clear</a>\n                    </div>\n                </div>\n\n            </form>\n\n        </div>\n    </div>\n    <!--<button (click)=\"showit()\">show</button>-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/rate/rate-main/rate-main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.tbl-header {\n  color: #E19131; }\n\n.rateInputContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n  .rateInputContainer .fields-container div[class^=\"col-\"] {\n    padding-bottom: 10px; }\n  .rateInputContainer .title {\n    font-size: 1.2em;\n    font-weight: 600;\n    color: gray;\n    padding-bottom: 5px; }\n\n.rateForm input {\n  background-color: #dde3ec;\n  height: 43px;\n  color: #8290a3;\n  border: 1px solid #dde3ec; }\n  .rateForm input:focus {\n    border: 1px solid #c3ccda; }\n\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px; }\n\n/* Hide default HTML checkbox */\n.switch input {\n  display: none; }\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.info-tooltip {\n  font-size: 1.5em;\n  color: #8E44AD;\n  vertical-align: top;\n  margin-top: 0.3em;\n  cursor: pointer; }\n\n.modal {\n  top: 10%;\n  outline: none; }\n\n.tbl-header {\n  margin-top: 10px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 15px;\n  color: #E19131;\n  text-transform: uppercase; }\n\n.has-danger .form-control {\n  border-color: #d9534f;\n  color: #d9534f; }\n\n.btn {\n  border-radius: 0px !important; }\n\n.searchFilter {\n  /*overflow: hidden;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke;\n    background-color: #E19131;*/\n  min-height: 78px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #E19131;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  color: #ffffff; }\n\n.searchFilter div[class^=\"col-\"] {\n  padding-bottom: 10px; }\n\n.control-label span {\n  color: #dd0d0d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rate/rate-main/rate-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__ = __webpack_require__("../../../../../src/app/commons/services/rate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__ = __webpack_require__("../../../../../src/app/commons/models/common-data-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_services_authentication_service__ = __webpack_require__("../../../../../src/app/commons/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RateMainComponent = (function () {
    function RateMainComponent(rateService, _router, authService, message) {
        this.rateService = rateService;
        this._router = _router;
        this.authService = authService;
        this.message = message;
    }
    RateMainComponent.prototype.ngOnInit = function () {
        this.showSubcategory = false;
        this.showAddCurrency = false;
        this.showAddTariff = false;
        this.showChildNewTariff = false;
        this.showChildNewSubCategory = false;
        this.showChildNewCategory = false;
        this.clearErrors();
        this.rateDefName = '';
        this.rateDefDescription = '';
        this.currency = '';
        this.rateType = '';
        this.tariff = '';
        this.rateTax = '';
        this.taxId = 0;
        this.tariffList = [];
        this.currencyList = [];
        this.rateTypeList = [];
        this.categoryList = [];
        this.mappingList = [];
        this.rateDefinitions = [];
        this.categoryNameList = [];
        this.currencyCodeList = [];
        this.rateTypeCodeList = [];
        this.tariffNameList = [];
        this.rateDefNameList = [];
        this.rateTaxList = [];
        this.taxidlist = '';
        this.rateCategories = [];
        this.getTariffList();
        this.getCurrencyList();
        this.getRateTypeList();
        this.getCategoryList();
        this.getRateDefinitionList();
        this.getRateTaxList();
    };
    /**
     * this function will load the existing tariff list
     */
    RateMainComponent.prototype.getTariffList = function () {
        var _this = this;
        this.rateService.getTariffList(function (response, status) {
            if (status) {
                var count = 0;
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var entry = response_1[_i];
                    _this.tariffList[count] = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["g" /* Tariff */]();
                    _this.tariffList[count].tariffId = response[count].tariffId;
                    _this.tariffList[count].tariffName = response[count].tariffName;
                    _this.tariffNameList[count] = response[count].tariffName;
                    count++;
                }
            }
            else {
                _this.message.error(response);
            }
        });
    };
    /**
     * this function will load the existing currency list
     */
    RateMainComponent.prototype.getCurrencyList = function () {
        var _this = this;
        this.rateService.getCurrencyList(function (response, status) {
            if (status) {
                var count = 0;
                for (var _i = 0, response_2 = response; _i < response_2.length; _i++) {
                    var entry = response_2[_i];
                    _this.currencyList[count] = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["i" /* Currency */]();
                    _this.currencyList[count].currencyId = response[count].currencyId;
                    _this.currencyList[count].currencyCode = response[count].currencyCode;
                    _this.currencyCodeList[count] = response[count].currencyCode;
                    count++;
                }
            }
            else {
                _this.message.error(response);
            }
        });
    };
    /**
     * this function will load the existing rate types
     */
    RateMainComponent.prototype.getRateTypeList = function () {
        var _this = this;
        this.rateService.getRateTypeList(function (response, status) {
            if (status) {
                var count = 0;
                for (var _i = 0, response_3 = response; _i < response_3.length; _i++) {
                    var entry = response_3[_i];
                    _this.rateTypeList[count] = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["k" /* RateType */]();
                    _this.rateTypeList[count].rateTypeId = response[count].rateTypeId;
                    _this.rateTypeList[count].rateTypeCode = response[count].rateTypeCode;
                    _this.rateTypeCodeList[count] = response[count].rateTypeCode;
                    count++;
                }
            }
            else {
                _this.message.error(response);
            }
        });
    };
    /**
     * this function will load the existing rate taxes list
     */
    RateMainComponent.prototype.getRateTaxList = function () {
        var _this = this;
        this.rateService.getRateTaxList(function (response, status) {
            if (status) {
                var count = 0;
                for (var _i = 0, response_4 = response; _i < response_4.length; _i++) {
                    var entry = response_4[_i];
                    _this.rateTaxList[count] = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["l" /* RateTax */]();
                    _this.rateTaxList[count].taxId = response[count].taxId;
                    _this.rateTaxList[count].taxName = response[count].taxName;
                    count++;
                }
            }
            else {
                _this.message.error(response);
            }
        });
    };
    /**
     * this function will load the available categories
     */
    RateMainComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.rateService.getCategoryList(function (response, status) {
            if (status) {
                var count = 0;
                for (var _i = 0, response_5 = response; _i < response_5.length; _i++) {
                    var entry = response_5[_i];
                    _this.categoryList[count] = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["h" /* Category */]();
                    _this.categoryList[count].categoryId = response[count].categoryId;
                    _this.categoryList[count].categoryName = response[count].categoryName;
                    _this.categoryList[count].categoryCode = response[count].categoryCode;
                    _this.categoryNameList[count] = response[count].categoryName;
                    count++;
                }
            }
            else {
                _this.message.error(response);
            }
        });
    };
    /**
     * load available rate definitions
     */
    RateMainComponent.prototype.getRateDefinitionList = function () {
        var _this = this;
        this.rateService.getRateDefinitionList(function (response, status) {
            if (status) {
                _this.rateDefinitions = response;
                var count = 0;
                for (var _i = 0, response_6 = response; _i < response_6.length; _i++) {
                    var entry = response_6[_i];
                    _this.rateDefNameList[count] = response[count].rateDefName;
                    count++;
                }
            }
            else {
                _this.message.error(response);
            }
        });
    };
    /**
     * when rate card is submitted
     * @param ratecardForm
     */
    RateMainComponent.prototype.onRateCardSubmition = function (ratecardForm) {
        var _this = this;
        this.clearErrors();
        var loginInfo = this.authService.loginUserInfo.getValue();
        var currency;
        var tariff;
        var rateType;
        var rateTaxes = [];
        var rateCard;
        var rateDefCategoryBase;
        var ratedefinition;
        var validCurrency = false;
        var validTariff = false;
        var validRateType = false;
        /** for loop to assign currency id */
        for (var _i = 0, _a = this.currencyList; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.currencyCode == this.currency) {
                currency = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["i" /* Currency */]();
                currency.currencyId = entry.currencyId;
                validCurrency = true;
            }
        }
        /** for loop to assign rateType id */
        for (var _b = 0, _c = this.rateTypeList; _b < _c.length; _b++) {
            var entry = _c[_b];
            if (entry.rateTypeCode == this.rateType) {
                rateType = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["k" /* RateType */]();
                rateType.rateTypeId = entry.rateTypeId;
                validRateType = true;
            }
        }
        /** for loop to assign tariff id */
        for (var _d = 0, _e = this.tariffList; _d < _e.length; _d++) {
            var entry = _e[_d];
            if (entry.tariffName == this.tariff) {
                tariff = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["g" /* Tariff */]();
                tariff.tariffId = entry.tariffId;
                validTariff = true;
            }
        }
        var count2 = 0;
        /** for loop to assign rate tax values*/
        for (var _f = 0, _g = this.rateTax; _f < _g.length; _f++) {
            var item = _g[_f];
            var temp = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["l" /* RateTax */]();
            var temTax = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["m" /* Tax */]();
            temTax.taxId = Number(item);
            temp.tax = temTax;
            rateTaxes[count2] = temp;
            count2++;
        }
        /** assign value to rateDefCategoryBase */
        rateDefCategoryBase = (this.showSubcategory) ? 1 : 0;
        if (!this.isEmpty() && tariff != null && currency != null && rateType != null && validTariff && validCurrency && validRateType) {
            //  console.log('submitted rate card form ');
            rateCard = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["n" /* Rate */]();
            ratedefinition = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["o" /* RateDefinition */]();
            /** assign values for the rate definition */
            ratedefinition.rateDefName = this.rateDefName;
            ratedefinition.rateDefDescription = this.rateDefDescription;
            ratedefinition.rateDefDefault = 0;
            ratedefinition.currency = currency;
            ratedefinition.rateType = rateType;
            ratedefinition.rateDefCategoryBase = rateDefCategoryBase;
            ratedefinition.tariff = tariff;
            rateCard.rateDefinition = ratedefinition;
            if (rateDefCategoryBase == 0) {
                rateCard.rateCategories = [];
            }
            else {
                rateCard.rateCategories = this.rateCategories;
            }
            rateCard.rateTaxes = rateTaxes;
            rateCard.createdBy = loginInfo.userName;
            // console.log('#######  ' + JSON.stringify(rateCard));
            this.rateService.addNewRateCard(rateCard, function (response, status) {
                if (status) {
                    _this.message.success(response.message);
                    _this.reloadPage();
                }
                else {
                    _this.message.error(response);
                }
            });
        }
        else {
            // console.log('invalid fields');
            if (this.rateDefName.length == 0) {
                this.isNameError = true;
                this.nameError = 'Name Cannot be Empty';
            }
            if (this.rateDefDescription.length == 0) {
                this.isDescriptionEmpty = true;
            }
            if (!validRateType) {
                this.isRateTypeError = true;
                this.rateTypeError = 'Invalid Rate Type';
            }
            if (!validTariff) {
                this.isTariffError = true;
                this.tariffError = 'Invalid Tariff';
            }
            if (!validCurrency) {
                this.isCurrencyError = true;
                this.currencyError = 'Invalid Currency';
            }
            if (this.currency.length == 0) {
                this.isCurrencyError = true;
                this.currencyError = 'Currency can not be empty';
            }
            if (this.rateType.length == 0) {
                this.isRateTypeError = true;
                this.rateTypeError = 'Rate Type can not be empty';
            }
            if (this.tariff.length == 0) {
                this.isTariffError = true;
                this.tariffError = 'Tariff can not be empty';
            }
        }
    };
    /**
     * check for empty fields
     * @returns {boolean}
     */
    RateMainComponent.prototype.isEmpty = function () {
        if (this.rateDefName.length != 0 && this.rateDefDescription.length != 0) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * clear error labels
     */
    RateMainComponent.prototype.clearErrors = function () {
        this.isDateEmpty = false;
        this.isDescriptionEmpty = false;
        this.isNameError = false;
        this.isCurrencyError = false;
        this.isRateTypeError = false;
        this.isTariffError = false;
        this.currencyError = '';
        this.rateTypeError = '';
        this.tariffError = '';
    };
    RateMainComponent.prototype.changeDialogTitle = function () {
        if (this.showAddCurrency)
            return this.dialogactionTitile = 'Add new Currency code';
        else if (this.showAddTariff || this.showChildNewTariff)
            return this.dialogactionTitile = 'Add new Tariff code';
        else if (this.showChildNewCategory || this.showChildNewSubCategory)
            return this.dialogactionTitile = 'Add new Category';
    };
    /**
     * event trigger to handle modal fire
     * @param event
     */
    RateMainComponent.prototype.onmodalfireHandler = function (event) {
        if (event === 'addNewCategory') {
            this.showChildNewCategory = true;
        }
        else if (event === 'addNewSubCategory') {
            this.showChildNewSubCategory = true;
        }
        else {
            this.showChildNewTariff = true;
        }
    };
    RateMainComponent.prototype.clearModalContent = function () {
        this.showAddCurrency = false;
        this.showAddTariff = false;
        this.showChildNewTariff = false;
        this.showChildNewSubCategory = false;
        this.showChildNewCategory = false;
    };
    /**
     * event handler method which is triggered when a new currency is added
     * @param event
     */
    RateMainComponent.prototype.onAddCurrencyHandler = function (event) {
        // console.log('add currency event called');
        if (event) {
            this.getCurrencyList();
        }
    };
    /**
     * event handler method which is triggered when a new category added, to refresh list
     * @param event
     */
    RateMainComponent.prototype.onAddCategoryHandler = function (event) {
        // console.log('add category event called');
        if (event) {
            this.getCategoryList();
        }
    };
    /**
     * event handler mehod which assign category, sub category and tariff values.
     * @param event
     */
    RateMainComponent.prototype.onRateCategorySubmitionHandler = function (event) {
        var count = 0;
        for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
            var maping = event_1[_i];
            var rateCategory = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["p" /* RateCategory */]();
            /** for loop to assign category id */
            for (var _a = 0, _b = this.categoryList; _a < _b.length; _a++) {
                var entry = _b[_a];
                if (entry.categoryName == maping.category) {
                    var category = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["h" /* Category */]();
                    category.categoryId = entry.categoryId;
                    rateCategory.category = category;
                }
            }
            /** for loop to assign sub category id */
            for (var _c = 0, _d = this.categoryList; _c < _d.length; _c++) {
                var entry = _d[_c];
                if (maping.subcategory) {
                    if (entry.categoryName == maping.subcategory) {
                        var subcategory = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["h" /* Category */]();
                        subcategory.categoryId = entry.categoryId;
                        rateCategory.subCategory = subcategory;
                    }
                }
                else {
                    var subcategory = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["h" /* Category */]();
                    subcategory.categoryId = null;
                    rateCategory.subCategory = subcategory;
                }
            }
            /** for loop to assign tariff id */
            for (var _e = 0, _f = this.tariffList; _e < _f.length; _e++) {
                var entry = _f[_e];
                if (entry.tariffName == maping.tariff) {
                    var tariff = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["g" /* Tariff */]();
                    tariff.tariffId = entry.tariffId;
                    rateCategory.tariff = tariff;
                }
            }
            this.rateCategories[count] = rateCategory;
            count++;
        }
        //  console.log("%%%%%%%%%%%%%%" + JSON.stringify(this.rateCategories));
    };
    /**
     * event handler method which is triggered when a new tariff added, to refresh list
     * @param event
     */
    RateMainComponent.prototype.onAddTariffHandler = function (event) {
        //  console.log('add tariff event called');
        if (event) {
            this.getTariffList();
        }
    };
    /**
     * to check real time the name is not duplicated
     * @param name
     */
    RateMainComponent.prototype.isNameUnique = function (name) {
        var state = false;
        for (var _i = 0, _a = this.rateDefNameList; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (name == entry) {
                state = true;
            }
        }
        if (state) {
            this.isNameError = true;
            this.nameError = 'Name Already Existing';
        }
        else {
            this.isNameError = false;
            this.nameError = '';
        }
    };
    RateMainComponent.prototype.showit = function () {
        this.reloadPage();
    };
    RateMainComponent.prototype.reloadPage = function () {
        /** reinitialize all the variables */
        this.rateDefName = '';
        this.rateDefDescription = '';
        this.currency = '';
        this.rateType = '';
        this.tariff = '';
        this.rateTax = '';
        this.taxId = 0;
        this.rateCategories = [];
        this.mappingList = [];
        /** reload all the service values */
        this.getTariffList();
        this.getCurrencyList();
        this.getRateTypeList();
        this.getCategoryList();
        this.getRateDefinitionList();
        this.getRateTaxList();
        this.clearErrors();
    };
    RateMainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rate-main',
            template: __webpack_require__("../../../../../src/app/rate/rate-main/rate-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rate/rate-main/rate-main.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__["a" /* RateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__["a" /* RateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__commons_services_message_service__["a" /* MessageService */]) === 'function' && _d) || Object])
    ], RateMainComponent);
    return RateMainComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manage-module-ui/src/rate-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/rate/rate-ratecategory/ratecategory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\" style=\"animation-delay: 0.2s\">\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"form-container subcategoryContainer\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <form #subcategoryForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(subcategoryForm)\">\n                            <br><br>\n                            <div class=\"form-group\" [ngClass]=\"{'has-danger': isCategoryError}\">\n                                <label class=\"control-label col-sm-3\">Category <span>*</span></label>\n                                <div class=\"col-sm-6\">\n                                    <input [(ngModel)]=\"category\"\n                                           [typeahead]=\"categoryList\"\n                                           [typeaheadMinLength]=\"0\"\n                                           placeholder=\"Category\"\n                                           name=\"typeCategory\"\n                                           class=\"form-control\"\n                                           required>\n                                    <span class=\"error\" *ngIf=\"isCategoryError\">{{categoryError}}</span>\n                                </div>\n                                <span class=\"glyphicon glyphicon-plus info-tooltip\"\n                                      tooltip=\"Click here to Add a new Category to the list\" placement=\"right\"\n                                      (click)='onAddNewModalFire(\"addNewCategory\")' type=\"category\"></span>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-3\">Sub Category</label>\n                                <div class=\"col-sm-6\">\n                                    <input [(ngModel)]=\"subcategory\"\n                                           [typeahead]=\"categoryList\"\n                                           [typeaheadMinLength]=\"0\"\n                                           placeholder=\"Sub Category\"\n                                           name=\"typeCaSubtegory\"\n                                           class=\"form-control\"\n                                           required>\n                                    <span class=\"error\" *ngIf=\"isSubcategoryError\">{{subcategoryError}}</span>\n                                </div>\n                                <span class=\"glyphicon glyphicon-plus info-tooltip\"\n                                      tooltip=\"Click here to Add a new Sub Category to the list\" placement=\"right\"\n                                      (click)='onAddNewModalFire(\"addNewSubCategory\")' type='Sub Category'></span>\n                            </div>\n                            <div class=\"form-group\" [ngClass]=\"{'has-danger': isTariffError}\">\n                                <label class=\"control-label col-sm-3\">Tariff<span>*</span></label>\n                                <div class=\"col-sm-6\">\n                                    <input [(ngModel)]=\"tariff\"\n                                           [typeahead]=\"tariffList\"\n                                           [typeaheadMinLength]=\"0\"\n                                           placeholder=\"Tariff\"\n                                           name=\"typeTariff\"\n                                           class=\"form-control\"\n                                           required\n                                    >\n                                    <span class=\"error\" *ngIf=\"isTariffError\">{{tariffError}}</span>\n                                </div>\n                                <span class=\"glyphicon glyphicon-plus info-tooltip\"\n                                      tooltip=\"Click here to Add a new tariff to the list\" placement=\"right\"\n                                      (click)='onAddNewModalFire(\"addNewTariff\")' type='Tariff'></span>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <div class=\"col-sm-6 col-sm-offset-3\">\n                                    <button type=\"submit\" class=\"btn btn-primary animated fadeIn\">Add</button>\n                                    <a class=\"btn btn-danger\" (click)=\"clearCatSelection()\">Clear</a>\n                                    <div *ngIf=\"isMappigError\">\n                                        <p class=\"error\">Invalid Mapping</p>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </form>\n                    </div>\n                    <div class=\"col-sm-6\">\n                            <br><br>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4 subtitle\">Selected combinations</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-8 \">\n                                <div class=\"table\">\n\n                                    <div class=\"tbl-row header\">\n                                        <div class=\"tbl-cell\">Category</div>\n                                        <div class=\"tbl-cell\">Sub Category</div>\n                                        <div class=\"tbl-cell text-right pad-r-15-im\">Tariff</div>\n                                    </div>\n                                    <ng-container *ngFor=\"let opt of rateCategories\">\n                                        <div class=\"tbl-row\">\n                                            <div class=\"tbl-cell\">{{opt.category}}</div>\n                                            <div class=\"tbl-cell\">{{opt.subcategory}}</div>\n                                            <div class=\"tbl-cell text-right\">{{opt.tariff}}</div>\n                                        </div>\n                                    </ng-container>\n                                    <div class=\"no-rec-row tbl-row\" *ngIf=\"rateCategories.length == 0\">\n                                        <span class=\"no-rec\">No Records..</span>\n                                    </div>\n                                </div> <!--TABLE END-->\n                            </div>\n                        </div>\n                        <br><br>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/rate/rate-ratecategory/ratecategory.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subcategoryContainer {\n  background-color: #f1f3f5;\n  padding: 5px;\n  font-size: 15px;\n  margin: 10px; }\n\n.btn {\n  margin: 5px; }\n\n.info-tooltip {\n  font-size: 1.5em;\n  color: #8E44AD;\n  vertical-align: top;\n  margin-top: 0.3em;\n  cursor: pointer; }\n\n#scrollable-dropdown-menu .dropdown-menu {\n  max-height: 20px;\n  overflow-y: auto; }\n\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n.table .td {\n  padding-right: 5px; }\n\n.has-danger .form-control {\n  border-color: #d9534f;\n  color: #d9534f; }\n\n.table {\n  display: table;\n  width: 100%; }\n  .table .tbl-row {\n    display: table-row;\n    background-color: #f6f6f6;\n    height: 0px;\n    transition: all 0.5s ease-in; }\n    .table .tbl-row:nth-of-type(odd) {\n      background-color: white; }\n    .table .tbl-row.header {\n      background-color: #7788aa;\n      font-weight: 600;\n      color: white; }\n    .table .tbl-row .tbl-cell {\n      display: table-cell;\n      padding: 10px 10px; }\n    .table .tbl-row.modified {\n      background-color: #ffffcc; }\n    .table .tbl-row.open {\n      height: 158px;\n      background-color: #f4f2c9; }\n      .table .tbl-row.open .action {\n        border-color: black;\n        color: black; }\n      .table .tbl-row.open.A, .table .tbl-row.open.R {\n        height: 243px; }\n    .table .tbl-row .more-con {\n      padding: 10px 0px 10px 0px;\n      background-color: #f8f9fa;\n      position: absolute;\n      left: 10px;\n      right: 11px;\n      height: 105px;\n      margin-top: 53px;\n      border: solid 1px #d0d0d0;\n      -ms-box-shadow: inset 0px 10px 10px -9px #d1d1d1;\n      box-shadow: inset 0px 10px 10px -9px #d1d1d1; }\n      .table .tbl-row .more-con.A, .table .tbl-row .more-con.R {\n        height: 190px; }\n      .table .tbl-row .more-con .more-row {\n        margin-bottom: 2px; }\n      .table .tbl-row .more-con .field-name {\n        height: 40px;\n        background-color: #f1f3f5;\n        line-height: 40px;\n        text-align: right;\n        font-weight: 600; }\n      .table .tbl-row .more-con .field-value {\n        height: 40px;\n        background-color: white;\n        line-height: 40px; }\n      .table .tbl-row .more-con select, .table .tbl-row .more-con input {\n        margin-top: 2px; }\n      .table .tbl-row .more-con .btn {\n        margin-top: 10px;\n        padding-top: 5px !important;\n        padding-bottom: 5px !important; }\n  .table .no-rec-row {\n    position: relative; }\n    .table .no-rec-row .no-rec {\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      margin: auto;\n      width: 100px;\n      padding-top: 15px;\n      color: #8A98A0; }\n  .table .fromcolor {\n    color: #107124; }\n  .table .tocolor {\n    color: #bb3535; }\n\n.subtitle {\n  color: #E19132; }\n\n.btn {\n  border-radius: 0px !important; }\n\n.control-label span {\n  color: #dd0d0d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rate/rate-ratecategory/ratecategory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__ = __webpack_require__("../../../../../src/app/commons/services/rate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__ = __webpack_require__("../../../../../src/app/commons/models/common-data-models.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RateCategoryComponent = (function () {
    function RateCategoryComponent(rateService) {
        this.rateService = rateService;
        this.modalfire = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.rateCatetgorySubmition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RateCategoryComponent.prototype.ngOnInit = function () {
        // console.log('Sub name window loaded');
        this.category = '';
        this.subcategory = '';
        this.tariff = '';
        this.type = 'Sub Category';
        this.showNewCategory = false;
        this.showNewSubCategory = false;
        this.showNewTariff = false;
        this.clearErrors();
    };
    RateCategoryComponent.prototype.onSubmit = function (subcategoryForm) {
        // console.log('on submit' + this.category + ' ' + this.subcategory + ' ' + this.tariff)
        this.clearErrors();
        if (this.category.length != 0 && this.tariff.length != 0) {
            var status = true;
            var mapping = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["j" /* Mapping */]();
            if (this.checkCategory(this.category)) {
                mapping.category = this.category;
            }
            else {
                status = false;
                this.isCategoryError = true;
                this.categoryError = 'Not a valid category';
            }
            if (this.subcategory.length > 0) {
                if (this.checkCategory(this.subcategory)) {
                    mapping.subcategory = this.subcategory;
                }
                else {
                    status = false;
                    this.isSubcategoryError = true;
                    this.subcategoryError = 'Not a valid category';
                }
            }
            else {
                mapping.subcategory = null;
            }
            if (this.checkTariff(this.tariff)) {
                mapping.tariff = this.tariff;
            }
            else {
                status = false;
                this.isTariffError = true;
                this.tariffError = 'Not a valid tariff';
            }
            if (status) {
                if (this.checkSimilarMapping()) {
                    this.rateCategories[this.rateCategories.length] = mapping;
                    this.rateCatetgorySubmition.emit(this.rateCategories);
                    this.category = '';
                    this.subcategory = '';
                    this.tariff = '';
                }
                else {
                    this.isMappigError = true;
                }
            }
        }
        else {
            // console.log('invalid fields');
            if (this.category.length == 0) {
                this.isCategoryError = true;
                this.categoryError = 'Category can not be empty';
            }
            if (this.tariff.length == 0) {
                this.isTariffError = true;
                this.tariffError = 'Tariff can not be empty';
            }
        }
    };
    /**
     * this function will validate of invalid categories
     * @param category
     * @returns {boolean}
     */
    RateCategoryComponent.prototype.checkCategory = function (category) {
        var status = false;
        for (var _i = 0, _a = this.categoryList; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry == category) {
                status = true;
            }
        }
        return status;
    };
    /**
     * this function will validate of invalid tariffs
     * @param tariff
     * @returns {boolean}
     */
    RateCategoryComponent.prototype.checkTariff = function (tariff) {
        var status = false;
        for (var _i = 0, _a = this.tariffList; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry == tariff) {
                status = true;
            }
        }
        return status;
    };
    RateCategoryComponent.prototype.clearCatSelection = function () {
        this.category = '';
        this.subcategory = '';
        this.tariff = '';
        this.clearErrors();
        this.rateCategories = [];
    };
    /**
     * this function will validate the mapping
     * @returns {boolean}
     */
    RateCategoryComponent.prototype.checkSimilarMapping = function () {
        if (this.rateCategories.length > 0) {
            for (var _i = 0, _a = this.rateCategories; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (this.subcategory.length > 0) {
                    if (this.category == entry.category) {
                        if (this.subcategory == entry.subcategory) {
                            // console.log('Error');
                            this.isSubcategoryError = true;
                            this.subcategoryError = 'Category Sub-Category mapping already exists';
                            return false;
                        }
                    }
                }
                else {
                    if (this.category == entry.category && entry.subcategory == null) {
                        this.isTariffError = true;
                        this.tariffError = 'Cannot add new Tariff to Existing Category' + this.subcategory.length;
                        return false;
                    }
                }
            }
            return true;
        }
        else {
            return true;
        }
    };
    RateCategoryComponent.prototype.onAddNewModalFire = function (actionName) {
        this.modalfire.emit(actionName);
    };
    RateCategoryComponent.prototype.clearErrors = function () {
        this.isSubcategoryError = false;
        this.isCategoryError = false;
        this.isTariffError = false;
        this.isMappigError = false;
        this.categoryError = '';
        this.subcategoryError = '';
        this.tariffError = '';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], RateCategoryComponent.prototype, "rateCategories", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], RateCategoryComponent.prototype, "categoryList", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], RateCategoryComponent.prototype, "tariffList", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], RateCategoryComponent.prototype, "modalfire", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], RateCategoryComponent.prototype, "rateCatetgorySubmition", void 0);
    RateCategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ratecategory',
            template: __webpack_require__("../../../../../src/app/rate/rate-ratecategory/ratecategory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rate/rate-ratecategory/ratecategory.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__["a" /* RateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__["a" /* RateService */]) === 'function' && _c) || Object])
    ], RateCategoryComponent);
    return RateCategoryComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manage-module-ui/src/ratecategory.component.js.map

/***/ }),

/***/ "../../../../../src/app/rate/rate-tariff/tariff.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\" style=\"animation-delay: 0.1s\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"form-container tariffContainer\">\n                <form #addTariffForm=\"ngForm\" class=\"form-horizontal\" novalidate (ngSubmit)=\"onSubmit(addTariffForm)\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-4\">Tariff Name <span>*</span></label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\"\n                                           type=\"text\"\n                                           autocomplete=\"off\"\n                                           placeholder=\"Name\"\n                                           name=\"name\"\n                                           #nameRef=\"ngModel\"\n                                           required\n                                           [(ngModel)]=\"tariff.tariffName\"\n                                           (input)=\"isNameUnique($event.target.value)\">\n                                    <span class=\"error\" *ngIf=\"isNameError\">{{nameError}}</span>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-4\">Tariff Description <span>*</span></label>\n                                <div class=\"col-sm-6\">\n                            <textarea rows=\"1\" cols=\"50\"\n                                      class=\"form-control\"\n                                      type=\"text\"\n                                      autocomplete=\"off\"\n                                      placeholder=\"Description\"\n                                      name=\"description\"\n                                      #descriptionRef=\"ngModel\"\n                                      required\n                                      [(ngModel)]=\"tariff.tariffDescription\">\n                            </textarea>\n                                    <span class=\"error\" *ngIf=\"isDescriptionError\">{{descriptionError}}</span>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-4\">Default Value</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\"\n                                           type=\"number\"\n                                           min=\"0\"\n                                           step=\"1\"\n                                           autocomplete=\"off\"\n                                           placeholder=\"Default Value\"\n                                           name=\"tariffDefaultVal\"\n                                           #tariffDefaultValRef=\"ngModel\"\n                                           required\n                                           [(ngModel)]=\"tariff.tariffDefaultVal\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-4\">Max Count</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\"\n                                           type=\"number\"\n                                           min=\"0\"\n                                           step=\"1\"\n                                           autocomplete=\"off\"\n                                           placeholder=\"Max Count\"\n                                           name=\"maxCount\"\n                                           #maxCountRef=\"ngModel\"\n                                           required\n                                           [(ngModel)]=\"tariff.tariffMaxCount\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-4\">Excess Rate</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\"\n                                           type=\"number\"\n                                           min=\"0\"\n                                           step=\"1\"\n                                           autocomplete=\"off\"\n                                           placeholder=\"Excess Rate\"\n                                           name=\"excessRate\"\n                                           #excessRateRef=\"ngModel\"\n                                           required\n                                           [(ngModel)]=\"tariff.tariffExcessRate\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-4\">Def Rate</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\"\n                                           type=\"number\"\n                                           min=\"0\"\n                                           step=\"1\"\n                                           autocomplete=\"off\"\n                                           placeholder=\"Def Rate\"\n                                           name=\"defRate\"\n                                           #defRateRef=\"ngModel\"\n                                           required\n                                           [(ngModel)]=\"tariff.tariffDefRate\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-4\">SP Commission</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\"\n                                           type=\"number\"\n                                           min=\"0\"\n                                           step=\"1\"\n                                           autocomplete=\"off\"\n                                           placeholder=\"SP Commission\"\n                                           name=\"spCommission\"\n                                           #spCommissionRef=\"ngModel\"\n                                           required\n                                           [ngModel]=\"tariff.tariffSPCommission\"\n                                           (ngModelChange)=\"tariffSPCommission($event)\">\n\n                                    <span class=\"error\" *ngIf=\"IsInvalidspCommission\">Range should between 0 - 100 </span>\n                                    <span class=\"error\" *ngIf=\"IsExceedCommision\">Total Commision cannot exceed 100  </span>\n                                </div>\n                            </div>\n\n\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-4\">Ads Commission</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\"\n                                           type=\"number\"\n                                           min=\"0\"\n                                           step=\"1\"\n                                           autocomplete=\"off\"\n                                           placeholder=\"Ads Commission\"\n                                           name=\"adsCommission\"\n                                           #adsCommissionRef=\"ngModel\"\n                                           required\n                                           [ngModel]=\"tariff.tariffAdsCommission\"\n                                           (ngModelChange)=\"tariffAdsCommission($event)\">\n                                    <span class=\"error\" *ngIf=\"IsInvalidadsCommission\">Range should between 0 - 100 </span>\n                                    <span class=\"error\" *ngIf=\"IsExceedCommision\">Total Commision cannot exceed 100  </span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-4\">Opco Commission</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\"\n                                           type=\"number\"\n                                           min=\"0\"\n                                           step=\"1\"\n                                           autocomplete=\"off\"\n                                           placeholder=\"Opco Commission\"\n                                           name=\"opcoCommission\"\n                                           #opcoCommissionRef=\"ngModel\"\n                                           required\n                                           [ngModel]=\"tariff.tariffOpcoCommission\"\n                                           (ngModelChange)=\"tariffOpcoCommission($event)\">\n                                    <span class=\"error\" *ngIf=\"IsInvalidopcoCommission\">Range should between 0 - 100 </span>\n                                    <span class=\"error\" *ngIf=\"IsExceedCommision\">Total Commision cannot exceed 100  </span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-4\">Sur Charge Value</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\"\n                                           type=\"number\"\n                                           min=\"0\"\n                                           step=\"1\"\n                                           autocomplete=\"off\"\n                                           placeholder=\"Sur Charge Value\"\n                                           name=\"surChargeval\"\n                                           #surChargevalRef=\"ngModel\"\n                                           required\n                                           [(ngModel)]=\"tariff.tariffSurChargeval\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-4\">Sur Charge Ads</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\"\n                                           type=\"number\"\n                                           min=\"0\"\n                                           step=\"1\"\n                                           autocomplete=\"off\"\n                                           placeholder=\"Sur Charge Ads\"\n                                           name=\"surChargeAds\"\n                                           #surChargeAdsRef=\"ngModel\"\n                                           required\n                                           [ngModel]=\"tariff.tariffSurChargeAds\"\n                                           (ngModelChange)=\"tariffSurChargeAds($event)\">\n                                    <span class=\"error\" *ngIf=\"IsInvalidtariffSurChargeAds\">Range should between 0 - 100</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-4\">Sur Charge Opco</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\"\n                                           type=\"number\"\n                                           min=\"0\"\n                                           step=\"1\"\n                                           autocomplete=\"off\"\n                                           placeholder=\"Sur Charge Opco\"\n                                           name=\"surChargeOpco\"\n                                           #surChargeOpcoRef=\"ngModel\"\n                                           required\n                                           [ngModel]=\"tariff.tariffSurChargeOpco\"\n                                           (ngModelChange)=\"tariffSurChargeOpco($event)\">\n                                    <span class=\"error\" *ngIf=\"IsInvalidtariffSurChargeOpco\">Range should between 0 - 100 </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\" *ngIf=\"!isNameError\">\n                        <div class=\"col-sm-offset-2 col-sm-1\">\n                            <button type=\"submit\" class=\"btn btn-primary animated fadeIn\">Add</button>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <a class=\"btn btn-warning\">Clear</a>\n                        </div>\n                    </div>\n\n\n                </form>\n\n            </div>\n\n            <div class=\"error-container animated bounceIn\" *ngIf=\"submissionError\">{{submissionError}}</div>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/rate/rate-tariff/tariff.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n.btn {\n  border-radius: 0px !important; }\n\n.control-label span {\n  color: #dd0d0d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rate/rate-tariff/tariff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__ = __webpack_require__("../../../../../src/app/commons/services/rate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__ = __webpack_require__("../../../../../src/app/commons/models/common-data-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_services_authentication_service__ = __webpack_require__("../../../../../src/app/commons/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TariffComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TariffComponent = (function () {
    function TariffComponent(rateService, authService) {
        this.rateService = rateService;
        this.authService = authService;
        this.onAddTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modalClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TariffComponent.prototype.ngOnInit = function () {
        var loginInfo = this.authService.loginUserInfo.getValue();
        this.tariff = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["g" /* Tariff */]();
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
    };
    TariffComponent.prototype.onSubmit = function (addTariffForm) {
        var _this = this;
        this.clearErrors();
        if (this.tariff.tariffName.length != 0 && this.tariff.tariffDescription.length != 0 && !this.IsInvalidtariffSurChargeAds && !this.IsInvalidtariffSurChargeOpco &&
            !this.IsInvalidspCommission && !this.IsInvalidadsCommission && !this.IsInvalidopcoCommission && !this.IsExceedCommision) {
            this.rateService.addTariff(this.tariff, function (response, status) {
                if (status) {
                    _this.onAddTask.emit(true);
                    _this.modalClose.emit(true);
                }
                else {
                    _this.submissionError = response;
                    setTimeout(function () {
                        _this.submissionError = null;
                    }, 5000);
                }
            });
        }
        else {
            if (this.tariff.tariffName.length == 0) {
                this.isNameError = true;
                this.nameError = 'Name can not be empty';
            }
            if (this.tariff.tariffDescription.length == 0) {
                this.isDescriptionError = true;
                this.descriptionError = 'Description can not be empty';
            }
        }
    };
    TariffComponent.prototype.clearErrors = function () {
        this.isNameError = false;
        this.isDescriptionError = false;
        this.nameError = '';
        this.descriptionError = '';
    };
    /*
     * surCharge field validation
     */
    TariffComponent.prototype.tariffSurChargeAds = function (val) {
        this.tariff.tariffSurChargeAds = val;
        if ((Number(this.tariff.tariffSurChargeAds) < 0) || (Number(this.tariff.tariffSurChargeAds) > 100) || (this.tariff.tariffSurChargeAds == null)) {
            this.IsInvalidtariffSurChargeAds = true;
        }
        else {
            this.IsInvalidtariffSurChargeAds = false;
            this.tariff.tariffSurChargeOpco = (100 - this.tariff.tariffSurChargeAds);
        }
    };
    TariffComponent.prototype.tariffSurChargeOpco = function (val) {
        this.tariff.tariffSurChargeOpco = val;
        if ((Number(this.tariff.tariffSurChargeOpco) < 0) || (Number(this.tariff.tariffSurChargeOpco) > 100) || (this.tariff.tariffSurChargeOpco == null)) {
            this.IsInvalidtariffSurChargeOpco = true;
        }
        else {
            this.IsInvalidtariffSurChargeOpco = false;
            this.tariff.tariffSurChargeAds = (100 - this.tariff.tariffSurChargeOpco);
        }
    };
    TariffComponent.prototype.tariffSPCommission = function (val) {
        this.tariff.tariffSPCommission = val;
        if ((Number(this.tariff.tariffSPCommission) < 0) || (Number(this.tariff.tariffSPCommission) > 100) || (this.tariff.tariffSPCommission == null)) {
            this.IsInvalidspCommission = true;
            this.IsExceedCommision = false;
        }
        else {
            this.IsInvalidspCommission = false;
        }
        if ((Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission)) > 100) {
            this.IsExceedCommision = true;
            this.IsInvalidspCommission = false;
        }
        else {
            this.IsExceedCommision = false;
        }
    };
    TariffComponent.prototype.tariffAdsCommission = function (val) {
        this.tariff.tariffAdsCommission = val;
        if ((Number(this.tariff.tariffAdsCommission) < 0) || (Number(this.tariff.tariffAdsCommission) > 100) || (this.tariff.tariffAdsCommission == null)) {
            this.IsInvalidadsCommission = true;
            this.IsExceedCommision = false;
        }
        else {
            this.IsInvalidadsCommission = false;
        }
        if ((Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission)) > 100) {
            this.IsExceedCommision = true;
            this.IsInvalidadsCommission = false;
        }
        else {
            this.IsExceedCommision = false;
        }
    };
    TariffComponent.prototype.tariffOpcoCommission = function (val) {
        this.tariff.tariffOpcoCommission = val;
        if ((Number(this.tariff.tariffOpcoCommission) < 0) || (Number(this.tariff.tariffOpcoCommission) > 100) || (this.tariff.tariffOpcoCommission == null)) {
            this.IsInvalidopcoCommission = true;
            this.IsExceedCommision = false;
        }
        else {
            this.IsInvalidopcoCommission = false;
        }
        if ((Number(this.tariff.tariffSPCommission + this.tariff.tariffAdsCommission + this.tariff.tariffOpcoCommission)) > 100) {
            this.IsExceedCommision = true;
            this.IsInvalidopcoCommission = false;
        }
        else {
            this.IsExceedCommision = false;
        }
    };
    TariffComponent.prototype.isNameUnique = function (name) {
        var state = false;
        for (var _i = 0, _a = this.existingNames; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (name == entry) {
                state = true;
            }
        }
        if (state) {
            this.isNameError = true;
            this.nameError = 'Name Already Existing';
        }
        else {
            this.isNameError = false;
            this.nameError = '';
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], TariffComponent.prototype, "existingNames", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], TariffComponent.prototype, "onAddTask", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], TariffComponent.prototype, "modalClose", void 0);
    TariffComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addtariff',
            template: __webpack_require__("../../../../../src/app/rate/rate-tariff/tariff.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rate/rate-tariff/tariff.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__["a" /* RateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_rate_service__["a" /* RateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object])
    ], TariffComponent);
    return TariffComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manage-module-ui/src/tariff.component.js.map

/***/ }),

/***/ "../../../../../src/app/rate/rate.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rate_ratecategory_ratecategory_component__ = __webpack_require__("../../../../../src/app/rate/rate-ratecategory/ratecategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rate_category_category_component__ = __webpack_require__("../../../../../src/app/rate/rate-category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rate_definition_definition_component__ = __webpack_require__("../../../../../src/app/rate/rate-definition/definition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rate_tariff_tariff_component__ = __webpack_require__("../../../../../src/app/rate/rate-tariff/tariff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rate_main_rate_main_component__ = __webpack_require__("../../../../../src/app/rate/rate-main/rate-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rate_routes__ = __webpack_require__("../../../../../src/app/rate/rate.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_typeahead__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rate_currency_currency_component__ = __webpack_require__("../../../../../src/app/rate/rate-currency/currency.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateModule", function() { return RateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var RateModule = (function () {
    function RateModule() {
    }
    RateModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__rate_routes__["a" /* RateRoutes */],
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__rate_main_rate_main_component__["a" /* RateMainComponent */],
                __WEBPACK_IMPORTED_MODULE_2__rate_ratecategory_ratecategory_component__["a" /* RateCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_3__rate_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_13__rate_currency_currency_component__["a" /* CurrencyComponent */],
                __WEBPACK_IMPORTED_MODULE_5__rate_tariff_tariff_component__["a" /* TariffComponent */],
                __WEBPACK_IMPORTED_MODULE_4__rate_definition_definition_component__["a" /* DefinitionComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RateModule);
    return RateModule;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manage-module-ui/src/rate.module.js.map

/***/ }),

/***/ "../../../../../src/app/rate/rate.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rate_main_rate_main_component__ = __webpack_require__("../../../../../src/app/rate/rate-main/rate-main.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateRoutes; });


var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__rate_main_rate_main_component__["a" /* RateMainComponent */]
    }];
var RateRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manage-module-ui/src/rate.routes.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latin_map__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/latin-map.js");
/* unused harmony reexport latinMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typeahead_options_class__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-options.class.js");
/* unused harmony reexport TypeaheadOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_match_class__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-match.class.js");
/* unused harmony reexport TypeaheadMatch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-utils.js");
/* unused harmony reexport escapeRegexp */
/* unused harmony reexport getValueFromObject */
/* unused harmony reexport tokenize */
/* unused harmony reexport latinize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typeahead_container_component__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-container.component.js");
/* unused harmony reexport TypeaheadContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typeahead_directive__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead.directive.js");
/* unused harmony reexport TypeaheadDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typeahead_module__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__typeahead_module__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/latin-map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return latinMap; });
/* tslint:disable:max-file-line-count */
var latinMap = {
    'Á': 'A',
    'Ă': 'A',
    'Ắ': 'A',
    'Ặ': 'A',
    'Ằ': 'A',
    'Ẳ': 'A',
    'Ẵ': 'A',
    'Ǎ': 'A',
    'Â': 'A',
    'Ấ': 'A',
    'Ậ': 'A',
    'Ầ': 'A',
    'Ẩ': 'A',
    'Ẫ': 'A',
    'Ä': 'A',
    'Ǟ': 'A',
    'Ȧ': 'A',
    'Ǡ': 'A',
    'Ạ': 'A',
    'Ȁ': 'A',
    'À': 'A',
    'Ả': 'A',
    'Ȃ': 'A',
    'Ā': 'A',
    'Ą': 'A',
    'Å': 'A',
    'Ǻ': 'A',
    'Ḁ': 'A',
    'Ⱥ': 'A',
    'Ã': 'A',
    'Ꜳ': 'AA',
    'Æ': 'AE',
    'Ǽ': 'AE',
    'Ǣ': 'AE',
    'Ꜵ': 'AO',
    'Ꜷ': 'AU',
    'Ꜹ': 'AV',
    'Ꜻ': 'AV',
    'Ꜽ': 'AY',
    'Ḃ': 'B',
    'Ḅ': 'B',
    'Ɓ': 'B',
    'Ḇ': 'B',
    'Ƀ': 'B',
    'Ƃ': 'B',
    'Ć': 'C',
    'Č': 'C',
    'Ç': 'C',
    'Ḉ': 'C',
    'Ĉ': 'C',
    'Ċ': 'C',
    'Ƈ': 'C',
    'Ȼ': 'C',
    'Ď': 'D',
    'Ḑ': 'D',
    'Ḓ': 'D',
    'Ḋ': 'D',
    'Ḍ': 'D',
    'Ɗ': 'D',
    'Ḏ': 'D',
    'ǲ': 'D',
    'ǅ': 'D',
    'Đ': 'D',
    'Ƌ': 'D',
    'Ǳ': 'DZ',
    'Ǆ': 'DZ',
    'É': 'E',
    'Ĕ': 'E',
    'Ě': 'E',
    'Ȩ': 'E',
    'Ḝ': 'E',
    'Ê': 'E',
    'Ế': 'E',
    'Ệ': 'E',
    'Ề': 'E',
    'Ể': 'E',
    'Ễ': 'E',
    'Ḙ': 'E',
    'Ë': 'E',
    'Ė': 'E',
    'Ẹ': 'E',
    'Ȅ': 'E',
    'È': 'E',
    'Ẻ': 'E',
    'Ȇ': 'E',
    'Ē': 'E',
    'Ḗ': 'E',
    'Ḕ': 'E',
    'Ę': 'E',
    'Ɇ': 'E',
    'Ẽ': 'E',
    'Ḛ': 'E',
    'Ꝫ': 'ET',
    'Ḟ': 'F',
    'Ƒ': 'F',
    'Ǵ': 'G',
    'Ğ': 'G',
    'Ǧ': 'G',
    'Ģ': 'G',
    'Ĝ': 'G',
    'Ġ': 'G',
    'Ɠ': 'G',
    'Ḡ': 'G',
    'Ǥ': 'G',
    'Ḫ': 'H',
    'Ȟ': 'H',
    'Ḩ': 'H',
    'Ĥ': 'H',
    'Ⱨ': 'H',
    'Ḧ': 'H',
    'Ḣ': 'H',
    'Ḥ': 'H',
    'Ħ': 'H',
    'Í': 'I',
    'Ĭ': 'I',
    'Ǐ': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ḯ': 'I',
    'İ': 'I',
    'Ị': 'I',
    'Ȉ': 'I',
    'Ì': 'I',
    'Ỉ': 'I',
    'Ȋ': 'I',
    'Ī': 'I',
    'Į': 'I',
    'Ɨ': 'I',
    'Ĩ': 'I',
    'Ḭ': 'I',
    'Ꝺ': 'D',
    'Ꝼ': 'F',
    'Ᵹ': 'G',
    'Ꞃ': 'R',
    'Ꞅ': 'S',
    'Ꞇ': 'T',
    'Ꝭ': 'IS',
    'Ĵ': 'J',
    'Ɉ': 'J',
    'Ḱ': 'K',
    'Ǩ': 'K',
    'Ķ': 'K',
    'Ⱪ': 'K',
    'Ꝃ': 'K',
    'Ḳ': 'K',
    'Ƙ': 'K',
    'Ḵ': 'K',
    'Ꝁ': 'K',
    'Ꝅ': 'K',
    'Ĺ': 'L',
    'Ƚ': 'L',
    'Ľ': 'L',
    'Ļ': 'L',
    'Ḽ': 'L',
    'Ḷ': 'L',
    'Ḹ': 'L',
    'Ⱡ': 'L',
    'Ꝉ': 'L',
    'Ḻ': 'L',
    'Ŀ': 'L',
    'Ɫ': 'L',
    'ǈ': 'L',
    'Ł': 'L',
    'Ǉ': 'LJ',
    'Ḿ': 'M',
    'Ṁ': 'M',
    'Ṃ': 'M',
    'Ɱ': 'M',
    'Ń': 'N',
    'Ň': 'N',
    'Ņ': 'N',
    'Ṋ': 'N',
    'Ṅ': 'N',
    'Ṇ': 'N',
    'Ǹ': 'N',
    'Ɲ': 'N',
    'Ṉ': 'N',
    'Ƞ': 'N',
    'ǋ': 'N',
    'Ñ': 'N',
    'Ǌ': 'NJ',
    'Ó': 'O',
    'Ŏ': 'O',
    'Ǒ': 'O',
    'Ô': 'O',
    'Ố': 'O',
    'Ộ': 'O',
    'Ồ': 'O',
    'Ổ': 'O',
    'Ỗ': 'O',
    'Ö': 'O',
    'Ȫ': 'O',
    'Ȯ': 'O',
    'Ȱ': 'O',
    'Ọ': 'O',
    'Ő': 'O',
    'Ȍ': 'O',
    'Ò': 'O',
    'Ỏ': 'O',
    'Ơ': 'O',
    'Ớ': 'O',
    'Ợ': 'O',
    'Ờ': 'O',
    'Ở': 'O',
    'Ỡ': 'O',
    'Ȏ': 'O',
    'Ꝋ': 'O',
    'Ꝍ': 'O',
    'Ō': 'O',
    'Ṓ': 'O',
    'Ṑ': 'O',
    'Ɵ': 'O',
    'Ǫ': 'O',
    'Ǭ': 'O',
    'Ø': 'O',
    'Ǿ': 'O',
    'Õ': 'O',
    'Ṍ': 'O',
    'Ṏ': 'O',
    'Ȭ': 'O',
    'Ƣ': 'OI',
    'Ꝏ': 'OO',
    'Ɛ': 'E',
    'Ɔ': 'O',
    'Ȣ': 'OU',
    'Ṕ': 'P',
    'Ṗ': 'P',
    'Ꝓ': 'P',
    'Ƥ': 'P',
    'Ꝕ': 'P',
    'Ᵽ': 'P',
    'Ꝑ': 'P',
    'Ꝙ': 'Q',
    'Ꝗ': 'Q',
    'Ŕ': 'R',
    'Ř': 'R',
    'Ŗ': 'R',
    'Ṙ': 'R',
    'Ṛ': 'R',
    'Ṝ': 'R',
    'Ȑ': 'R',
    'Ȓ': 'R',
    'Ṟ': 'R',
    'Ɍ': 'R',
    'Ɽ': 'R',
    'Ꜿ': 'C',
    'Ǝ': 'E',
    'Ś': 'S',
    'Ṥ': 'S',
    'Š': 'S',
    'Ṧ': 'S',
    'Ş': 'S',
    'Ŝ': 'S',
    'Ș': 'S',
    'Ṡ': 'S',
    'Ṣ': 'S',
    'Ṩ': 'S',
    'Ť': 'T',
    'Ţ': 'T',
    'Ṱ': 'T',
    'Ț': 'T',
    'Ⱦ': 'T',
    'Ṫ': 'T',
    'Ṭ': 'T',
    'Ƭ': 'T',
    'Ṯ': 'T',
    'Ʈ': 'T',
    'Ŧ': 'T',
    'Ɐ': 'A',
    'Ꞁ': 'L',
    'Ɯ': 'M',
    'Ʌ': 'V',
    'Ꜩ': 'TZ',
    'Ú': 'U',
    'Ŭ': 'U',
    'Ǔ': 'U',
    'Û': 'U',
    'Ṷ': 'U',
    'Ü': 'U',
    'Ǘ': 'U',
    'Ǚ': 'U',
    'Ǜ': 'U',
    'Ǖ': 'U',
    'Ṳ': 'U',
    'Ụ': 'U',
    'Ű': 'U',
    'Ȕ': 'U',
    'Ù': 'U',
    'Ủ': 'U',
    'Ư': 'U',
    'Ứ': 'U',
    'Ự': 'U',
    'Ừ': 'U',
    'Ử': 'U',
    'Ữ': 'U',
    'Ȗ': 'U',
    'Ū': 'U',
    'Ṻ': 'U',
    'Ų': 'U',
    'Ů': 'U',
    'Ũ': 'U',
    'Ṹ': 'U',
    'Ṵ': 'U',
    'Ꝟ': 'V',
    'Ṿ': 'V',
    'Ʋ': 'V',
    'Ṽ': 'V',
    'Ꝡ': 'VY',
    'Ẃ': 'W',
    'Ŵ': 'W',
    'Ẅ': 'W',
    'Ẇ': 'W',
    'Ẉ': 'W',
    'Ẁ': 'W',
    'Ⱳ': 'W',
    'Ẍ': 'X',
    'Ẋ': 'X',
    'Ý': 'Y',
    'Ŷ': 'Y',
    'Ÿ': 'Y',
    'Ẏ': 'Y',
    'Ỵ': 'Y',
    'Ỳ': 'Y',
    'Ƴ': 'Y',
    'Ỷ': 'Y',
    'Ỿ': 'Y',
    'Ȳ': 'Y',
    'Ɏ': 'Y',
    'Ỹ': 'Y',
    'Ź': 'Z',
    'Ž': 'Z',
    'Ẑ': 'Z',
    'Ⱬ': 'Z',
    'Ż': 'Z',
    'Ẓ': 'Z',
    'Ȥ': 'Z',
    'Ẕ': 'Z',
    'Ƶ': 'Z',
    'Ĳ': 'IJ',
    'Œ': 'OE',
    'ᴀ': 'A',
    'ᴁ': 'AE',
    'ʙ': 'B',
    'ᴃ': 'B',
    'ᴄ': 'C',
    'ᴅ': 'D',
    'ᴇ': 'E',
    'ꜰ': 'F',
    'ɢ': 'G',
    'ʛ': 'G',
    'ʜ': 'H',
    'ɪ': 'I',
    'ʁ': 'R',
    'ᴊ': 'J',
    'ᴋ': 'K',
    'ʟ': 'L',
    'ᴌ': 'L',
    'ᴍ': 'M',
    'ɴ': 'N',
    'ᴏ': 'O',
    'ɶ': 'OE',
    'ᴐ': 'O',
    'ᴕ': 'OU',
    'ᴘ': 'P',
    'ʀ': 'R',
    'ᴎ': 'N',
    'ᴙ': 'R',
    'ꜱ': 'S',
    'ᴛ': 'T',
    'ⱻ': 'E',
    'ᴚ': 'R',
    'ᴜ': 'U',
    'ᴠ': 'V',
    'ᴡ': 'W',
    'ʏ': 'Y',
    'ᴢ': 'Z',
    'á': 'a',
    'ă': 'a',
    'ắ': 'a',
    'ặ': 'a',
    'ằ': 'a',
    'ẳ': 'a',
    'ẵ': 'a',
    'ǎ': 'a',
    'â': 'a',
    'ấ': 'a',
    'ậ': 'a',
    'ầ': 'a',
    'ẩ': 'a',
    'ẫ': 'a',
    'ä': 'a',
    'ǟ': 'a',
    'ȧ': 'a',
    'ǡ': 'a',
    'ạ': 'a',
    'ȁ': 'a',
    'à': 'a',
    'ả': 'a',
    'ȃ': 'a',
    'ā': 'a',
    'ą': 'a',
    'ᶏ': 'a',
    'ẚ': 'a',
    'å': 'a',
    'ǻ': 'a',
    'ḁ': 'a',
    'ⱥ': 'a',
    'ã': 'a',
    'ꜳ': 'aa',
    'æ': 'ae',
    'ǽ': 'ae',
    'ǣ': 'ae',
    'ꜵ': 'ao',
    'ꜷ': 'au',
    'ꜹ': 'av',
    'ꜻ': 'av',
    'ꜽ': 'ay',
    'ḃ': 'b',
    'ḅ': 'b',
    'ɓ': 'b',
    'ḇ': 'b',
    'ᵬ': 'b',
    'ᶀ': 'b',
    'ƀ': 'b',
    'ƃ': 'b',
    'ɵ': 'o',
    'ć': 'c',
    'č': 'c',
    'ç': 'c',
    'ḉ': 'c',
    'ĉ': 'c',
    'ɕ': 'c',
    'ċ': 'c',
    'ƈ': 'c',
    'ȼ': 'c',
    'ď': 'd',
    'ḑ': 'd',
    'ḓ': 'd',
    'ȡ': 'd',
    'ḋ': 'd',
    'ḍ': 'd',
    'ɗ': 'd',
    'ᶑ': 'd',
    'ḏ': 'd',
    'ᵭ': 'd',
    'ᶁ': 'd',
    'đ': 'd',
    'ɖ': 'd',
    'ƌ': 'd',
    'ı': 'i',
    'ȷ': 'j',
    'ɟ': 'j',
    'ʄ': 'j',
    'ǳ': 'dz',
    'ǆ': 'dz',
    'é': 'e',
    'ĕ': 'e',
    'ě': 'e',
    'ȩ': 'e',
    'ḝ': 'e',
    'ê': 'e',
    'ế': 'e',
    'ệ': 'e',
    'ề': 'e',
    'ể': 'e',
    'ễ': 'e',
    'ḙ': 'e',
    'ë': 'e',
    'ė': 'e',
    'ẹ': 'e',
    'ȅ': 'e',
    'è': 'e',
    'ẻ': 'e',
    'ȇ': 'e',
    'ē': 'e',
    'ḗ': 'e',
    'ḕ': 'e',
    'ⱸ': 'e',
    'ę': 'e',
    'ᶒ': 'e',
    'ɇ': 'e',
    'ẽ': 'e',
    'ḛ': 'e',
    'ꝫ': 'et',
    'ḟ': 'f',
    'ƒ': 'f',
    'ᵮ': 'f',
    'ᶂ': 'f',
    'ǵ': 'g',
    'ğ': 'g',
    'ǧ': 'g',
    'ģ': 'g',
    'ĝ': 'g',
    'ġ': 'g',
    'ɠ': 'g',
    'ḡ': 'g',
    'ᶃ': 'g',
    'ǥ': 'g',
    'ḫ': 'h',
    'ȟ': 'h',
    'ḩ': 'h',
    'ĥ': 'h',
    'ⱨ': 'h',
    'ḧ': 'h',
    'ḣ': 'h',
    'ḥ': 'h',
    'ɦ': 'h',
    'ẖ': 'h',
    'ħ': 'h',
    'ƕ': 'hv',
    'í': 'i',
    'ĭ': 'i',
    'ǐ': 'i',
    'î': 'i',
    'ï': 'i',
    'ḯ': 'i',
    'ị': 'i',
    'ȉ': 'i',
    'ì': 'i',
    'ỉ': 'i',
    'ȋ': 'i',
    'ī': 'i',
    'į': 'i',
    'ᶖ': 'i',
    'ɨ': 'i',
    'ĩ': 'i',
    'ḭ': 'i',
    'ꝺ': 'd',
    'ꝼ': 'f',
    'ᵹ': 'g',
    'ꞃ': 'r',
    'ꞅ': 's',
    'ꞇ': 't',
    'ꝭ': 'is',
    'ǰ': 'j',
    'ĵ': 'j',
    'ʝ': 'j',
    'ɉ': 'j',
    'ḱ': 'k',
    'ǩ': 'k',
    'ķ': 'k',
    'ⱪ': 'k',
    'ꝃ': 'k',
    'ḳ': 'k',
    'ƙ': 'k',
    'ḵ': 'k',
    'ᶄ': 'k',
    'ꝁ': 'k',
    'ꝅ': 'k',
    'ĺ': 'l',
    'ƚ': 'l',
    'ɬ': 'l',
    'ľ': 'l',
    'ļ': 'l',
    'ḽ': 'l',
    'ȴ': 'l',
    'ḷ': 'l',
    'ḹ': 'l',
    'ⱡ': 'l',
    'ꝉ': 'l',
    'ḻ': 'l',
    'ŀ': 'l',
    'ɫ': 'l',
    'ᶅ': 'l',
    'ɭ': 'l',
    'ł': 'l',
    'ǉ': 'lj',
    'ſ': 's',
    'ẜ': 's',
    'ẛ': 's',
    'ẝ': 's',
    'ḿ': 'm',
    'ṁ': 'm',
    'ṃ': 'm',
    'ɱ': 'm',
    'ᵯ': 'm',
    'ᶆ': 'm',
    'ń': 'n',
    'ň': 'n',
    'ņ': 'n',
    'ṋ': 'n',
    'ȵ': 'n',
    'ṅ': 'n',
    'ṇ': 'n',
    'ǹ': 'n',
    'ɲ': 'n',
    'ṉ': 'n',
    'ƞ': 'n',
    'ᵰ': 'n',
    'ᶇ': 'n',
    'ɳ': 'n',
    'ñ': 'n',
    'ǌ': 'nj',
    'ó': 'o',
    'ŏ': 'o',
    'ǒ': 'o',
    'ô': 'o',
    'ố': 'o',
    'ộ': 'o',
    'ồ': 'o',
    'ổ': 'o',
    'ỗ': 'o',
    'ö': 'o',
    'ȫ': 'o',
    'ȯ': 'o',
    'ȱ': 'o',
    'ọ': 'o',
    'ő': 'o',
    'ȍ': 'o',
    'ò': 'o',
    'ỏ': 'o',
    'ơ': 'o',
    'ớ': 'o',
    'ợ': 'o',
    'ờ': 'o',
    'ở': 'o',
    'ỡ': 'o',
    'ȏ': 'o',
    'ꝋ': 'o',
    'ꝍ': 'o',
    'ⱺ': 'o',
    'ō': 'o',
    'ṓ': 'o',
    'ṑ': 'o',
    'ǫ': 'o',
    'ǭ': 'o',
    'ø': 'o',
    'ǿ': 'o',
    'õ': 'o',
    'ṍ': 'o',
    'ṏ': 'o',
    'ȭ': 'o',
    'ƣ': 'oi',
    'ꝏ': 'oo',
    'ɛ': 'e',
    'ᶓ': 'e',
    'ɔ': 'o',
    'ᶗ': 'o',
    'ȣ': 'ou',
    'ṕ': 'p',
    'ṗ': 'p',
    'ꝓ': 'p',
    'ƥ': 'p',
    'ᵱ': 'p',
    'ᶈ': 'p',
    'ꝕ': 'p',
    'ᵽ': 'p',
    'ꝑ': 'p',
    'ꝙ': 'q',
    'ʠ': 'q',
    'ɋ': 'q',
    'ꝗ': 'q',
    'ŕ': 'r',
    'ř': 'r',
    'ŗ': 'r',
    'ṙ': 'r',
    'ṛ': 'r',
    'ṝ': 'r',
    'ȑ': 'r',
    'ɾ': 'r',
    'ᵳ': 'r',
    'ȓ': 'r',
    'ṟ': 'r',
    'ɼ': 'r',
    'ᵲ': 'r',
    'ᶉ': 'r',
    'ɍ': 'r',
    'ɽ': 'r',
    'ↄ': 'c',
    'ꜿ': 'c',
    'ɘ': 'e',
    'ɿ': 'r',
    'ś': 's',
    'ṥ': 's',
    'š': 's',
    'ṧ': 's',
    'ş': 's',
    'ŝ': 's',
    'ș': 's',
    'ṡ': 's',
    'ṣ': 's',
    'ṩ': 's',
    'ʂ': 's',
    'ᵴ': 's',
    'ᶊ': 's',
    'ȿ': 's',
    'ɡ': 'g',
    'ᴑ': 'o',
    'ᴓ': 'o',
    'ᴝ': 'u',
    'ť': 't',
    'ţ': 't',
    'ṱ': 't',
    'ț': 't',
    'ȶ': 't',
    'ẗ': 't',
    'ⱦ': 't',
    'ṫ': 't',
    'ṭ': 't',
    'ƭ': 't',
    'ṯ': 't',
    'ᵵ': 't',
    'ƫ': 't',
    'ʈ': 't',
    'ŧ': 't',
    'ᵺ': 'th',
    'ɐ': 'a',
    'ᴂ': 'ae',
    'ǝ': 'e',
    'ᵷ': 'g',
    'ɥ': 'h',
    'ʮ': 'h',
    'ʯ': 'h',
    'ᴉ': 'i',
    'ʞ': 'k',
    'ꞁ': 'l',
    'ɯ': 'm',
    'ɰ': 'm',
    'ᴔ': 'oe',
    'ɹ': 'r',
    'ɻ': 'r',
    'ɺ': 'r',
    'ⱹ': 'r',
    'ʇ': 't',
    'ʌ': 'v',
    'ʍ': 'w',
    'ʎ': 'y',
    'ꜩ': 'tz',
    'ú': 'u',
    'ŭ': 'u',
    'ǔ': 'u',
    'û': 'u',
    'ṷ': 'u',
    'ü': 'u',
    'ǘ': 'u',
    'ǚ': 'u',
    'ǜ': 'u',
    'ǖ': 'u',
    'ṳ': 'u',
    'ụ': 'u',
    'ű': 'u',
    'ȕ': 'u',
    'ù': 'u',
    'ủ': 'u',
    'ư': 'u',
    'ứ': 'u',
    'ự': 'u',
    'ừ': 'u',
    'ử': 'u',
    'ữ': 'u',
    'ȗ': 'u',
    'ū': 'u',
    'ṻ': 'u',
    'ų': 'u',
    'ᶙ': 'u',
    'ů': 'u',
    'ũ': 'u',
    'ṹ': 'u',
    'ṵ': 'u',
    'ᵫ': 'ue',
    'ꝸ': 'um',
    'ⱴ': 'v',
    'ꝟ': 'v',
    'ṿ': 'v',
    'ʋ': 'v',
    'ᶌ': 'v',
    'ⱱ': 'v',
    'ṽ': 'v',
    'ꝡ': 'vy',
    'ẃ': 'w',
    'ŵ': 'w',
    'ẅ': 'w',
    'ẇ': 'w',
    'ẉ': 'w',
    'ẁ': 'w',
    'ⱳ': 'w',
    'ẘ': 'w',
    'ẍ': 'x',
    'ẋ': 'x',
    'ᶍ': 'x',
    'ý': 'y',
    'ŷ': 'y',
    'ÿ': 'y',
    'ẏ': 'y',
    'ỵ': 'y',
    'ỳ': 'y',
    'ƴ': 'y',
    'ỷ': 'y',
    'ỿ': 'y',
    'ȳ': 'y',
    'ẙ': 'y',
    'ɏ': 'y',
    'ỹ': 'y',
    'ź': 'z',
    'ž': 'z',
    'ẑ': 'z',
    'ʑ': 'z',
    'ⱬ': 'z',
    'ż': 'z',
    'ẓ': 'z',
    'ȥ': 'z',
    'ẕ': 'z',
    'ᵶ': 'z',
    'ᶎ': 'z',
    'ʐ': 'z',
    'ƶ': 'z',
    'ɀ': 'z',
    'ﬀ': 'ff',
    'ﬃ': 'ffi',
    'ﬄ': 'ffl',
    'ﬁ': 'fi',
    'ﬂ': 'fl',
    'ĳ': 'ij',
    'œ': 'oe',
    'ﬆ': 'st',
    'ₐ': 'a',
    'ₑ': 'e',
    'ᵢ': 'i',
    'ⱼ': 'j',
    'ₒ': 'o',
    'ᵣ': 'r',
    'ᵤ': 'u',
    'ᵥ': 'v',
    'ₓ': 'x'
};
//# sourceMappingURL=latin-map.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/typeahead-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__("../../../../ngx-bootstrap/utils/ng2-bootstrap-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_utils__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-utils.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadContainerComponent; });



var TypeaheadContainerComponent = (function () {
    function TypeaheadContainerComponent(element) {
        this.isFocused = false;
        this._matches = [];
        this.element = element;
    }
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
        get: function () {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        set: function (value) {
            this._matches = value;
            if (this._matches.length > 0) {
                this._active = this._matches[0];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
        get: function () {
            return this.parent ? this.parent.optionsListTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
        get: function () {
            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadContainerComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this._active);
    };
    TypeaheadContainerComponent.prototype.prevActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0
            ? this.matches.length - 1
            : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
    };
    TypeaheadContainerComponent.prototype.nextActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1
            ? 0
            : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
    };
    TypeaheadContainerComponent.prototype.selectActive = function (value) {
        this.isFocused = true;
        this._active = value;
    };
    TypeaheadContainerComponent.prototype.hightlight = function (match, query) {
        var itemStr = match.value;
        var itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__typeahead_utils__["a" /* latinize */])(itemStr)
            : itemStr).toLowerCase();
        var startIdx;
        var tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            var queryLen = query.length;
            for (var i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
                    itemStrHelper = itemStrHelper.substring(0, startIdx) + '        ' + ' '.repeat(tokenLen) + '         ' + itemStrHelper.substring(startIdx + tokenLen);
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
            }
        }
        return itemStr;
    };
    TypeaheadContainerComponent.prototype.focusLost = function () {
        this.isFocused = false;
    };
    TypeaheadContainerComponent.prototype.isActive = function (value) {
        return this._active === value;
    };
    TypeaheadContainerComponent.prototype.selectMatch = function (value, e) {
        var _this = this;
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(function () {
            return _this.parent.typeaheadOnSelect.emit(value);
        }, 0);
        return false;
    };
    TypeaheadContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'typeahead-container',
                    // tslint:disable-next-line
                    template: "\n<!-- inject options list template -->\n<template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n  [ngOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></template>\n\n<!-- default options item template -->\n<template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"hightlight(match, query)\"></span></template>\n\n<!-- Bootstrap 3 options list template -->\n<template #bs3Template>\n<ul class=\"dropdown-menu\">\n  <template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <li *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{match}}</li>\n    <li *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\n      <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n        <template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" \n          [ngOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></template>\n      </a>\n    </li>\n  </template>\n</ul>\n</template>\n\n<!-- Bootstrap 4 options list template -->\n<template #bs4Template >\n<template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n   <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{match}}</h6>\n   <template [ngIf]=\"!match.isHeader()\">\n      <button\n        class=\"dropdown-item\"\n        (click)=\"selectMatch(match, $event)\"\n        (mouseenter)=\"selectActive(match)\"\n        [class.active]=\"isActive(match)\">\n          <template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" \n            [ngOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></template>\n      </button>\n  </template>\n</template>\n</template>\n",
                    // tslint:disable
                    host: {
                        'class': 'dropdown open',
                        '[class.dropdown-menu]': 'isBs4',
                        style: 'position: absolute;display: block;'
                    },
                    // tslint: enable
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    TypeaheadContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    TypeaheadContainerComponent.propDecorators = {
        'focusLost': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['blur',] },],
    };
    return TypeaheadContainerComponent;
}());
//# sourceMappingURL=typeahead-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/typeahead-match.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadMatch; });
var TypeaheadMatch = (function () {
    function TypeaheadMatch(item, value, header) {
        if (value === void 0) { value = item; }
        if (header === void 0) { header = false; }
        this.item = item;
        this.value = value;
        this.header = header;
    }
    TypeaheadMatch.prototype.isHeader = function () {
        return this.header;
    };
    TypeaheadMatch.prototype.toString = function () {
        return this.value;
    };
    return TypeaheadMatch;
}());
//# sourceMappingURL=typeahead-match.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/typeahead-options.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TypeaheadOptions */
var TypeaheadOptions = (function () {
    function TypeaheadOptions(options) {
        Object.assign(this, options);
    }
    return TypeaheadOptions;
}());
//# sourceMappingURL=typeahead-options.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/typeahead-utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latin_map__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/latin-map.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = latinize;
/* unused harmony export escapeRegexp */
/* harmony export (immutable) */ __webpack_exports__["b"] = tokenize;
/* harmony export (immutable) */ __webpack_exports__["c"] = getValueFromObject;

function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
        return __WEBPACK_IMPORTED_MODULE_0__latin_map__["a" /* latinMap */][a] || a;
    });
}
function escapeRegexp(queryToEscape) {
    // Regex: capture the whole query string and replace it with the string
    // that will be used to match the results, for example if the capture is
    // 'a' the result will be \a
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/* tslint:disable */
function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
    if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
    if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
    /* tslint:enable */
    var regexStr = '(?:[' + phraseRegexDelimiters + '])([^' + phraseRegexDelimiters + ']+)(?:[' + phraseRegexDelimiters + '])|([^' + wordRegexDelimiters + ']+)';
    var preTokenized = str.split(new RegExp(regexStr, 'g'));
    var result = [];
    var preTokenizedLength = preTokenized.length;
    var token;
    var replacePhraseDelimiters = new RegExp('[' + phraseRegexDelimiters + ']+', 'g');
    for (var i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
function getValueFromObject(object, option) {
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        var functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    var properties = option.replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    var propertiesArray = properties.split('.');
    for (var _i = 0, propertiesArray_1 = propertiesArray; _i < propertiesArray_1.length; _i++) {
        var property = propertiesArray_1[_i];
        if (property in object) {
            object = object[property];
        }
    }
    return object.toString();
}
//# sourceMappingURL=typeahead-utils.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/typeahead.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toArray__ = __webpack_require__("../../../../rxjs/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-match.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_loader__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadDirective; });













var TypeaheadDirective = (function () {
    function TypeaheadDirective(control, viewContainerRef, element, renderer, cis) {
        /** minimal no of characters that needs to be entered before typeahead kicks-in. When set to 0, typeahead shows on focus with full list of options (limited as normal by typeaheadOptionsLimit) */
        this.typeaheadMinLength = void 0;
        /** should be used only in case of typeahead attribute is array. If true - loading of options will be async, otherwise - sync. true make sense if options array is large. */
        this.typeaheadAsync = void 0;
        /** match latin symbols. If true the word súper would match super and vice versa. */
        this.typeaheadLatinize = true;
        /** break words with spaces. If true the text "exact phrase" here match would match with match exact phrase here but not with phrase here exact match (kind of "google style"). */
        this.typeaheadSingleWords = true;
        /** should be used only in case typeaheadSingleWords attribute is true. Sets the word delimiter to break words. Defaults to space. */
        this.typeaheadWordDelimiters = ' ';
        /** should be used only in case typeaheadSingleWords attribute is true. Sets the word delimiter to match exact phrase. Defaults to simple and double quotes. */
        this.typeaheadPhraseDelimiters = '\'"';
        /** fired when 'busy' state of this component was changed, fired on async mode only, returns boolean */
        this.typeaheadLoading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired on every key event and returns true in case of matches are not detected */
        this.typeaheadNoResults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when option was selected, return object with data of this option */
        this.typeaheadOnSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when blur event occurres. returns the active item */
        this.typeaheadOnBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isTypeaheadOptionsListActive = false;
        this.keyUpEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.placement = 'bottom-left';
        this.element = element;
        this.ngControl = control;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this._typeahead = cis
            .createLoader(element, viewContainerRef, renderer);
    }
    TypeaheadDirective.prototype.onChange = function (e) {
        if (this._container) {
            // esc
            if (e.keyCode === 27) {
                this.hide();
                return;
            }
            // up
            if (e.keyCode === 38) {
                this._container.prevActiveMatch();
                return;
            }
            // down
            if (e.keyCode === 40) {
                this._container.nextActiveMatch();
                return;
            }
            // enter
            if (e.keyCode === 13) {
                this._container.selectActiveMatch();
                return;
            }
        }
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        var value = e.target.value !== undefined
            ? e.target.value
            : e.target.textContent !== undefined
                ? e.target.textContent
                : e.target.innerText;
        if (value && value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onFocus = function () {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit('');
        }
    };
    TypeaheadDirective.prototype.onBlur = function () {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onKeydown = function (e) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        // if items is visible - prevent form submition
        if (e.keyCode === 13) {
            e.preventDefault();
            return;
        }
    };
    TypeaheadDirective.prototype.ngOnInit = function () {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength = this.typeaheadMinLength === void 0
            ? 1
            : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined && !(this.typeahead instanceof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])) {
            this.typeaheadAsync = false;
        }
        if (this.typeahead instanceof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    };
    TypeaheadDirective.prototype.changeModel = function (match) {
        var valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        this.ngControl.control.setValue(valueStr);
        this.hide();
    };
    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadDirective.prototype.show = function () {
        this._typeahead
            .attach(__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */])
            .to(this.container)
            .position({ attachment: 'bottom left' })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false
        });
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        var normalizedQuery = (this.typeaheadLatinize
            ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* latinize */])(this.ngControl.control.value)
            : this.ngControl.control.value).toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["b" /* tokenize */])(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    };
    TypeaheadDirective.prototype.hide = function () {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._container = null;
        }
    };
    TypeaheadDirective.prototype.ngOnDestroy = function () {
        this._typeahead.dispose();
    };
    TypeaheadDirective.prototype.asyncActions = function () {
        var _this = this;
        this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap(function () { return _this.typeahead; })
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }, function (err) {
            console.error(err);
        });
    };
    TypeaheadDirective.prototype.syncActions = function () {
        var _this = this;
        this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap(function (value) {
            var normalizedQuery = _this.normalizeQuery(value);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].from(_this.typeahead)
                .filter(function (option) {
                return option && _this.testMatch(_this.normalizeOption(option), normalizedQuery);
            })
                .toArray();
        })
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }, function (err) {
            console.error(err);
        });
    };
    TypeaheadDirective.prototype.normalizeOption = function (option) {
        var optionValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["c" /* getValueFromObject */])(option, this.typeaheadOptionField);
        var normalizedOption = this.typeaheadLatinize
            ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* latinize */])(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    };
    TypeaheadDirective.prototype.normalizeQuery = function (value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        var normalizedQuery = (this.typeaheadLatinize ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* latinize */])(value) : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["b" /* tokenize */])(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    };
    TypeaheadDirective.prototype.testMatch = function (match, test) {
        var spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (var i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        else {
            return match.indexOf(test) >= 0;
        }
    };
    TypeaheadDirective.prototype.finalizeAsyncCall = function (matches) {
        this.prepareMatches(matches);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // This improves the speed as it won't have to be done for each list item
            var normalizedQuery = (this.typeaheadLatinize
                ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* latinize */])(this.ngControl.control.value)
                : this.ngControl.control.value).toString()
                .toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["b" /* tokenize */])(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    };
    TypeaheadDirective.prototype.prepareMatches = function (options) {
        var _this = this;
        var limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            var matches_1 = [];
            // extract all group names
            var groups = limited
                .map(function (option) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["c" /* getValueFromObject */])(option, _this.typeaheadGroupField); })
                .filter(function (v, i, a) { return a.indexOf(v) === i; });
            groups.forEach(function (group) {
                // add group header to array of matches
                matches_1.push(new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](group, group, true));
                // add each item of group to array of matches
                matches_1 = matches_1.concat(limited
                    .filter(function (option) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["c" /* getValueFromObject */])(option, _this.typeaheadGroupField) === group; })
                    .map(function (option) { return new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](option, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["c" /* getValueFromObject */])(option, _this.typeaheadOptionField)); }));
            });
            this._matches = matches_1;
        }
        else {
            this._matches = limited.map(function (option) { return new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](option, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["c" /* getValueFromObject */])(option, _this.typeaheadOptionField)); });
        }
    };
    TypeaheadDirective.prototype.hasMatches = function () {
        return this._matches.length > 0;
    };
    TypeaheadDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] },
    ];
    /** @nocollapse */
    TypeaheadDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgControl */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_12__component_loader__["a" /* ComponentLoaderFactory */], },
    ]; };
    TypeaheadDirective.propDecorators = {
        'typeahead': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadMinLength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadWaitMs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadOptionsLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadOptionField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadGroupField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadAsync': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadLatinize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadSingleWords': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadWordDelimiters': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadPhraseDelimiters': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadItemTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'optionsListTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadLoading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'typeaheadNoResults': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'typeaheadOnSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'typeaheadOnBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keyup', ['$event'],] },],
        'onFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['focus',] },],
        'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['blur',] },],
        'onKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return TypeaheadDirective;
}());
//# sourceMappingURL=typeahead.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/typeahead/typeahead.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/typeahead.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_loader__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__positioning__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadModule; });






var TypeaheadModule = (function () {
    function TypeaheadModule() {
    }
    TypeaheadModule.forRoot = function () {
        return {
            ngModule: TypeaheadModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_5__positioning__["a" /* PositioningService */]]
        };
    };
    ;
    TypeaheadModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__["a" /* TypeaheadDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__["a" /* TypeaheadDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    TypeaheadModule.ctorParameters = function () { return []; };
    return TypeaheadModule;
}());
//# sourceMappingURL=typeahead.module.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map