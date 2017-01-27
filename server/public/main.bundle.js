webpackJsonp([0,4],{

/***/ 1158:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"app/approvals/approvals.module": 402,
	"app/dashboard/dashboard.module": 407,
	"app/history/history.module": 410,
	"app/login/login.module": 411
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
webpackContext.id = 1158;


/***/ },

/***/ 1159:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(537);


/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_providers_login_remote_data_service__ = __webpack_require__(258);
/* unused harmony export User */
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




var User = (function () {
    function User() {
    }
    return User;
}());
var AuthenticationService = (function () {
    function AuthenticationService(_router, _remoteService) {
        this._router = _router;
        this._remoteService = _remoteService;
        this.loginUserInfo = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    AuthenticationService.prototype.doLogin = function (userName, password, callback) {
        var _this = this;
        var user = new User();
        user.userName = userName;
        user.password = password;
        this._remoteService.login(user)
            .subscribe(function (user) {
            _this.loginUserInfo.next(user);
            sessionStorage.setItem('loginUserInfo', JSON.stringify(user));
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
        var user = JSON.parse(sessionStorage.getItem('loginUserInfo'));
        return !!user;
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_providers_login_remote_data_service__["a" /* LoginRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__data_providers_login_remote_data_service__["a" /* LoginRemoteDataService */]) === 'function' && _b) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/authentication.service.js.map

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(136);
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

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__(500);
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
            timeout: 5000,
            theme: 'material'
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

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_models_dashboard_data_models__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approval_remote_data_service__ = __webpack_require__(96);
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





var DashboardRemoteDataService = (function () {
    function DashboardRemoteDataService(http, approvalService) {
        var _this = this;
        this.http = http;
        this.approvalService = approvalService;
        this.apiContext = 'api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.apiEndpoints = {
            dashboardData: this.apiContext + '/applications/statistics',
        };
        this.DashboardDataProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"]();
        approvalService.MyApplicationCreationTasksProvider.subscribe(function (result) { _this.updateDashboardData(result, 'appCreationsForUser'); });
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
    };
    DashboardRemoteDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _b) || Object])
    ], DashboardRemoteDataService);
    return DashboardRemoteDataService;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/dashboard-remote-data.service.js.map

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(171);
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

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__ = __webpack_require__(126);
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
        console.log('ISLOGGED IN  CAN ACTIVATE - ' + this._authenticationService.isLoggedIn());
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
        console.log('ISLOGGED IN - ' + this._authenticationService.isLoggedIn());
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

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-applications',
            template: __webpack_require__(879),
            styles: [__webpack_require__(861)]
        }), 
        __metadata('design:paramtypes', [])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/applications.component.js.map

/***/ },

/***/ 401:
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
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalMainComponent);
    return ApprovalMainComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-main.component.js.map

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applications_applications_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscriptions_subscriptions_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approval_routes__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__approval_main_approval_main_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(413);
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

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function SubscriptionsComponent() {
    }
    SubscriptionsComponent.prototype.ngOnInit = function () {
    };
    SubscriptionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subscriptions',
            template: __webpack_require__(880),
            styles: [__webpack_require__(863)]
        }), 
        __metadata('design:paramtypes', [])
    ], SubscriptionsComponent);
    return SubscriptionsComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/subscriptions.component.js.map

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export DateTimeInfo */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ApplicationTask; });
/* unused harmony export ApplicationTaskSearchParam */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AssignApplicationTaskParam; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ApproveApplicationCreationTaskParam; });
var DateTimeInfo = (function () {
    function DateTimeInfo() {
    }
    return DateTimeInfo;
}());
var ApplicationTask = (function () {
    function ApplicationTask() {
    }
    return ApplicationTask;
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
    return ApproveApplicationCreationTaskParam;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/application-data-models.js.map

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardData; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return DashboardDataRequestParam; });
var DashboardData = (function () {
    function DashboardData() {
    }
    return DashboardData;
}());
var DashboardDataRequestParam = (function () {
    function DashboardDataRequestParam() {
    }
    return DashboardDataRequestParam;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/dashboard-data-models.js.map

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_providers_approval_remote_data_service__ = __webpack_require__(96);
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

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routes__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approval_summery_approval_summery_component__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__approval_count_approval_count_component__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__approval_history_graph_approval_history_graph_component__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_providers_dashboard_remote_data_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_helper_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__(413);
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
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__data_providers_dashboard_remote_data_service__["a" /* DashboardRemoteDataService */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_helper_service__["a" /* DashboardHelperService */]],
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

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_providers_approval_remote_data_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_providers_dashboard_remote_data_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_helper_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_services_message_service__ = __webpack_require__(179);
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
    function HomeComponent(approvalService, dashboardService, dashboardHelper, message) {
        this.approvalService = approvalService;
        this.dashboardService = dashboardService;
        this.dashboardHelper = dashboardHelper;
        this.message = message;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.approvalService.MyApplicationCreationTasksProvider.subscribe(function (response) {
            _this.myApplications = _this.dashboardHelper.updateModifiedApplications(response);
        }, function (error) { return _this.message.error(error); });
        this.approvalService.GroupApplicationCreationTasksProvider.subscribe(function (response) {
            _this.allApplications = response;
        }, function (error) { return _this.message.error(error); });
        this.approvalService.MySubscriptionTasksProvider.subscribe(function (response) {
            _this.myAppSubscriptionTask = response;
        }, function (error) { return _this.message.error(error); });
        this.approvalService.GroupSubscriptionTasksProvider.subscribe(function (response) {
            _this.allSubscriptions = response;
        }, function (error) {
            _this.message.error(error);
        });
        this.approvalService.getAllTasks();
        this.dashboardService.getDashboardData().subscribe(function (response) {
            _this.dashboardData = response;
        }, function (error) { return _this.message.error(error); });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(889),
            styles: [__webpack_require__(873)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_providers_dashboard_remote_data_service__["a" /* DashboardRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_providers_dashboard_remote_data_service__["a" /* DashboardRemoteDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_helper_service__["a" /* DashboardHelperService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__dashboard_helper_service__["a" /* DashboardHelperService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__commons_services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__commons_services_message_service__["a" /* MessageService */]) === 'function' && _d) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/home.component.js.map

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function HistoryMainComponent() {
    }
    HistoryMainComponent.prototype.ngOnInit = function () {
    };
    HistoryMainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-history-main',
            template: __webpack_require__(890),
            styles: [__webpack_require__(874)]
        }), 
        __metadata('design:paramtypes', [])
    ], HistoryMainComponent);
    return HistoryMainComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/history-main.component.js.map

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_panel_search_panel_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_results_search_results_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_main_history_main_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_routes__ = __webpack_require__(673);
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
                __WEBPACK_IMPORTED_MODULE_5__history_routes__["a" /* HistoryRoutes */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__search_panel_search_panel_component__["a" /* SearchPanelComponent */], __WEBPACK_IMPORTED_MODULE_3__search_results_search_results_component__["a" /* SearchResultsComponent */], __WEBPACK_IMPORTED_MODULE_4__history_main_history_main_component__["a" /* HistoryMainComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HistoryModule);
    return HistoryModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/history.module.js.map

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routes__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_login_user_login_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(29);
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

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__ = __webpack_require__(126);
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
            console.log(loginForm.value);
            this._authenticationService.doLogin(this.userName, this.password, function (errorMsg) {
                _this.loginError = errorMsg;
                setTimeout(function () { _this.loginError = null; }, 5000);
            });
        }
    };
    UserLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(893),
            styles: [__webpack_require__(877)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], UserLoginComponent);
    return UserLoginComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/user-login.component.js.map

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_components_application_data_table_application_data_table_component__ = __webpack_require__(662);
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__commons_components_application_data_table_application_data_table_component__["a" /* ApplicationDataTableComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__commons_components_application_data_table_application_data_table_component__["a" /* ApplicationDataTableComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/shared.module.js.map

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"app/approvals/approvals.module": [
		402
	],
	"app/dashboard/dashboard.module": [
		407
	],
	"app/history/history.module": [
		410
	],
	"app/login/login.module": [
		411
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
webpackAsyncContext.id = 536;


/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(658);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/main.js.map

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_services_app_common_service__ = __webpack_require__(178);
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
        this._authenticationService.loginUserInfo.subscribe(function (userInfo) { return _this.isLoggedIn = !!userInfo; });
        this._appCommonService.menuToggleStream.subscribe(function (isExpand) { return _this.isMenuExpanded = isExpand; });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'body',
            template: __webpack_require__(878),
            styles: [":host{background-color:blue}"],
            styles: [__webpack_require__(860)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__commons_services_app_common_service__["a" /* AppCommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__commons_services_app_common_service__["a" /* AppCommonService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/app.component.js.map

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__commons_commons_module__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_guard__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__commons_components_header_header_component__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commons_components_hamburger_menu_hamburger_menu_component__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__commons_components_user_avatar_user_avatar_component__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__commons_components_main_menu_main_menu_component__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__commons_components_breadcrumbs_breadcrumbs_component__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_providers_data_providers_module__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_toasty__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__data_providers_approval_remote_data_service__ = __webpack_require__(96);
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
                __WEBPACK_IMPORTED_MODULE_15__data_providers_data_providers_module__["a" /* DataProvidersModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["ButtonsModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["PopoverModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["DropdownModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["TooltipModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_ng2_toasty__["a" /* ToastyModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__app_guard__["a" /* AppGuard */],
                __WEBPACK_IMPORTED_MODULE_8__app_guard__["b" /* LoginGuard */],
                __WEBPACK_IMPORTED_MODULE_17__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/app.module.js.map

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_guard__ = __webpack_require__(399);
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

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__applications_applications_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscriptions_subscriptions_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__approval_main_approval_main_component__ = __webpack_require__(401);
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

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_providers_login_remote_data_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_common_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_message_service__ = __webpack_require__(179);
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

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__(179);
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
    function ApplicationDataTableComponent(approvalService, message) {
        this.approvalService = approvalService;
        this.message = message;
    }
    ApplicationDataTableComponent.prototype.ngOnInit = function () {
    };
    ApplicationDataTableComponent.prototype.onAction = function (actionType, appTask) {
        var _this = this;
        switch (actionType) {
            case 'ASSIGN': {
                this.approvalService.assignApplicationTaskToUser(appTask.id).subscribe(function (result) {
                    _this.approvalService.getUserApplicationTasks();
                    _this.approvalService.getUserGroupApplicationTasks();
                }, function (error) {
                    alert(error);
                });
                break;
            }
            case 'APPROVE_APP': {
                var param = new __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__["b" /* ApproveApplicationCreationTaskParam */]();
                param.taskId = appTask.id;
                param.description = '';
                param.selectedTier = appTask.tier;
                param.status = "APPROVED";
                param.user = 'admin';
                this.approvalService.approveApplicationCreationTask(param).subscribe(function (result) {
                    _this.message.success('Application successfully approved', '');
                    _this.approvalService.getUserApplicationTasks();
                }, function (error) {
                    alert(error);
                });
                break;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ApplicationDataTableComponent.prototype, "tableTitle", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ApplicationDataTableComponent.prototype, "recordLimit", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__["c" /* ApplicationTask */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_application_data_models__["c" /* ApplicationTask */]) === 'function' && _a) || Object)
    ], ApplicationDataTableComponent.prototype, "dataSource", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ApplicationDataTableComponent.prototype, "recordsType", void 0);
    ApplicationDataTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'application-data-table',
            template: __webpack_require__(881),
            styles: [__webpack_require__(864)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === 'function' && _c) || Object])
    ], ApplicationDataTableComponent);
    return ApplicationDataTableComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/application-data-table.component.js.map

/***/ },

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__(179);
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
            _this.activeView = event.url;
        });
    };
    BreadcrumbsComponent.prototype.onReload = function () {
        this.approval.getAllTasks();
        this.message.info('Dashboard Data Refreshed', '');
    };
    BreadcrumbsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(882),
            styles: [__webpack_require__(865)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_providers_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === 'function' && _c) || Object])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/breadcrumbs.component.js.map

/***/ },

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__ = __webpack_require__(178);
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
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */]) === 'function' && _a) || Object])
    ], HamburgerMenuComponent);
    return HamburgerMenuComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/hamburger-menu.component.js.map

/***/ },

/***/ 665:
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
            template: __webpack_require__(883),
            styles: [__webpack_require__(867)],
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/header.component.js.map

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(54);
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
            { id: 1, route: 'home', name: 'Home', iconName: 'glyphicon-home' },
            { id: 2, route: '/approvals/applications', name: 'Approve Applications', iconName: 'glyphicon-gift' },
            { id: 3, route: '/approvals/subscriptions', name: 'Approve Subscriptions', iconName: 'glyphicon-hand-right' },
            { id: 4, route: 'history', name: 'Approval History', iconName: 'glyphicon-hourglass' }
        ];
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        alert(this._router.routerState);
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
            template: __webpack_require__(884),
            styles: [__webpack_require__(868)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], MainMenuComponent);
    return MainMenuComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/main-menu.component.js.map

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(126);
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
            template: __webpack_require__(885),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], UserAvatarComponent);
    return UserAvatarComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/user-avatar.component.js.map

/***/ },

/***/ 668:
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
            template: __webpack_require__(886),
            styles: [__webpack_require__(870)]
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalCountComponent);
    return ApprovalCountComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-count.component.js.map

/***/ },

/***/ 669:
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
            template: __webpack_require__(887),
            styles: [__webpack_require__(871)],
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalHistoryGraphComponent);
    return ApprovalHistoryGraphComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-history-graph.component.js.map

/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_models_dashboard_data_models__ = __webpack_require__(405);
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
    function ApprovalSummeryComponent() {
    }
    ApprovalSummeryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_models_dashboard_data_models__["a" /* DashboardData */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_models_dashboard_data_models__["a" /* DashboardData */]) === 'function' && _a) || Object)
    ], ApprovalSummeryComponent.prototype, "appDetailsSummery", void 0);
    ApprovalSummeryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-approval-summery',
            template: __webpack_require__(888),
            styles: [__webpack_require__(872)],
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalSummeryComponent);
    return ApprovalSummeryComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-summery.component.js.map

/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(408);
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

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_remote_data_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_remote_data_service__ = __webpack_require__(257);
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

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_main_history_main_component__ = __webpack_require__(409);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HistoryRoutes; });


var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__history_main_history_main_component__["a" /* HistoryMainComponent */]
    }];
var HistoryRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/history.routes.js.map

/***/ },

/***/ 674:
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
            template: __webpack_require__(891),
            styles: [__webpack_require__(875)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPanelComponent);
    return SearchPanelComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/search-panel.component.js.map

/***/ },

/***/ 675:
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
            template: __webpack_require__(892),
            styles: [__webpack_require__(876)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/search-results.component.js.map

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_login_user_login_component__ = __webpack_require__(412);
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

/***/ 677:
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

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/polyfills.js.map

/***/ },

/***/ 860:
/***/ function(module, exports) {

module.exports = ":host {\n  min-height: 100%;\n  background-color: #f5f5f5;\n  min-width: 300px; }\n\n:host /deep/ ng2-toasty .toast {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp; }\n\n.container-fluid {\n  height: 100%; }\n\n.content-container {\n  margin-left: -15px;\n  margin-right: -15px;\n  position: relative;\n  margin-top: 70px; }\n  @media screen and (max-width: 768px) {\n    .content-container {\n      margin-top: 140px; } }\n\n.menu-container {\n  position: fixed;\n  top: 70px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 100; }\n  @media screen and (max-width: 768px) {\n    .menu-container {\n      top: 140px; } }\n\n.view-container {\n  -webkit-transition: margin-left 0.8s ease-in-out;\n  transition: margin-left 0.8s ease-in-out;\n  margin-left: 50px; }\n  .view-container.menu-expand {\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s;\n    margin-left: 285px; }\n  .view-container .breadcrumbs-bar {\n    border-bottom: inset 1px #dfdfdf;\n    border-radius: 0px;\n    height: 46px;\n    line-height: 2.2em; }\n"

/***/ },

/***/ 861:
/***/ function(module, exports) {

module.exports = "application-data-table {\n  margin-top: 20px; }\n"

/***/ },

/***/ 862:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 863:
/***/ function(module, exports) {

module.exports = "application-data-table {\n  margin-top: 20px; }\n"

/***/ },

/***/ 864:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.table-wrapper {\n  padding: 10px;\n  border: solid 1px #e7ecf1;\n  background-color: white;\n  min-height: 425px; }\n  .table-wrapper .tbl-header {\n    font-weight: 600;\n    font-size: 1.3em;\n    padding: 5px 0px 15px; }\n  .table-wrapper .table {\n    display: table;\n    width: 100%; }\n    @media only screen and (max-width: 768px) {\n      .table-wrapper .table {\n        display: block; } }\n    .table-wrapper .table .tbl-row {\n      display: table-row;\n      background-color: #f6f6f6; }\n      .table-wrapper .table .tbl-row:nth-of-type(odd) {\n        background-color: white; }\n      .table-wrapper .table .tbl-row.header {\n        background-color: #7788aa;\n        font-weight: 600;\n        color: white; }\n      @media only screen and (max-width: 768px) {\n        .table-wrapper .table .tbl-row {\n          display: block; } }\n      .table-wrapper .table .tbl-row .tbl-cell {\n        display: table-cell;\n        padding: 10px 10px; }\n        @media only screen and (max-width: 768px) {\n          .table-wrapper .table .tbl-row .tbl-cell {\n            display: block; } }\n      .table-wrapper .table .tbl-row.modified {\n        background-color: #ffffcc; }\n  .table-wrapper .time {\n    display: block;\n    font-size: 0.8em; }\n  .table-wrapper .action {\n    width: 30px;\n    height: 30px;\n    border: solid 1px #c7c7c7;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 29px;\n    margin: 2px 5px;\n    cursor: pointer;\n    color: #8A98A0;\n    -webkit-transition: all 0.2s ease-in;\n    transition: all 0.2s ease-in; }\n    .table-wrapper .action:hover {\n      background-color: #32c5d2;\n      color: black; }\n    .table-wrapper .action.expand {\n      border: none;\n      font-size: 0.9em; }\n  .table-wrapper .no-rec-row {\n    position: relative; }\n    .table-wrapper .no-rec-row .no-rec {\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      margin: auto;\n      width: 100px;\n      padding-top: 150px;\n      color: #8A98A0; }\n  .table-wrapper .expand-container {\n    height: 200px;\n    background-color: gray !important; }\n    .table-wrapper .expand-container .more-content {\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      top: 0px;\n      bottom: 0px; }\n  .table-wrapper .div-tbl {\n    background-color: lightyellow; }\n    .table-wrapper .div-tbl .dtb-row .dtb-cell {\n      float: left;\n      width: 20%;\n      border: solid 1px #cccccc; }\n    .table-wrapper .div-tbl:after {\n      content: '';\n      display: block;\n      clear: both; }\n"

/***/ },

/***/ 865:
/***/ function(module, exports) {

module.exports = ":host {\n  line-height: 5rem; }\n  :host:after {\n    content: '';\n    display: block;\n    clear: both; }\n\n.refresh-icon {\n  float: right;\n  height: 30px;\n  width: 30px;\n  background-color: #E19131;\n  text-align: center;\n  line-height: 30px;\n  border-radius: 20px;\n  color: white;\n  font-size: 1em;\n  margin-top: 6px;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in; }\n  .refresh-icon:hover {\n    background-color: #e1a637;\n    color: black; }\n"

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.hm-menu-container {\n  position: relative;\n  width: 50px;\n  height: 50px; }\n  .hm-menu-container .hamburger-menu {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    width: 25px;\n    height: 22px;\n    cursor: pointer; }\n    .hm-menu-container .hamburger-menu .bar,\n    .hm-menu-container .hamburger-menu .bar:after,\n    .hm-menu-container .hamburger-menu .bar:before {\n      width: 25px;\n      height: 2px; }\n    .hm-menu-container .hamburger-menu .bar {\n      position: relative;\n      -webkit-transform: translateY(10px);\n              transform: translateY(10px);\n      background: white;\n      -webkit-transition: all 0ms 300ms;\n      transition: all 0ms 300ms; }\n      .hm-menu-container .hamburger-menu .bar:before {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        bottom: 10px;\n        background: white;\n        -webkit-transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n      .hm-menu-container .hamburger-menu .bar:after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: 10px;\n        background: white;\n        -webkit-transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n      .hm-menu-container .hamburger-menu .bar.animate {\n        background: rgba(255, 255, 255, 0); }\n        .hm-menu-container .hamburger-menu .bar.animate:after {\n          width: 15.625px;\n          top: 0;\n          left: 5px;\n          -webkit-transform-origin: 0px 0px;\n                  transform-origin: 0px 0px;\n          -webkit-transform: rotate(45deg);\n                  transform: rotate(45deg);\n          -webkit-transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n        .hm-menu-container .hamburger-menu .bar.animate:before {\n          width: 15.625px;\n          bottom: 0;\n          left: 5px;\n          -webkit-transform-origin: 0px 0px;\n                  transform-origin: 0px 0px;\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n          -webkit-transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n"

/***/ },

/***/ 867:
/***/ function(module, exports) {

module.exports = ".navbar {\n  background-color: #14354C;\n  border: 0;\n  border-radius: 0px;\n  margin-bottom: 0px;\n  z-index: 200;\n  height: 70px; }\n  .navbar .container-fluid {\n    padding: 10px 35px 10px 15px;\n    min-width: 400px; }\n  @media screen and (max-width: 768px) {\n    .navbar {\n      height: 140px; } }\n\n@media screen and (max-width: 768px) {\n  .navbar-header {\n    margin-left: 0px;\n    margin-right: 0px; } }\n\n@media screen and (max-width: 768px) {\n  .navbar-right {\n    margin-left: 15px; } }\n\n.navbar-brand {\n  float: right;\n  padding-left: 25px;\n  font-size: 2rem;\n  color: #E19131; }\n  .navbar-brand:hover, .navbar-brand:focus, .navbar-brand:active {\n    color: #E19131; }\n  .navbar-brand .man {\n    color: #8A98A0;\n    font-weight: 300; }\n\napp-hamburger-menu {\n  float: left; }\n"

/***/ },

/***/ 868:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block;\n  background-color: #1b4665;\n  height: 100%; }\n\nul {\n  list-style: none;\n  padding: 0px;\n  width: 50px;\n  -webkit-transition: width 0.3s ease-in-out;\n  transition: width 0.3s ease-in-out; }\n  ul li {\n    cursor: pointer;\n    width: 100%;\n    height: 46px;\n    border-bottom: solid 1px #164e6a;\n    position: relative;\n    -webkit-transition: all 0.3s ease-in;\n    transition: all 0.3s ease-in; }\n    ul li:hover {\n      background-color: #14354C; }\n    ul li:after {\n      content: '';\n      width: 0px;\n      height: 0px;\n      border-right: solid 8px #f5f5f5;\n      border-top: solid 10px transparent;\n      border-bottom: solid 10px transparent;\n      position: absolute;\n      right: 0px;\n      top: 14px;\n      display: none; }\n    ul li .icon {\n      display: inline-block;\n      text-align: center;\n      width: 100%;\n      line-height: 39px;\n      color: #adadad;\n      font-size: 1.3em; }\n    ul li .menu-name {\n      -webkit-animation-delay: 0.3s;\n      animation-delay: 0.3s;\n      color: #afafaf; }\n    ul li.selected {\n      background-color: #32c5d2; }\n      ul li.selected .icon {\n        color: white; }\n      ul li.selected .menu-name {\n        color: white; }\n      ul li.selected:after {\n        display: block; }\n  ul.is-expand {\n    width: 285px; }\n    ul.is-expand li .icon {\n      width: 50px; }\n"

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = ":host {\n  height: 50px;\n  display: block;\n  background-color: #14354C;\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n  color: #8A98A0;\n  cursor: pointer; }\n  :host:hover {\n    color: white; }\n\n.avatar-component {\n  height: 100%;\n  /* &.expand{\n    background-color: $primary-color_light;\n  }*/ }\n  .avatar-component .avatar-dropdown {\n    margin-top: 12px; }\n    @media screen and (max-width: 768px) {\n      .avatar-component .avatar-dropdown {\n        width: 100%;\n        margin-top: 32px; } }\n  .avatar-component:before {\n    content: \"\";\n    display: inline-block;\n    vertical-align: middle;\n    height: 100%; }\n  .avatar-component > div {\n    display: inline-block;\n    vertical-align: middle;\n    padding: 5px; }\n    .avatar-component > div:first-child {\n      padding-right: 2px; }\n  .avatar-component .avatar {\n    width: 30px;\n    height: 30px;\n    border: solid 1px #8A98A0;\n    border-radius: 15px;\n    text-align: center;\n    padding-top: 3px; }\n  .avatar-component .arrow {\n    font-size: 0.8em;\n    padding-right: 15px; }\n\n.avatar-dropdown {\n  min-width: 250px;\n  padding: 0px; }\n  .avatar-dropdown li {\n    height: 35px;\n    border-bottom: solid 1px #f5f5f5; }\n    .avatar-dropdown li a {\n      height: 35px;\n      line-height: 27px;\n      -webkit-transition: background-color 0.2s ease-in;\n      transition: background-color 0.2s ease-in; }\n      .avatar-dropdown li a:hover {\n        background-color: #32c5d2; }\n"

/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = ".approval-count {\n  height: 170px;\n  position: relative;\n  overflow: hidden; }\n  .approval-count .count {\n    position: absolute;\n    right: 10px;\n    top: 15px;\n    font-size: 6em;\n    color: white; }\n  .approval-count .name {\n    position: absolute;\n    right: 10px;\n    bottom: 30px;\n    color: #e9e9e9;\n    font-size: 1.2em;\n    font-weight: 900; }\n  .approval-count .icon {\n    color: rgba(255, 255, 255, 0.2);\n    position: absolute;\n    bottom: 0px;\n    top: 40%;\n    font-size: 8em; }\n  .approval-count .myCount {\n    position: absolute;\n    color: #e9e9e9;\n    top: 37px;\n    left: 15px; }\n  .approval-count .groupCount {\n    top: 12px;\n    left: 15px;\n    position: absolute;\n    color: #e9e9e9; }\n  .approval-count .sub {\n    font-weight: 900; }\n"

/***/ },

/***/ 871:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block;\n  min-height: 100px; }\n"

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block; }\n  @media screen and (max-width: 768px) {\n    :host {\n      padding: 0px 15px;\n      display: block; } }\n\napp-approval-count {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\n:host /deep/ app-approval-count.apps .approval-count {\n  background-color: #3598dc; }\n  :host /deep/ app-approval-count.apps .approval-count .breakdown {\n    color: #a7d8fa; }\n\n:host /deep/ app-approval-count.subs .approval-count {\n  background-color: #8E44AD; }\n  :host /deep/ app-approval-count.subs .approval-count .breakdown {\n    color: #fb9db1; }\n"

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = "app-approval-history-graph {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\napplication-data-table {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n:host /deep/ application-data-table.my .header {\n  background-color: #445566 !important; }\n"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = ".login-container {\n  width: 400px;\n  margin: 75px auto; }\n  .login-container input {\n    background-color: #dde3ec;\n    height: 43px;\n    color: #8290a3;\n    border: 1px solid #dde3ec; }\n    .login-container input:focus {\n      border: 1px solid #c3ccda; }\n  .login-container .logo-container {\n    margin-bottom: 35px;\n    text-align: center;\n    font-size: 2.5rem;\n    color: #E19131; }\n    .login-container .logo-container .man {\n      color: #8A98A0;\n      font-weight: 300; }\n  .login-container .form-container {\n    background-color: white;\n    box-shadow: 0px 0px 20px 3px #e6e5e5; }\n    .login-container .form-container .form-fields {\n      padding: 20px 30px; }\n    .login-container .form-container .sign-in {\n      margin: 0px;\n      padding: 30px 0px 10px;\n      text-align: center;\n      color: #32c5d2; }\n    .login-container .form-container .forgot-ps {\n      padding: 15px 30px 20px;\n      border-top: solid 1px #dde3ec;\n      text-align: right;\n      color: #7a8ca5; }\n  .login-container .action-container {\n    margin: 35px 0px 10px; }\n    .login-container .action-container .login {\n      background-color: #32c5d2;\n      color: white;\n      font-weight: 600;\n      -webkit-transition: all 0.4 ease-in;\n      transition: all 0.4 ease-in; }\n      .login-container .action-container .login:hover {\n        background-color: #289DA7; }\n    .login-container .action-container .checkbox-lbl {\n      margin-left: 10px; }\n  .login-container .copyright {\n    text-align: center;\n    margin: 0 auto 30px 0;\n    padding: 10px;\n    color: #7a8ca5;\n    font-size: 13px; }\n  .login-container .error {\n    font-size: 0.9em;\n    color: #f96565; }\n  .login-container .error-container {\n    min-height: 50px;\n    background-color: #bb3535;\n    color: white;\n    text-align: center;\n    padding: 20px 10px; }\n"

/***/ },

/***/ 878:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header *ngIf=\"isLoggedIn\"></app-header>\n  <div class=\"content-container\">\n    <div class=\"menu-container animated slideInLeft\" *ngIf=\"isLoggedIn\">\n      <app-main-menu></app-main-menu>\n    </div>\n    <div class=\"view-container\" [ngClass]=\"{'menu-expand':isMenuExpanded}\">\n      <div>\n        <div class=\"col-sm-12 breadcrumbs-bar\" *ngIf=\"isLoggedIn\" ><app-breadcrumbs></app-breadcrumbs></div>\n        <div class=\"col-sm-12\"> <router-outlet></router-outlet></div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<ng2-toasty\n        [position]=\"'bottom-left'\"></ng2-toasty>\n"

/***/ },

/***/ 879:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeInUp row\">\n    <div class=\"col-sm-6\">\n        <application-data-table></application-data-table>\n    </div>\n    <div class=\"col-sm-6\">\n        <application-data-table></application-data-table>\n    </div>\n</div>\n\n"

/***/ },

/***/ 880:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n <div class=\"row\">\n   <div class=\"col-sm-6\">\n       <application-data-table></application-data-table>\n   </div>\n   <div class=\"col-sm-6\">\n       <application-data-table></application-data-table>\n   </div>\n </div>\n</div>\n\n"

/***/ },

/***/ 881:
/***/ function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n    <div class=\"tbl-header\">\n        {{tableTitle}}\n    </div>\n\n    <!--<div class=\"div-tbl\">\n        <div class=\"dtb-row header\">\n            <div class=\"dtb-cell\">ID</div>\n            <div class=\"dtb-cell\">APP NAME</div>\n            <div class=\"dtb-cell\">USER</div>\n            <div class=\"dtb-cell\">CREATED ON</div>\n            <div class=\"dtb-cell text-right pad-r-15-im\">ACTION</div>\n        </div>\n       &lt;!&ndash; <div style=\"clear: both\"></div>&ndash;&gt;\n        <div class=\"dtb-row\">\n            <div class=\"dtb-cell\">ONE</div>\n            <div class=\"dtb-cell\">2</div>\n            <div class=\"dtb-cell\">O3NE</div>\n            <div class=\"dtb-cell\">ONE</div>\n            <div class=\"dtb-cell\">ONE</div>\n        </div>\n       &lt;!&ndash; <div style=\"clear: both\"></div>&ndash;&gt;\n\n    </div>-->\n\n    <div class=\"table\">\n\n        <div class=\"tbl-row header\">\n            <div class=\"tbl-cell\">ID</div>\n            <div class=\"tbl-cell\">APP NAME</div>\n            <div class=\"tbl-cell\">USER</div>\n            <div class=\"tbl-cell\">CREATED ON</div>\n            <div class=\"tbl-cell text-right pad-r-15-im\">ACTION</div>\n        </div>\n\n        <ng-container *ngFor=\"let item of dataSource; let i=index\">\n            <div class=\"tbl-row\" [ngClass]=\"{'modified' : item.isModified}\" *ngIf=\"!!!recordLimit || i < recordLimit\">\n                <div class=\"tbl-cell\">\n                    <span   tooltip=\"More Info\"\n                            class=\"action expand glyphicon glyphicon-chevron-down\" (click)=\"item.isExpand = !item.isExpand\"></span>\n                    {{item.id}}</div>\n                <div class=\"tbl-cell\">{{item.applicationName}}</div>\n                <div class=\"tbl-cell\">{{item.userName}}</div>\n                <div class=\"tbl-cell\">{{item.createTime?.date + ' ' + item.createTime?.time}}</div>\n                <div class=\"tbl-cell text-right\">\n                    <span  tooltip=\"Approve\" *ngIf=\"recordsType == 'USER'\"\n                           class=\"action  approve glyphicon glyphicon-ok-sign\" (click)=\"onAction('APPROVE_APP',item)\"></span>\n\n                    <span tooltip=\"Reject\" *ngIf=\"recordsType == 'USER'\"\n                          class=\"action  reject glyphicon glyphicon-remove-sign\"></span>\n\n                    <span tooltip=\"Assign to Me\" *ngIf=\"recordsType == 'GROUP'\"\n                          class=\"action  assign glyphicon glyphicon-user\" (click)=\"onAction('ASSIGN',item)\"></span>\n                </div>\n            </div>\n            <div class=\"expand-container tbl-row animated fadeIn\" *ngIf=\"item.isExpand\" >\n               <!-- <div class=\"more-content\"></div>-->\n            </div>\n        </ng-container>\n\n        <div class=\"no-rec-row tbl-row\" *ngIf=\"dataSource?.length == 0\">\n            <span class=\"no-rec\">No Records..</span>\n        </div>\n    </div> <!--TABLE END-->\n\n    <div class=\"text-right\" *ngIf=\"dataSource?.length > recordLimit\"><span class=\"more\">View All</span></div>\n\n</div> <!--WRAPPER END-->\n"

/***/ },

/***/ 882:
/***/ function(module, exports) {

module.exports = "<div>\n    {{activeView || 'HOME'}}\n    <span class=\"animated bounceInDown delay-1 refresh-icon glyphicon glyphicon-refresh\"\n    (click)=\"onReload()\"></span>\n</div>"

/***/ },

/***/ 883:
/***/ function(module, exports) {

module.exports = "<nav class=\"row navbar navbar-default animated fadeInDown navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"home\">\n        WORKFLOW<span class=\"man\">MANAGER</span>\n      </a>\n      <app-hamburger-menu></app-hamburger-menu>\n    </div>\n\n    <div class=\"navbar-right text-right\">\n      <app-user-avatar></app-user-avatar>\n    </div>\n  </div>\n</nav>\n\n\n<!--<nav>\n  <button (click)=\"onLogoutClick()\">logout</button>\n</nav>-->\n"

/***/ },

/***/ 884:
/***/ function(module, exports) {

module.exports = "<ul [ngClass]=\"{'is-expand':isExpand}\">\n  <li  *ngFor=\"let menu of menuSource\"\n       (click)=\"onClick(menu)\"\n  [ngClass]=\"{'selected':menu.id==selectedMenu?.id}\"><span class=\"icon glyphicon\" [ngClass]=\"menu.iconName\"></span>\n  <span class=\"menu-name animated fadeIn\" *ngIf=\"isExpand\">{{menu.name}}</span>\n  </li>\n </ul>\n"

/***/ },

/***/ 885:
/***/ function(module, exports) {

module.exports = "<div class=\"avatar-component\"\n     (click)=\"onClick()\"\n     [ngClass]=\"{'expand':dropDownStatus.isOpen}\"\n     dropdown\n     [isOpen]=\"dropDownStatus.isOpen\">\n  <div>\n    <div class=\"avatar\" dropdownToggle>\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </div>\n  </div>\n  <div>Admin</div>\n  <div>\n    <span class=\"glyphicon arrow\" [ngClass]=\"{'glyphicon-chevron-up':dropDownStatus.isOpen,'glyphicon-chevron-down':!dropDownStatus.isOpen}\"></span>\n  </div>\n\n  <ul class=\"dropdown-menu avatar-dropdown animated fadeIn\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n    <li>\n      <a class=\"dropdown-item\" href=\"#\">My Profile</a>\n    </li>\n    <li>\n      <a class=\"dropdown-item\" href=\"#\">My Assignments</a>\n    </li>\n    <li>\n      <a class=\"dropdown-item\" href=\"\" (click)=\"onMenuClick('logout')\">Logout</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ },

/***/ 886:
/***/ function(module, exports) {

module.exports = "<div class=\"approval-count\" >\n  <span class=\"breakdown myCount\">Assigned to Me : <span class=\"sub\">{{myCount}}</span></span>\n  <span class=\"breakdown groupCount\">Assigned to Group : <span class=\"sub\">{{groupCount}}</span></span>\n  <span class=\"count\">{{totalCount}}</span>\n  <span class=\"name\">{{name}}</span>\n  <span class=\"icon glyphicon\" [ngClass]=\"iconClass\"></span>\n</div>\n"

/***/ },

/***/ 887:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <canvas baseChart\n            [datasets]=\"barChartDataSubscriptions\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptionsSubscriptions\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"></canvas>\n  </div>\n  <div class=\"col-sm-6\">\n    <canvas baseChart\n            [datasets]=\"barChartDataApplications\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptionsApplications\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"></canvas>\n  </div>\n</div>\n\n\n"

/***/ },

/***/ 888:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-approval-count class=\"col-sm-6 apps\"\n                      [totalCount]=\"appDetailsSummery?.totalAppCreations\"\n                      [myCount]=\"appDetailsSummery?.appCreationsForUser\"\n                      [groupCount]=\"appDetailsSummery?.appCreationsForGroup\"\n                      iconClass=\"glyphicon-gift\"\n                      name=\"Application Creations\"></app-approval-count>\n\n  <app-approval-count class=\"col-sm-6 subs\"\n                      [totalCount]=\"appDetailsSummery?.totalSubCreations\"\n                      [myCount]=\"appDetailsSummery?.subCreationsForUser\"\n                      [groupCount]=\"appDetailsSummery?.subCreationsForGroup\"\n                      iconClass=\"glyphicon-hand-right\"\n                      name=\"Subscription Creations\"></app-approval-count>\n</div>\n"

/***/ },

/***/ 889:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\" style=\"animation-delay: 0.3s\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <app-approval-summery [appDetailsSummery]=\"dashboardData\"></app-approval-summery>\n    </div>\n    <div class=\"col-lg-6\">\n      <app-approval-history-graph></app-approval-history-graph>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <application-data-table\n              class=\"my\"\n              recordsType=\"USER\"\n              [recordLimit]=\"5\"\n              tableTitle=\"MY APPLICATIONS\"\n              [dataSource]=\"myApplications\"></application-data-table>\n    </div>\n\n    <div class=\"col-md-6\">\n      <application-data-table\n              class=\"my\"\n              [recordLimit]=\"5\"\n              recordsType=\"USER\"\n              tableTitle=\"MY SUBSCRIPTIONS\"\n              [dataSource]=\"myAppSubscriptionTask\"></application-data-table>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <application-data-table\n              recordsType=\"GROUP\"\n              [recordLimit]=\"5\"\n              tableTitle=\"All APPLICATIONS\"\n              [dataSource]=\"allApplications\"></application-data-table>\n    </div>\n\n    <div class=\"col-md-6\">\n      <application-data-table\n              recordsType=\"GROUP\"\n              [recordLimit]=\"5\"\n              tableTitle=\"All SUBSCRIPTIONS\"\n              [dataSource]=\"allSubscriptions\"></application-data-table>\n    </div>\n  </div>\n\n\n</div>\n\n"

/***/ },

/***/ 890:
/***/ function(module, exports) {

module.exports = "<p>\n  history-main works!\n</p>\n"

/***/ },

/***/ 891:
/***/ function(module, exports) {

module.exports = "<p>\n  search-panel works!\n</p>\n"

/***/ },

/***/ 892:
/***/ function(module, exports) {

module.exports = "<p>\n  search-results works!\n</p>\n"

/***/ },

/***/ 893:
/***/ function(module, exports) {

module.exports = "<div class=\"login-container animated fadeInDown\" style=\"animation-delay: 1s\">\n\n  <div class=\"logo-container\">\n   WORKFLOW<span class=\"man\">MANAGER</span>\n  </div>\n\n  <!--Form Container - START-->\n  <div class=\"form-container\">\n    <h3 class=\"sign-in\">Sign In</h3>\n    <!--login form START-->\n    <form #loginForm=\"ngForm\" novalidate (ngSubmit)=\"onLoginClick(loginForm)\" >\n      <div class=\"form-fields\">\n        <div class=\"form-group\">\n          <input class=\"form-control\"\n                 type=\"text\"\n                 autocomplete=\"off\"\n                 placeholder=\"Username\"\n                 name=\"userName\"\n                 #userNameRef=\"ngModel\"\n                 required\n                 [(ngModel)]=\"userName\">\n          <span class=\"error\" *ngIf=\"userNameRef.errors?.required && (userNameRef.dirty || isSubmitted)\" >User name can not be empty</span>\n        </div>\n\n        <div class=\"form-group\">\n          <input class=\"form-control\"\n                 type=\"password\"\n                 autocomplete=\"off\"\n                 placeholder=\"Password\"\n                 name=\"password\"\n                 #passwordRef=\"ngModel\"\n                 required\n                 [(ngModel)]=\"password\">\n          <span class=\"error\" *ngIf=\"passwordRef.errors?.required && (passwordRef.dirty || isSubmitted)\">Password can not be empty</span>\n        </div>\n\n        <div class=\"action-container\">\n          <button class=\"btn login\" >LOGIN</button>\n          <label class=\"checkbox-lbl\">\n            <input type=\"checkbox\">\n            Remember\n            <span></span>\n          </label>\n\n\n        </div>\n      </div>\n\n      <div class=\"forgot-ps\" >forgot password</div>\n\n\n    </form> <!--login form END-->\n\n  </div><!--Form Container - END-->\n\n  <div  class=\"copyright\">  ©2017 WSO2Telco. Workflow Manager. </div>\n\n  <div class=\"error-container animated bounceIn\" *ngIf=\"loginError\">{{loginError}}</div>\n\n</div>\n\n\n\n"

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_models_application_data_models__ = __webpack_require__(404);
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




var ApprovalRemoteDataService = (function () {
    function ApprovalRemoteDataService(http) {
        this.http = http;
        this.MyApplicationCreationTasksProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"]();
        this.GroupApplicationCreationTasksProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"]();
        this.MySubscriptionTasksProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"]();
        this.GroupSubscriptionTasksProvider = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"]();
        this.modifiedApplicationTaskIDs = new Array();
        this.apiContext = 'api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.apiEndpoints = {
            search: this.apiContext + '/applications/search',
            assign: this.apiContext + '/applications/assign',
            approveCreation: this.apiContext + '/applications/approve/creation',
        };
    }
    ApprovalRemoteDataService.prototype.getUserApplicationTasks = function () {
        var _this = this;
        //TODO GET USER FROM AUTH SERVICE
        var param = {
            assignee: 'admin',
            size: 100,
            processType: "APPLICATION_CREATION",
            candidateGroups: null
        };
        this.http.post(this.apiEndpoints['search'], param, this.options)
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            _this.MyApplicationCreationTasksProvider.next(result);
        }, function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ApprovalRemoteDataService.prototype.getUserGroupApplicationTasks = function () {
        var _this = this;
        //TODO GET GROUP FROM AUTH SERVICE
        var param = {
            assignee: null,
            processType: "APPLICATION_CREATION",
            size: 100,
            candidateGroups: "Internal/subscriber,manage-app-admin,Internal/identity,Internal/everyone,admin"
        };
        this.http.post(this.apiEndpoints['search'], param, this.options)
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            _this.GroupApplicationCreationTasksProvider.next(result);
        }, function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ApprovalRemoteDataService.prototype.getUserAppSubscriptionTasks = function () {
        var _this = this;
        //TODO GET USER FROM AUTH SERVICE
        var param = {
            assignee: 'admin',
            size: 100,
            processType: "SUBSCRIPTION_CREATION",
            candidateGroups: null
        };
        this.http.post(this.apiEndpoints['search'], param, this.options)
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            _this.MySubscriptionTasksProvider.next(result);
        }, function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ApprovalRemoteDataService.prototype.getUserGroupAppSubscriptionTask = function () {
        var _this = this;
        //TODO GET GROUP FROM AUTH SERVICE
        var param = {
            assignee: null,
            size: 100,
            processType: "SUBSCRIPTION_CREATION",
            candidateGroups: "Internal/subscriber,manage-app-admin,Internal/identity,Internal/everyone,admin"
        };
        this.http.post(this.apiEndpoints['search'], param, this.options)
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            _this.GroupSubscriptionTasksProvider.next(result);
        }, function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ApprovalRemoteDataService.prototype.assignApplicationTaskToUser = function (taskId) {
        //TODO update to this if success
        this.modifiedApplicationTaskIDs.push(taskId);
        //TODO GET LOGIN USER FROM AUTH SERVICE
        var param = new __WEBPACK_IMPORTED_MODULE_3__commons_models_application_data_models__["a" /* AssignApplicationTaskParam */]();
        param.assignee = 'admin';
        param.taskId = taskId;
        return this.http.post(this.apiEndpoints['assign'], param, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ApprovalRemoteDataService.prototype.getModifiedTaskIds = function () {
        return this.modifiedApplicationTaskIDs;
    };
    ApprovalRemoteDataService.prototype.approveApplicationCreationTask = function (param) {
        return this.http.post(this.apiEndpoints['approveCreation'], param, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ApprovalRemoteDataService.prototype.getAllTasks = function () {
        this.getUserApplicationTasks();
        this.getUserAppSubscriptionTasks();
        this.getUserGroupAppSubscriptionTask();
        this.getUserGroupApplicationTasks();
    };
    ApprovalRemoteDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], ApprovalRemoteDataService);
    return ApprovalRemoteDataService;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-remote-data.service.js.map

/***/ }

},[1159]);
//# sourceMappingURL=main.bundle.map