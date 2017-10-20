webpackJsonp([4],{

/***/ "../../../../../src/app/blacklist/apiwise/apiblacklist-list/apiblacklist-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-md-offset-1\">\n                <div class=\"tbl-header\">\n                    <label class=\"subtitle\">Subscriber list</label>\n                </div>\n                <div class=\"scrollit\">\n                    <div class=\"table\">\n\n                        <div class=\"tbl-row header\">\n                            <div class=\"tbl-cell\">MSISDN</div>\n                            <div class=\"tbl-cell text-right pad-r-15-im\">Action</div>\n                        </div>\n\n                        <ng-container *ngFor=\"let item of datasource\">\n                            <div class=\"tbl-row\">\n                                <div class=\"tbl-cell\">{{item.replace('tel3A+','')}}</div>\n                                <div class=\"tbl-cell text-right\">\n                                    <button class=\"btn btn-danger\"\n                                            (click)=\"onDelete(item.replace('tel3A+',''), apiId.toString())\"><i\n                                            class=\"material-icons\">delete</i></button>\n                                </div>\n                            </div>\n                        </ng-container>\n\n                        <div class=\"no-rec-row tbl-row\" *ngIf=\"datasource == null\">\n                            <span class=\"no-rec\">No Records..</span>\n                        </div>\n                        <br><br><br>\n                    </div>\n                </div> <!--TABLE END-->\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/blacklist/apiwise/apiblacklist-list/apiblacklist-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_blacklist_service__ = __webpack_require__("../../../../../src/app/commons/services/blacklist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiBlacklistListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiBlacklistListComponent = (function () {
    function ApiBlacklistListComponent(blackListService, message) {
        this.blackListService = blackListService;
        this.message = message;
        this.onDeleteTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ApiBlacklistListComponent.prototype.ngOnInit = function () {
        this.datasource = [];
    };
    ApiBlacklistListComponent.prototype.onDelete = function (msisdn, apiId) {
        var _this = this;
        if (msisdn.length != 0) {
            this.blackListService.removeBlackListNumber('tel3A%2B' + msisdn, apiId.toString(), function (response, status) {
                if (status) {
                    _this.onDeleteTask.emit(true);
                    _this.message.success('MSISDN Removed Successfully');
                }
                else {
                    _this.message.error(response);
                }
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ApiBlacklistListComponent.prototype, "datasource", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], ApiBlacklistListComponent.prototype, "onDeleteTask", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ApiBlacklistListComponent.prototype, "apiId", void 0);
    ApiBlacklistListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blacklist-list',
            template: __webpack_require__("../../../../../src/app/blacklist/apiwise/apiblacklist-list/apiblacklist-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blacklist/apiwise/apiblacklist-main/apiblacklist-main.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_blacklist_service__["a" /* BlackListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_blacklist_service__["a" /* BlackListService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__commons_services_message_service__["a" /* MessageService */]) === 'function' && _c) || Object])
    ], ApiBlacklistListComponent);
    return ApiBlacklistListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2Telco4/manage-module-ui/ui/src/apiblacklist-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/blacklist/apiwise/apiblacklist-main/apiblacklist-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp row\" style=\"animation-delay: 0.1s\">\n    <div class=\"col-sm-12\">\n        <div class=\"form-container quotaInputContainer\">\n            <div class=\"tbl-header\">\n                APIwise Blacklist\n                <br>\n            </div>\n            <div class=\"searchFilter\">\n                <h4 class=\"control-label col-sm-1\">API :</h4>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\"\n                           [(ngModel)]=\"api\"\n                           [typeaheadMinLength]=\"0\"\n                           container=\"body\"\n                           [typeahead]=\"apiList\"\n                           typeaheadOptionField=\"apiId\"\n                           (typeaheadOnSelect)=\"onApiSelected($event)\"\n                           placeholder=\"Select the API\"\n                    >\n                </div>\n                <div class=\"col-sm-4\"><h4>BlackListed subscribers count : &nbsp; <span\n                        class=\"label label-info\">{{ count }}</span>\n                </h4>\n                </div>\n\n            </div>\n\n            <br><br>\n            <form class=\"form-horizontal\" #numberlistForm=\"ngForm\" novalidate\n                  (ngSubmit)=\"onUploadNumber(numberlistForm)\">\n\n\n                <div class=\"form-group\" [ngClass]=\"{'has-danger': (isDublicate || ismsisdnError || islong)}\">\n                    <label class=\"control-label col-sm-2\">Number:</label>\n                    <div class=\"col-sm-6\">\n                        <input class=\"form-control\"\n                               autocomplete=\"off\"\n                               #nameRef=\"ngModel\"\n                               required=\"required\"\n                               [(ngModel)]=\"msisdn\"\n                               type=\"text\"\n                               name=\"manualNumber\"\n                               placeholder=\"e.g.94777333100,94777333105 (Comma seperated entries)\">&nbsp;\n                        <span class=\"error\" *ngIf=\"isDublicate\">{{ dublicate }}</span>\n                        <span class=\"error\" *ngIf=\"ismsisdnError\">{{msisdnError}}</span>\n                        <span class=\"error\" *ngIf=\"islong\">{{long}}</span>\n                    </div>\n                    <button class=\"btn btn-primary\">\n                        <span class=\"glyphicon glyphicon-plus-sign\"> ADD</span>\n                    </button>\n                </div>\n\n\n            </form>\n\n\n            <br><br>\n\n            <div class=\"error-container animated bounceIn\" *ngIf=\"submissionError\">{{submissionError}}</div>\n\n            <app-blacklist-list\n                    [datasource]=\"blackListList\" [apiId]=\"numberId\" (onDeleteTask)=\"onDeleteHandler($event, numberId)\">\n            </app-blacklist-list>\n\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/blacklist/apiwise/apiblacklist-main/apiblacklist-main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.tbl-header {\n  color: #E19131; }\n\n.quotaInputContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n\n.bs-callout-info {\n  background-color: #E19131;\n  border: 1px solid #e3e3e3; }\n\n.bs-callout {\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid #eee;\n  border-left-width: 5px;\n  border-radius: 3px;\n  overflow: hidden; }\n\n.label-info {\n  background-color: #5bc0de; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n\n.searchFilter {\n  /*overflow: hidden;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke;\n    background-color: #E19131;*/\n  min-height: 78px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #E19131;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  color: #ffffff; }\n\n.searchFilter div[class^=\"col-\"] {\n  padding-bottom: 10px; }\n\n.tbl-header {\n  margin-top: 10px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 15px;\n  color: #E19131;\n  text-transform: uppercase; }\n\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n.has-danger .form-control {\n  border-color: #d9534f;\n  color: #d9534f; }\n\n.table {\n  display: table;\n  width: 100%; }\n  .table .tbl-row {\n    display: table-row;\n    background-color: #f6f6f6;\n    height: 0px;\n    transition: all 0.5s ease-in; }\n    .table .tbl-row:nth-of-type(odd) {\n      background-color: white; }\n    .table .tbl-row.header {\n      background-color: #7788aa;\n      font-weight: 600;\n      color: white; }\n    .table .tbl-row .tbl-cell {\n      display: table-cell;\n      padding: 10px 10px; }\n    .table .tbl-row.modified {\n      background-color: #ffffcc; }\n    .table .tbl-row.open {\n      height: 158px;\n      background-color: #f4f2c9; }\n      .table .tbl-row.open .action {\n        border-color: black;\n        color: black; }\n      .table .tbl-row.open.A, .table .tbl-row.open.R {\n        height: 243px; }\n    .table .tbl-row .more-con {\n      padding: 10px 0px 10px 0px;\n      background-color: #f8f9fa;\n      position: absolute;\n      left: 10px;\n      right: 11px;\n      height: 105px;\n      margin-top: 53px;\n      border: solid 1px #d0d0d0;\n      -ms-box-shadow: inset 0px 10px 10px -9px #d1d1d1;\n      box-shadow: inset 0px 10px 10px -9px #d1d1d1; }\n      .table .tbl-row .more-con.A, .table .tbl-row .more-con.R {\n        height: 190px; }\n      .table .tbl-row .more-con .more-row {\n        margin-bottom: 2px; }\n      .table .tbl-row .more-con .field-name {\n        height: 40px;\n        background-color: #f1f3f5;\n        line-height: 40px;\n        text-align: right;\n        font-weight: 600; }\n      .table .tbl-row .more-con .field-value {\n        height: 40px;\n        background-color: white;\n        line-height: 40px; }\n      .table .tbl-row .more-con select, .table .tbl-row .more-con input {\n        margin-top: 2px; }\n      .table .tbl-row .more-con .btn {\n        margin-top: 10px;\n        padding-top: 5px !important;\n        padding-bottom: 5px !important; }\n  .table .no-rec-row {\n    position: relative; }\n    .table .no-rec-row .no-rec {\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      margin: auto;\n      width: 100px;\n      padding-top: 15px;\n      color: #8A98A0; }\n  .table .fromcolor {\n    color: #107124; }\n  .table .tocolor {\n    color: #bb3535; }\n\nh3 {\n  text-transform: uppercase; }\n\n.subtitle {\n  color: #E19132; }\n\n.scrollit {\n  overflow-y: auto;\n  height: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blacklist/apiwise/apiblacklist-main/apiblacklist-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_blacklist_service__ = __webpack_require__("../../../../../src/app/commons/services/blacklist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__ = __webpack_require__("../../../../../src/app/commons/models/common-data-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiBlacklistMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiBlacklistMainComponent = (function () {
    function ApiBlacklistMainComponent(blackListService, message) {
        this.blackListService = blackListService;
        this.message = message;
        this.onDeleteTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ApiBlacklistMainComponent.prototype.ngOnInit = function () {
        this.getApis();
        this.submissionError = '';
        this.apiList = [];
        this.applications = [];
        this.api = '';
        this.apiId = '';
        this.msisdn = '';
        this.ismsisdnError = false;
        this.islong = false;
        this.msisdnError = '';
        this.long = '';
        this.isDublicate = false;
        this.dublicate = '';
        this.count = '0';
    };
    /**
     *  Get All Blacklisted numbers
     * @param Id
     */
    ApiBlacklistMainComponent.prototype.getBlackListNumbers = function (Id) {
        var _this = this;
        this.blackListService.getBlackListNumberList(Id, function (response, status) {
            if (status) {
                _this.blackListList = response.Success.variables;
                if (_this.blackListList != null) {
                    _this.count = _this.blackListList.length;
                }
                else {
                    _this.blackListList = response.Success.variables;
                    _this.count = 0;
                }
            }
            else {
                _this.submissionError = response;
                setTimeout(function () {
                    _this.submissionError = null;
                }, 5000);
            }
        });
    };
    /**
     * Remove blackListed Number
     * @param msisdn
     */
    ApiBlacklistMainComponent.prototype.removeBlackListNumber = function (msisdn) {
        var _this = this;
        this.blackListService.removeBlackListNumber(msisdn, this.apiId, function (response) {
            _this.onDeleteTask.emit(true);
        });
    };
    /**
     *  Get The List of api's
     */
    ApiBlacklistMainComponent.prototype.getApis = function () {
        var _this = this;
        this.blackListService.getApiList(function (response, status) {
            if (status) {
                _this.apiList = response;
                var count = 0;
                for (var _i = 0, _a = _this.apiList; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    var splitted = entry.split(':', 4);
                    _this.applications[count] = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["b" /* BlackListNumbers */];
                    _this.applications[count].id = splitted[3];
                    _this.applications[count].name = splitted[1];
                    _this.apiList[count] = splitted[1] + ' - ' + splitted[2] + ' Provided by ' + splitted[0] + ' ' + splitted[3];
                    count += 1;
                }
            }
            else {
                _this.submissionError = response;
                setTimeout(function () {
                    _this.submissionError = null;
                }, 5000);
            }
        });
    };
    /**
     * Selected api
     * @param event
     */
    ApiBlacklistMainComponent.prototype.onApiSelected = function (event) {
        var list = /\d+(?=\D*$)/;
        var regexp = new RegExp(list);
        this.numberId = regexp.exec(this.api);
        var id = '';
        var count = 0;
        for (var _i = 0, _a = this.applications; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.id == this.numberId[count]) {
                id = entry.id;
                count += 1;
            }
        }
        if (id.length != 0) {
            this.getBlackListNumbers(id);
        }
    };
    /**
     * Insert Number/s To blackList
     */
    ApiBlacklistMainComponent.prototype.addNewBlackListnumbers = function () {
        var _this = this;
        var list = /\d+(?=\D*$)/;
        var regexp = new RegExp(list);
        this.numberId = regexp.exec(this.api);
        if (this.msisdnList.length != 0) {
            var apiId_1 = '';
            var apiName = '';
            var count = 0;
            for (var _i = 0, _a = this.applications; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.id == this.numberId[count]) {
                    apiId_1 = entry.id;
                    apiName = entry.id;
                    count += 1;
                }
            }
            var countd = 0;
            if (apiId_1.length != 0 && apiName.length != 0) {
                this.isDublicate = false;
                if (this.blackListList != null) {
                    for (var _b = 0, _c = this.blackListList.toString(); _b < _c.length; _b++) {
                        var entry = _c[_b];
                        if (this.blackListList.toString().includes(this.msisdnList[countd])) {
                            this.dublicate = 'This MSISDN already exists';
                            this.isDublicate = true;
                        }
                        countd++;
                    }
                }
                if (this.isDublicate == true) {
                    this.dublicate = 'This MSISDN already exists';
                }
                else {
                    this.blackListService.addNewToBlackListList(apiId_1, apiName, this.msisdnList, function (response, status) {
                        if (status) {
                            _this.message.success('Added Successfully');
                            _this.getBlackListNumbers(apiId_1);
                            _this.msisdn = '';
                        }
                        else {
                            _this.message.error(response.message);
                        }
                    });
                }
            }
        }
    };
    /**
     *
     * @param numberlistForm
     */
    ApiBlacklistMainComponent.prototype.onUploadNumber = function (numberlistForm) {
        this.msisdnList = [];
        var validApi = false;
        for (var _i = 0, _a = this.apiList; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry == this.api) {
                validApi = true;
            }
        }
        if (validApi) {
            if (this.api.length != 0) {
                if (this.isValid(this.msisdn)) {
                    this.ismsisdnError = false;
                    var msisdnList = this.msisdn.split(',');
                    var count = 0;
                    for (var _b = 0, msisdnList_1 = msisdnList; _b < msisdnList_1.length; _b++) {
                        var entry = msisdnList_1[_b];
                        if (this.isValidMobileNumber(entry)) {
                            this.msisdnList[count] = 'tel3A+' + Number(entry);
                            this.islong = false;
                        }
                        else {
                            this.islong = true;
                        }
                        count++;
                    }
                    if (this.islong == true) {
                        this.long = 'Not a Valid MSISDN';
                        this.islong = true;
                    }
                    else {
                        this.addNewBlackListnumbers();
                    }
                }
                else {
                    if (this.msisdn.length == 0) {
                        this.msisdnError = 'Empty List';
                        this.ismsisdnError = true;
                    }
                    else {
                        this.msisdnError = 'Wrong input please enter Comma separated valid mobile numbers ';
                        this.ismsisdnError = true;
                    }
                }
            }
            else {
                this.msisdnError = 'Select an API first';
                this.ismsisdnError = true;
            }
        }
        else {
            this.msisdnError = 'Please Select Valid API';
            this.ismsisdnError = true;
        }
    };
    /**
     * Refresh component on Delete Tasks
     * @param event
     * @param id
     */
    ApiBlacklistMainComponent.prototype.onDeleteHandler = function (event, id) {
        if (event) {
            this.getBlackListNumbers(id);
        }
    };
    /**
     * Validate Number Range
     * @param msisdn
     * @returns {boolean}
     */
    ApiBlacklistMainComponent.prototype.isValidMobileNumber = function (msisdn) {
        var list = /^\d{11}$/;
        var regexp = new RegExp(list);
        if (regexp.test(msisdn)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * input value validator using regular expression comma seperated
     * @param inputtxt
     * @returns {boolean}
     */
    ApiBlacklistMainComponent.prototype.isValid = function (inputtxt) {
        var list = /^\d+(,\d+)*$/;
        var regexp = new RegExp(list);
        if (regexp.test(inputtxt)) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], ApiBlacklistMainComponent.prototype, "onDeleteTask", void 0);
    ApiBlacklistMainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blacklist-main',
            template: __webpack_require__("../../../../../src/app/blacklist/apiwise/apiblacklist-main/apiblacklist-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blacklist/apiwise/apiblacklist-main/apiblacklist-main.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_blacklist_service__["a" /* BlackListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_blacklist_service__["a" /* BlackListService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */]) === 'function' && _c) || Object])
    ], ApiBlacklistMainComponent);
    return ApiBlacklistMainComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2Telco4/manage-module-ui/ui/src/apiblacklist-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/blacklist/blacklist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blacklist_routes__ = __webpack_require__("../../../../../src/app/blacklist/blacklist.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiwise_apiblacklist_main_apiblacklist_main_component__ = __webpack_require__("../../../../../src/app/blacklist/apiwise/apiblacklist-main/apiblacklist-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spwise_spblacklist_main_spblacklist_main_component__ = __webpack_require__("../../../../../src/app/blacklist/spwise/spblacklist-main/spblacklist-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apiwise_apiblacklist_list_apiblacklist_list_component__ = __webpack_require__("../../../../../src/app/blacklist/apiwise/apiblacklist-list/apiblacklist-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackListModule", function() { return BlackListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BlackListModule = (function () {
    function BlackListModule() {
    }
    BlackListModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__blacklist_routes__["a" /* BlackListRoutes */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apiwise_apiblacklist_main_apiblacklist_main_component__["a" /* ApiBlacklistMainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__apiwise_apiblacklist_list_apiblacklist_list_component__["a" /* ApiBlacklistListComponent */],
                __WEBPACK_IMPORTED_MODULE_3__spwise_spblacklist_main_spblacklist_main_component__["a" /* SpBlacklistMainComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BlackListModule);
    return BlackListModule;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2Telco4/manage-module-ui/ui/src/blacklist.module.js.map

/***/ }),

/***/ "../../../../../src/app/blacklist/blacklist.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiwise_apiblacklist_main_apiblacklist_main_component__ = __webpack_require__("../../../../../src/app/blacklist/apiwise/apiblacklist-main/apiblacklist-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spwise_spblacklist_main_spblacklist_main_component__ = __webpack_require__("../../../../../src/app/blacklist/spwise/spblacklist-main/spblacklist-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlackListRoutes; });



var routes = [
    {
        path: 'apiwise',
        component: __WEBPACK_IMPORTED_MODULE_0__apiwise_apiblacklist_main_apiblacklist_main_component__["a" /* ApiBlacklistMainComponent */]
    },
    {
        path: 'spwise',
        component: __WEBPACK_IMPORTED_MODULE_1__spwise_spblacklist_main_spblacklist_main_component__["a" /* SpBlacklistMainComponent */]
    },
];
var BlackListRoutes = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2Telco4/manage-module-ui/ui/src/blacklist.routes.js.map

/***/ }),

/***/ "../../../../../src/app/blacklist/spwise/spblacklist-main/spblacklist-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp row\" style=\"animation-delay: 0.1s\">\n    <div class=\"col-sm-12\">\n        <div class=\"form-container quotaInputContainer\">\n            <div class=\"tbl-header\">\n                SPwise Blacklist\n                <br>\n            </div>\n            <div class=\"searchFilter\">\n                <h4 class=\"control-label col-sm-2\">Service Providers:</h4>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\"\n                           [(ngModel)]=\"sp\"\n                           [typeaheadMinLength]=\"0\"\n                           container=\"body\"\n                           [typeahead]=\"spList\"\n                           typeaheadOptionField=\"spId\"\n                           (typeaheadOnSelect)=\"onApiSelected($event)\"\n                           placeholder=\"Select a Service provider\"\n                    >\n                </div>\n                <div class=\"col-sm-4\"><h4>BlackListed SP count : &nbsp; <span\n                        class=\"label label-info\">{{ count }}</span>\n                </h4>\n                </div>\n\n            </div>\n\n            <form class=\"form-horizontal\" #numberlistForm=\"ngForm\" novalidate>\n                <br>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\">Selected service provider :</label>\n                    <div class=\"col-sm-6\">\n                        <label class=\"slectedlabel control-label col-sm-3\">No SP selected</label>\n                    </div>\n\n                </div>\n                <br><br>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\"></label>\n                <div class=\"col-sm-6\">\n                    <button type=\"submit\" class=\"btn btn-primary animated fadeIn\">\n                        Add\n                    </button>\n                    <button type=\"submit\" class=\"btn btn-warning animated fadeIn\">\n                        Reset\n                    </button>\n                </div>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/blacklist/spwise/spblacklist-main/spblacklist-main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.tbl-header {\n  color: #E19131; }\n\n.quotaInputContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n\n.bs-callout-info {\n  background-color: #E19131;\n  border: 1px solid #e3e3e3; }\n\n.bs-callout {\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid #eee;\n  border-left-width: 5px;\n  border-radius: 3px;\n  overflow: hidden; }\n\n.label-info {\n  background-color: #5bc0de; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n\n.table {\n  width: 70% !important;\n  background-color: #f9f9f9; }\n\n.searchFilter {\n  color: #ffffff;\n  min-height: 78px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #E19131;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.searchFilter div[class^=\"col-\"] {\n  padding-bottom: 10px; }\n\n.control-label {\n  text-align: right; }\n\n.tbl-header {\n  margin-top: 10px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 15px;\n  color: #E19131;\n  text-transform: uppercase; }\n\n.slectedlabel {\n  color: #9a9a9a; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blacklist/spwise/spblacklist-main/spblacklist-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_blacklist_service__ = __webpack_require__("../../../../../src/app/commons/services/blacklist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__ = __webpack_require__("../../../../../src/app/commons/models/common-data-models.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpBlacklistMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpBlacklistMainComponent = (function () {
    function SpBlacklistMainComponent(blackListService) {
        this.blackListService = blackListService;
        this.onDeleteTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SpBlacklistMainComponent.prototype.ngOnInit = function () {
        this.getApis();
        this.submissionError = '';
        this.apiList = [];
        this.applications = [];
        this.api = '';
        this.apiId = '';
        this.msisdn = '';
        this.ismsisdnError = false;
        this.islong = false;
        this.msisdnError = '';
        this.long = '';
        this.isDublicate = false;
        this.dublicate = '';
        this.count = '0';
    };
    /**
     *  Get All Blacklisted numbers
     * @param Id
     */
    SpBlacklistMainComponent.prototype.getBlackListNumbers = function (Id) {
        var _this = this;
        this.blackListService.getBlackListNumberList(Id, function (response, status) {
            if (status) {
                _this.blackListList = response.Success.variables;
                if (_this.blackListList != null) {
                    _this.count = _this.blackListList.length;
                }
                else {
                    _this.blackListList = response.Success.variables;
                    _this.count = 0;
                }
            }
            else {
                _this.submissionError = response;
                setTimeout(function () {
                    _this.submissionError = null;
                }, 5000);
            }
        });
    };
    /**
     * Remove blackListed Number
     * @param msisdn
     */
    SpBlacklistMainComponent.prototype.removeBlackListNumber = function (msisdn) {
        var _this = this;
        this.blackListService.removeBlackListNumber(msisdn, this.apiId, function (response) {
            _this.onDeleteTask.emit(true);
        });
    };
    /**
     *  Get The List of api's
     */
    SpBlacklistMainComponent.prototype.getApis = function () {
        var _this = this;
        this.blackListService.getApiList(function (response, status) {
            if (status) {
                _this.apiList = response;
                var count = 0;
                for (var _i = 0, _a = _this.apiList; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    var splitted = entry.split(':', 4);
                    _this.applications[count] = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["b" /* BlackListNumbers */];
                    _this.applications[count].id = splitted[3];
                    _this.applications[count].name = splitted[1];
                    _this.apiList[count] = splitted[1] + ' - ' + splitted[2] + ' Provided by ' + splitted[0] + ' ' + splitted[3];
                    count += 1;
                }
            }
            else {
                _this.submissionError = response;
                setTimeout(function () {
                    _this.submissionError = null;
                }, 5000);
            }
        });
    };
    /**
     * Selected api
     * @param event
     */
    SpBlacklistMainComponent.prototype.onApiSelected = function (event) {
        var list = /\d+(?=\D*$)/;
        var regexp = new RegExp(list);
        this.numberId = regexp.exec(this.api);
        var id = '';
        var count = 0;
        for (var _i = 0, _a = this.applications; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.id == this.numberId[count]) {
                id = entry.id;
                count += 1;
            }
        }
        if (id.length != 0) {
            this.getBlackListNumbers(id);
        }
    };
    /**
     * Insert Number/s To blackList
     */
    SpBlacklistMainComponent.prototype.addNewBlackListnumbers = function () {
        var _this = this;
        var list = /\d+(?=\D*$)/;
        var regexp = new RegExp(list);
        this.numberId = regexp.exec(this.api);
        if (this.msisdnList.length != 0) {
            var apiId_1 = '';
            var apiName = '';
            var count = 0;
            for (var _i = 0, _a = this.applications; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.id == this.numberId[count]) {
                    apiId_1 = entry.id;
                    apiName = entry.id;
                    count += 1;
                }
            }
            var countd = 0;
            if (apiId_1.length != 0 && apiName.length != 0) {
                this.isDublicate = false;
                if (this.blackListList != null) {
                    for (var _b = 0, _c = this.blackListList.toString(); _b < _c.length; _b++) {
                        var entry = _c[_b];
                        if (this.blackListList.toString().includes(this.msisdnList[countd])) {
                            this.dublicate = 'This MSISDN already exists';
                            this.isDublicate = true;
                        }
                        countd++;
                    }
                }
                if (this.isDublicate == true) {
                    this.dublicate = 'This MSISDN already exists';
                }
                else {
                    this.blackListService.addNewToBlackListList(apiId_1, apiName, this.msisdnList, function (response) {
                        var result = response;
                        console.log(JSON.stringify(result));
                        _this.getBlackListNumbers(apiId_1);
                    });
                }
            }
        }
    };
    /**
     *
     * @param numberlistForm
     */
    SpBlacklistMainComponent.prototype.onUploadNumber = function (numberlistForm) {
        this.msisdnList = [];
        if (this.isValid(this.msisdn)) {
            this.ismsisdnError = false;
            var msisdnList = this.msisdn.split(',');
            var count = 0;
            for (var _i = 0, msisdnList_1 = msisdnList; _i < msisdnList_1.length; _i++) {
                var entry = msisdnList_1[_i];
                if (this.isValidMobileNumber(entry)) {
                    this.msisdnList[count] = 'tel3A+' + Number(entry);
                    this.islong = false;
                }
                else {
                    this.islong = true;
                }
                count++;
            }
            if (this.islong == true) {
                this.long = 'Not a Valid MSISDN';
                this.islong = true;
            }
            else {
                this.addNewBlackListnumbers();
            }
        }
        else {
            if (this.msisdn.length == 0) {
                this.msisdnError = 'Empty List';
                this.ismsisdnError = true;
            }
            else {
                this.msisdnError = 'Wrong input please enter Comma seperated valid mobile numbers ';
                this.ismsisdnError = true;
            }
        }
    };
    /**
     * Refresh component on Delete Tasks
     * @param event
     * @param id
     */
    SpBlacklistMainComponent.prototype.onDeleteHandler = function (event, id) {
        if (event) {
            this.getBlackListNumbers(id);
        }
    };
    /**
     * Validate Number Range
     * @param msisdn
     * @returns {boolean}
     */
    SpBlacklistMainComponent.prototype.isValidMobileNumber = function (msisdn) {
        var list = /^\d{11}$/;
        var regexp = new RegExp(list);
        if (regexp.test(msisdn)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * input value validator using regular expression comma seperated
     * @param inputtxt
     * @returns {boolean}
     */
    SpBlacklistMainComponent.prototype.isValid = function (inputtxt) {
        var list = /^\d+(,\d+)*$/;
        var regexp = new RegExp(list);
        if (regexp.test(inputtxt)) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], SpBlacklistMainComponent.prototype, "onDeleteTask", void 0);
    SpBlacklistMainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spblacklist-main',
            template: __webpack_require__("../../../../../src/app/blacklist/spwise/spblacklist-main/spblacklist-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blacklist/spwise/spblacklist-main/spblacklist-main.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_blacklist_service__["a" /* BlackListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_blacklist_service__["a" /* BlackListService */]) === 'function' && _b) || Object])
    ], SpBlacklistMainComponent);
    return SpBlacklistMainComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2Telco4/manage-module-ui/ui/src/spblacklist-main.component.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map