webpackJsonp([6],{

/***/ "../../../../../src/app/whitelist/whilelist-list/whitelist-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-md-offset-1\">\n                <div class=\"tbl-header\">\n                    <label class=\"subtitle\">Whitelisted subscribers</label>\n\n                </div>\n                <br>\n                <div class=\"scrollit\">\n                    <div class=\"table\">\n\n                        <div class=\"tbl-row header\">\n                            <div class=\"tbl-cell\">MSISDN</div>\n                            <div class=\"tbl-cell text-right pad-r-15-im\">Action</div>\n                        </div>\n\n                        <ng-container *ngFor=\"let item of dataSource\">\n                            <div class=\"tbl-row\">\n                                <div class=\"tbl-cell\">{{item}}</div>\n                                <div class=\"tbl-cell text-right\">\n                                    <button class=\"btn btn-danger\" (click)=\"onDelete(item)\"><i\n                                            class=\"material-icons\">delete</i>\n                                    </button>\n                                </div>\n                            </div>\n                        </ng-container>\n\n                        <div class=\"no-rec-row tbl-row\" *ngIf=\"dataSource == undefined\">\n                            <span class=\"no-rec\">No Records..</span>\n                        </div>\n                    </div>\n                </div> <!--TABLE END-->\n\n                <br><br>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/whitelist/whilelist-list/whitelist-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".whitelist {\n  float: left;\n  overflow-y: scroll;\n  height: 200px;\n  width: 500px; }\n\n.table {\n  display: table;\n  width: 100%; }\n  .table .tbl-row {\n    display: table-row;\n    background-color: #f6f6f6;\n    height: 0px;\n    transition: all 0.5s ease-in; }\n    .table .tbl-row:nth-of-type(odd) {\n      background-color: white; }\n    .table .tbl-row.header {\n      background-color: #7788aa;\n      font-weight: 600;\n      color: white; }\n    .table .tbl-row .tbl-cell {\n      display: table-cell;\n      padding: 10px 10px; }\n    .table .tbl-row.modified {\n      background-color: #ffffcc; }\n    .table .tbl-row.open {\n      height: 158px;\n      background-color: #f4f2c9; }\n      .table .tbl-row.open .action {\n        border-color: black;\n        color: black; }\n      .table .tbl-row.open.A, .table .tbl-row.open.R {\n        height: 243px; }\n    .table .tbl-row .more-con {\n      padding: 10px 0px 10px 0px;\n      background-color: #f8f9fa;\n      position: absolute;\n      left: 10px;\n      right: 11px;\n      height: 105px;\n      margin-top: 53px;\n      border: solid 1px #d0d0d0;\n      -ms-box-shadow: inset 0px 10px 10px -9px #d1d1d1;\n      box-shadow: inset 0px 10px 10px -9px #d1d1d1; }\n      .table .tbl-row .more-con.A, .table .tbl-row .more-con.R {\n        height: 190px; }\n      .table .tbl-row .more-con .more-row {\n        margin-bottom: 2px; }\n      .table .tbl-row .more-con .field-name {\n        height: 40px;\n        background-color: #f1f3f5;\n        line-height: 40px;\n        text-align: right;\n        font-weight: 600; }\n      .table .tbl-row .more-con .field-value {\n        height: 40px;\n        background-color: white;\n        line-height: 40px; }\n      .table .tbl-row .more-con select, .table .tbl-row .more-con input {\n        margin-top: 2px; }\n      .table .tbl-row .more-con .btn {\n        margin-top: 10px;\n        padding-top: 5px !important;\n        padding-bottom: 5px !important; }\n  .table .no-rec-row {\n    position: relative; }\n    .table .no-rec-row .no-rec {\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      margin: auto;\n      width: 100px;\n      padding-top: 15px;\n      color: #8A98A0; }\n  .table .fromcolor {\n    color: #107124; }\n  .table .tocolor {\n    color: #bb3535; }\n\nh3 {\n  text-transform: uppercase; }\n\n.subtitle {\n  color: #E19132; }\n\n.scrollit {\n  overflow-y: auto;\n  height: 400px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/whitelist/whilelist-list/whitelist-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_whitelist_service__ = __webpack_require__("../../../../../src/app/commons/services/whitelist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhitelistListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WhitelistListComponent = (function () {
    function WhitelistListComponent(whitelistService, message) {
        this.whitelistService = whitelistService;
        this.message = message;
        this.onDeleteTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    WhitelistListComponent.prototype.ngOnInit = function () {
    };
    WhitelistListComponent.prototype.onDelete = function (msisdn) {
        var _this = this;
        if (msisdn.length != 0) {
            this.whitelistService.removeFromWhiteList(msisdn, function (response, status) {
                if (status) {
                    _this.onDeleteTask.emit(true);
                    _this.message.success('MSISDN Removed Successfully');
                }
                else {
                    _this.message.error(response.message);
                }
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], WhitelistListComponent.prototype, "dataSource", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], WhitelistListComponent.prototype, "onDeleteTask", void 0);
    WhitelistListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-whitelist-list',
            template: __webpack_require__("../../../../../src/app/whitelist/whilelist-list/whitelist-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/whitelist/whilelist-list/whitelist-list.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_whitelist_service__["a" /* WhitelistService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_whitelist_service__["a" /* WhitelistService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__commons_services_message_service__["a" /* MessageService */]) === 'function' && _c) || Object])
    ], WhitelistListComponent);
    return WhitelistListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manageservice/manage-module-ui/src/whitelist-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/whitelist/whitelist-main/whitelist-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeInUp row\" style=\"animation-delay: 0.1s\">\n\n    <div class=\"col-sm-12\">\n        <div class=\"form-container whitelistInputContainer\">\n\n            <div class=\"tbl-header\">\n                APIwise Whitelist\n                <br>\n            </div>\n            <h4>Whitelist subscribers</h4>\n            <div class=\"searchFilter\">\n                <div class=\"col-sm-4\">\n                    <input [(ngModel)]=\"subscriber\"\n                           [typeahead]=\"subscriberList\"\n                           [typeaheadMinLength]=\"0\"\n                           type=\"text\"\n                           class=\"form-control\"\n                           (typeaheadOnSelect)=\"onSubscriberSelected()\"\n                           (input)=\"onSubscriberSelected()\"\n                           placeholder=\"Select Subscriber\">\n                </div>\n                <div class=\"col-sm-4\">\n                    <input [(ngModel)]=\"app\"\n                           [typeahead]=\"applicationList\"\n                           [typeaheadMinLength]=\"0\"\n                           type=\"text\"\n                           class=\"form-control\"\n                           (typeaheadOnSelect)=\"onAppSelected()\"\n                           (input)=\"onAppSelected()\"\n                           placeholder=\"Select Application\">\n                </div>\n                <div class=\"col-sm-4\">\n                    <input [(ngModel)]=\"api\"\n                           [typeahead]=\"apiList\"\n                           [typeaheadMinLength]=\"0\"\n                           type=\"text\"\n                           class=\"form-control\"\n                           (typeaheadOnSelect)=\"onApiSelected()\"\n                           (input)=\"onApiSelected()\"\n                           placeholder=\"Select API\">\n                </div>\n            </div>\n            <div><span class=\"error\" *ngIf=\"isInvalidFieldError\">{{invalidFieldError}}</span></div>\n            <br>\n            <form class=\"form-horizontal\" #numberlistForm=\"ngForm\" novalidate\n                  (ngSubmit)=\"onUploadNumber(numberlistForm)\">\n                <div class=\"form-group\">\n                    <label class=\"col-sm-2\"></label>\n                    <label class=\"col-sm-4 subtitle\">Numbers list configuration </label>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\">Number:</label>\n                    <div class=\"col-sm-6\">\n                        <input class=\"form-control\"\n                               autocomplete=\"off\"\n                               #nameRef=\"ngModel\"\n                               required\n                               [(ngModel)]=\"msisdn\"\n                               type=\"text\"\n                               name=\"manualNumber\"\n                               placeholder=\"e.g.94777333100,94777333105 (Comma seperated entries)\">&nbsp;\n                        <span class=\"error\" *ngIf=\"ismsisdnError\">{{msisdnError}}</span>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <button type=\"submit\" class=\"btn btn-primary animated fadeIn\">\n                            Add\n                        </button>\n                    </div>\n                </div>\n            </form>\n\n            <form class=\"form-horizontal\" #numberrangeForm=\"ngForm\" novalidate\n                  (ngSubmit)=\"onUploadNumberRange(numberrangeForm)\">\n\n                <div class=\"form-group\">\n                    <label class=\"col-sm-2\"></label>\n                    <label class=\"col-sm-4 subtitle\">Numbers Range configuration</label>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\">Min number:</label>\n                    <div class=\"col-sm-4\">\n                        <input class=\"form-control\"\n                               autocomplete=\"off\"\n                               #nameRef=\"ngModel\"\n                               required\n                               [(ngModel)]=\"msisdnMin\"\n                               type=\"number\"\n                               name=\"manualNumber\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\">Max number:</label>\n                    <div class=\"col-sm-4\">\n                        <input class=\"form-control\"\n                               autocomplete=\"off\"\n                               #nameRef=\"ngModel\"\n                               required\n                               [(ngModel)]=\"msisdnMax\"\n                               type=\"number\"\n                               name=\"manualNumber\">\n                        <span class=\"error\" *ngIf=\"ismsisdnRangeError\">{{msisdnRangeError}}</span>\n                    </div>\n                    <span class=\"glyphicon glyphicon-question-sign info-tooltip\"\n                          tooltip=\"e.g.94777333100 to 94777333200\" placement=\"right\"\n                    ></span>\n                </div>\n\n\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\"></label>\n                    <div class=\"col-sm-4\">\n                        <button class=\"btn btn-primary\">\n                            Upload Numbers List\n                        </button>\n                    </div>\n                </div>\n\n            </form>\n            <br><br>\n            <app-whitelist-list\n                    [dataSource]=\"whitelistList\"\n                    (onDeleteTask)=\"onDeleteHandler($event)\"></app-whitelist-list>\n\n        </div>\n\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/whitelist/whitelist-main/whitelist-main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  margin-top: 20px; }\n\n.content-div {\n  background-color: #ffffff; }\n\n.searchFilter div[class^=\"col-\"] {\n  padding-bottom: 10px; }\n\n.tbl-header {\n  color: #E19131; }\n\n.error {\n  font-size: 0.9em;\n  color: #f96565; }\n\n.whitelistInputContainer {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n\n.tbl-header {\n  color: #E19131; }\n\n.searchFilter {\n  /*overflow: hidden;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke;\n    background-color: #E19131;*/\n  min-height: 78px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #E19131;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.open {\n  overflow: visible;\n  z-index: 100000; }\n\n.subtitle {\n  color: #E19132; }\n\n.info-tooltip {\n  font-size: 1.5em;\n  color: #8E44AD;\n  vertical-align: top;\n  margin-top: 0.3em;\n  cursor: pointer; }\n\n.tbl-header {\n  margin-top: 10px;\n  font-weight: 600;\n  font-size: 1.3em;\n  padding: 5px 0px 15px;\n  color: #E19131;\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/whitelist/whitelist-main/whitelist-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_whitelist_service__ = __webpack_require__("../../../../../src/app/commons/services/whitelist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__ = __webpack_require__("../../../../../src/app/commons/models/common-data-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhitelistMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WhitelistMainComponent = (function () {
    function WhitelistMainComponent(whitelistService, message) {
        this.whitelistService = whitelistService;
        this.message = message;
    }
    WhitelistMainComponent.prototype.ngOnInit = function () {
        this.subscriberList = [];
        this.getSubscribersOfProvider();
        this.getWhitelist();
        this.applicationList = [];
        this.apiList = [];
        this.applications = [];
        this.apis = [];
        this.subscriber = '';
        this.app = '';
        this.api = '';
        this.msisdn = '';
        this.msisdnMin = 0;
        this.msisdnMax = 0;
        this.msisdnError = '';
        this.msisdnRangeError = '';
        this.invalidFieldError = '';
        this.ismsisdnError = false;
        this.ismsisdnRangeError = false;
        this.isInvalidFieldError = false;
    };
    WhitelistMainComponent.prototype.onSubmit = function () {
    };
    /**
     * to load the subscriber details
     */
    WhitelistMainComponent.prototype.getSubscribersOfProvider = function () {
        var _this = this;
        this.whitelistService.getSubscribers(function (response, status) {
            if (status) {
                _this.subscriberList = response;
            }
            else {
                _this.message.error('Failed to load subscribers');
            }
        });
    };
    /**
     * to load the applications of the subscriber
     * @param subscriberID
     */
    WhitelistMainComponent.prototype.getAppsofSubscriber = function (subscriberID) {
        var _this = this;
        this.whitelistService.getApps(subscriberID, function (response, status) {
            if (status) {
                _this.applicationList = response;
                var count = 0;
                for (var _a = 0, _b = _this.applicationList; _a < _b.length; _a++) {
                    var entry = _b[_a];
                    var splitted = entry.split(':', 2);
                    _this.applications[count] = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["d" /* Application */];
                    _this.applications[count].id = splitted[0];
                    _this.applications[count].name = splitted[1];
                    _this.applicationList[count] = splitted[1];
                    count += 1;
                }
            }
            else {
                _this.message.error('Unable to load applications of subscriber');
            }
        });
    };
    /**
     * to load the APIs of the application of the subscriber
     * @param appName
     */
    WhitelistMainComponent.prototype.getApis = function (appName) {
        var _this = this;
        var index = 0;
        var id = '';
        for (var _a = 0, _b = this.applications; _a < _b.length; _a++) {
            var entry = _b[_a];
            if (entry.name == appName) {
                id = this.subscriber + '|' + entry.id;
            }
            index++;
        }
        if (id.length != 0) {
            this.whitelistService.getApis(id, function (response, status) {
                if (status) {
                    _this.apiList = response;
                    var count = 0;
                    for (var _a = 0, _b = _this.apiList; _a < _b.length; _a++) {
                        var entry = _b[_a];
                        var splitted = entry.split(':', 4);
                        _this.apis[count] = new __WEBPACK_IMPORTED_MODULE_2__commons_models_common_data_models__["e" /* Api */];
                        _this.apis[count].id = splitted[0];
                        _this.apis[count].name = splitted[2];
                        _this.apis[count].provider = splitted[1];
                        _this.apis[count].version = splitted[3];
                        _this.apiList[count] = splitted[2] + ' - ' + splitted[3] + ' Provided by ' + splitted[1];
                        count += 1;
                    }
                }
                else {
                    _this.message.error('Unable to load APIs');
                }
            });
        }
    };
    /**
     * to load all white listed numbers
     * @returns {any}
     */
    WhitelistMainComponent.prototype.getWhitelist = function () {
        var _this = this;
        this.whitelistService.getWhitelist(function (response, status) {
            if (status) {
                _this.whitelistList = response.Success.variables;
            }
            else {
                _this.whitelistList = [];
                _this.message.error('Failed to load whitelist numbers');
            }
        });
    };
    /**
     * function to add new list of whitelist numbers
     */
    WhitelistMainComponent.prototype.addNewToWhitelist = function () {
        var _this = this;
        if (this.msisdnList.length != 0) {
            var apiId = '';
            var appId = '';
            var index = 0;
            for (var _a = 0, _b = this.applications; _a < _b.length; _a++) {
                var entry = _b[_a];
                if (entry.name == this.app) {
                    appId = entry.id;
                }
                index++;
            }
            var splited = this.api.split(' ');
            for (var _c = 0, _d = this.apis; _c < _d.length; _c++) {
                var entry = _d[_c];
                if (entry.name == splited[0]) {
                    apiId = entry.id;
                }
            }
            if (apiId.length != 0 && appId.length != 0) {
                this.whitelistService.addNewToWhitelist(appId, apiId, this.msisdnList, function (response, status) {
                    if (status) {
                        _this.message.success('MSISDN List Added Successfully');
                        _this.msisdn = '';
                        _this.msisdnMin = 0;
                        _this.msisdnMax = 0;
                        _this.getWhitelist();
                    }
                    else {
                        _this.message.error(response.message);
                    }
                });
            }
        }
        else {
            this.msisdnError = 'Something Went Wrong';
            this.ismsisdnError = true;
        }
    };
    /**
     * this class will be triggered when an item is deleted.
     * @param event
     */
    WhitelistMainComponent.prototype.onDeleteHandler = function (event) {
        if (event) {
            this.getWhitelist();
        }
    };
    /**
     * this method is triggered when a subscriber is selected or input field is changed
     * @param event
     */
    WhitelistMainComponent.prototype.onSubscriberSelected = function () {
        this.app = '';
        this.api = '';
        this.applicationList = [];
        this.apiList = [];
        var invalid = true;
        this.isInvalidFieldError = false;
        for (var _a = 0, _b = this.subscriberList; _a < _b.length; _a++) {
            var entry = _b[_a];
            if (entry == this.subscriber) {
                this.getAppsofSubscriber(this.subscriber);
                invalid = false;
            }
        }
        if (invalid) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid subscriber';
        }
    };
    /**
     * this method is triggered when an application is selected
     * @param event
     */
    WhitelistMainComponent.prototype.onAppSelected = function () {
        this.api = '';
        this.apiList = [];
        var invalid = true;
        this.isInvalidFieldError = false;
        for (var _a = 0, _b = this.applicationList; _a < _b.length; _a++) {
            var entry = _b[_a];
            if (entry == this.app) {
                this.getApis(this.app);
                invalid = false;
            }
        }
        if (invalid) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid Application';
        }
    };
    /**
     * when and API value is selected form drop down
     * @param event
     */
    WhitelistMainComponent.prototype.onApiSelected = function () {
        var invalid = true;
        this.isInvalidFieldError = false;
        for (var _a = 0, _b = this.apiList; _a < _b.length; _a++) {
            var entry = _b[_a];
            if (entry == this.api) {
                invalid = false;
            }
        }
        if (invalid) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid Api Name';
        }
    };
    /**
     * when a coma separated number list is entered
     * @param numberlistForm
     */
    WhitelistMainComponent.prototype.onUploadNumber = function (numberlistForm) {
        this.msisdnError = '';
        this.invalidFieldError = '';
        this.ismsisdnError = false;
        this.isInvalidFieldError = false;
        if (this.subscriber.length != 0 && this.app.length != 0 && this.api.length != 0 && this.isValidInputs()) {
            this.ismsisdnError = false;
            this.msisdnList = [];
            if (this.isValid(this.msisdn)) {
                var msisdnList = this.msisdn.split(',');
                var count = 0;
                for (var _a = 0, msisdnList_1 = msisdnList; _a < msisdnList_1.length; _a++) {
                    var entry = msisdnList_1[_a];
                    this.msisdnList[count] = '+' + Number(entry);
                    count++;
                }
                this.addNewToWhitelist();
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
        }
        else {
            this.msisdnError = 'Select valid Subscriber, Application and API first';
            this.ismsisdnError = true;
        }
    };
    WhitelistMainComponent.prototype.isValidInputs = function () {
        var validSubscriber = false;
        var validApp = false;
        var validApi = false;
        for (var _a = 0, _b = this.subscriberList; _a < _b.length; _a++) {
            var entry = _b[_a];
            if (this.subscriber == entry) {
                validSubscriber = true;
            }
        }
        for (var _c = 0, _d = this.applicationList; _c < _d.length; _c++) {
            var entry = _d[_c];
            if (this.app == entry) {
                validApp = true;
            }
        }
        for (var _e = 0, _f = this.apiList; _e < _f.length; _e++) {
            var entry = _f[_e];
            if (this.api == entry) {
                validApi = true;
            }
        }
        if (!validApi) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid Api Name';
        }
        if (!validApp) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid Application Name';
        }
        if (!validSubscriber) {
            this.isInvalidFieldError = true;
            this.invalidFieldError = 'Invalid Subscriber Name';
        }
        return (validApp && validSubscriber && validApi);
    };
    /**
     * when a number range is added
     * @param numberrangeForm
     */
    WhitelistMainComponent.prototype.onUploadNumberRange = function (numberrangeForm) {
        this.msisdnRangeError = '';
        this.ismsisdnRangeError = false;
        if (this.subscriber.length != 0 && this.app.length != 0 && this.api.length != 0 && this.isValidInputs()) {
            if (this.isValidMobileNumber(this.msisdnMin.toString()) && this.isValidMobileNumber(this.msisdnMax.toString())) {
                var diff = (this.msisdnMax - this.msisdnMin);
                if (diff > 0) {
                    if (this.subscriber.length != 0 && this.app.length != 0 && this.api.length != 0) {
                        this.msisdnList = [];
                        for (var _i = 0; _i <= diff; _i++) {
                            var phone = Number(this.msisdnMin) + Number(_i);
                            this.msisdnList[_i] = '+' + phone;
                        }
                        this.addNewToWhitelist();
                    }
                    else {
                        this.msisdnRangeError = 'Select the relevant Subscriber, Application and API first';
                        this.ismsisdnRangeError = true;
                    }
                }
                else {
                    this.msisdnRangeError = 'Set minimum and maximum values in input boxes respectively';
                    this.ismsisdnRangeError = true;
                }
            }
            else {
                this.msisdnRangeError = 'The Entered Mobile Numbers are not valid mobile numbers';
                this.ismsisdnRangeError = true;
            }
        }
        else {
            this.msisdnRangeError = 'Select valid Subscriber, Application and API first';
            this.ismsisdnRangeError = true;
        }
    };
    /**
     * input value validator using regular expression
     * @param inputtxt
     * @returns {boolean}
     */
    WhitelistMainComponent.prototype.isValid = function (inputtxt) {
        var list = /^\d+(,\d+)*$/;
        var regexp = new RegExp(list);
        if (regexp.test(inputtxt)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * moble number validation (number with 11 digits.)
     * @param msisdn
     * @returns {boolean}
     */
    WhitelistMainComponent.prototype.isValidMobileNumber = function (msisdn) {
        var list = /^\d{11}$/;
        var regexp = new RegExp(list);
        if (regexp.test(msisdn)) {
            return true;
        }
        else {
            return false;
        }
    };
    WhitelistMainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-whitelist-main',
            template: __webpack_require__("../../../../../src/app/whitelist/whitelist-main/whitelist-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/whitelist/whitelist-main/whitelist-main.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_whitelist_service__["a" /* WhitelistService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_whitelist_service__["a" /* WhitelistService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */]) === 'function' && _b) || Object])
    ], WhitelistMainComponent);
    return WhitelistMainComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manageservice/manage-module-ui/src/whitelist-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/whitelist/whitelist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__whitelist_routes__ = __webpack_require__("../../../../../src/app/whitelist/whitelist.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__whitelist_main_whitelist_main_component__ = __webpack_require__("../../../../../src/app/whitelist/whitelist-main/whitelist-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__whilelist_list_whitelist_list_component__ = __webpack_require__("../../../../../src/app/whitelist/whilelist-list/whitelist-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhitelistModule", function() { return WhitelistModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WhitelistModule = (function () {
    function WhitelistModule() {
    }
    WhitelistModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__whitelist_routes__["a" /* WhitelistRoutes */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__whitelist_main_whitelist_main_component__["a" /* WhitelistMainComponent */],
                __WEBPACK_IMPORTED_MODULE_5__whilelist_list_whitelist_list_component__["a" /* WhitelistListComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], WhitelistModule);
    return WhitelistModule;
}());
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manageservice/manage-module-ui/src/whitelist.module.js.map

/***/ }),

/***/ "../../../../../src/app/whitelist/whitelist.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__whitelist_main_whitelist_main_component__ = __webpack_require__("../../../../../src/app/whitelist/whitelist-main/whitelist-main.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhitelistRoutes; });


var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__whitelist_main_whitelist_main_component__["a" /* WhitelistMainComponent */]
    }];
var WhitelistRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=/home/manoj/WSO2TelcoProjects/WSO2TelcoNew/manageservice/manage-module-ui/src/whitelist.routes.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map