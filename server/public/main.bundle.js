webpackJsonp([5],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/approvals/approvals.module": [
		"../../../../../src/app/approvals/approvals.module.ts",
		3
	],
	"app/dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		1
	],
	"app/history/history.module": [
		"../../../../../src/app/history/history.module.ts",
		2
	],
	"app/login/login.module": [
		"../../../../../src/app/login/login.module.ts",
		4
	],
	"app/rate/rate.module": [
		"../../../../../src/app/rate/rate.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <app-header *ngIf=\"isLoggedIn\"></app-header>\r\n    <div class=\"content-container\">\r\n        <div class=\"menu-container animated slideInLeft\" *ngIf=\"isLoggedIn\">\r\n            <app-main-menu></app-main-menu>\r\n        </div>\r\n        <div class=\"view-container\" [ngClass]=\"{'menu-expand':isMenuExpanded}\">\r\n            <div>\r\n                <div class=\"col-sm-12 breadcrumbs-bar\"  [ngClass]=\"{'menu-expand':isMenuExpanded}\" *ngIf=\"isLoggedIn\">\r\n                    <app-breadcrumbs></app-breadcrumbs>\r\n                </div>\r\n                <div class=\"col-sm-12 content-div\">\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng2-toasty\r\n        [position]=\"'bottom-center'\"></ng2-toasty>\r\n\r\n<ng2-slim-loading-bar></ng2-slim-loading-bar>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  min-height: 100%;\n  background-color: #f5f5f5;\n  min-width: 300px; }\n\n:host /deep/ ng2-toasty .toast {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp; }\n\nrouter-outlet {\n  display: block; }\n  @media screen and (max-width: 768px) {\n    router-outlet {\n      padding-top: 40px; } }\n\nng2-slim-loading-bar {\n  position: fixed;\n  top: 70px;\n  z-index: 500;\n  left: 0px;\n  right: 0px; }\n\n:host /deep/ ng2-slim-loading-bar .slim-loading-bar-progress {\n  background-color: #E19131 !important;\n  height: 4px !important; }\n\n.container-fluid {\n  height: 100%; }\n\n.content-container {\n  margin-left: -15px;\n  margin-right: -15px;\n  position: relative;\n  margin-top: 70px; }\n  @media screen and (max-width: 768px) {\n    .content-container {\n      margin-top: 140px; } }\n\n.menu-container {\n  position: fixed;\n  top: 70px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 100; }\n  @media screen and (max-width: 768px) {\n    .menu-container {\n      top: 140px; } }\n\n.view-container {\n  transition: margin-left 0.8s ease-in-out;\n  margin-left: 50px; }\n  .view-container.menu-expand {\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s;\n    margin-left: 285px; }\n  .view-container .breadcrumbs-bar {\n    border-bottom: inset 1px #dfdfdf;\n    border-radius: 0px;\n    height: 46px;\n    line-height: 2.2em;\n    background-color: white;\n    position: fixed;\n    z-index: 100;\n    left: 50px;\n    right: 0px;\n    min-width: 450px;\n    transition: width 0.3s ease-in-out; }\n    .view-container .breadcrumbs-bar.menu-expand {\n      left: 285px; }\n  .view-container .content-div {\n    margin-top: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__ = __webpack_require__("../../../../../src/app/commons/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_services_app_common_service__ = __webpack_require__("../../../../../src/app/commons/services/app-common.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [":host{background-color:blue}"],
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__commons_services_app_common_service__["a" /* AppCommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__commons_services_app_common_service__["a" /* AppCommonService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__ = __webpack_require__("../../../../../src/app/commons/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginGuard; });
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
//# sourceMappingURL=E:/Git/manage-module-ui/src/app.guard.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__("../../../../ng2-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__commons_commons_module__ = __webpack_require__("../../../../../src/app/commons/commons.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_guard__ = __webpack_require__("../../../../../src/app/app.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commons_components_header_header_component__ = __webpack_require__("../../../../../src/app/commons/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__commons_components_hamburger_menu_hamburger_menu_component__ = __webpack_require__("../../../../../src/app/commons/components/hamburger-menu/hamburger-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__commons_components_user_avatar_user_avatar_component__ = __webpack_require__("../../../../../src/app/commons/components/user-avatar/user-avatar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__commons_components_main_menu_main_menu_component__ = __webpack_require__("../../../../../src/app/commons/components/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__commons_components_breadcrumbs_breadcrumbs_component__ = __webpack_require__("../../../../../src/app/commons/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__data_providers_data_providers_module__ = __webpack_require__("../../../../../src/app/data-providers/data-providers.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_providers_approval_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/approval-remote-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__data_providers_rate_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/rate_remote-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__data_providers_dashboard_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/dashboard-remote-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__approvals_approval_helper_service__ = __webpack_require__("../../../../../src/app/approvals/approval-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__data_providers_reporting_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/reporting-remote-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__commons_components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__commons_components_hamburger_menu_hamburger_menu_component__["a" /* HamburgerMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_12__commons_components_user_avatar_user_avatar_component__["a" /* UserAvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__commons_components_main_menu_main_menu_component__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__commons_components_breadcrumbs_breadcrumbs_component__["a" /* BreadcrumbsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* RootLevelRoutes */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__commons_commons_module__["a" /* CommonsModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_22__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_16__data_providers_data_providers_module__["a" /* DataProvidersModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["b" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["c" /* DropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["d" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_ng2_toasty__["a" /* ToastyModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["e" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__app_guard__["a" /* AppGuard */],
                __WEBPACK_IMPORTED_MODULE_9__app_guard__["b" /* LoginGuard */],
                __WEBPACK_IMPORTED_MODULE_18__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */],
                __WEBPACK_IMPORTED_MODULE_20__data_providers_dashboard_remote_data_service__["a" /* DashboardRemoteDataService */],
                __WEBPACK_IMPORTED_MODULE_23__data_providers_reporting_remote_data_service__["a" /* ReportingRemoteDataService */],
                __WEBPACK_IMPORTED_MODULE_19__data_providers_rate_remote_data_service__["a" /* RateRemoteDataService */],
                __WEBPACK_IMPORTED_MODULE_21__approvals_approval_helper_service__["a" /* ApprovalHelperService */],
                {
                    provide: 'API_CONTEXT',
                    useValue: 'api'
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_guard__ = __webpack_require__("../../../../../src/app/app.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootLevelRoutes; });


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
        path: 'rate',
        loadChildren: 'app/rate/rate.module#RateModule',
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
//# sourceMappingURL=E:/Git/manage-module-ui/src/app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/approvals/approval-helper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_providers_approval_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/approval-remote-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_models_application_data_models__ = __webpack_require__("../../../../../src/app/commons/models/application-data-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalHelperService; });
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
//# sourceMappingURL=E:/Git/manage-module-ui/src/approval-helper.service.js.map

/***/ }),

/***/ "../../../../../src/app/commons/commons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/commons/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rate_service__ = __webpack_require__("../../../../../src/app/commons/services/rate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_providers_login_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/login_remote-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_common_service__ = __webpack_require__("../../../../../src/app/commons/services/app-common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonsModule; });
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4__data_providers_login_remote_data_service__["a" /* LoginRemoteDataService */], __WEBPACK_IMPORTED_MODULE_5__services_app_common_service__["a" /* AppCommonService */], __WEBPACK_IMPORTED_MODULE_6__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_3__services_rate_service__["a" /* RateService */]],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], CommonsModule);
    return CommonsModule;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/commons.module.js.map

/***/ }),

/***/ "../../../../../src/app/commons/components/application-data-table/application-data-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\r\n    <span class=\"filter\" tooltip=\"Filter\"\r\n          [ngClass]=\"{'on':isFilterVisible}\"\r\n          (click)=\"onToggleFilter()\"><i class=\"material-icons\">filter_list</i></span>\r\n    <div><span class=\"tbl-cat\">{{filter?.dataType?.dataCategory == 'USER' ? 'MY TASKS' : 'ALL TASKS'}}</span></div>\r\n    <div class=\"tbl-header\">\r\n        {{tableTitle}}\r\n    </div>\r\n\r\n    <div class=\"filter-container\" [ngClass]=\"{'open':isFilterVisible}\">\r\n        <div class=\"content animated fadeInUp delay-02\" *ngIf=\"isFilterVisible\">\r\n            <div class=\"head\">Filter<span class=\"clear\" (click)=\"onClear('ALL')\">Clear All</span></div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-xs-4\">\r\n                    <input type=\"text\" class=\"form-control\"\r\n                           [(ngModel)]=\"filterId\"\r\n                           [typeaheadMinLength]=\"0\"\r\n                           container=\"body\"\r\n                           [typeahead]=\"FilterFieldsDataSource\"\r\n                           typeaheadOptionField=\"id\"\r\n                           (typeaheadOnSelect)=\"onFilterItemAdded($event,'ID')\"\r\n                           placeholder=\"Id\">\r\n                </div>\r\n                <div class=\"form-group col-xs-4\">\r\n                    <input type=\"text\"\r\n                           [(ngModel)]=\"filterAppName\"\r\n                           container=\"body\"\r\n                           [typeaheadMinLength]=\"0\"\r\n                           [typeahead]=\"FilterFieldsDataSource\"\r\n                           typeaheadOptionField=\"applicationName\"\r\n                           (typeaheadOnSelect)=\"onFilterItemAdded($event,'APP_NAME')\"\r\n                           class=\"form-control\" placeholder=\"App Name\">\r\n                </div>\r\n                <div class=\"form-group col-xs-4\">\r\n                    <input type=\"text\"\r\n                           [(ngModel)]=\"filterUser\"\r\n                           container=\"body\"\r\n                           [typeahead]=\"FilterFieldsDataSource\"\r\n                           typeaheadOptionField=\"userName\"\r\n                           typeaheadGroupField=\"userName\"\r\n                           (typeaheadOnSelect)=\"onFilterItemAdded($event,'USER')\"\r\n                           class=\"form-control\" placeholder=\"User\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4\">\r\n                    <div class=\"filter-val-container id\" *ngIf=\"filter?.ids.length > 0\">\r\n                        <div class=\"sec-head\">ID</div>\r\n                        <span class=\"close material-icons\" (click)=\"onClear('ID')\">close</span>\r\n                        <span class=\"filter-val ids\" *ngFor=\"let id of filter.ids\">{{id}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-4\">\r\n                    <div class=\"filter-val-container name\" *ngIf=\"filter?.appNames.length > 0\">\r\n                        <div class=\"sec-head\">App Name</div>\r\n                        <span class=\"close material-icons\" (click)=\"onClear('NAME')\">close</span>\r\n                        <span class=\"filter-val name\" *ngFor=\"let name of filter.appNames\">{{name}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-4\">\r\n                    <div class=\"filter-val-container user\" *ngIf=\"filter?.users.length > 0\">\r\n                        <div class=\"sec-head\">User</div>\r\n                        <span class=\"close material-icons\" (click)=\"onClear('USER')\">close</span>\r\n                        <span class=\"filter-val user\" *ngFor=\"let user of filter.users\">{{user}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"table\">\r\n\r\n        <div class=\"tbl-row header\">\r\n            <div class=\"tbl-cell\">ID</div>\r\n            <div class=\"tbl-cell\">APP NAME</div>\r\n            <div class=\"tbl-cell\">USER</div>\r\n            <div class=\"tbl-cell\">CREATED ON</div>\r\n            <div class=\"tbl-cell text-right pad-r-15-im\">ACTION</div>\r\n        </div>\r\n\r\n        <ng-container *ngFor=\"let item of dataSource?.applicationTasks; let i=index\">\r\n            <div class=\"tbl-row\"\r\n                 [ngClass]=\"{\r\n                 'modified' : item.isModified,\r\n                 'open':item.isExpand,\r\n                 'M':item.actionType == 'MORE',\r\n                 'A':item.actionType == 'APPROVE',\r\n                 'R':item.actionType == 'REJECT'}\"\r\n                 *ngIf=\"!!!summeryModeRecordLimit || i < summeryModeRecordLimit\">\r\n                <div class=\"tbl-cell\">\r\n                    <span tooltip=\"More Info\"\r\n                          class=\"action expand material-icons\"\r\n                          (click)=\"item.isExpand = !item.isExpand; item.actionType = 'MORE' \">{{(item.isExpand)? 'expand_less' :  'expand_more'}}</span>\r\n                    {{item.id}}\r\n                </div>\r\n                <div class=\"tbl-cell\">{{item.applicationName}}</div>\r\n                <div class=\"tbl-cell\">{{item.userName || item.subscriber}}</div>\r\n                <div class=\"tbl-cell\">{{item.createTime?.date + ' ' + item.createTime?.time}}</div>\r\n                <div class=\"tbl-cell text-right\">\r\n                    <span tooltip=\"Approve\" *ngIf=\"filter?.dataType?.dataCategory == 'USER'\"\r\n                          class=\"action  approve material-icons\"\r\n                          [ngClass]=\"{'A':item.actionType =='APPROVE' }\"\r\n                          (click)=\"item.isExpand = true; item.actionType = 'APPROVE' \">check</span>\r\n\r\n                    <span tooltip=\"Reject\" *ngIf=\"filter?.dataType?.dataCategory  == 'USER'\"\r\n                          class=\"action  reject material-icons\"\r\n                          [ngClass]=\"{'R':item.actionType =='REJECT' }\"\r\n                          (click)=\"item.isExpand = true; item.actionType = 'REJECT' \">close</span>\r\n\r\n                    <span tooltip=\"Assign to Me\" *ngIf=\"filter?.dataType?.dataCategory  == 'GROUP'\"\r\n                          class=\"action  assign material-icons\"\r\n                          (click)=\"onAction('ASSIGN',item,filter?.dataType)\">assignment_ind</span>\r\n                </div>\r\n                <div class=\"more-con animated fadeInUp\" *ngIf=\"item.isExpand\"\r\n                     [ngClass]=\"{ 'M':item.actionType == 'MORE',\r\n                    'A':item.actionType == 'APPROVE',\r\n                    'R':item.actionType == 'REJECT'}\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"col-xs-6\">\r\n                            <div class=\"row more-row\">\r\n                                <div class=\"col-xs-6 field-name\">Application Id</div>\r\n                                <div class=\"col-xs-6 field-value\"> {{item.applicationId}}</div>\r\n                            </div>\r\n                            <div class=\"row more-row\">\r\n                                <div class=\"col-xs-6 field-name\">Description</div>\r\n                                <div class=\"col-xs-6 field-value\"> {{item.applicationDescription}}</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <div class=\"row more-row\">\r\n                                <div class=\"col-xs-6 field-name\">Operator</div>\r\n                                <div class=\"col-xs-6 field-value\">{{item.operators}}</div>\r\n                            </div>\r\n                            <div class=\"row more-row\">\r\n                                <div class=\"col-xs-6 field-name\">Tier</div>\r\n                                <div class=\"col-xs-6 field-value\">\r\n                                    <select class=\"form-control\" (change)=\"onOptionChange($event,item)\">\r\n                                        <option *ngFor=\"let opt of item.tiersStr\" [selected]=\"item.tier == opt\">\r\n                                            {{opt}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-12\" *ngIf=\"item.actionType !== 'MORE'\">\r\n                        <div class=\"col-xs-3 field-name\">Comment</div>\r\n                        <div class=\"col-xs-9 field-value\"><input type=\"text\" class=\"form-control\"></div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-12 text-right\" *ngIf=\"item.actionType !== 'MORE'\">\r\n                        <button class=\"btn btn-default animated fadeIn\"\r\n                                (click)=\"item.isExpand = false; item.actionType = '' \">Cancel\r\n                        </button>\r\n                        <button class=\"btn btn-primary animated fadeIn\"\r\n                                *ngIf=\"item.actionType == 'APPROVE'\"\r\n                                (click)=\"onAction('APPROVE',item,filter?.dataType)\">Approve\r\n                        </button>\r\n                        <button *ngIf=\"item.actionType == 'REJECT'\"\r\n                                class=\"btn btn-danger\" (click)=\"onAction('REJECT',item,filter?.dataType)\">Reject\r\n                        </button>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <div class=\"no-rec-row tbl-row\" *ngIf=\"dataSource?.applicationTasks?.length == 0\">\r\n            <span class=\"no-rec\">No Records..</span>\r\n        </div>\r\n    </div> <!--TABLE END-->\r\n\r\n    <div class=\"text-right\" *ngIf=\"dataSource?.applicationTasks?.length > summeryModeRecordLimit\"><span class=\"more\"\r\n                                                                          (click)=\"onViewAll()\">View All</span></div>\r\n\r\n    <div class=\"pagination-container text-center\"\r\n         *ngIf=\"dataSource?.applicationTasks?.length > 0 &&  filter?.numberOfRecordsPerPage > 0 &&  (dataSource?.metadata?.total > filter?.numberOfRecordsPerPage) \">\r\n\r\n        <pagination\r\n                [boundaryLinks]=\"true\"\r\n                [totalItems]=\"dataSource?.metadata?.total\"\r\n                [(ngModel)]=\"currentPage\"\r\n                [itemsPerPage]=\"filter.numberOfRecordsPerPage\"\r\n                [maxSize]=\"5\"\r\n                (pageChanged)=\"onPageChanged($event)\"\r\n                class=\"pagination-sm\"\r\n                previousText=\"&lsaquo;\"\r\n                nextText=\"&rsaquo;\"\r\n                firstText=\"&laquo;\"\r\n                lastText=\"&raquo;\"></pagination>\r\n    </div>\r\n\r\n</div> <!--WRAPPER END-->\r\n"

/***/ }),

/***/ "../../../../../src/app/commons/components/application-data-table/application-data-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.table-wrapper {\n  padding: 10px;\n  border: solid 1px #e7ecf1;\n  background-color: white;\n  min-height: 425px;\n  position: relative; }\n  .table-wrapper .tbl-cat {\n    font-weight: 600;\n    position: absolute;\n    left: 0px;\n    top: 10px;\n    padding: 4px 10px;\n    color: #9a9a9a; }\n  .table-wrapper .filter {\n    position: absolute;\n    right: 10px;\n    top: 30px;\n    width: 30px;\n    text-align: center;\n    height: 30px;\n    padding-top: 2px;\n    color: #8A98A0;\n    transition: all 0.2s ease-in;\n    cursor: pointer; }\n    .table-wrapper .filter:hover {\n      color: black;\n      background-color: #32c5d2; }\n    .table-wrapper .filter.on {\n      background-color: #32c5d2;\n      color: black; }\n  .table-wrapper .tbl-header {\n    margin-top: 22px;\n    font-weight: 600;\n    font-size: 1.3em;\n    padding: 5px 0px 15px; }\n  .table-wrapper .table {\n    display: table;\n    width: 100%; }\n    .table-wrapper .table .tbl-row {\n      display: table-row;\n      background-color: #f6f6f6;\n      height: 0px;\n      transition: all 0.5s ease-in; }\n      .table-wrapper .table .tbl-row:nth-of-type(odd) {\n        background-color: white; }\n      .table-wrapper .table .tbl-row.header {\n        background-color: #7788aa;\n        font-weight: 600;\n        color: white; }\n      .table-wrapper .table .tbl-row .tbl-cell {\n        display: table-cell;\n        padding: 10px 10px; }\n      .table-wrapper .table .tbl-row.modified {\n        background-color: #ffffcc; }\n      .table-wrapper .table .tbl-row.open {\n        height: 158px;\n        background-color: #f4f2c9; }\n        .table-wrapper .table .tbl-row.open .action {\n          border-color: black;\n          color: black; }\n        .table-wrapper .table .tbl-row.open.A, .table-wrapper .table .tbl-row.open.R {\n          height: 243px; }\n      .table-wrapper .table .tbl-row .more-con {\n        padding: 10px 0px 10px 0px;\n        background-color: #f8f9fa;\n        position: absolute;\n        left: 10px;\n        right: 11px;\n        height: 105px;\n        margin-top: 53px;\n        border: solid 1px #d0d0d0;\n        -ms-box-shadow: inset 0px 10px 10px -9px #d1d1d1;\n        box-shadow: inset 0px 10px 10px -9px #d1d1d1; }\n        .table-wrapper .table .tbl-row .more-con.A, .table-wrapper .table .tbl-row .more-con.R {\n          height: 190px; }\n        .table-wrapper .table .tbl-row .more-con .more-row {\n          margin-bottom: 2px; }\n        .table-wrapper .table .tbl-row .more-con .field-name {\n          height: 40px;\n          background-color: #f1f3f5;\n          line-height: 40px;\n          text-align: right;\n          font-weight: 600; }\n        .table-wrapper .table .tbl-row .more-con .field-value {\n          height: 40px;\n          background-color: white;\n          line-height: 40px; }\n        .table-wrapper .table .tbl-row .more-con select, .table-wrapper .table .tbl-row .more-con input {\n          margin-top: 2px; }\n        .table-wrapper .table .tbl-row .more-con .btn {\n          margin-top: 10px;\n          padding-top: 5px !important;\n          padding-bottom: 5px !important; }\n  .table-wrapper .time {\n    display: block;\n    font-size: 0.8em; }\n  .table-wrapper .action {\n    width: 25px;\n    height: 25px;\n    border: solid 1px #c7c7c7;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 25px;\n    margin: 2px 5px;\n    cursor: pointer;\n    color: #8A98A0;\n    font-size: 1em;\n    transition: all 0.2s ease-in; }\n    .table-wrapper .action:hover {\n      background-color: #32c5d2;\n      color: black; }\n    .table-wrapper .action.A {\n      background-color: #32c5d2; }\n    .table-wrapper .action.R {\n      background-color: #bb3535;\n      color: white !important; }\n    .table-wrapper .action.reject:hover {\n      background-color: #bb3535;\n      color: white !important; }\n    .table-wrapper .action.expand {\n      border: none;\n      font-size: 1.5em; }\n  .table-wrapper .no-rec-row {\n    position: relative; }\n    .table-wrapper .no-rec-row .no-rec {\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      margin: auto;\n      width: 100px;\n      padding-top: 150px;\n      color: #8A98A0; }\n\n.filter-container {\n  min-height: 0px;\n  margin-bottom: 10px;\n  transition: all 0.4s ease-in; }\n  .filter-container.open {\n    min-height: 100px; }\n  .filter-container .content {\n    background-color: #f1f3f5;\n    height: 100%;\n    padding: 10px; }\n    .filter-container .content .head {\n      font-size: 1.3em;\n      font-weight: 600;\n      color: #868e96;\n      padding-bottom: 5px; }\n      .filter-container .content .head .clear {\n        font-size: 0.7em;\n        padding-left: 7px;\n        color: #adb5bd;\n        font-weight: 400;\n        transition: all 0.2s ease-in;\n        cursor: pointer; }\n        .filter-container .content .head .clear:hover {\n          color: #E19131; }\n    .filter-container .content .filter-val-container {\n      position: relative;\n      padding: 5px;\n      background-color: white; }\n      .filter-container .content .filter-val-container .close {\n        position: absolute;\n        right: 2px;\n        top: 2px;\n        font-size: 1em; }\n      .filter-container .content .filter-val-container .filter-val {\n        display: inline-block;\n        padding: 2px 5px;\n        font-size: 0.9em;\n        margin: 2px; }\n        .filter-container .content .filter-val-container .filter-val.ids {\n          background-color: #69db7c;\n          border: solid 1px #2f9e44; }\n        .filter-container .content .filter-val-container .filter-val.name {\n          background-color: #66d9e8;\n          border: solid 1px #1098ad; }\n        .filter-container .content .filter-val-container .filter-val.user {\n          background-color: #e599f7;\n          border: solid 1px #be4bdb; }\n      .filter-container .content .filter-val-container .sec-head {\n        padding: 0px 5px;\n        font-size: 0.9em;\n        font-weight: 600; }\n\n@-moz-document url-prefix() {\n  .more-con {\n    margin-top: 25px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/components/application-data-table/application-data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__ = __webpack_require__("../../../../../src/app/commons/models/application-data-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/approval-remote-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationDataTableComponent; });
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
            template: __webpack_require__("../../../../../src/app/commons/components/application-data-table/application-data-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/components/application-data-table/application-data-table.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _h) || Object])
    ], ApplicationDataTableComponent);
    return ApplicationDataTableComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/application-data-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/commons/components/breadcrumbs/breadcrumbs.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div>\r\n        <span class=\"url-part\" *ngFor=\"let path of activeView\">{{path}}</span>\r\n    </div>\r\n    <span class=\"animated bounceInDown delay-1 refresh-icon glyphicon glyphicon-refresh\"\r\n          tooltip=\"Reload\"\r\n          placement=\"bottom\"\r\n          (click)=\"onReload()\"></span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/commons/components/breadcrumbs/breadcrumbs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  line-height: 5rem;\n  position: relative;\n  display: block; }\n\n.url-part {\n  display: inline-block;\n  padding-right: 10px;\n  font-size: 1.3em;\n  font-weight: 300;\n  text-transform: capitalize; }\n  .url-part:last-child {\n    font-weight: 900;\n    text-transform: uppercase; }\n\n.refresh-icon {\n  position: absolute;\n  right: 50px;\n  height: 30px;\n  width: 30px;\n  background-color: #E19131;\n  text-align: center;\n  line-height: 30px;\n  border-radius: 20px;\n  color: white;\n  font-size: 1em;\n  margin-top: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease-in; }\n  @media screen and (max-width: 768px) {\n    .refresh-icon {\n      right: 0px; } }\n  .refresh-icon:hover {\n    background-color: #e1a637;\n    color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/components/breadcrumbs/breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/approval-remote-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
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
            template: __webpack_require__("../../../../../src/app/commons/components/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/components/breadcrumbs/breadcrumbs.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === 'function' && _c) || Object])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/breadcrumbs.component.js.map

/***/ }),

/***/ "../../../../../src/app/commons/components/hamburger-menu/hamburger-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.hm-menu-container {\n  position: relative;\n  width: 50px;\n  height: 50px; }\n  .hm-menu-container .hamburger-menu {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    width: 25px;\n    height: 22px;\n    cursor: pointer; }\n    .hm-menu-container .hamburger-menu .bar,\n    .hm-menu-container .hamburger-menu .bar:after,\n    .hm-menu-container .hamburger-menu .bar:before {\n      width: 25px;\n      height: 2px; }\n    .hm-menu-container .hamburger-menu .bar {\n      position: relative;\n      -webkit-transform: translateY(10px);\n              transform: translateY(10px);\n      background: white;\n      transition: all 0ms 300ms; }\n      .hm-menu-container .hamburger-menu .bar:before {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        bottom: 10px;\n        background: white;\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n      .hm-menu-container .hamburger-menu .bar:after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: 10px;\n        background: white;\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n      .hm-menu-container .hamburger-menu .bar.animate {\n        background: rgba(255, 255, 255, 0); }\n        .hm-menu-container .hamburger-menu .bar.animate:after {\n          width: 15.625px;\n          top: 0;\n          left: 5px;\n          -webkit-transform-origin: 0px 0px;\n                  transform-origin: 0px 0px;\n          -webkit-transform: rotate(45deg);\n                  transform: rotate(45deg);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n        .hm-menu-container .hamburger-menu .bar.animate:before {\n          width: 15.625px;\n          bottom: 0;\n          left: 5px;\n          -webkit-transform-origin: 0px 0px;\n                  transform-origin: 0px 0px;\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/components/hamburger-menu/hamburger-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__ = __webpack_require__("../../../../../src/app/commons/services/app-common.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HamburgerMenuComponent; });
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
            styles: [__webpack_require__("../../../../../src/app/commons/components/hamburger-menu/hamburger-menu.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */]) === 'function' && _a) || Object])
    ], HamburgerMenuComponent);
    return HamburgerMenuComponent;
    var _a;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/hamburger-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/commons/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"row navbar navbar-default animated fadeInDown navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" routerLink=\"home\">\r\n        <span class=\"logo\"><img src=\"images/wso2telco_logo_white.png\" ></span>\r\n        <span class=\"name\"><span class=\"man\">MANAGE APPLICATION</span></span>\r\n      </a>\r\n      <app-hamburger-menu></app-hamburger-menu>\r\n    </div>\r\n\r\n    <div class=\"navbar-right text-right\">\r\n      <app-user-avatar></app-user-avatar>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<!--<nav>\r\n  <button (click)=\"onLogoutClick()\">logout</button>\r\n</nav>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/commons/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: #14354C;\n  border: 0;\n  border-radius: 0px;\n  margin-bottom: 0px;\n  z-index: 200;\n  height: 70px; }\n  .navbar .container-fluid {\n    padding: 10px 35px 10px 15px;\n    min-width: 500px; }\n  @media screen and (max-width: 768px) {\n    .navbar {\n      height: 140px; } }\n\n@media screen and (max-width: 768px) {\n  .navbar-header {\n    margin-left: 0px;\n    margin-right: 0px; } }\n\n@media screen and (max-width: 768px) {\n  .navbar-right {\n    margin-left: 15px; } }\n\n.navbar-brand {\n  float: right;\n  padding-left: 25px;\n  font-size: 1.6rem;\n  color: #E19131;\n  position: relative; }\n  .navbar-brand .logo, .navbar-brand .name {\n    float: left; }\n  .navbar-brand .logo {\n    top: 0px; }\n    .navbar-brand .logo img {\n      height: 30px;\n      margin-top: -6px; }\n  .navbar-brand .name {\n    margin-left: 10px; }\n  .navbar-brand:hover, .navbar-brand:focus, .navbar-brand:active {\n    color: #E19131; }\n  .navbar-brand .man {\n    color: #8A98A0;\n    font-weight: 600;\n    display: inline-block;\n    margin-top: 4px; }\n\napp-hamburger-menu {\n  float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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
            template: __webpack_require__("../../../../../src/app/commons/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/components/header/header.component.scss")],
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/header.component.js.map

/***/ }),

/***/ "../../../../../src/app/commons/components/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul [ngClass]=\"{'is-expand':isExpand}\">\r\n  <li  *ngFor=\"let menu of menuSource\"\r\n       (click)=\"onClick(menu)\"\r\n  [ngClass]=\"{'selected':menu.id==selectedMenu?.id}\"><span class=\"icon material-icons\">{{menu.iconName}}</span>\r\n  <span class=\"menu-name animated fadeIn\" *ngIf=\"isExpand\">{{menu.name}}</span>\r\n  </li>\r\n </ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/commons/components/main-menu/main-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background-color: #1b4665;\n  height: 100%; }\n\nul {\n  list-style: none;\n  padding: 0px;\n  width: 50px;\n  transition: width 0.3s ease-in-out; }\n  ul li {\n    cursor: pointer;\n    width: 100%;\n    height: 46px;\n    border-bottom: solid 1px #164e6a;\n    position: relative;\n    transition: all 0.3s ease-in; }\n    ul li:hover {\n      background-color: #14354C; }\n    ul li:after {\n      content: '';\n      width: 0px;\n      height: 0px;\n      border-right: solid 8px #f5f5f5;\n      border-top: solid 10px transparent;\n      border-bottom: solid 10px transparent;\n      position: absolute;\n      right: 0px;\n      top: 14px;\n      display: none; }\n    ul li .icon {\n      display: inline-block;\n      text-align: center;\n      width: 100%;\n      line-height: 46px;\n      color: #adadad;\n      font-size: 1.6em; }\n    ul li .menu-name {\n      -webkit-animation-delay: 0.3s;\n      animation-delay: 0.3s;\n      color: #afafaf; }\n    ul li.selected {\n      background-color: #32c5d2; }\n      ul li.selected .icon {\n        color: white; }\n      ul li.selected .menu-name {\n        color: white; }\n      ul li.selected:after {\n        display: block; }\n  ul.is-expand {\n    width: 285px; }\n    ul.is-expand li .icon {\n      width: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/components/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__ = __webpack_require__("../../../../../src/app/commons/services/app-common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
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
            { id: 4, route: '/rate', name: 'Rate', iconName: 'apps' },
            { id: 5, route: '/history', name: 'History', iconName: 'history' }
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
            template: __webpack_require__("../../../../../src/app/commons/components/main-menu/main-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/components/main-menu/main-menu.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], MainMenuComponent);
    return MainMenuComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/main-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/commons/components/responsive-table/responsive-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\r\n  <div class=\"tbl-header\">\r\n    {{tableHeader}}\r\n  </div>\r\n  <div class=\"table\">\r\n\r\n    <div class=\"tbl-row header\">\r\n      <div class=\"tbl-cell\" *ngFor=\"let field of fieldSet\">{{field}}</div>\r\n    </div>\r\n\r\n    <div class=\"tbl-row\" *ngFor=\"let item of dataSource\">\r\n      <div class=\"tbl-cell\" *ngFor=\"let field of fieldSet\">{{item[field]}}</div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/commons/components/responsive-table/responsive-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.table-wrapper {\n  padding: 10px;\n  border: solid 1px #e7ecf1;\n  background-color: white;\n  width: 100%; }\n  .table-wrapper .tbl-header {\n    font-weight: 600;\n    font-size: 1.3em;\n    padding: 5px 0px 15px; }\n  .table-wrapper .table {\n    display: table;\n    width: 100%; }\n    @media only screen and (max-width: 768px) {\n      .table-wrapper .table {\n        display: block; } }\n    .table-wrapper .table .tbl-row {\n      display: table-row;\n      background-color: #f6f6f6; }\n      .table-wrapper .table .tbl-row:nth-of-type(odd) {\n        background-color: white; }\n      .table-wrapper .table .tbl-row.header {\n        background-color: #ced4da;\n        font-weight: 600; }\n      @media only screen and (max-width: 768px) {\n        .table-wrapper .table .tbl-row {\n          display: block; } }\n      .table-wrapper .table .tbl-row .tbl-cell {\n        display: table-cell;\n        padding: 10px 10px; }\n        @media only screen and (max-width: 768px) {\n          .table-wrapper .table .tbl-row .tbl-cell {\n            display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/components/responsive-table/responsive-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsiveTableComponent; });
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
            template: __webpack_require__("../../../../../src/app/commons/components/responsive-table/responsive-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/components/responsive-table/responsive-table.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], ResponsiveTableComponent);
    return ResponsiveTableComponent;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/responsive-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/commons/components/user-avatar/user-avatar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"avatar-component\"\r\n     (click)=\"onClick()\"\r\n     [ngClass]=\"{'expand':dropDownStatus.isOpen}\"\r\n     dropdown\r\n     [isOpen]=\"dropDownStatus.isOpen\">\r\n  <div>\r\n    <div class=\"avatar\" dropdownToggle>\r\n      <span class=\"glyphicon glyphicon-user\"></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"userName\">{{loginInfo.userName}}</div>\r\n  <div>\r\n    <span class=\"glyphicon arrow\" [ngClass]=\"{'glyphicon-chevron-up':dropDownStatus.isOpen,'glyphicon-chevron-down':!dropDownStatus.isOpen}\"></span>\r\n  </div>\r\n\r\n  <ul class=\"dropdown-menu avatar-dropdown animated fadeIn\" dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n    <li>\r\n      <a class=\"dropdown-item\" href=\"#\">My Profile</a>\r\n    </li>\r\n    <li>\r\n      <a class=\"dropdown-item\" href=\"#\">My Assignments</a>\r\n    </li>\r\n    <li>\r\n      <a class=\"dropdown-item\" href=\"\" (click)=\"onMenuClick('logout')\">Logout</a>\r\n    </li>\r\n  </ul>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/commons/components/user-avatar/user-avatar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  height: 50px;\n  display: block;\n  background-color: #14354C;\n  transition: all 0.3s ease-in;\n  color: #8A98A0;\n  cursor: pointer; }\n  :host:hover {\n    color: white; }\n\n.avatar-component {\n  height: 100%;\n  /* &.expand{\r\n    background-color: $primary-color_light;\r\n  }*/ }\n  .avatar-component .avatar-dropdown {\n    margin-top: 12px; }\n    @media screen and (max-width: 768px) {\n      .avatar-component .avatar-dropdown {\n        width: 100%;\n        margin-top: 32px; } }\n  .avatar-component:before {\n    content: \"\";\n    display: inline-block;\n    vertical-align: middle;\n    height: 100%; }\n  .avatar-component > div {\n    display: inline-block;\n    vertical-align: middle;\n    padding: 5px; }\n    .avatar-component > div:first-child {\n      padding-right: 2px; }\n  .avatar-component .avatar {\n    width: 30px;\n    height: 30px;\n    border: solid 1px #8A98A0;\n    border-radius: 15px;\n    text-align: center;\n    padding-top: 3px; }\n  .avatar-component .arrow {\n    font-size: 0.8em;\n    padding-right: 15px; }\n\n.avatar-dropdown {\n  min-width: 250px;\n  padding: 0px; }\n  .avatar-dropdown li {\n    height: 35px;\n    border-bottom: solid 1px #f5f5f5; }\n    .avatar-dropdown li a {\n      height: 35px;\n      line-height: 27px;\n      transition: background-color 0.2s ease-in; }\n      .avatar-dropdown li a:hover {\n        background-color: #32c5d2; }\n\n.userName {\n  text-transform: capitalize; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/components/user-avatar/user-avatar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/commons/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAvatarComponent; });
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
            template: __webpack_require__("../../../../../src/app/commons/components/user-avatar/user-avatar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/components/user-avatar/user-avatar.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], UserAvatarComponent);
    return UserAvatarComponent;
    var _a;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/user-avatar.component.js.map

/***/ }),

/***/ "../../../../../src/app/commons/models/application-data-models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DateTimeInfo */
/* unused harmony export ApplicationTask */
/* unused harmony export MetaData */
/* unused harmony export PaginationInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ApplicationTaskResult; });
/* unused harmony export ApplicationTaskSearchParam */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AssignApplicationTaskParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveApplicationCreationTaskParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApproveSubscriptionCreationTaskParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ApprovalEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ApplicationTaskFilter; });
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
//# sourceMappingURL=E:/Git/manage-module-ui/src/application-data-models.js.map

/***/ }),

/***/ "../../../../../src/app/commons/models/common-data-models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MenuItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return User; });
/* unused harmony export LoginResponse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NewType; });
/* unused harmony export ServerResponse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Currency; });
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
var SubCategory = (function () {
    function SubCategory() {
    }
    return SubCategory;
}());
var NewType = (function () {
    function NewType() {
    }
    return NewType;
}());
var ServerResponse = (function () {
    function ServerResponse() {
    }
    return ServerResponse;
}());
var Currency = (function () {
    function Currency() {
    }
    return Currency;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/common-data-models.js.map

/***/ }),

/***/ "../../../../../src/app/commons/models/dashboard-data-models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DashboardDataRequestParam; });
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
        this.data = [];
    }
    return HistoryBarGraphData;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/dashboard-data-models.js.map

/***/ }),

/***/ "../../../../../src/app/commons/models/reporing-data-models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApprovalHistoryFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalRateFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ApprovalHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ApprovalHistoryDataset; });
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
var ApprovalRateFilter = (function () {
    function ApprovalRateFilter() {
        this.fromDate = '';
        this.toDate = '';
        this.subscriber = '';
        this.api = '';
        this.applicationId = 0;
        this.operator = '';
        this.offset = 0;
        this.count = 10;
    }
    return ApprovalRateFilter;
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
//# sourceMappingURL=E:/Git/manage-module-ui/src/reporing-data-models.js.map

/***/ }),

/***/ "../../../../../src/app/commons/services/app-common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommonService; });
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
//# sourceMappingURL=E:/Git/manage-module-ui/src/app-common.service.js.map

/***/ }),

/***/ "../../../../../src/app/commons/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_providers_login_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/login_remote-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_common_data_models__ = __webpack_require__("../../../../../src/app/commons/models/common-data-models.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
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
        var user = new __WEBPACK_IMPORTED_MODULE_4__models_common_data_models__["e" /* User */]();
        user.userName = userName;
        user.password = password;
        console.log(user.userName);
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
//# sourceMappingURL=E:/Git/manage-module-ui/src/authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/commons/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
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
//# sourceMappingURL=E:/Git/manage-module-ui/src/message.service.js.map

/***/ }),

/***/ "../../../../../src/app/commons/services/rate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_providers_rate_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/rate_remote-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_common_data_models__ = __webpack_require__("../../../../../src/app/commons/models/common-data-models.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RateService = (function () {
    function RateService(_router, _remoteService) {
        this._router = _router;
        this._remoteService = _remoteService;
        this.loginUserInfo = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
    }
    /**
     * This method call the remode data service to create a new category, subcategory, tariff relationship
     * @param category
     * @param subcategory
     * @param tariff
     * @param callback
     */
    RateService.prototype.addSubcategory = function (category, subcategory, tariff, callback) {
        console.log('add sub category service called');
        var model = new __WEBPACK_IMPORTED_MODULE_4__models_common_data_models__["b" /* SubCategory */]();
        model.category = category;
        model.subcategory = subcategory;
        model.tariff = tariff;
        console.log(model.category);
        this._remoteService.addSubcategory(model)
            .subscribe(function (response) {
            console.log('good response');
        }, function (error) {
            callback(error);
        });
    };
    /**
     * This method call the remote service to create a new category, subcategory or a tariff
     * @param type
     * @param name
     * @param code
     * @param description
     * @param callback
     */
    RateService.prototype.addNewType = function (type, name, code, description, callback) {
        console.log('add new ' + type + ' service called');
        var model = new __WEBPACK_IMPORTED_MODULE_4__models_common_data_models__["c" /* NewType */]();
        model.type = type;
        model.name = name;
        model.code = code;
        model.description = description;
        this._remoteService.addNewType(model)
            .subscribe(function (response) {
            console.log('good response' + response.messsage);
        }, function (error) {
            callback(error);
        });
    };
    /**
     * This method call the remote service to add new currency type
     * @param code
     * @param description
     * @param callback
     */
    RateService.prototype.addCurrency = function (code, description, callback) {
        console.log(' ---adding currency -- ');
        var model = new __WEBPACK_IMPORTED_MODULE_4__models_common_data_models__["d" /* Currency */]();
        model.currencycode = code;
        model.currencydesc = description;
        this._remoteService.addCurrency(model)
            .subscribe(function (response) {
            console.log('good response' + response.messsage);
        }, function (error) {
            callback(error);
        });
    };
    RateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_providers_rate_remote_data_service__["a" /* RateRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__data_providers_rate_remote_data_service__["a" /* RateRemoteDataService */]) === 'function' && _b) || Object])
    ], RateService);
    return RateService;
    var _a, _b;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/rate.service.js.map

/***/ }),

/***/ "../../../../../src/app/data-providers/approval-remote-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_models_application_data_models__ = __webpack_require__("../../../../../src/app/commons/models/application-data-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_services_authentication_service__ = __webpack_require__("../../../../../src/app/commons/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commons_services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalRemoteDataService; });
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
//# sourceMappingURL=E:/Git/manage-module-ui/src/approval-remote-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/data-providers/dashboard-remote-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_models_dashboard_data_models__ = __webpack_require__("../../../../../src/app/commons/models/dashboard-data-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approval_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/approval-remote-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRemoteDataService; });
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
    function DashboardRemoteDataService(http, apiContext, approvalService, slimLoadingBarService) {
        var _this = this;
        this.http = http;
        this.apiContext = apiContext;
        this.approvalService = approvalService;
        this.slimLoadingBarService = slimLoadingBarService;
        /**
         * Application Creation History Graph Data Stream
         * @type {BehaviorSubject<HistoryBarGraphData>}
         */
        this.ApplicationCreationHistoryDataProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        /**
         * Subscription Creation History Graph Data Stream
         * @type {BehaviorSubject<HistoryBarGraphData>}
         */
        this.SubscriptionCreationHistoryDataProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
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
    DashboardRemoteDataService.prototype.getCreationHistoryGraphData = function (type) {
        var _this = this;
        this.slimLoadingBarService.start();
        this.http.get(this.apiEndpoints['graph'] + '/' + type, this.options)
            .map(function (response) { return response.json(); })
            .subscribe(function (graphData) {
            if (type == 'applications') {
                _this.ApplicationCreationHistoryDataProvider.next(graphData);
            }
            else if (type == 'subscriptions') {
                _this.SubscriptionCreationHistoryDataProvider.next(graphData);
            }
        }, function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); }, function () {
            _this.slimLoadingBarService.complete();
        });
    };
    DashboardRemoteDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_CONTEXT')), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, String, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */]) === 'function' && _c) || Object])
    ], DashboardRemoteDataService);
    return DashboardRemoteDataService;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/dashboard-remote-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/data-providers/data-providers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/login_remote-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_remote_data_service__ = __webpack_require__("../../../../../src/app/data-providers/dashboard-remote-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvidersModule; });
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_remote_data_service__["a" /* LoginRemoteDataService */], __WEBPACK_IMPORTED_MODULE_3__dashboard_remote_data_service__["a" /* DashboardRemoteDataService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DataProvidersModule);
    return DataProvidersModule;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/data-providers.module.js.map

/***/ }),

/***/ "../../../../../src/app/data-providers/login_remote-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRemoteDataService; });
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
//# sourceMappingURL=E:/Git/manage-module-ui/src/login_remote-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/data-providers/rate_remote-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateRemoteDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RateRemoteDataService = (function () {
    function RateRemoteDataService(http) {
        this.http = http;
        this.apiContext = 'api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.apiEndpoints = {
            addsubcategory: this.apiContext + '/rate/addsubcategory',
            addnewtype: this.apiContext + '/rate/addnewtype',
            addCurrency: this.apiContext + '/rate/addcurrency'
        };
    }
    /**
     * To add new sub category tariff relationship
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    RateRemoteDataService.prototype.addSubcategory = function (data) {
        console.log('hit in the rate remote data service');
        return this.http.post(this.apiEndpoints['addsubcategory'], data, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().message); });
    };
    /**
     * To add new category, subcategory or a tariff
     * @param data
     * @returns {Observable<ServerResponse>}
     */
    RateRemoteDataService.prototype.addNewType = function (data) {
        console.log('hit in the rate remote data service');
        return this.http.post(this.apiEndpoints['addnewtype'], data, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().message); });
    };
    /**
     * Add a new currency
     * @param data
     * @returns {Observable<R>}
     */
    RateRemoteDataService.prototype.addCurrency = function (data) {
        console.log('currency service ---');
        console.log(JSON.stringify(data));
        return this.http.post(this.apiEndpoints['addCurrency'], JSON.stringify(data), this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().message); });
    };
    RateRemoteDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], RateRemoteDataService);
    return RateRemoteDataService;
    var _a;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/rate_remote-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/data-providers/reporting-remote-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_services_message_service__ = __webpack_require__("../../../../../src/app/commons/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_models_reporing_data_models__ = __webpack_require__("../../../../../src/app/commons/models/reporing-data-models.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportingRemoteDataService; });
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
                var tmp = new __WEBPACK_IMPORTED_MODULE_5__commons_models_reporing_data_models__["c" /* ApprovalHistory */]();
                tmp.applicationId = cur[0];
                tmp.applicationName = cur[1];
                tmp.applicationDescription = cur[2];
                tmp.status = cur[3];
                tmp.approvedOn = cur[4];
                arr.recordsCol.push(tmp);
            }
            return arr;
        }, new __WEBPACK_IMPORTED_MODULE_5__commons_models_reporing_data_models__["d" /* ApprovalHistoryDataset */]())
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
//# sourceMappingURL=E:/Git/manage-module-ui/src/reporting-remote-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_components_application_data_table_application_data_table_component__ = __webpack_require__("../../../../../src/app/commons/components/application-data-table/application-data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__("../../../../ng2-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commons_components_responsive_table_responsive_table_component__ = __webpack_require__("../../../../../src/app/commons/components/responsive-table/responsive-table.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["d" /* TooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["e" /* TypeaheadModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["f" /* PaginationModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__commons_components_application_data_table_application_data_table_component__["a" /* ApplicationDataTableComponent */],
                __WEBPACK_IMPORTED_MODULE_6__commons_components_responsive_table_responsive_table_component__["a" /* ResponsiveTableComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__commons_components_application_data_table_application_data_table_component__["a" /* ApplicationDataTableComponent */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__commons_components_responsive_table_responsive_table_component__["a" /* ResponsiveTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["e" /* TypeaheadModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["f" /* PaginationModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=E:/Git/manage-module-ui/src/shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/Git/manage-module-ui/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/Git/manage-module-ui/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=E:/Git/manage-module-ui/src/polyfills.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map