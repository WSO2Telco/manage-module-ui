webpackJsonp([0,4],{

/***/ 1177:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"app/approvals/approvals.module": 410,
	"app/dashboard/dashboard.module": 413,
	"app/history/history.module": 416,
	"app/login/login.module": 417
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1177;


/***/ },

/***/ 1178:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(545);


/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_providers_approval_remote_data_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_services_message_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_models_application_data_models__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApprovalHelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApprovalHelperService = (function () {
    function ApprovalHelperService(approvalService, message, slimLoadingBarService) {
        this.approvalService = approvalService;
        this.message = message;
        this.slimLoadingBarService = slimLoadingBarService;
    }
    ApprovalHelperService.prototype.assignApplicationTask = function (dataType, taskId, callBack) {
        var _this = this;
        this.slimLoadingBarService.start();
        this.approvalService.assignApplicationTaskToUser(taskId).subscribe(function () {
            if (dataType == "APPLICATION") {
                _this.message.success(_this.message.APPROVAL_MESSAGES.APPLICATION_CREATION_ASSIGN_SUCCESS);
            }
            else if (dataType == "SUBSCRIPTION") {
                _this.message.success(_this.message.APPROVAL_MESSAGES.SUBSCRIPTION_CREATION_ASSIGN_SUCCESS);
            }
            callBack();
        }, function (error) {
            _this.message.error(error);
        }, function () {
            _this.slimLoadingBarService.complete();
        });
    };
    ApprovalHelperService.prototype.approveRejectTask = function (dataType, appTask, status) {
        var _this = this;
        this.slimLoadingBarService.start();
        var applicationActions = function (status) {
            var param = new __WEBPACK_IMPORTED_MODULE_3__commons_models_application_data_models__["a" /* ApproveApplicationCreationTaskParam */]();
            param.taskId = appTask.id;
            param.description = appTask.toString();
            param.selectedTier = appTask.tier;
            param.status = status;
            param.user = 'admin';
            param.taskType = "application";
            _this.approvalService.approveApplicationCreationTask(param).subscribe(function () {
                if (status == 'APPROVED') {
                    _this.message.success(_this.message.APPROVAL_MESSAGES.APP_CREATION_APPROVE_SUCCESS);
                }
                else {
                    _this.message.info(_this.message.APPROVAL_MESSAGES.APP_CREATION_REJECT_SUCCESS);
                }
                _this.approvalService.getAllTasks();
            }, function (error) {
                _this.message.error(error);
            }, function () {
                _this.slimLoadingBarService.complete();
            });
        };
        var subscriptionActions = function (status) {
            var param = new __WEBPACK_IMPORTED_MODULE_3__commons_models_application_data_models__["b" /* ApproveSubscriptionCreationTaskParam */]();
            param.taskId = appTask.id;
            param.description = appTask.toString();
            param.selectedTier = appTask.tier;
            param.status = status;
            param.user = 'admin';
            param.taskType = "subscription";
            _this.approvalService.approveSubscriptionCreationTask(param).subscribe(function () {
                if (status == 'APPROVED') {
                    _this.message.success(_this.message.APPROVAL_MESSAGES.APP_SUBSCRIPTION_APPROVE_SUCCESS);
                }
                else {
                    _this.message.info(_this.message.APPROVAL_MESSAGES.APP_SUBSCRIPTION_REJECT_SUCCESS);
                }
                _this.approvalService.getAllTasks();
            }, function (error) {
                _this.message.error(error);
            }, function () {
                _this.slimLoadingBarService.complete();
            });
        };
        var approveActions = {};
        approveActions['APPLICATION'] = applicationActions;
        approveActions['SUBSCRIPTION'] = subscriptionActions;
        approveActions[dataType.dataType] && approveActions[dataType.dataType](status);
    };
    ApprovalHelperService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__commons_services_message_service__["a" /* MessageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */]) === 'function' && _c) || Object])
    ], ApprovalHelperService);
    return ApprovalHelperService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-helper.service.js.map

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export MenuItem */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TableDataType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return User; });
/* unused harmony export LoginResponse */
var MenuItem = (function () {
    function MenuItem() {
    }
    return MenuItem;
}());
var TableDataType = (function () {
    function TableDataType(dataCategory, dataType) {
        this.dataCategory = dataCategory;
        this.dataType = dataType;
    }
    return TableDataType;
}());
var User = (function () {
    function User() {
    }
    return User;
}());
var LoginResponse = (function () {
    function LoginResponse() {
    }
    return LoginResponse;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/common-data-models.js.map

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppCommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppCommonService = (function () {
    function AppCommonService() {
        this.menuToggleStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    AppCommonService.prototype.updateMenuToggleStream = function (flag) {
        this.menuToggleStream.next(flag);
    };
    AppCommonService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AppCommonService);
    return AppCommonService;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/app-common.service.js.map

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_components_application_data_table_application_data_table_component__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commons_components_responsive_table_responsive_table_component__ = __webpack_require__(676);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["TypeaheadModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["PaginationModule"].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__commons_components_application_data_table_application_data_table_component__["a" /* ApplicationDataTableComponent */],
                __WEBPACK_IMPORTED_MODULE_6__commons_components_responsive_table_responsive_table_component__["a" /* ResponsiveTableComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__commons_components_application_data_table_application_data_table_component__["a" /* ApplicationDataTableComponent */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__commons_components_responsive_table_responsive_table_component__["a" /* ResponsiveTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["TypeaheadModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["PaginationModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/shared.module.js.map

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApprovalHistoryFilter; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ApprovalHistory; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ApprovalHistoryDataset; });
/* unused harmony export Subscriber */
/* unused harmony export Application */
var ApprovalHistoryFilter = (function () {
    function ApprovalHistoryFilter() {
        this.fromDate = '';
        this.toDate = '';
        this.subscriber = '';
        this.api = '';
        this.applicationId = 0;
        this.operator = '';
        this.offset = 0;
        this.count = 10;
    }
    return ApprovalHistoryFilter;
}());
var ApprovalHistory = (function () {
    function ApprovalHistory() {
        this.applicationId = 0;
    }
    return ApprovalHistory;
}());
var ApprovalHistoryDataset = (function () {
    function ApprovalHistoryDataset() {
        this.recordsCol = [];
    }
    return ApprovalHistoryDataset;
}());
var Subscriber = (function () {
    function Subscriber() {
    }
    return Subscriber;
}());
var Application = (function () {
    function Application() {
    }
    return Application;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/reporing-data-models.js.map

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_models_dashboard_data_models__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approval_remote_data_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardRemoteDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DashboardRemoteDataService = (function () {
    function DashboardRemoteDataService(http, apiContext, approvalService) {
        var _this = this;
        this.http = http;
        this.apiContext = apiContext;
        this.approvalService = approvalService;
        /**
         * Application and Subscription Creation History Graph Data Stream
         * @type {BehaviorSubject<HistoryBarGraphData>}
         */
        this.CreationHistoryGraphDataProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this._dashboardStatisticsData = new __WEBPACK_IMPORTED_MODULE_3__commons_models_dashboard_data_models__["a" /* DashboardData */]();
        this.apiEndpoints = {
            dashboardData: this.apiContext + '/applications/statistics',
            graph: this.apiContext + '/applications/graph',
        };
        this.DashboardDataProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"]();
        approvalService.MyApplicationCreationTasksProvider.subscribe(function (result) {
            _this.updateDashboardData(result, 'appCreationsForUser');
        });
        approvalService.MySubscriptionTasksProvider.subscribe(function (result) {
            _this.updateDashboardData(result, 'subCreationsForUser');
        });
        approvalService.GroupApplicationCreationTasksProvider.subscribe(function (result) {
            _this.updateDashboardData(result, 'appCreationsForGroup');
        });
        approvalService.GroupSubscriptionTasksProvider.subscribe(function (result) {
            _this.updateDashboardData(result, 'subCreationsForGroup');
        });
    }
    DashboardRemoteDataService.prototype.getDashboardData = function () {
        var param = new __WEBPACK_IMPORTED_MODULE_3__commons_models_dashboard_data_models__["b" /* DashboardDataRequestParam */]();
        param.assignee = 'admin';
        param.candidateGroups = 'Internal/subscriber,manage-app-admin,Internal/identity,Internal/everyone,admin';
        return this.http.post(this.apiEndpoints['dashboardData'], param, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ;
    DashboardRemoteDataService.prototype.updateDashboardData = function (result, type) {
        var changeObj = {};
        changeObj[type] = (result && result.applicationTasks && result.applicationTasks.length) || 0;
        this._dashboardStatisticsData = Object.assign({}, this._dashboardStatisticsData, changeObj);
        this._dashboardStatisticsData.totalAppCreations = this._dashboardStatisticsData.appCreationsForGroup + this._dashboardStatisticsData.appCreationsForUser;
        this._dashboardStatisticsData.totalSubCreations = this._dashboardStatisticsData.subCreationsForGroup + this._dashboardStatisticsData.subCreationsForUser;
        this.DashboardDataProvider.next(this._dashboardStatisticsData);
    };
    DashboardRemoteDataService.prototype.getCreationHistoryGraphData = function () {
        this.http.get(this.apiEndpoints['graph'], this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    DashboardRemoteDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_CONTEXT')), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, String, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _b) || Object])
    ], DashboardRemoteDataService);
    return DashboardRemoteDataService;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/dashboard-remote-data.service.js.map

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginRemoteDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginRemoteDataService = (function () {
    function LoginRemoteDataService(http) {
        this.http = http;
        this.apiContext = 'api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.apiEndpoints = {
            login: this.apiContext + '/authentication/login',
            logout: this.apiContext + '/authentication/logout',
        };
    }
    /**
     * Login service api
     * @param data
     * @returns {Observable<User>}
     */
    LoginRemoteDataService.prototype.login = function (data) {
        return this.http.post(this.apiEndpoints['login'], data, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().message); });
    };
    /**
     * Logout Service api
     * @param userId
     * @returns {Observable<boolean>}
     */
    LoginRemoteDataService.prototype.logout = function (userId) {
        return this.http.get(this.apiEndpoints['logout'] + '/' + userId)
            .map(function (response) { return response.json().success; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().message); });
    };
    LoginRemoteDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], LoginRemoteDataService);
    return LoginRemoteDataService;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/login_remote-data.service.js.map

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_models_reporing_data_models__ = __webpack_require__(262);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReportingRemoteDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ReportingRemoteDataService = (function () {
    function ReportingRemoteDataService(apiContext, http, message, slimLoadingBarService) {
        this.apiContext = apiContext;
        this.http = http;
        this.message = message;
        this.slimLoadingBarService = slimLoadingBarService;
        /**
         * Subscribers stream
         * @type {BehaviorSubject<string[]>}
         */
        this.SubscribersProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        /**
         * Operators Stream
         * @type {BehaviorSubject<string[]>}
         */
        this.OperatorsProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        /**
         * Applications Stream
         * @type {BehaviorSubject<any[]>}
         */
        this.ApplicationsProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        /**
         * Approval History stream
         * @type {BehaviorSubject<ApprovalHistory[]>}
         */
        this.ApprovalHistoryProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.apiEndpoints = {
            subscribers: this.apiContext + '/reports/subscribers',
            operators: this.apiContext + '/reports/operators',
            approvalHistory: this.apiContext + '/reports/approval',
            applications: this.apiContext + '/reports/applications',
        };
    }
    ReportingRemoteDataService.prototype.getSubscribers = function () {
        var _this = this;
        this.slimLoadingBarService.start();
        this.http.get(this.apiEndpoints['subscribers'], this.options)
            .map(function (response) { return response.json(); })
            .subscribe(function (subscribers) {
            _this.SubscribersProvider.next(subscribers);
        }, function (error) {
            _this.message.error(error);
            _this.slimLoadingBarService.complete();
        }, function () {
            _this.slimLoadingBarService.complete();
        });
    };
    ReportingRemoteDataService.prototype.getOperators = function () {
        var _this = this;
        this.slimLoadingBarService.start();
        this.http.get(this.apiEndpoints['operators'], this.options)
            .map(function (response) { return response.json(); })
            .subscribe(function (operators) {
            _this.OperatorsProvider.next(operators);
        }, function (error) {
            _this.message.error(error);
            _this.slimLoadingBarService.complete();
        }, function () {
            _this.slimLoadingBarService.complete();
        });
    };
    ReportingRemoteDataService.prototype.getApplicationsBySubscriber = function (subscriber) {
        var _this = this;
        if (!!subscriber) {
            this.slimLoadingBarService.start();
            this.http.get(this.apiEndpoints['applications'] + '/' + subscriber, this.options)
                .map(function (response) { return response.json(); })
                .subscribe(function (applications) {
                _this.ApplicationsProvider.next(applications);
            }, function (error) {
                _this.message.error(error);
                _this.slimLoadingBarService.complete();
            }, function () {
                _this.slimLoadingBarService.complete();
            });
        }
        else {
            this.ApplicationsProvider.next([]);
        }
    };
    ReportingRemoteDataService.prototype.getApprovalHistory = function (approvalHistoryFilter) {
        var _this = this;
        var filter = Object.assign({}, approvalHistoryFilter);
        this.slimLoadingBarService.start();
        if (!!!filter.subscriber) {
            filter.subscriber = '__ALL__';
        }
        if (!!!filter.operator) {
            filter.operator = '__ALL__';
        }
        this.http.post(this.apiEndpoints['approvalHistory'], filter, this.options)
            .map(function (response) { return response.json(); })
            .flatMap(function (res) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].from(res); })
            .reduce(function (arr, cur) {
            if (cur.length == 1) {
                arr.noOfRecords = cur[0];
            }
            else {
                var tmp = new __WEBPACK_IMPORTED_MODULE_5__commons_models_reporing_data_models__["b" /* ApprovalHistory */]();
                tmp.applicationId = cur[0];
                tmp.applicationName = cur[1];
                tmp.applicationDescription = cur[2];
                tmp.status = cur[3];
                tmp.approvedOn = cur[4];
                arr.recordsCol.push(tmp);
            }
            return arr;
        }, new __WEBPACK_IMPORTED_MODULE_5__commons_models_reporing_data_models__["c" /* ApprovalHistoryDataset */]())
            .subscribe(function (approvalHistory) {
            _this.ApprovalHistoryProvider.next(approvalHistory);
        }, function (error) {
            _this.message.error(error);
            _this.slimLoadingBarService.complete();
        }, function () {
            _this.slimLoadingBarService.complete();
        });
    };
    ReportingRemoteDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_CONTEXT')), 
        __metadata('design:paramtypes', [String, (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */]) === 'function' && _c) || Object])
    ], ReportingRemoteDataService);
    return ReportingRemoteDataService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/reporting-remote-data.service.js.map

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppGuard; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return LoginGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppGuard = (function () {
    function AppGuard(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    AppGuard.prototype.canActivate = function () {
        if (this._authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['login']);
            return false;
        }
    };
    AppGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AppGuard);
    return AppGuard;
    var _a, _b;
}());
var LoginGuard = (function () {
    function LoginGuard(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        if (this._authenticationService.isLoggedIn()) {
            this._router.navigate(['home']);
            return false;
        }
        else {
            return true;
        }
    };
    LoginGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginGuard);
    return LoginGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/app.guard.js.map

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_models_application_data_models__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approval_helper_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_models_common_data_models__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApplicationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApplicationsComponent = (function () {
    function ApplicationsComponent(message, approvalHelperService, approvalService) {
        this.message = message;
        this.approvalHelperService = approvalHelperService;
        this.approvalService = approvalService;
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userApplicationFilter = new __WEBPACK_IMPORTED_MODULE_1__commons_models_application_data_models__["c" /* ApplicationTaskFilter */](new __WEBPACK_IMPORTED_MODULE_5__commons_models_common_data_models__["a" /* TableDataType */]('USER', 'APPLICATION'), 10);
        this.groupApplicationFilter = new __WEBPACK_IMPORTED_MODULE_1__commons_models_application_data_models__["c" /* ApplicationTaskFilter */](new __WEBPACK_IMPORTED_MODULE_5__commons_models_common_data_models__["a" /* TableDataType */]('GROUP', 'APPLICATION'), 10);
        this.approvalService.MyApplicationCreationTasksProvider.subscribe(function (apps) {
            _this.myApplications = apps;
        }, function (error) {
            _this.message.error(error);
        });
        this.approvalService.GroupApplicationCreationTasksProvider.subscribe(function (apps) {
            _this.allApplications = apps;
        }, function (error) {
            _this.message.error(error);
        });
        this.getData();
    };
    ApplicationsComponent.prototype.getData = function () {
        this.approvalService.getFilteredResult(this.userApplicationFilter);
        this.approvalService.getUserGroupApplicationTasks(this.groupApplicationFilter);
    };
    ApplicationsComponent.prototype.onAssignTaskHandler = function (event) {
        var _this = this;
        this.approvalHelperService.assignApplicationTask(event.dataType.dataType, event.task.id, function () {
            _this.getData();
        });
    };
    ApplicationsComponent.prototype.onApproveRejectHandler = function (event) {
        this.approvalHelperService.approveRejectTask(event.dataType, event.task, event.status);
    };
    ApplicationsComponent.prototype.onFilterChangeHandler = function (event) {
        this.approvalService.getFilteredResult(event);
    };
    ApplicationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-applications',
            template: __webpack_require__(893),
            styles: [__webpack_require__(873)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__approval_helper_service__["a" /* ApprovalHelperService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__approval_helper_service__["a" /* ApprovalHelperService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _c) || Object])
    ], ApplicationsComponent);
    return ApplicationsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/applications.component.js.map

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApprovalMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApprovalMainComponent = (function () {
    function ApprovalMainComponent() {
    }
    ApprovalMainComponent.prototype.ngOnInit = function () {
    };
    ApprovalMainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-approval-main',
            template: "<router-outlet></router-outlet>",
            styles: [__webpack_require__(874)]
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalMainComponent);
    return ApprovalMainComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-main.component.js.map

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applications_applications_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscriptions_subscriptions_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approval_routes__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__approval_main_approval_main_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(184);
/* harmony export (binding) */ __webpack_require__.d(exports, "ApprovalsModule", function() { return ApprovalsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApprovalsModule = (function () {
    function ApprovalsModule() {
    }
    ApprovalsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__approval_routes__["a" /* ApprovalRoutes */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__applications_applications_component__["a" /* ApplicationsComponent */], __WEBPACK_IMPORTED_MODULE_3__subscriptions_subscriptions_component__["a" /* SubscriptionsComponent */], __WEBPACK_IMPORTED_MODULE_5__approval_main_approval_main_component__["a" /* ApprovalMainComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalsModule);
    return ApprovalsModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approvals.module.js.map

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_models_application_data_models__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approval_helper_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_models_common_data_models__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SubscriptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubscriptionsComponent = (function () {
    function SubscriptionsComponent(message, approvalHelperService, approvalService) {
        this.message = message;
        this.approvalHelperService = approvalHelperService;
        this.approvalService = approvalService;
    }
    SubscriptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mySubscriptionFilter = new __WEBPACK_IMPORTED_MODULE_1__commons_models_application_data_models__["c" /* ApplicationTaskFilter */](new __WEBPACK_IMPORTED_MODULE_5__commons_models_common_data_models__["a" /* TableDataType */]('USER', 'SUBSCRIPTION'), 10);
        this.groupSubscriptionFilter = new __WEBPACK_IMPORTED_MODULE_1__commons_models_application_data_models__["c" /* ApplicationTaskFilter */](new __WEBPACK_IMPORTED_MODULE_5__commons_models_common_data_models__["a" /* TableDataType */]('GROUP', 'SUBSCRIPTION'), 10);
        this.approvalService.MySubscriptionTasksProvider.subscribe(function (subs) {
            _this.mySubscriptions = subs;
        }, function (error) {
            _this.message.error(error);
        });
        this.approvalService.GroupSubscriptionTasksProvider.subscribe(function (subs) {
            _this.allSubscriptions = subs;
        }, function (error) {
            _this.message.error(error);
        });
        this.getData();
    };
    SubscriptionsComponent.prototype.getData = function () {
        this.approvalService.getUserAppSubscriptionTasks(this.mySubscriptionFilter);
        this.approvalService.getUserGroupAppSubscriptionTask(this.groupSubscriptionFilter);
    };
    SubscriptionsComponent.prototype.onAssignTaskHandler = function (event) {
        var _this = this;
        this.approvalHelperService.assignApplicationTask(event.dataType.dataType, event.task.id, function () {
            _this.getData();
        });
    };
    SubscriptionsComponent.prototype.onApproveRejectHandler = function (event) {
        this.approvalHelperService.approveRejectTask(event.dataType, event.task, event.status);
    };
    SubscriptionsComponent.prototype.onFilterChangeHandler = function (event) {
        this.approvalService.getFilteredResult(event);
    };
    SubscriptionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subscriptions',
            template: __webpack_require__(894),
            styles: [__webpack_require__(875)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__["a" /* MessageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__approval_helper_service__["a" /* ApprovalHelperService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__approval_helper_service__["a" /* ApprovalHelperService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _c) || Object])
    ], SubscriptionsComponent);
    return SubscriptionsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/subscriptions.component.js.map

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardData; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return DashboardDataRequestParam; });
/* unused harmony export HistoryBarGraphData */
var DashboardData = (function () {
    function DashboardData() {
        this.appCreationsForUser = 0;
        this.appCreationsForGroup = 0;
        this.totalAppCreations = 0;
        this.subCreationsForUser = 0;
        this.subCreationsForGroup = 0;
        this.totalSubCreations = 0;
    }
    return DashboardData;
}());
var DashboardDataRequestParam = (function () {
    function DashboardDataRequestParam() {
    }
    return DashboardDataRequestParam;
}());
var HistoryBarGraphData = (function () {
    function HistoryBarGraphData() {
    }
    return HistoryBarGraphData;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/dashboard-data-models.js.map

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routes__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approval_summery_approval_summery_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__approval_count_approval_count_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__approval_history_graph_approval_history_graph_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_helper_service__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__(184);
/* harmony export (binding) */ __webpack_require__.d(exports, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_routes__["a" /* DashboardRoutes */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__dashboard_helper_service__["a" /* DashboardHelperService */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__approval_summery_approval_summery_component__["a" /* ApprovalSummeryComponent */],
                __WEBPACK_IMPORTED_MODULE_5__approval_count_approval_count_component__["a" /* ApprovalCountComponent */],
                __WEBPACK_IMPORTED_MODULE_6__approval_history_graph_approval_history_graph_component__["a" /* ApprovalHistoryGraphComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/dashboard.module.js.map

/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_models_application_data_models__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_providers_dashboard_remote_data_service__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_services_message_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__approvals_approval_helper_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commons_models_common_data_models__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(approvalService, approvalHelperService, dashboardService, message) {
        this.approvalService = approvalService;
        this.approvalHelperService = approvalHelperService;
        this.dashboardService = dashboardService;
        this.message = message;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myApplicationFilter = new __WEBPACK_IMPORTED_MODULE_1__commons_models_application_data_models__["c" /* ApplicationTaskFilter */](new __WEBPACK_IMPORTED_MODULE_6__commons_models_common_data_models__["a" /* TableDataType */]('USER', 'APPLICATION'));
        this.mySubscriptionFilter = new __WEBPACK_IMPORTED_MODULE_1__commons_models_application_data_models__["c" /* ApplicationTaskFilter */](new __WEBPACK_IMPORTED_MODULE_6__commons_models_common_data_models__["a" /* TableDataType */]('USER', 'SUBSCRIPTION'));
        this.groupApplicationFilter = new __WEBPACK_IMPORTED_MODULE_1__commons_models_application_data_models__["c" /* ApplicationTaskFilter */](new __WEBPACK_IMPORTED_MODULE_6__commons_models_common_data_models__["a" /* TableDataType */]('GROUP', 'APPLICATION'));
        this.groupSubscriptionFilter = new __WEBPACK_IMPORTED_MODULE_1__commons_models_application_data_models__["c" /* ApplicationTaskFilter */](new __WEBPACK_IMPORTED_MODULE_6__commons_models_common_data_models__["a" /* TableDataType */]('GROUP', 'SUBSCRIPTION'));
        this.approvalService.MyApplicationCreationTasksProvider.subscribe(function (response) {
            _this.myApplications = response;
        }, function (error) { return _this.message.error(error); });
        this.approvalService.MySubscriptionTasksProvider.subscribe(function (response) {
            _this.myAppSubscriptionTask = response;
        }, function (error) { return _this.message.error(error); });
        this.approvalService.GroupApplicationCreationTasksProvider.subscribe(function (response) {
            _this.allApplications = response;
        }, function (error) { return _this.message.error(error); });
        this.approvalService.GroupSubscriptionTasksProvider.subscribe(function (response) {
            _this.allSubscriptions = response;
        }, function (error) {
            _this.message.error(error);
        });
        this.dashboardService.DashboardDataProvider.subscribe(function (response) { return _this.dashboardData = response; }, function (error) { return _this.message.error(error); });
        this.approvalService.getAllTasks();
    };
    HomeComponent.prototype.onAssignTaskHandler = function (event) {
        var _this = this;
        this.approvalHelperService.assignApplicationTask(event.dataType.dataType, event.task.id, function () {
            _this.approvalService.getAllTasks();
        });
    };
    HomeComponent.prototype.onApproveRejectHandler = function (event) {
        this.approvalHelperService.approveRejectTask(event.dataType, event.task, event.status);
    };
    HomeComponent.prototype.onFilterChangeHandler = function (event) {
        this.approvalService.getFilteredResult(event);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(904),
            styles: [__webpack_require__(886)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__approvals_approval_helper_service__["a" /* ApprovalHelperService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__approvals_approval_helper_service__["a" /* ApprovalHelperService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__data_providers_dashboard_remote_data_service__["a" /* DashboardRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__data_providers_dashboard_remote_data_service__["a" /* DashboardRemoteDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__commons_services_message_service__["a" /* MessageService */]) === 'function' && _d) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/home.component.js.map

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_providers_reporting_remote_data_service__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_models_reporing_data_models__ = __webpack_require__(262);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HistoryMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryMainComponent = (function () {
    function HistoryMainComponent(reportingService) {
        this.reportingService = reportingService;
        this.fieldSet = ["applicationId", "applicationName", "applicationDescription", "status", "approvedOn"];
        this.totalItems = 0;
        this.currentPage = 1;
    }
    HistoryMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = new __WEBPACK_IMPORTED_MODULE_2__commons_models_reporing_data_models__["a" /* ApprovalHistoryFilter */]();
        this.filter.count = 10;
        this.reportingService.ApprovalHistoryProvider.subscribe(function (history) {
            _this.approvalHistoryData = history;
            _this.totalItems = (_this.approvalHistoryData && _this.approvalHistoryData.noOfRecords) || _this.totalItems;
        });
        this.reportingService.getSubscribers();
        this.reportingService.getOperators();
        this.reportingService.getApprovalHistory(this.filter);
    };
    HistoryMainComponent.prototype.onFilterChangeHandler = function (event) {
        this.filter = event;
        this.reportingService.getApprovalHistory(this.filter);
    };
    HistoryMainComponent.prototype.onPageChanged = function (event) {
        this.filter.offset = (event.page - 1) * this.filter.count;
        this.reportingService.getApprovalHistory(this.filter);
    };
    HistoryMainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-history-main',
            template: __webpack_require__(906),
            styles: [__webpack_require__(888)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_providers_reporting_remote_data_service__["a" /* ReportingRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__data_providers_reporting_remote_data_service__["a" /* ReportingRemoteDataService */]) === 'function' && _a) || Object])
    ], HistoryMainComponent);
    return HistoryMainComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/history-main.component.js.map

/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_panel_search_panel_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_results_search_results_component__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_main_history_main_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_routes__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_filter_history_filter_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__(184);
/* harmony export (binding) */ __webpack_require__.d(exports, "HistoryModule", function() { return HistoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HistoryModule = (function () {
    function HistoryModule() {
    }
    HistoryModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__history_routes__["a" /* HistoryRoutes */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__search_panel_search_panel_component__["a" /* SearchPanelComponent */], __WEBPACK_IMPORTED_MODULE_3__search_results_search_results_component__["a" /* SearchResultsComponent */], __WEBPACK_IMPORTED_MODULE_4__history_main_history_main_component__["a" /* HistoryMainComponent */], __WEBPACK_IMPORTED_MODULE_6__history_filter_history_filter_component__["a" /* HistoryFilterComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HistoryModule);
    return HistoryModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/history.module.js.map

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routes__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_login_user_login_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(exports, "LoginModule", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__login_routes__["a" /* LoginRoutes */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__user_login_user_login_component__["a" /* UserLoginComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/login.module.js.map

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserLoginComponent = (function () {
    function UserLoginComponent(_authenticationService) {
        this._authenticationService = _authenticationService;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.prototype.onLoginClick = function (loginForm) {
        var _this = this;
        this.isSubmitted = true;
        if (loginForm.valid) {
            this._authenticationService.doLogin(this.userName, this.password, function (errorMsg) {
                _this.loginError = errorMsg;
                setTimeout(function () { _this.loginError = null; }, 5000);
            });
        }
    };
    UserLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(909),
            styles: [__webpack_require__(891)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], UserLoginComponent);
    return UserLoginComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/user-login.component.js.map

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"app/approvals/approvals.module": [
		410
	],
	"app/dashboard/dashboard.module": [
		413
	],
	"app/history/history.module": [
		416
	],
	"app/login/login.module": [
		417
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 544;


/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(667);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/main.js.map

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__(508);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = (function () {
    function MessageService(toast) {
        this.toast = toast;
        this.toastOptions = {
            title: '',
            msg: '',
            showClose: true,
            timeout: 7000,
            theme: 'material'
        };
        this.APPROVAL_MESSAGES = {
            APPLICATION_CREATION_ASSIGN_SUCCESS: 'Application creation task successfully assigned',
            SUBSCRIPTION_CREATION_ASSIGN_SUCCESS: 'Subscription creation task successfully assigned',
            APP_CREATION_APPROVE_SUCCESS: 'Application successfully approved',
            APP_CREATION_REJECT_SUCCESS: 'Application successfully rejected',
            APP_SUBSCRIPTION_APPROVE_SUCCESS: 'Application subscription successfully approved',
            APP_SUBSCRIPTION_REJECT_SUCCESS: 'Application subscription successfully rejected'
        };
    }
    MessageService.prototype.success = function (message, title) {
        this.toast.success(Object.assign({}, this.toastOptions, { title: title, msg: message }));
    };
    MessageService.prototype.error = function (message, title) {
        this.toast.error(Object.assign({}, this.toastOptions, { title: title, msg: message }));
    };
    MessageService.prototype.warning = function (message, title) {
        this.toast.warning(Object.assign({}, this.toastOptions, { title: title, msg: message }));
    };
    MessageService.prototype.info = function (message, title) {
        this.toast.info(Object.assign({}, this.toastOptions, { title: title, msg: message }));
    };
    MessageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */]) === 'function' && _a) || Object])
    ], MessageService);
    return MessageService;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/message.service.js.map

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_models_application_data_models__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_services_authentication_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commons_services_message_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApprovalRemoteDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ApprovalRemoteDataService = (function () {
    function ApprovalRemoteDataService(http, apiContext, slimLoadingBarService, message, authService) {
        this.http = http;
        this.apiContext = apiContext;
        this.slimLoadingBarService = slimLoadingBarService;
        this.message = message;
        this.authService = authService;
        /**
         * Application Creations assigned to USER Stream
         * @type {BehaviorSubject<ApplicationTask[]>}
         */
        this.MyApplicationCreationTasksProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        /**
         * Application Creations assigned to GROUP user belongs to
         * @type {BehaviorSubject<ApplicationTask[]>}
         */
        this.GroupApplicationCreationTasksProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        /**
         * Application Api subscription creations assigned to USER Stream
         * @type {BehaviorSubject<ApplicationTask[]>}
         */
        this.MySubscriptionTasksProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        /**
         * Application Api subscription creations assigned to GROUP Stream
         * @type {BehaviorSubject<ApplicationTask[]>}
         */
        this.GroupSubscriptionTasksProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.modifiedApplicationTaskIDs = new Array();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.apiEndpoints = {
            search: this.apiContext + '/applications/search',
            assign: this.apiContext + '/applications/assign',
            approveApplicationCreation: this.apiContext + '/applications/approve/application/creation',
            approveSubscriptionCreation: this.apiContext + '/applications/approve/subscription/creation'
        };
        this.actionMap = {
            USER: {
                APPLICATION: this.getUserApplicationTasks,
                SUBSCRIPTION: this.getUserAppSubscriptionTasks
            },
            GROUP: {
                APPLICATION: this.getUserGroupApplicationTasks,
                SUBSCRIPTION: this.getUserGroupAppSubscriptionTask
            }
        };
    }
    ApprovalRemoteDataService.prototype.updateModifiedTask = function (result, modified) {
        if (!!result) {
            return result.map(function (task) {
                task.isModified = modified.indexOf(task.id) >= 0 ? true : false;
                return task;
            }).sort(function (taskOne, taskTwo) {
                if (taskOne.isModified && !taskTwo.isModified) {
                    return -1;
                }
                if (!taskOne.isModified && taskTwo.isModified) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            return [];
        }
    };
    ApprovalRemoteDataService.prototype.getFilteredObservable = function (appTask, filter) {
        if (appTask && filter) {
            return appTask
                .filter(function (task) { return filter.ids.length == 0 || filter.ids.indexOf(task.id) >= 0; })
                .filter(function (task) { return filter.appNames.length == 0 || filter.appNames.indexOf(task.applicationName) >= 0; })
                .filter(function (task) { return filter.users.length == 0 || filter.users.indexOf(task.userName) >= 0; })
                .reduce(function (acc, curr) {
                acc.push(curr);
                return acc;
            }, []);
        }
        else {
            return appTask;
        }
    };
    ApprovalRemoteDataService.prototype.getUserApplicationTasks = function (filter) {
        var _this = this;
        var loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            var param = {
                assignee: loginInfo.userName,
                size: 100,
                start: 0,
                processType: "APPLICATION_CREATION",
                candidateGroups: null
            };
            if (!!filter) {
                param.size = filter.numberOfRecordsPerPage;
                param.start = filter.startRecordNumber;
            }
            this.slimLoadingBarService.start();
            this.http.post(this.apiEndpoints['search'], param, this.options)
                .map(function (response) { return response.json(); })
                .subscribe(function (result) {
                if (!!filter) {
                    result.applicationTasks = _this.getFilteredObservable(result.applicationTasks, filter);
                }
                result.applicationTasks = _this.updateModifiedTask(result.applicationTasks, _this.modifiedApplicationTaskIDs);
                _this.MyApplicationCreationTasksProvider.next(result);
            }, function (error) {
                _this.slimLoadingBarService.stop();
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message);
            }, function () {
                _this.slimLoadingBarService.complete();
            });
        }
    };
    ApprovalRemoteDataService.prototype.getUserGroupApplicationTasks = function (filter) {
        var _this = this;
        var loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            var param = {
                assignee: null,
                processType: "APPLICATION_CREATION",
                size: 100,
                start: 0,
                candidateGroups: loginInfo.roles.toString()
            };
            if (!!filter) {
                param.size = filter.numberOfRecordsPerPage;
                param.start = filter.startRecordNumber;
            }
            this.slimLoadingBarService.start();
            this.http.post(this.apiEndpoints['search'], param, this.options)
                .map(function (response) { return response.json(); })
                .subscribe(function (result) {
                if (!!filter) {
                    result.applicationTasks = _this.getFilteredObservable(result.applicationTasks, filter);
                }
                result.applicationTasks = _this.updateModifiedTask(result.applicationTasks, _this.modifiedApplicationTaskIDs);
                _this.GroupApplicationCreationTasksProvider.next(result);
            }, function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); }, function () {
                _this.slimLoadingBarService.complete();
            });
        }
    };
    ApprovalRemoteDataService.prototype.getUserAppSubscriptionTasks = function (filter) {
        var _this = this;
        var loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            var param = {
                assignee: loginInfo.userName,
                size: 100,
                start: 0,
                processType: "SUBSCRIPTION_CREATION",
                candidateGroups: null
            };
            if (!!filter) {
                param.size = filter.numberOfRecordsPerPage;
                param.start = filter.startRecordNumber;
            }
            this.slimLoadingBarService.start();
            this.http.post(this.apiEndpoints['search'], param, this.options)
                .map(function (response) { return response.json(); })
                .subscribe(function (result) {
                if (!!filter) {
                    result.applicationTasks = _this.getFilteredObservable(result.applicationTasks, filter);
                }
                result.applicationTasks = _this.updateModifiedTask(result.applicationTasks, _this.modifiedApplicationTaskIDs);
                _this.MySubscriptionTasksProvider.next(result);
            }, function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); }, function () {
                _this.slimLoadingBarService.complete();
            });
        }
    };
    ApprovalRemoteDataService.prototype.getUserGroupAppSubscriptionTask = function (filter) {
        var _this = this;
        var loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            var param = {
                assignee: null,
                size: 100,
                start: 0,
                processType: "SUBSCRIPTION_CREATION",
                candidateGroups: loginInfo.roles.toString()
            };
            if (!!filter) {
                param.size = filter.numberOfRecordsPerPage;
                param.start = filter.startRecordNumber;
            }
            this.slimLoadingBarService.start();
            this.http.post(this.apiEndpoints['search'], param, this.options)
                .map(function (response) { return response.json(); })
                .subscribe(function (result) {
                if (!!filter) {
                    result.applicationTasks = _this.getFilteredObservable(result.applicationTasks, filter);
                }
                result.applicationTasks = _this.updateModifiedTask(result.applicationTasks, _this.modifiedApplicationTaskIDs);
                _this.GroupSubscriptionTasksProvider.next(result);
            }, function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); }, function () {
                _this.slimLoadingBarService.complete();
            });
        }
    };
    ApprovalRemoteDataService.prototype.assignApplicationTaskToUser = function (taskId) {
        var _this = this;
        var loginInfo = this.authService.loginUserInfo.getValue();
        if (!!loginInfo) {
            var param = new __WEBPACK_IMPORTED_MODULE_3__commons_models_application_data_models__["d" /* AssignApplicationTaskParam */]();
            param.assignee = loginInfo.userName;
            param.taskId = taskId;
            return this.http.post(this.apiEndpoints['assign'], param, this.options)
                .map(function (response) {
                _this.modifiedApplicationTaskIDs.push(taskId);
                return response.json();
            })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
        }
    };
    ApprovalRemoteDataService.prototype.getModifiedTaskIds = function () {
        return this.modifiedApplicationTaskIDs;
    };
    ApprovalRemoteDataService.prototype.approveApplicationCreationTask = function (param) {
        return this.http.post(this.apiEndpoints['approveApplicationCreation'], param, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ApprovalRemoteDataService.prototype.approveSubscriptionCreationTask = function (param) {
        return this.http.post(this.apiEndpoints['approveSubscriptionCreation'], param, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ApprovalRemoteDataService.prototype.getAllTasks = function () {
        this.getUserApplicationTasks();
        this.getUserAppSubscriptionTasks();
        this.getUserGroupApplicationTasks();
        this.getUserGroupAppSubscriptionTask();
    };
    ApprovalRemoteDataService.prototype.getFilteredResult = function (filter) {
        this.actionMap[filter.dataType.dataCategory][filter.dataType.dataType] && this.actionMap[filter.dataType.dataCategory][filter.dataType.dataType].call(this, filter);
    };
    ApprovalRemoteDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_CONTEXT')), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, String, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__commons_services_message_service__["a" /* MessageService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object])
    ], ApprovalRemoteDataService);
    return ApprovalRemoteDataService;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-remote-data.service.js.map

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_services_app_common_service__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_authenticationService, _appCommonService) {
        this._authenticationService = _authenticationService;
        this._appCommonService = _appCommonService;
        this.isLoggedIn = false;
        this.isMenuExpanded = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = this._authenticationService.isLoggedIn();
        this._authenticationService.loginUserInfo.subscribe(function (userInfo) { _this.isLoggedIn = !!userInfo; });
        this._appCommonService.menuToggleStream.subscribe(function (isExpand) { return _this.isMenuExpanded = isExpand; });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'body',
            template: __webpack_require__(892),
            styles: [":host{background-color:blue}"],
            styles: [__webpack_require__(872)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__commons_services_app_common_service__["a" /* AppCommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__commons_services_app_common_service__["a" /* AppCommonService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/app.component.js.map

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__commons_commons_module__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_guard__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__commons_components_header_header_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commons_components_hamburger_menu_hamburger_menu_component__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__commons_components_user_avatar_user_avatar_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__commons_components_main_menu_main_menu_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__commons_components_breadcrumbs_breadcrumbs_component__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_providers_data_providers_module__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_toasty__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__data_providers_approval_remote_data_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_providers_dashboard_remote_data_service__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__approvals_approval_helper_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_shared_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__data_providers_reporting_remote_data_service__ = __webpack_require__(265);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__commons_components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__commons_components_hamburger_menu_hamburger_menu_component__["a" /* HamburgerMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__commons_components_user_avatar_user_avatar_component__["a" /* UserAvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__commons_components_main_menu_main_menu_component__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__commons_components_breadcrumbs_breadcrumbs_component__["a" /* BreadcrumbsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* RootLevelRoutes */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__commons_commons_module__["a" /* CommonsModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_20__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_15__data_providers_data_providers_module__["a" /* DataProvidersModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["ButtonsModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["PopoverModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["DropdownModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["TooltipModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_ng2_toasty__["a" /* ToastyModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["TypeaheadModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__app_guard__["a" /* AppGuard */],
                __WEBPACK_IMPORTED_MODULE_8__app_guard__["b" /* LoginGuard */],
                __WEBPACK_IMPORTED_MODULE_17__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */],
                __WEBPACK_IMPORTED_MODULE_18__data_providers_dashboard_remote_data_service__["a" /* DashboardRemoteDataService */],
                __WEBPACK_IMPORTED_MODULE_21__data_providers_reporting_remote_data_service__["a" /* ReportingRemoteDataService */],
                __WEBPACK_IMPORTED_MODULE_19__approvals_approval_helper_service__["a" /* ApprovalHelperService */],
                {
                    provide: 'API_CONTEXT',
                    useValue: 'api'
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/app.module.js.map

/***/ },

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_guard__ = __webpack_require__(407);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RootLevelRoutes; });


var routes = [
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__app_guard__["b" /* LoginGuard */]]
    },
    {
        path: 'home',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__app_guard__["a" /* AppGuard */]]
    },
    {
        path: 'history',
        loadChildren: 'app/history/history.module#HistoryModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__app_guard__["a" /* AppGuard */]]
    },
    {
        path: 'approvals',
        loadChildren: 'app/approvals/approvals.module#ApprovalsModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__app_guard__["a" /* AppGuard */]]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
var RootLevelRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/app.routes.js.map

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__applications_applications_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscriptions_subscriptions_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__approval_main_approval_main_component__ = __webpack_require__(409);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApprovalRoutes; });




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__approval_main_approval_main_component__["a" /* ApprovalMainComponent */]
    },
    {
        path: 'applications',
        component: __WEBPACK_IMPORTED_MODULE_1__applications_applications_component__["a" /* ApplicationsComponent */]
    },
    {
        path: 'subscriptions',
        component: __WEBPACK_IMPORTED_MODULE_2__subscriptions_subscriptions_component__["a" /* SubscriptionsComponent */]
    }
];
var ApprovalRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval.routes.js.map

/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_providers_login_remote_data_service__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_common_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_message_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CommonsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommonsModule = (function () {
    function CommonsModule() {
    }
    CommonsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__data_providers_login_remote_data_service__["a" /* LoginRemoteDataService */], __WEBPACK_IMPORTED_MODULE_4__services_app_common_service__["a" /* AppCommonService */], __WEBPACK_IMPORTED_MODULE_5__services_message_service__["a" /* MessageService */]],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], CommonsModule);
    return CommonsModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/commons.module.js.map

/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApplicationDataTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApplicationDataTableComponent = (function () {
    function ApplicationDataTableComponent(approvalService, message, _router) {
        this.approvalService = approvalService;
        this.message = message;
        this._router = _router;
        this.onAssignTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onApproveRejectTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFilterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //Flag to determine whether to filtering is active or not
        this.isFilterActivated = false;
        //Flag to determine whether to show or hide filtering panel
        this.isFilterVisible = false;
        this.currentPage = 1;
    }
    ApplicationDataTableComponent.prototype.ngOnInit = function () {
    };
    ApplicationDataTableComponent.prototype.ngOnChanges = function (changeObj) {
        if (!this.isFilterActivated && changeObj && changeObj['dataSource'] && (changeObj['dataSource'].currentValue != changeObj['dataSource'].previousValue)) {
            var res = changeObj['dataSource'].currentValue;
            this.FilterFieldsDataSource = (res && res.applicationTasks) || [];
        }
    };
    ApplicationDataTableComponent.prototype.onViewAll = function () {
        if (!!this.moreLinkPath) {
            this._router.navigate([this.moreLinkPath]);
        }
    };
    ApplicationDataTableComponent.prototype.onOptionChange = function (event, item) {
        item.tier = event.target.value;
    };
    ApplicationDataTableComponent.prototype.onToggleFilter = function () {
        this.isFilterVisible = !this.isFilterVisible;
        if (!this.isFilterVisible) {
            this.onClear('ALL');
        }
    };
    ApplicationDataTableComponent.prototype.onAction = function (actionType, appTask, typeInfo) {
        switch (actionType) {
            case 'ASSIGN': {
                this.onAssignTask.emit(new __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__["e" /* ApprovalEvent */](appTask, typeInfo));
                break;
            }
            case 'APPROVE': {
                this.onApproveRejectTask.emit(new __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__["e" /* ApprovalEvent */](appTask, typeInfo, 'APPROVED'));
                break;
            }
            case 'REJECT': {
                this.onApproveRejectTask.emit(new __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__["e" /* ApprovalEvent */](appTask, typeInfo, 'REJECTED'));
                break;
            }
        }
    };
    ApplicationDataTableComponent.prototype.onFilterItemAdded = function (event, type) {
        var task = event.item;
        this.isFilterActivated = true;
        switch (type) {
            case 'ID': {
                if (this.filter.ids.indexOf(task.id) < 0) {
                    this.filter.ids.push(task.id);
                }
                this.filterId = null;
                break;
            }
            case 'APP_NAME': {
                if (this.filter.appNames.indexOf(task.applicationName) < 0) {
                    this.filter.appNames.push(task.applicationName);
                }
                this.filterAppName = null;
                break;
            }
            case 'USER': {
                if (this.filter.users.indexOf(task.userName) < 0) {
                    this.filter.users.push(task.userName);
                }
                this.filterUser = null;
                break;
            }
        }
        this.onFilterChange.emit(this.filter);
    };
    ApplicationDataTableComponent.prototype.onClear = function (type) {
        switch (type) {
            case 'ID': {
                this.filter.ids.length = 0;
                this.filterId = null;
                break;
            }
            case 'NAME': {
                this.filter.appNames.length = 0;
                this.filterAppName = null;
                break;
            }
            case 'USER': {
                this.filter.users.length = 0;
                this.filterUser = null;
                break;
            }
            case 'ALL': {
                this.filter.ids.length = 0;
                this.filter.appNames.length = 0;
                this.filter.users.length = 0;
                this.filterId = null;
                this.filterAppName = null;
                this.filterUser = null;
                break;
            }
        }
        if (this.filter.ids.length == 0 || this.filter.appNames.length == 0 || this.filter.users.length == 0) {
            this.isFilterActivated = false;
        }
        this.onFilterChange.emit(this.filter);
    };
    ApplicationDataTableComponent.prototype.onPageChanged = function (event) {
        this.filter.startRecordNumber = (event.page - 1) * (this.filter.numberOfRecordsPerPage || 0);
        this.onFilterChange.emit(this.filter);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ApplicationDataTableComponent.prototype, "tableTitle", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ApplicationDataTableComponent.prototype, "summeryModeRecordLimit", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__["f" /* ApplicationTaskResult */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__["f" /* ApplicationTaskResult */]) === 'function' && _a) || Object)
    ], ApplicationDataTableComponent.prototype, "dataSource", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ApplicationDataTableComponent.prototype, "moreLinkPath", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__["c" /* ApplicationTaskFilter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__["c" /* ApplicationTaskFilter */]) === 'function' && _b) || Object)
    ], ApplicationDataTableComponent.prototype, "filter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], ApplicationDataTableComponent.prototype, "onAssignTask", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], ApplicationDataTableComponent.prototype, "onApproveRejectTask", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _e) || Object)
    ], ApplicationDataTableComponent.prototype, "onFilterChange", void 0);
    ApplicationDataTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'application-data-table',
            template: __webpack_require__(895),
            styles: [__webpack_require__(876)]
        }), 
        __metadata('design:paramtypes', [(typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _h) || Object])
    ], ApplicationDataTableComponent);
    return ApplicationDataTableComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/application-data-table.component.js.map

/***/ },

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(_router, approval, message) {
        this._router = _router;
        this.approval = approval;
        this.message = message;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; })
            .subscribe(function (event) {
            _this.activeView = event.url.replace('/', '').split('/');
        });
    };
    BreadcrumbsComponent.prototype.onReload = function () {
        this.approval.getAllTasks();
        this.message.info('Dashboard Data Refreshed', '');
    };
    BreadcrumbsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(896),
            styles: [__webpack_require__(877)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === 'function' && _c) || Object])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/breadcrumbs.component.js.map

/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HamburgerMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HamburgerMenuComponent = (function () {
    function HamburgerMenuComponent(_appCommonService) {
        this._appCommonService = _appCommonService;
        this.isClicked = false;
    }
    HamburgerMenuComponent.prototype.ngOnInit = function () {
    };
    HamburgerMenuComponent.prototype.onClick = function () {
        this.isClicked = !this.isClicked;
        this._appCommonService.updateMenuToggleStream(this.isClicked);
    };
    HamburgerMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hamburger-menu',
            template: "\n    <div class=\"hm-menu-container\" (click)=\"onClick()\">\n      <div class=\"hamburger-menu\" >\n          <div class=\"bar\" [ngClass]=\"{'animate':isClicked}\"></div>\t\n      </div>\n    </div>   \n  ",
            styles: [__webpack_require__(878)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */]) === 'function' && _a) || Object])
    ], HamburgerMenuComponent);
    return HamburgerMenuComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/hamburger-menu.component.js.map

/***/ },

/***/ 674:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(897),
            styles: [__webpack_require__(879)],
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/header.component.js.map

/***/ },

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MainMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainMenuComponent = (function () {
    function MainMenuComponent(_appCommonService, _router) {
        this._appCommonService = _appCommonService;
        this._router = _router;
        this.isExpand = false;
        this.menuSource = [
            { id: 1, route: '/home', name: 'Home', iconName: 'home' },
            { id: 2, route: '/approvals/applications', name: 'Approve Applications', iconName: 'apps' },
            { id: 3, route: '/approvals/subscriptions', name: 'Approve Subscriptions', iconName: 'subscriptions' },
            { id: 4, route: '/history', name: 'Approval History', iconName: 'history' }
        ];
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]) {
                _this.selectedMenu = _this.menuSource.filter(function (menu) { return menu.route == event.url; })[0];
            }
        });
        this.selectedMenu = this.menuSource[0];
        this._appCommonService.menuToggleStream.subscribe(function (flag) { return _this.isExpand = flag; });
    };
    MainMenuComponent.prototype.onClick = function (menu) {
        this.selectedMenu = menu;
        this._router.navigate([menu.route]);
    };
    MainMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(898),
            styles: [__webpack_require__(880)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], MainMenuComponent);
    return MainMenuComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/main-menu.component.js.map

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResponsiveTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResponsiveTableComponent = (function () {
    function ResponsiveTableComponent() {
    }
    ResponsiveTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ResponsiveTableComponent.prototype, "tableHeader", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ResponsiveTableComponent.prototype, "dataSource", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ResponsiveTableComponent.prototype, "fieldSet", void 0);
    ResponsiveTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-responsive-table',
            template: __webpack_require__(899),
            styles: [__webpack_require__(881)]
        }), 
        __metadata('design:paramtypes', [])
    ], ResponsiveTableComponent);
    return ResponsiveTableComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/responsive-table.component.js.map

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserAvatarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAvatarComponent = (function () {
    function UserAvatarComponent(_authenticationService) {
        this._authenticationService = _authenticationService;
        this.dropDownStatus = { isOpen: false };
    }
    UserAvatarComponent.prototype.ngOnInit = function () {
        this.loginInfo = this._authenticationService.loginUserInfo.getValue();
    };
    UserAvatarComponent.prototype.onClick = function () {
        this.dropDownStatus.isOpen = !this.dropDownStatus.isOpen;
    };
    UserAvatarComponent.prototype.onMenuClick = function (type) {
        switch (type) {
            case 'logout': {
                this._authenticationService.doLogout();
            }
        }
    };
    UserAvatarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-avatar',
            template: __webpack_require__(900),
            styles: [__webpack_require__(882)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], UserAvatarComponent);
    return UserAvatarComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/user-avatar.component.js.map

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApprovalCountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApprovalCountComponent = (function () {
    function ApprovalCountComponent() {
    }
    ApprovalCountComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], ApprovalCountComponent.prototype, "totalCount", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], ApprovalCountComponent.prototype, "myCount", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], ApprovalCountComponent.prototype, "groupCount", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ApprovalCountComponent.prototype, "name", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ApprovalCountComponent.prototype, "iconClass", void 0);
    ApprovalCountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-approval-count',
            template: __webpack_require__(901),
            styles: [__webpack_require__(883)]
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalCountComponent);
    return ApprovalCountComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-count.component.js.map

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApprovalHistoryGraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApprovalHistoryGraphComponent = (function () {
    function ApprovalHistoryGraphComponent() {
        this.barChartOptionsSubscriptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            title: {
                display: true,
                text: 'Subscription Creations'
            }
        };
        this.barChartOptionsApplications = {
            scaleShowVerticalLines: false,
            responsive: true,
            title: {
                display: true,
                text: 'Application Creations'
            }
        };
        this.barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartDataApplications = [
            { data: [65, 59, 80, 81, 75, 55, 90], label: 'All Applications' },
            { data: [28, 48, 40, 19, 12, 27, 80], label: 'My Applications' }
        ];
        this.barChartDataSubscriptions = [
            { data: [65, 59, 80, 81, 85, 55, 79], label: 'All Applications' },
            { data: [28, 48, 40, 19, 27, 27, 16], label: 'My Applications' }
        ];
    }
    ApprovalHistoryGraphComponent.prototype.ngOnInit = function () {
    };
    ApprovalHistoryGraphComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-approval-history-graph',
            template: __webpack_require__(902),
            styles: [__webpack_require__(884)],
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalHistoryGraphComponent);
    return ApprovalHistoryGraphComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-history-graph.component.js.map

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_models_dashboard_data_models__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApprovalSummeryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApprovalSummeryComponent = (function () {
    function ApprovalSummeryComponent(router) {
        this.router = router;
    }
    ApprovalSummeryComponent.prototype.ngOnInit = function () {
    };
    ApprovalSummeryComponent.prototype.onCountClick = function (type) {
        if (type === 'APPLICATIONS') {
            this.router.navigate(['/approvals/applications']);
        }
        else if (type === 'SUBSCRIPTIONS') {
            this.router.navigate(['/approvals/subscriptions']);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_models_dashboard_data_models__["a" /* DashboardData */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_models_dashboard_data_models__["a" /* DashboardData */]) === 'function' && _a) || Object)
    ], ApprovalSummeryComponent.prototype, "appDetailsSummery", void 0);
    ApprovalSummeryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-approval-summery',
            template: __webpack_require__(903),
            styles: [__webpack_require__(885)],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ApprovalSummeryComponent);
    return ApprovalSummeryComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-summery.component.js.map

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_providers_approval_remote_data_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardHelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardHelperService = (function () {
    function DashboardHelperService(approvalService) {
        this.approvalService = approvalService;
    }
    DashboardHelperService.prototype.updateModifiedApplications = function (applications) {
        var ids = this.approvalService.getModifiedTaskIds();
        var reduced = applications.reduce(function (acc, cuu) {
            if (ids.indexOf(cuu.id) >= 0) {
                cuu.isModified = true;
                acc.modified.push(cuu);
            }
            else {
                acc.unmodified.push(cuu);
            }
            return acc;
        }, { modified: [], unmodified: [] });
        return [].concat(reduced.modified, reduced.unmodified);
    };
    DashboardHelperService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _a) || Object])
    ], DashboardHelperService);
    return DashboardHelperService;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/dashboard-helper.service.js.map

/***/ },

/***/ 682:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(414);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardRoutes; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    }
];
var DashboardRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/dashboard.routes.js.map

/***/ },

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_remote_data_service__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_remote_data_service__ = __webpack_require__(263);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataProvidersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataProvidersModule = (function () {
    function DataProvidersModule() {
    }
    DataProvidersModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_remote_data_service__["a" /* LoginRemoteDataService */], __WEBPACK_IMPORTED_MODULE_3__dashboard_remote_data_service__["a" /* DashboardRemoteDataService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DataProvidersModule);
    return DataProvidersModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/data-providers.module.js.map

/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_providers_reporting_remote_data_service__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_models_reporing_data_models__ = __webpack_require__(262);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HistoryFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryFilterComponent = (function () {
    function HistoryFilterComponent(reportingService) {
        this.reportingService = reportingService;
        this.onFilterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HistoryFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportingService.SubscribersProvider.subscribe(function (subscribers) {
            _this.subscribers = subscribers;
        });
        this.reportingService.OperatorsProvider.subscribe(function (operators) {
            _this.operators = operators;
        });
        this.reportingService.ApplicationsProvider.subscribe(function (apps) {
            _this.applications = apps;
            _this.selectedApplication = null;
        });
    };
    HistoryFilterComponent.prototype.onNoApplicationSelected = function (event) {
        if (!event) {
            this.filter.applicationId = 0;
            this.selectedApplication = null;
        }
    };
    HistoryFilterComponent.prototype.onNoSubscriberSelected = function (event) {
        if (!event) {
            this.filter.subscriber = '';
            this.reportingService.getApplicationsBySubscriber('');
        }
    };
    HistoryFilterComponent.prototype.onFilterCriteriaChange = function () {
        this.onFilterChange.emit(this.filter);
    };
    HistoryFilterComponent.prototype.onSubscriberChange = function () {
        if (!!this.filter.subscriber) {
            this.reportingService.getApplicationsBySubscriber(this.filter.subscriber);
            this.filter.offset = 0;
        }
        this.onFilterChange.emit(this.filter);
    };
    HistoryFilterComponent.prototype.onApplicationChange = function (event) {
        if (!!event.item) {
            this.filter.applicationId = event.item.id || 0;
            this.filter.offset = 0;
        }
        this.onFilterChange.emit(this.filter);
    };
    HistoryFilterComponent.prototype.onOperatorChange = function () {
        if (!!this.filter.operator) {
            this.filter.offset = 0;
        }
        this.onFilterChange.emit(this.filter);
    };
    HistoryFilterComponent.prototype.onClearFilter = function () {
        this.filter.operator = '';
        this.filter.subscriber = '';
        this.filter.api = '';
        this.filter.applicationId = 0;
        this.selectedApplication = null;
        this.onFilterChange.emit(this.filter);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__commons_models_reporing_data_models__["a" /* ApprovalHistoryFilter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__commons_models_reporing_data_models__["a" /* ApprovalHistoryFilter */]) === 'function' && _a) || Object)
    ], HistoryFilterComponent.prototype, "filter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], HistoryFilterComponent.prototype, "onFilterChange", void 0);
    HistoryFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-history-filter',
            template: __webpack_require__(905),
            styles: [__webpack_require__(887)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__data_providers_reporting_remote_data_service__["a" /* ReportingRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__data_providers_reporting_remote_data_service__["a" /* ReportingRemoteDataService */]) === 'function' && _c) || Object])
    ], HistoryFilterComponent);
    return HistoryFilterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/history-filter.component.js.map

/***/ },

/***/ 685:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_main_history_main_component__ = __webpack_require__(415);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HistoryRoutes; });


var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__history_main_history_main_component__["a" /* HistoryMainComponent */]
    }];
var HistoryRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/history.routes.js.map

/***/ },

/***/ 686:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchPanelComponent = (function () {
    function SearchPanelComponent() {
    }
    SearchPanelComponent.prototype.ngOnInit = function () {
    };
    SearchPanelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-panel',
            template: __webpack_require__(907),
            styles: [__webpack_require__(889)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPanelComponent);
    return SearchPanelComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/search-panel.component.js.map

/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchResultsComponent = (function () {
    function SearchResultsComponent() {
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
    };
    SearchResultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(908),
            styles: [__webpack_require__(890)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/search-results.component.js.map

/***/ },

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_login_user_login_component__ = __webpack_require__(418);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginRoutes; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__user_login_user_login_component__["a" /* UserLoginComponent */]
    }
];
var LoginRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/login.routes.js.map

/***/ },

/***/ 689:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/environment.js.map

/***/ },

/***/ 690:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/polyfills.js.map

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = ":host {\n  min-height: 100%;\n  background-color: #f5f5f5;\n  min-width: 300px; }\n\n:host /deep/ ng2-toasty .toast {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp; }\n\nrouter-outlet {\n  display: block; }\n  @media screen and (max-width: 768px) {\n    router-outlet {\n      padding-top: 40px; } }\n\nng2-slim-loading-bar {\n  position: fixed;\n  top: 70px;\n  z-index: 500;\n  left: 0px;\n  right: 0px; }\n\n:host /deep/ ng2-slim-loading-bar .slim-loading-bar-progress {\n  background-color: #E19131 !important;\n  height: 4px !important; }\n\n.container-fluid {\n  height: 100%; }\n\n.content-container {\n  margin-left: -15px;\n  margin-right: -15px;\n  position: relative;\n  margin-top: 70px; }\n  @media screen and (max-width: 768px) {\n    .content-container {\n      margin-top: 140px; } }\n\n.menu-container {\n  position: fixed;\n  top: 70px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 100; }\n  @media screen and (max-width: 768px) {\n    .menu-container {\n      top: 140px; } }\n\n.view-container {\n  -webkit-transition: margin-left 0.8s ease-in-out;\n  transition: margin-left 0.8s ease-in-out;\n  margin-left: 50px; }\n  .view-container.menu-expand {\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s;\n    margin-left: 285px; }\n  .view-container .breadcrumbs-bar {\n    border-bottom: inset 1px #dfdfdf;\n    border-radius: 0px;\n    height: 46px;\n    line-height: 2.2em;\n    background-color: white;\n    position: fixed;\n    z-index: 100;\n    left: 50px;\n    right: 0px;\n    min-width: 450px;\n    -webkit-transition: width 0.3s ease-in-out;\n    transition: width 0.3s ease-in-out; }\n    .view-container .breadcrumbs-bar.menu-expand {\n      left: 285px; }\n  .view-container .content-div {\n    margin-top: 40px; }\n"

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = "application-data-table {\n  margin-top: 20px; }\n\n:host /deep/ application-data-table.my .tbl-header {\n  color: #E19131;\n  font-weight: 900; }\n\n:host /deep/ application-data-table.my .header {\n  background-color: #E19131 !important; }\n"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = "application-data-table {\n  margin-top: 20px; }\n\n:host /deep/ application-data-table.my .tbl-header {\n  color: #E19131;\n  font-weight: 900; }\n\n:host /deep/ application-data-table.my .header {\n  background-color: #E19131 !important; }\n"

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.table-wrapper {\n  padding: 10px;\n  border: solid 1px #e7ecf1;\n  background-color: white;\n  min-height: 425px;\n  position: relative; }\n  .table-wrapper .tbl-cat {\n    font-weight: 600;\n    position: absolute;\n    left: 0px;\n    top: 10px;\n    padding: 4px 10px;\n    color: #9a9a9a; }\n  .table-wrapper .filter {\n    position: absolute;\n    right: 10px;\n    top: 30px;\n    width: 30px;\n    text-align: center;\n    height: 30px;\n    padding-top: 2px;\n    color: #8A98A0;\n    -webkit-transition: all 0.2s ease-in;\n    transition: all 0.2s ease-in;\n    cursor: pointer; }\n    .table-wrapper .filter:hover {\n      color: black;\n      background-color: #32c5d2; }\n    .table-wrapper .filter.on {\n      background-color: #32c5d2;\n      color: black; }\n  .table-wrapper .tbl-header {\n    margin-top: 22px;\n    font-weight: 600;\n    font-size: 1.3em;\n    padding: 5px 0px 15px; }\n  .table-wrapper .table {\n    display: table;\n    width: 100%; }\n    .table-wrapper .table .tbl-row {\n      display: table-row;\n      background-color: #f6f6f6;\n      height: 0px;\n      -webkit-transition: all 0.5s ease-in;\n      transition: all 0.5s ease-in; }\n      .table-wrapper .table .tbl-row:nth-of-type(odd) {\n        background-color: white; }\n      .table-wrapper .table .tbl-row.header {\n        background-color: #7788aa;\n        font-weight: 600;\n        color: white; }\n      .table-wrapper .table .tbl-row .tbl-cell {\n        display: table-cell;\n        padding: 10px 10px; }\n      .table-wrapper .table .tbl-row.modified {\n        background-color: #ffffcc; }\n      .table-wrapper .table .tbl-row.open {\n        height: 158px;\n        background-color: #f4f2c9; }\n        .table-wrapper .table .tbl-row.open .action {\n          border-color: black;\n          color: black; }\n        .table-wrapper .table .tbl-row.open.A, .table-wrapper .table .tbl-row.open.R {\n          height: 243px; }\n      .table-wrapper .table .tbl-row .more-con {\n        padding: 10px 0px 10px 0px;\n        background-color: #f8f9fa;\n        position: absolute;\n        left: 10px;\n        right: 11px;\n        height: 105px;\n        margin-top: 53px;\n        border: solid 1px #d0d0d0;\n        -ms-box-shadow: inset 0px 10px 10px -9px #d1d1d1;\n        box-shadow: inset 0px 10px 10px -9px #d1d1d1; }\n        .table-wrapper .table .tbl-row .more-con.A, .table-wrapper .table .tbl-row .more-con.R {\n          height: 190px; }\n        .table-wrapper .table .tbl-row .more-con .more-row {\n          margin-bottom: 2px; }\n        .table-wrapper .table .tbl-row .more-con .field-name {\n          height: 40px;\n          background-color: #f1f3f5;\n          line-height: 40px;\n          text-align: right;\n          font-weight: 600; }\n        .table-wrapper .table .tbl-row .more-con .field-value {\n          height: 40px;\n          background-color: white;\n          line-height: 40px; }\n        .table-wrapper .table .tbl-row .more-con select, .table-wrapper .table .tbl-row .more-con input {\n          margin-top: 2px; }\n        .table-wrapper .table .tbl-row .more-con .btn {\n          margin-top: 10px;\n          padding-top: 5px !important;\n          padding-bottom: 5px !important; }\n  .table-wrapper .time {\n    display: block;\n    font-size: 0.8em; }\n  .table-wrapper .action {\n    width: 25px;\n    height: 25px;\n    border: solid 1px #c7c7c7;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 25px;\n    margin: 2px 5px;\n    cursor: pointer;\n    color: #8A98A0;\n    font-size: 1em;\n    -webkit-transition: all 0.2s ease-in;\n    transition: all 0.2s ease-in; }\n    .table-wrapper .action:hover {\n      background-color: #32c5d2;\n      color: black; }\n    .table-wrapper .action.A {\n      background-color: #32c5d2; }\n    .table-wrapper .action.R {\n      background-color: #bb3535;\n      color: white !important; }\n    .table-wrapper .action.reject:hover {\n      background-color: #bb3535;\n      color: white !important; }\n    .table-wrapper .action.expand {\n      border: none;\n      font-size: 1.5em; }\n  .table-wrapper .no-rec-row {\n    position: relative; }\n    .table-wrapper .no-rec-row .no-rec {\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      margin: auto;\n      width: 100px;\n      padding-top: 150px;\n      color: #8A98A0; }\n\n.filter-container {\n  min-height: 0px;\n  margin-bottom: 10px;\n  -webkit-transition: all 0.4s ease-in;\n  transition: all 0.4s ease-in; }\n  .filter-container.open {\n    min-height: 100px; }\n  .filter-container .content {\n    background-color: #f1f3f5;\n    height: 100%;\n    padding: 10px; }\n    .filter-container .content .head {\n      font-size: 1.3em;\n      font-weight: 600;\n      color: #868e96;\n      padding-bottom: 5px; }\n      .filter-container .content .head .clear {\n        font-size: 0.7em;\n        padding-left: 7px;\n        color: #adb5bd;\n        font-weight: 400;\n        -webkit-transition: all 0.2s ease-in;\n        transition: all 0.2s ease-in;\n        cursor: pointer; }\n        .filter-container .content .head .clear:hover {\n          color: #E19131; }\n    .filter-container .content .filter-val-container {\n      position: relative;\n      padding: 5px;\n      background-color: white; }\n      .filter-container .content .filter-val-container .close {\n        position: absolute;\n        right: 2px;\n        top: 2px;\n        font-size: 1em; }\n      .filter-container .content .filter-val-container .filter-val {\n        display: inline-block;\n        padding: 2px 5px;\n        font-size: 0.9em;\n        margin: 2px; }\n        .filter-container .content .filter-val-container .filter-val.ids {\n          background-color: #69db7c;\n          border: solid 1px #2f9e44; }\n        .filter-container .content .filter-val-container .filter-val.name {\n          background-color: #66d9e8;\n          border: solid 1px #1098ad; }\n        .filter-container .content .filter-val-container .filter-val.user {\n          background-color: #e599f7;\n          border: solid 1px #be4bdb; }\n      .filter-container .content .filter-val-container .sec-head {\n        padding: 0px 5px;\n        font-size: 0.9em;\n        font-weight: 600; }\n\n@-moz-document url-prefix() {\n  .more-con {\n    margin-top: 25px !important; } }\n"

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = ":host {\n  line-height: 5rem;\n  position: relative;\n  display: block; }\n\n.url-part {\n  display: inline-block;\n  padding-right: 10px;\n  font-size: 1.3em;\n  font-weight: 300;\n  text-transform: capitalize; }\n  .url-part:last-child {\n    font-weight: 900;\n    text-transform: uppercase; }\n\n.refresh-icon {\n  position: absolute;\n  right: 50px;\n  height: 30px;\n  width: 30px;\n  background-color: #E19131;\n  text-align: center;\n  line-height: 30px;\n  border-radius: 20px;\n  color: white;\n  font-size: 1em;\n  margin-top: 6px;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in; }\n  @media screen and (max-width: 768px) {\n    .refresh-icon {\n      right: 0px; } }\n  .refresh-icon:hover {\n    background-color: #e1a637;\n    color: black; }\n"

/***/ },

/***/ 878:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.hm-menu-container {\n  position: relative;\n  width: 50px;\n  height: 50px; }\n  .hm-menu-container .hamburger-menu {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    width: 25px;\n    height: 22px;\n    cursor: pointer; }\n    .hm-menu-container .hamburger-menu .bar,\n    .hm-menu-container .hamburger-menu .bar:after,\n    .hm-menu-container .hamburger-menu .bar:before {\n      width: 25px;\n      height: 2px; }\n    .hm-menu-container .hamburger-menu .bar {\n      position: relative;\n      -webkit-transform: translateY(10px);\n              transform: translateY(10px);\n      background: white;\n      -webkit-transition: all 0ms 300ms;\n      transition: all 0ms 300ms; }\n      .hm-menu-container .hamburger-menu .bar:before {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        bottom: 10px;\n        background: white;\n        -webkit-transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n      .hm-menu-container .hamburger-menu .bar:after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: 10px;\n        background: white;\n        -webkit-transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n      .hm-menu-container .hamburger-menu .bar.animate {\n        background: rgba(255, 255, 255, 0); }\n        .hm-menu-container .hamburger-menu .bar.animate:after {\n          width: 15.625px;\n          top: 0;\n          left: 5px;\n          -webkit-transform-origin: 0px 0px;\n                  transform-origin: 0px 0px;\n          -webkit-transform: rotate(45deg);\n                  transform: rotate(45deg);\n          -webkit-transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n        .hm-menu-container .hamburger-menu .bar.animate:before {\n          width: 15.625px;\n          bottom: 0;\n          left: 5px;\n          -webkit-transform-origin: 0px 0px;\n                  transform-origin: 0px 0px;\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n          -webkit-transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n"

/***/ },

/***/ 879:
/***/ function(module, exports) {

module.exports = ".navbar {\n  background-color: #14354C;\n  border: 0;\n  border-radius: 0px;\n  margin-bottom: 0px;\n  z-index: 200;\n  height: 70px; }\n  .navbar .container-fluid {\n    padding: 10px 35px 10px 15px;\n    min-width: 500px; }\n  @media screen and (max-width: 768px) {\n    .navbar {\n      height: 140px; } }\n\n@media screen and (max-width: 768px) {\n  .navbar-header {\n    margin-left: 0px;\n    margin-right: 0px; } }\n\n@media screen and (max-width: 768px) {\n  .navbar-right {\n    margin-left: 15px; } }\n\n.navbar-brand {\n  float: right;\n  padding-left: 25px;\n  font-size: 1.6rem;\n  color: #E19131;\n  position: relative; }\n  .navbar-brand .logo, .navbar-brand .name {\n    float: left; }\n  .navbar-brand .logo {\n    top: 0px; }\n    .navbar-brand .logo img {\n      height: 30px;\n      margin-top: -6px; }\n  .navbar-brand .name {\n    margin-left: 10px; }\n  .navbar-brand:hover, .navbar-brand:focus, .navbar-brand:active {\n    color: #E19131; }\n  .navbar-brand .man {\n    color: #8A98A0;\n    font-weight: 600;\n    display: inline-block;\n    margin-top: 4px; }\n\napp-hamburger-menu {\n  float: left; }\n"

/***/ },

/***/ 880:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block;\n  background-color: #1b4665;\n  height: 100%; }\n\nul {\n  list-style: none;\n  padding: 0px;\n  width: 50px;\n  -webkit-transition: width 0.3s ease-in-out;\n  transition: width 0.3s ease-in-out; }\n  ul li {\n    cursor: pointer;\n    width: 100%;\n    height: 46px;\n    border-bottom: solid 1px #164e6a;\n    position: relative;\n    -webkit-transition: all 0.3s ease-in;\n    transition: all 0.3s ease-in; }\n    ul li:hover {\n      background-color: #14354C; }\n    ul li:after {\n      content: '';\n      width: 0px;\n      height: 0px;\n      border-right: solid 8px #f5f5f5;\n      border-top: solid 10px transparent;\n      border-bottom: solid 10px transparent;\n      position: absolute;\n      right: 0px;\n      top: 14px;\n      display: none; }\n    ul li .icon {\n      display: inline-block;\n      text-align: center;\n      width: 100%;\n      line-height: 46px;\n      color: #adadad;\n      font-size: 1.6em; }\n    ul li .menu-name {\n      -webkit-animation-delay: 0.3s;\n      animation-delay: 0.3s;\n      color: #afafaf; }\n    ul li.selected {\n      background-color: #32c5d2; }\n      ul li.selected .icon {\n        color: white; }\n      ul li.selected .menu-name {\n        color: white; }\n      ul li.selected:after {\n        display: block; }\n  ul.is-expand {\n    width: 285px; }\n    ul.is-expand li .icon {\n      width: 50px; }\n"

/***/ },

/***/ 881:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.table-wrapper {\n  padding: 10px;\n  border: solid 1px #e7ecf1;\n  background-color: white;\n  width: 100%; }\n  .table-wrapper .tbl-header {\n    font-weight: 600;\n    font-size: 1.3em;\n    padding: 5px 0px 15px; }\n  .table-wrapper .table {\n    display: table;\n    width: 100%; }\n    @media only screen and (max-width: 768px) {\n      .table-wrapper .table {\n        display: block; } }\n    .table-wrapper .table .tbl-row {\n      display: table-row;\n      background-color: #f6f6f6; }\n      .table-wrapper .table .tbl-row:nth-of-type(odd) {\n        background-color: white; }\n      .table-wrapper .table .tbl-row.header {\n        background-color: #ced4da;\n        font-weight: 600; }\n      @media only screen and (max-width: 768px) {\n        .table-wrapper .table .tbl-row {\n          display: block; } }\n      .table-wrapper .table .tbl-row .tbl-cell {\n        display: table-cell;\n        padding: 10px 10px; }\n        @media only screen and (max-width: 768px) {\n          .table-wrapper .table .tbl-row .tbl-cell {\n            display: block; } }\n"

/***/ },

/***/ 882:
/***/ function(module, exports) {

module.exports = ":host {\n  height: 50px;\n  display: block;\n  background-color: #14354C;\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n  color: #8A98A0;\n  cursor: pointer; }\n  :host:hover {\n    color: white; }\n\n.avatar-component {\n  height: 100%;\n  /* &.expand{\n    background-color: $primary-color_light;\n  }*/ }\n  .avatar-component .avatar-dropdown {\n    margin-top: 12px; }\n    @media screen and (max-width: 768px) {\n      .avatar-component .avatar-dropdown {\n        width: 100%;\n        margin-top: 32px; } }\n  .avatar-component:before {\n    content: \"\";\n    display: inline-block;\n    vertical-align: middle;\n    height: 100%; }\n  .avatar-component > div {\n    display: inline-block;\n    vertical-align: middle;\n    padding: 5px; }\n    .avatar-component > div:first-child {\n      padding-right: 2px; }\n  .avatar-component .avatar {\n    width: 30px;\n    height: 30px;\n    border: solid 1px #8A98A0;\n    border-radius: 15px;\n    text-align: center;\n    padding-top: 3px; }\n  .avatar-component .arrow {\n    font-size: 0.8em;\n    padding-right: 15px; }\n\n.avatar-dropdown {\n  min-width: 250px;\n  padding: 0px; }\n  .avatar-dropdown li {\n    height: 35px;\n    border-bottom: solid 1px #f5f5f5; }\n    .avatar-dropdown li a {\n      height: 35px;\n      line-height: 27px;\n      -webkit-transition: background-color 0.2s ease-in;\n      transition: background-color 0.2s ease-in; }\n      .avatar-dropdown li a:hover {\n        background-color: #32c5d2; }\n\n.userName {\n  text-transform: capitalize; }\n"

/***/ },

/***/ 883:
/***/ function(module, exports) {

module.exports = ".approval-count {\n  height: 170px;\n  position: relative;\n  overflow: hidden; }\n  .approval-count .count {\n    position: absolute;\n    right: 10px;\n    top: 15px;\n    font-size: 6em;\n    color: white; }\n  .approval-count .name {\n    position: absolute;\n    right: 10px;\n    bottom: 30px;\n    color: #e9e9e9;\n    font-size: 1.2em;\n    font-weight: 900; }\n  .approval-count .icon {\n    color: rgba(255, 255, 255, 0.06);\n    position: absolute;\n    bottom: 0px;\n    top: 40%;\n    left: 0px;\n    font-size: 9em; }\n  .approval-count .myCount {\n    position: absolute;\n    color: #e9e9e9;\n    top: 37px;\n    left: 15px; }\n  .approval-count .groupCount {\n    top: 12px;\n    left: 15px;\n    position: absolute;\n    color: #e9e9e9; }\n  .approval-count .sub {\n    font-weight: 900; }\n"

/***/ },

/***/ 884:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block;\n  min-height: 100px; }\n"

/***/ },

/***/ 885:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block; }\n  @media screen and (max-width: 768px) {\n    :host {\n      padding: 0px 15px;\n      display: block; } }\n\napp-approval-count {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  cursor: pointer; }\n\n:host /deep/ app-approval-count.apps .approval-count {\n  background-color: #3598dc;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in; }\n  :host /deep/ app-approval-count.apps .approval-count:hover {\n    background-color: #2f87c4; }\n  :host /deep/ app-approval-count.apps .approval-count .breakdown {\n    color: #a7d8fa; }\n\n:host /deep/ app-approval-count.subs .approval-count {\n  background-color: #8E44AD;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in; }\n  :host /deep/ app-approval-count.subs .approval-count:hover {\n    background-color: #703588; }\n  :host /deep/ app-approval-count.subs .approval-count .breakdown {\n    color: #fb9db1; }\n"

/***/ },

/***/ 886:
/***/ function(module, exports) {

module.exports = "app-approval-history-graph {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\napplication-data-table {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n:host /deep/ application-data-table.my .tbl-header {\n  color: #E19131;\n  font-weight: 900; }\n\n:host /deep/ application-data-table.my .header {\n  background-color: #E19131 !important; }\n"

/***/ },

/***/ 887:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.history-filter {\n  min-height: 100px;\n  padding: 10px;\n  background-color: white;\n  border: solid 1px whitesmoke; }\n  .history-filter .fields-container div[class^=\"col-\"] {\n    padding-bottom: 10px; }\n  .history-filter .title {\n    font-size: 1.2em;\n    font-weight: 600;\n    color: gray;\n    padding-bottom: 5px; }\n"

/***/ },

/***/ 888:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 20px; }\n\napp-history-filter {\n  margin-bottom: 10px; }\n"

/***/ },

/***/ 889:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 890:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 891:
/***/ function(module, exports) {

module.exports = ".login-container {\n  width: 400px;\n  margin: 75px auto; }\n  .login-container input {\n    background-color: #dde3ec;\n    height: 43px;\n    color: #8290a3;\n    border: 1px solid #dde3ec; }\n    .login-container input:focus {\n      border: 1px solid #c3ccda; }\n  .login-container .logo-container {\n    margin-bottom: 35px;\n    text-align: center;\n    font-size: 2.5rem;\n    color: #E19131; }\n    .login-container .logo-container .man {\n      color: #8A98A0;\n      font-weight: 300; }\n  .login-container .form-container {\n    background-color: white;\n    box-shadow: 0px 0px 20px 3px #e6e5e5; }\n    .login-container .form-container .form-fields {\n      padding: 20px 30px; }\n    .login-container .form-container .sign-in {\n      margin: 0px;\n      padding: 30px 0px 10px;\n      text-align: center;\n      color: #32c5d2; }\n    .login-container .form-container .forgot-ps {\n      padding: 15px 30px 20px;\n      border-top: solid 1px #dde3ec;\n      text-align: right;\n      color: #7a8ca5; }\n  .login-container .action-container {\n    margin: 35px 0px 10px; }\n    .login-container .action-container .login {\n      background-color: #32c5d2;\n      color: white;\n      font-weight: 600;\n      -webkit-transition: all 0.4 ease-in;\n      transition: all 0.4 ease-in; }\n      .login-container .action-container .login:hover {\n        background-color: #289DA7; }\n    .login-container .action-container .checkbox-lbl {\n      margin-left: 10px; }\n  .login-container .copyright {\n    text-align: center;\n    margin: 0 auto 30px 0;\n    padding: 10px;\n    color: #7a8ca5;\n    font-size: 13px; }\n  .login-container .error {\n    font-size: 0.9em;\n    color: #f96565; }\n  .login-container .error-container {\n    min-height: 50px;\n    background-color: #bb3535;\n    color: white;\n    text-align: center;\n    padding: 20px 10px; }\n"

/***/ },

/***/ 892:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <app-header *ngIf=\"isLoggedIn\"></app-header>\n    <div class=\"content-container\">\n        <div class=\"menu-container animated slideInLeft\" *ngIf=\"isLoggedIn\">\n            <app-main-menu></app-main-menu>\n        </div>\n        <div class=\"view-container\" [ngClass]=\"{'menu-expand':isMenuExpanded}\">\n            <div>\n                <div class=\"col-sm-12 breadcrumbs-bar\"  [ngClass]=\"{'menu-expand':isMenuExpanded}\" *ngIf=\"isLoggedIn\">\n                    <app-breadcrumbs></app-breadcrumbs>\n                </div>\n                <div class=\"col-sm-12 content-div\">\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng2-toasty\n        [position]=\"'bottom-center'\"></ng2-toasty>\n\n<ng2-slim-loading-bar></ng2-slim-loading-bar>\n\n"

/***/ },

/***/ 893:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeInUp row pad-r-15-im\">\n    <div class=\"col-sm-6\">\n        <application-data-table\n                class=\"my\"\n                [filter]=\"userApplicationFilter\"\n                tableTitle=\"MY APPLICATIONS\"\n                [dataSource]=\"myApplications\"\n                (onApproveRejectTask)=\"onApproveRejectHandler($event)\"\n                (onFilterChange)=\"onFilterChangeHandler($event)\"></application-data-table>\n    </div>\n    <div class=\"col-sm-6\">\n        <application-data-table\n                class=\"group\"\n                [filter]=\"groupApplicationFilter\"\n                tableTitle=\"All APPLICATIONS\"\n                [dataSource]=\"allApplications\"\n                (onAssignTask)=\"onAssignTaskHandler($event)\"\n                (onFilterChange)=\"onFilterChangeHandler($event)\"></application-data-table>\n    </div>\n</div>\n\n"

/***/ },

/***/ 894:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n <div class=\"row\">\n   <div class=\"col-sm-6\">\n       <application-data-table\n               class=\"my\"\n               [filter]=\"mySubscriptionFilter\"\n               tableTitle=\"SUBSCRIPTION CREATIONS\"\n               [dataSource]=\"mySubscriptions\"\n               (onApproveRejectTask)=\"onApproveRejectHandler($event)\"\n               (onFilterChange)=\"onFilterChangeHandler($event)\"></application-data-table>\n   </div>\n   <div class=\"col-sm-6\">\n       <application-data-table\n               [filter]=\"groupSubscriptionFilter\"\n               tableTitle=\"SUBSCRIPTION CREATIONS\"\n               [dataSource]=\"allSubscriptions\"\n               (onAssignTask)=\"onAssignTaskHandler($event)\"\n               (onFilterChange)=\"onFilterChangeHandler($event)\"></application-data-table>\n   </div>\n </div>\n</div>\n\n"

/***/ },

/***/ 895:
/***/ function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <span class=\"filter\" tooltip=\"Filter\"\n          [ngClass]=\"{'on':isFilterVisible}\"\n          (click)=\"onToggleFilter()\"><i class=\"material-icons\">filter_list</i></span>\n    <div><span class=\"tbl-cat\">{{filter?.dataType?.dataCategory == 'USER' ? 'MY TASKS' : 'ALL TASKS'}}</span></div>\n    <div class=\"tbl-header\">\n        {{tableTitle}}\n    </div>\n\n    <div class=\"filter-container\" [ngClass]=\"{'open':isFilterVisible}\">\n        <div class=\"content animated fadeInUp delay-02\" *ngIf=\"isFilterVisible\">\n            <div class=\"head\">Filter<span class=\"clear\" (click)=\"onClear('ALL')\">Clear All</span></div>\n            <div class=\"row\">\n                <div class=\"form-group col-xs-4\">\n                    <input type=\"text\" class=\"form-control\"\n                           [(ngModel)]=\"filterId\"\n                           [typeaheadMinLength]=\"0\"\n                           container=\"body\"\n                           [typeahead]=\"FilterFieldsDataSource\"\n                           typeaheadOptionField=\"id\"\n                           (typeaheadOnSelect)=\"onFilterItemAdded($event,'ID')\"\n                           placeholder=\"Id\">\n                </div>\n                <div class=\"form-group col-xs-4\">\n                    <input type=\"text\"\n                           [(ngModel)]=\"filterAppName\"\n                           container=\"body\"\n                           [typeaheadMinLength]=\"0\"\n                           [typeahead]=\"FilterFieldsDataSource\"\n                           typeaheadOptionField=\"applicationName\"\n                           (typeaheadOnSelect)=\"onFilterItemAdded($event,'APP_NAME')\"\n                           class=\"form-control\" placeholder=\"App Name\">\n                </div>\n                <div class=\"form-group col-xs-4\">\n                    <input type=\"text\"\n                           [(ngModel)]=\"filterUser\"\n                           container=\"body\"\n                           [typeahead]=\"FilterFieldsDataSource\"\n                           typeaheadOptionField=\"userName\"\n                           typeaheadGroupField=\"userName\"\n                           (typeaheadOnSelect)=\"onFilterItemAdded($event,'USER')\"\n                           class=\"form-control\" placeholder=\"User\">\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-xs-4\">\n                    <div class=\"filter-val-container id\" *ngIf=\"filter?.ids.length > 0\">\n                        <div class=\"sec-head\">ID</div>\n                        <span class=\"close material-icons\" (click)=\"onClear('ID')\">close</span>\n                        <span class=\"filter-val ids\" *ngFor=\"let id of filter.ids\">{{id}}</span>\n                    </div>\n                </div>\n                <div class=\"col-xs-4\">\n                    <div class=\"filter-val-container name\" *ngIf=\"filter?.appNames.length > 0\">\n                        <div class=\"sec-head\">App Name</div>\n                        <span class=\"close material-icons\" (click)=\"onClear('NAME')\">close</span>\n                        <span class=\"filter-val name\" *ngFor=\"let name of filter.appNames\">{{name}}</span>\n                    </div>\n                </div>\n                <div class=\"col-xs-4\">\n                    <div class=\"filter-val-container user\" *ngIf=\"filter?.users.length > 0\">\n                        <div class=\"sec-head\">User</div>\n                        <span class=\"close material-icons\" (click)=\"onClear('USER')\">close</span>\n                        <span class=\"filter-val user\" *ngFor=\"let user of filter.users\">{{user}}</span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"table\">\n\n        <div class=\"tbl-row header\">\n            <div class=\"tbl-cell\">ID</div>\n            <div class=\"tbl-cell\">APP NAME</div>\n            <div class=\"tbl-cell\">USER</div>\n            <div class=\"tbl-cell\">CREATED ON</div>\n            <div class=\"tbl-cell text-right pad-r-15-im\">ACTION</div>\n        </div>\n\n        <ng-container *ngFor=\"let item of dataSource?.applicationTasks; let i=index\">\n            <div class=\"tbl-row\"\n                 [ngClass]=\"{\n                 'modified' : item.isModified,\n                 'open':item.isExpand,\n                 'M':item.actionType == 'MORE',\n                 'A':item.actionType == 'APPROVE',\n                 'R':item.actionType == 'REJECT'}\"\n                 *ngIf=\"!!!summeryModeRecordLimit || i < summeryModeRecordLimit\">\n                <div class=\"tbl-cell\">\n                    <span tooltip=\"More Info\"\n                          class=\"action expand material-icons\"\n                          (click)=\"item.isExpand = !item.isExpand; item.actionType = 'MORE' \">{{(item.isExpand)? 'expand_less' :  'expand_more'}}</span>\n                    {{item.id}}\n                </div>\n                <div class=\"tbl-cell\">{{item.applicationName}}</div>\n                <div class=\"tbl-cell\">{{item.userName || item.subscriber}}</div>\n                <div class=\"tbl-cell\">{{item.createTime?.date + ' ' + item.createTime?.time}}</div>\n                <div class=\"tbl-cell text-right\">\n                    <span tooltip=\"Approve\" *ngIf=\"filter?.dataType?.dataCategory == 'USER'\"\n                          class=\"action  approve material-icons\"\n                          [ngClass]=\"{'A':item.actionType =='APPROVE' }\"\n                          (click)=\"item.isExpand = true; item.actionType = 'APPROVE' \">check</span>\n\n                    <span tooltip=\"Reject\" *ngIf=\"filter?.dataType?.dataCategory  == 'USER'\"\n                          class=\"action  reject material-icons\"\n                          [ngClass]=\"{'R':item.actionType =='REJECT' }\"\n                          (click)=\"item.isExpand = true; item.actionType = 'REJECT' \">close</span>\n\n                    <span tooltip=\"Assign to Me\" *ngIf=\"filter?.dataType?.dataCategory  == 'GROUP'\"\n                          class=\"action  assign material-icons\"\n                          (click)=\"onAction('ASSIGN',item,filter?.dataType)\">assignment_ind</span>\n                </div>\n                <div class=\"more-con animated fadeInUp\" *ngIf=\"item.isExpand\"\n                     [ngClass]=\"{ 'M':item.actionType == 'MORE',\n                    'A':item.actionType == 'APPROVE',\n                    'R':item.actionType == 'REJECT'}\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"col-xs-6\">\n                            <div class=\"row more-row\">\n                                <div class=\"col-xs-6 field-name\">Application Id</div>\n                                <div class=\"col-xs-6 field-value\"> {{item.applicationId}}</div>\n                            </div>\n                            <div class=\"row more-row\">\n                                <div class=\"col-xs-6 field-name\">Description</div>\n                                <div class=\"col-xs-6 field-value\"> {{item.applicationDescription}}</div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-6\">\n                            <div class=\"row more-row\">\n                                <div class=\"col-xs-6 field-name\">Operator</div>\n                                <div class=\"col-xs-6 field-value\">{{item.operators}}</div>\n                            </div>\n                            <div class=\"row more-row\">\n                                <div class=\"col-xs-6 field-name\">Tier</div>\n                                <div class=\"col-xs-6 field-value\">\n                                    <select class=\"form-control\" (change)=\"onOptionChange($event,item)\">\n                                        <option *ngFor=\"let opt of item.tiersStr\" [selected]=\"item.tier == opt\">\n                                            {{opt}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-sm-12\" *ngIf=\"item.actionType !== 'MORE'\">\n                        <div class=\"col-xs-3 field-name\">Comment</div>\n                        <div class=\"col-xs-9 field-value\"><input type=\"text\" class=\"form-control\"></div>\n                    </div>\n\n                    <div class=\"col-sm-12 text-right\" *ngIf=\"item.actionType !== 'MORE'\">\n                        <button class=\"btn btn-default animated fadeIn\"\n                                (click)=\"item.isExpand = false; item.actionType = '' \">Cancel\n                        </button>\n                        <button class=\"btn btn-primary animated fadeIn\"\n                                *ngIf=\"item.actionType == 'APPROVE'\"\n                                (click)=\"onAction('APPROVE',item,filter?.dataType)\">Approve\n                        </button>\n                        <button *ngIf=\"item.actionType == 'REJECT'\"\n                                class=\"btn btn-danger\" (click)=\"onAction('REJECT',item,filter?.dataType)\">Reject\n                        </button>\n                    </div>\n\n                </div>\n            </div>\n        </ng-container>\n\n        <div class=\"no-rec-row tbl-row\" *ngIf=\"dataSource?.applicationTasks?.length == 0\">\n            <span class=\"no-rec\">No Records..</span>\n        </div>\n    </div> <!--TABLE END-->\n\n    <div class=\"text-right\" *ngIf=\"dataSource?.applicationTasks?.length > summeryModeRecordLimit\"><span class=\"more\"\n                                                                          (click)=\"onViewAll()\">View All</span></div>\n\n    <div class=\"pagination-container text-center\"\n         *ngIf=\"dataSource?.applicationTasks?.length > 0 &&  filter?.numberOfRecordsPerPage > 0 &&  (dataSource?.metadata?.total > filter?.numberOfRecordsPerPage) \">\n\n        <pagination\n                [boundaryLinks]=\"true\"\n                [totalItems]=\"dataSource?.metadata?.total\"\n                [(ngModel)]=\"currentPage\"\n                [itemsPerPage]=\"filter.numberOfRecordsPerPage\"\n                [maxSize]=\"5\"\n                (pageChanged)=\"onPageChanged($event)\"\n                class=\"pagination-sm\"\n                previousText=\"&lsaquo;\"\n                nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\"\n                lastText=\"&raquo;\"></pagination>\n    </div>\n\n</div> <!--WRAPPER END-->\n"

/***/ },

/***/ 896:
/***/ function(module, exports) {

module.exports = "<div>\n    <div>\n        <span class=\"url-part\" *ngFor=\"let path of activeView\">{{path}}</span>\n    </div>\n    <span class=\"animated bounceInDown delay-1 refresh-icon glyphicon glyphicon-refresh\"\n          tooltip=\"Reload\"\n          placement=\"bottom\"\n          (click)=\"onReload()\"></span>\n</div>"

/***/ },

/***/ 897:
/***/ function(module, exports) {

module.exports = "<nav class=\"row navbar navbar-default animated fadeInDown navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"home\">\n        <span class=\"logo\"><img src=\"images/wso2telco_logo.png\" ></span>\n        <span class=\"name\"><span class=\"man\">WORKFLOW MANAGER</span></span>\n      </a>\n      <app-hamburger-menu></app-hamburger-menu>\n    </div>\n\n    <div class=\"navbar-right text-right\">\n      <app-user-avatar></app-user-avatar>\n    </div>\n  </div>\n</nav>\n\n\n<!--<nav>\n  <button (click)=\"onLogoutClick()\">logout</button>\n</nav>-->\n"

/***/ },

/***/ 898:
/***/ function(module, exports) {

module.exports = "<ul [ngClass]=\"{'is-expand':isExpand}\">\n  <li  *ngFor=\"let menu of menuSource\"\n       (click)=\"onClick(menu)\"\n  [ngClass]=\"{'selected':menu.id==selectedMenu?.id}\"><span class=\"icon material-icons\">{{menu.iconName}}</span>\n  <span class=\"menu-name animated fadeIn\" *ngIf=\"isExpand\">{{menu.name}}</span>\n  </li>\n </ul>\n"

/***/ },

/***/ 899:
/***/ function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n  <div class=\"tbl-header\">\n    {{tableHeader}}\n  </div>\n  <div class=\"table\">\n\n    <div class=\"tbl-row header\">\n      <div class=\"tbl-cell\" *ngFor=\"let field of fieldSet\">{{field}}</div>\n    </div>\n\n    <div class=\"tbl-row\" *ngFor=\"let item of dataSource\">\n      <div class=\"tbl-cell\" *ngFor=\"let field of fieldSet\">{{item[field]}}</div>\n    </div>\n\n  </div>\n</div>\n"

/***/ },

/***/ 900:
/***/ function(module, exports) {

module.exports = "<div class=\"avatar-component\"\n     (click)=\"onClick()\"\n     [ngClass]=\"{'expand':dropDownStatus.isOpen}\"\n     dropdown\n     [isOpen]=\"dropDownStatus.isOpen\">\n  <div>\n    <div class=\"avatar\" dropdownToggle>\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </div>\n  </div>\n  <div class=\"userName\">{{loginInfo.userName}}</div>\n  <div>\n    <span class=\"glyphicon arrow\" [ngClass]=\"{'glyphicon-chevron-up':dropDownStatus.isOpen,'glyphicon-chevron-down':!dropDownStatus.isOpen}\"></span>\n  </div>\n\n  <ul class=\"dropdown-menu avatar-dropdown animated fadeIn\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n    <li>\n      <a class=\"dropdown-item\" href=\"#\">My Profile</a>\n    </li>\n    <li>\n      <a class=\"dropdown-item\" href=\"#\">My Assignments</a>\n    </li>\n    <li>\n      <a class=\"dropdown-item\" href=\"\" (click)=\"onMenuClick('logout')\">Logout</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ },

/***/ 901:
/***/ function(module, exports) {

module.exports = "<div class=\"approval-count\" >\n  <span class=\"breakdown myCount\">Assigned to Me : <span class=\"sub\">{{myCount}}</span></span>\n  <span class=\"breakdown groupCount\">Assigned to Group : <span class=\"sub\">{{groupCount}}</span></span>\n  <span class=\"count\">{{totalCount}}</span>\n  <span class=\"name\">{{name}}</span>\n  <span class=\"icon glyphicon material-icons\">{{iconClass}}</span>\n</div>\n"

/***/ },

/***/ 902:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <canvas baseChart\n            [datasets]=\"barChartDataSubscriptions\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptionsSubscriptions\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"></canvas>\n  </div>\n  <div class=\"col-sm-6\">\n    <canvas baseChart\n            [datasets]=\"barChartDataApplications\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptionsApplications\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"></canvas>\n  </div>\n</div>\n\n\n"

/***/ },

/***/ 903:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-approval-count class=\"col-sm-6 apps\"\n                      [totalCount]=\"appDetailsSummery?.totalAppCreations\"\n                      [myCount]=\"appDetailsSummery?.appCreationsForUser\"\n                      [groupCount]=\"appDetailsSummery?.appCreationsForGroup\"\n                      iconClass=\"apps\"\n                      name=\"Application Creations\"\n                      (click)=\"onCountClick('APPLICATIONS')\"></app-approval-count>\n\n  <app-approval-count class=\"col-sm-6 subs\"\n                      [totalCount]=\"appDetailsSummery?.totalSubCreations\"\n                      [myCount]=\"appDetailsSummery?.subCreationsForUser\"\n                      [groupCount]=\"appDetailsSummery?.subCreationsForGroup\"\n                      iconClass=\"subscriptions\"\n                      name=\"Subscription Creations\"\n                      (click)=\"onCountClick('SUBSCRIPTIONS')\"></app-approval-count>\n</div>\n"

/***/ },

/***/ 904:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\" style=\"animation-delay: 0.3s\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <app-approval-summery [appDetailsSummery]=\"dashboardData\"></app-approval-summery>\n    </div>\n    <div class=\"col-lg-6\">\n      <app-approval-history-graph></app-approval-history-graph>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <application-data-table\n              class=\"my\"\n              [filter]=\"myApplicationFilter\"\n              [summeryModeRecordLimit]=\"5\"\n              moreLinkPath=\"/approvals/applications\"\n              tableTitle=\"APPLICATION CREATIONS\"\n              [dataSource]=\"myApplications\"\n              (onApproveRejectTask)=\"onApproveRejectHandler($event)\"\n              (onFilterChange)=\"onFilterChangeHandler($event)\"\n      ></application-data-table>\n    </div>\n\n    <div class=\"col-md-6\">\n      <application-data-table\n              class=\"my\"\n              [summeryModeRecordLimit]=\"5\"\n              moreLinkPath=\"/approvals/subscriptions\"\n              [filter]=\"mySubscriptionFilter\"\n              tableTitle=\"SUBSCRIPTION CREATIONS\"\n              [dataSource]=\"myAppSubscriptionTask\"\n              (onApproveRejectTask)=\"onApproveRejectHandler($event)\"\n              (onFilterChange)=\"onFilterChangeHandler($event)\"\n      ></application-data-table>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <application-data-table\n              [filter]=\"groupApplicationFilter\"\n              [summeryModeRecordLimit]=\"5\"\n              moreLinkPath=\"/approvals/applications\"\n              tableTitle=\"APPLICATION CREATIONS\"\n              [dataSource]=\"allApplications\"\n              (onAssignTask)=\"onAssignTaskHandler($event)\"\n              (onFilterChange)=\"onFilterChangeHandler($event)\"></application-data-table>\n    </div>\n\n    <div class=\"col-md-6\">\n      <application-data-table\n              [filter]=\"groupSubscriptionFilter\"\n              [summeryModeRecordLimit]=\"5\"\n              moreLinkPath=\"/approvals/subscriptions\"\n              tableTitle=\"SUBSCRIPTION CREATIONS\"\n              [dataSource]=\"allSubscriptions\"\n              (onAssignTask)=\"onAssignTaskHandler($event)\"\n              (onFilterChange)=\"onFilterChangeHandler($event)\"></application-data-table>\n    </div>\n  </div>\n\n\n</div>\n\n"

/***/ },

/***/ 905:
/***/ function(module, exports) {

module.exports = "<div class=\"history-filter\">\n\n   <div class=\"row fields-container\">\n      <div class=\"col-sm-3\">\n         <input type=\"text\" class=\"form-control\"\n                [(ngModel)]=\"filter.subscriber\"\n                [typeaheadMinLength]=\"0\"\n                [typeahead]=\"subscribers\"\n                (typeaheadNoResults)=\"onNoSubscriberSelected($event)\"\n                (typeaheadOnSelect)=\"onSubscriberChange()\"\n                placeholder=\"Service Provider\">\n      </div>\n       <div class=\"col-sm-3\">\n           <input type=\"text\" class=\"form-control\"\n                  [(ngModel)]=\"selectedApplication\"\n                  [typeaheadMinLength]=\"0\"\n                  typeaheadOptionField=\"name\"\n                  [typeahead]=\"applications\"\n                  (typeaheadOnSelect)=\"onApplicationChange($event)\"\n                  (typeaheadNoResults)=\"onNoApplicationSelected($event)\"\n                  placeholder=\"Application\">\n       </div>\n       <div class=\"col-sm-3\">\n           <input type=\"text\" class=\"form-control\"\n                  [(ngModel)]=\"filter.operator\"\n                  [typeaheadMinLength]=\"0\"\n                  [typeahead]=\"operators\"\n                  (typeaheadOnSelect)=\"onOperatorChange()\"\n                  placeholder=\"Operator\">\n       </div>\n       <div class=\"col-sm-3\">\n           <input type=\"text\" class=\"form-control\" placeholder=\"Status\">\n       </div>\n   </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12 text-right\">\n            <button class=\"btn btn-default btn-sm\" (click)=\"onClearFilter()\">Clear</button>\n            <button class=\"btn btn-primary btn-sm\" (click)=\"onFilterCriteriaChange()\">Search</button>\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 906:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeInUp row\">\n    <div class=\"col-sm-12\">\n        <app-history-filter\n                [filter]=\"filter\"\n                (onFilterChange)=\"onFilterChangeHandler($event)\"></app-history-filter>\n    </div>\n    <div class=\"col-sm-12\">\n        <app-responsive-table\n                [dataSource]=\"approvalHistoryData?.recordsCol\"\n                [fieldSet]=\"fieldSet\"></app-responsive-table>\n    </div>\n    <div class=\"col-sm-12 text-center\">\n        <pagination\n                [boundaryLinks]=\"true\"\n                [totalItems]=\"totalItems\"\n                [(ngModel)]=\"currentPage\"\n                [itemsPerPage]=\"filter.count\"\n                [maxSize]=\"5\"\n                (pageChanged)=\"onPageChanged($event)\"\n                class=\"pagination-sm\"\n                previousText=\"&lsaquo;\"\n                nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\"\n                lastText=\"&raquo;\"></pagination>\n\n    </div>\n</div>"

/***/ },

/***/ 907:
/***/ function(module, exports) {

module.exports = "<p>\n  search-panel works!\n</p>\n"

/***/ },

/***/ 908:
/***/ function(module, exports) {

module.exports = "<p>\n  search-results works!\n</p>\n"

/***/ },

/***/ 909:
/***/ function(module, exports) {

module.exports = "<div class=\"login-container animated fadeInDown\" style=\"animation-delay: 1s\">\n\n  <div class=\"logo-container\">\n   WORKFLOW<span class=\"man\">MANAGER</span>\n  </div>\n\n  <!--Form Container - START-->\n  <div class=\"form-container\">\n    <h3 class=\"sign-in\">Sign In</h3>\n    <!--login form START-->\n    <form #loginForm=\"ngForm\" novalidate (ngSubmit)=\"onLoginClick(loginForm)\" >\n      <div class=\"form-fields\">\n        <div class=\"form-group\">\n          <input class=\"form-control\"\n                 type=\"text\"\n                 autocomplete=\"off\"\n                 placeholder=\"Username\"\n                 name=\"userName\"\n                 #userNameRef=\"ngModel\"\n                 required\n                 [(ngModel)]=\"userName\">\n          <span class=\"error\" *ngIf=\"userNameRef.errors?.required && (userNameRef.dirty || isSubmitted)\" >User name can not be empty</span>\n        </div>\n\n        <div class=\"form-group\">\n          <input class=\"form-control\"\n                 type=\"password\"\n                 autocomplete=\"off\"\n                 placeholder=\"Password\"\n                 name=\"password\"\n                 #passwordRef=\"ngModel\"\n                 required\n                 [(ngModel)]=\"password\">\n          <span class=\"error\" *ngIf=\"passwordRef.errors?.required && (passwordRef.dirty || isSubmitted)\">Password can not be empty</span>\n        </div>\n\n        <div class=\"action-container\">\n          <button class=\"btn login\" >LOGIN</button>\n          <label class=\"checkbox-lbl\">\n            <input type=\"checkbox\">\n            Remember\n            <span></span>\n          </label>\n\n\n        </div>\n      </div>\n\n      <div class=\"forgot-ps\" >forgot password</div>\n\n\n    </form> <!--login form END-->\n\n  </div><!--Form Container - END-->\n\n  <div  class=\"copyright\">  ©2017 WSO2Telco. Workflow Manager. </div>\n\n  <div class=\"error-container animated bounceIn\" *ngIf=\"loginError\">{{loginError}}</div>\n\n</div>\n\n\n\n"

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export DateTimeInfo */
/* unused harmony export ApplicationTask */
/* unused harmony export MetaData */
/* unused harmony export PaginationInfo */
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return ApplicationTaskResult; });
/* unused harmony export ApplicationTaskSearchParam */
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return AssignApplicationTaskParam; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApproveApplicationCreationTaskParam; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ApproveSubscriptionCreationTaskParam; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return ApprovalEvent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ApplicationTaskFilter; });
var DateTimeInfo = (function () {
    function DateTimeInfo() {
    }
    return DateTimeInfo;
}());
var ApplicationTask = (function () {
    function ApplicationTask() {
    }
    ApplicationTask.prototype.toString = function () {
        return '' + this.id + ',' + this.applicationName + ',' + this.applicationDescription + ',' + this.comment;
    };
    return ApplicationTask;
}());
var MetaData = (function () {
    function MetaData() {
    }
    return MetaData;
}());
var PaginationInfo = (function () {
    function PaginationInfo(pageNo, recordsPerPage) {
        this.pageNo = pageNo;
        this.recordsPerPage = recordsPerPage;
    }
    return PaginationInfo;
}());
var ApplicationTaskResult = (function () {
    function ApplicationTaskResult() {
    }
    return ApplicationTaskResult;
}());
var ApplicationTaskSearchParam = (function () {
    function ApplicationTaskSearchParam() {
    }
    return ApplicationTaskSearchParam;
}());
var AssignApplicationTaskParam = (function () {
    function AssignApplicationTaskParam() {
    }
    return AssignApplicationTaskParam;
}());
var ApproveApplicationCreationTaskParam = (function () {
    function ApproveApplicationCreationTaskParam() {
    }
    ApproveApplicationCreationTaskParam.prototype.toString = function () {
        return this.taskId + ', ' + this.description + ', ' + this.selectedTier + ', ' + this.status;
    };
    return ApproveApplicationCreationTaskParam;
}());
var ApproveSubscriptionCreationTaskParam = (function () {
    function ApproveSubscriptionCreationTaskParam() {
    }
    return ApproveSubscriptionCreationTaskParam;
}());
var ApprovalEvent = (function () {
    function ApprovalEvent(task, dataType, status) {
        this.task = task;
        this.dataType = dataType;
        this.status = status;
    }
    return ApprovalEvent;
}());
var ApplicationTaskFilter = (function () {
    function ApplicationTaskFilter(dataType, recPerPage) {
        this.ids = [];
        this.appNames = [];
        this.users = [];
        this.startRecordNumber = 0;
        this.numberOfRecordsPerPage = 0;
        this.dataType = dataType;
        this.numberOfRecordsPerPage = recPerPage;
    }
    return ApplicationTaskFilter;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/application-data-models.js.map

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_providers_login_remote_data_service__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_common_data_models__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(_router, _remoteService) {
        this._router = _router;
        this._remoteService = _remoteService;
        this.loginUserInfo = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        var _loginUserInfo = JSON.parse(sessionStorage.getItem('loginUserInfo'));
        this.loginUserInfo.next(_loginUserInfo);
    }
    AuthenticationService.prototype.doLogin = function (userName, password, callback) {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_4__models_common_data_models__["b" /* User */]();
        user.userName = userName;
        user.password = password;
        this._remoteService.login(user)
            .subscribe(function (loginInfo) {
            _this.loginUserInfo.next(loginInfo);
            sessionStorage.setItem('loginUserInfo', JSON.stringify(loginInfo));
            _this._router.navigate(['home']);
        }, function (error) {
            callback(error);
        });
    };
    AuthenticationService.prototype.doLogout = function () {
        var user = JSON.parse(sessionStorage.getItem('loginUserInfo'));
        if (!!user) {
            this._remoteService.logout(user.userName);
            sessionStorage.setItem('loginUserInfo', null);
            this.loginUserInfo.next(null);
            this._router.navigate(['login']);
        }
        else {
            this._router.navigate(['login']);
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var loginInfo = this.loginUserInfo && this.loginUserInfo.getValue();
        return !!loginInfo;
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_providers_login_remote_data_service__["a" /* LoginRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__data_providers_login_remote_data_service__["a" /* LoginRemoteDataService */]) === 'function' && _b) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/authentication.service.js.map

/***/ }

},[1178]);
//# sourceMappingURL=main.bundle.map