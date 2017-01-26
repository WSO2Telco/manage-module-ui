webpackJsonp([0,4],{

/***/ 1146:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"app/approvals/approvals.module": 398,
	"app/dashboard/dashboard.module": 403,
	"app/history/history.module": 406,
	"app/login/login.module": 407
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
webpackContext.id = 1146;


/***/ },

/***/ 1147:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(529);


/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__remote_data_service__ = __webpack_require__(401);
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__remote_data_service__["a" /* LoginRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__remote_data_service__["a" /* LoginRemoteDataService */]) === 'function' && _b) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/authentication.service.js.map

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(135);
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

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__ = __webpack_require__(125);
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginGuard);
    return LoginGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/app.guard.js.map

/***/ },

/***/ 395:
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
            template: __webpack_require__(868),
            styles: [__webpack_require__(850)]
        }), 
        __metadata('design:paramtypes', [])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/applications.component.js.map

/***/ },

/***/ 396:
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
            styles: [__webpack_require__(851)]
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalMainComponent);
    return ApprovalMainComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-main.component.js.map

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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
        this.apiContext = 'api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.apiEndpoints = {
            search: this.apiContext + '/applications/search',
        };
    }
    ApprovalRemoteDataService.prototype.getUserApplicationTasks = function () {
        //TODO GET USER FROM AUTH SERVICE
        var param = {
            assignee: 'admin',
            size: 100,
            processType: "APPLICATION_CREATION",
            candidateGroups: null
        };
        return this.http.post(this.apiEndpoints['search'], param, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ApprovalRemoteDataService.prototype.getUserGroupApplicationTasks = function () {
        //TODO GET GROUP FROM AUTH SERVICE
        var param = {
            assignee: null,
            processType: "APPLICATION_CREATION",
            size: 100,
            candidateGroups: "Internal/subscriber,manage-app-admin,Internal/identity,Internal/everyone,admin"
        };
        return this.http.post(this.apiEndpoints['search'], param, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ApprovalRemoteDataService.prototype.getUserAppSubscriptionTasks = function () {
        var param = {
            assignee: 'admin',
            size: 100,
            processType: "SUBSCRIPTION_CREATION",
            candidateGroups: null
        };
        return this.http.post(this.apiEndpoints['search'], param, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ApprovalRemoteDataService.prototype.getUserGroupAppSubscriptionTask = function () {
        var param = {
            assignee: null,
            size: 100,
            processType: "SUBSCRIPTION_CREATION",
            candidateGroups: "Internal/subscriber,manage-app-admin,Internal/identity,Internal/everyone,admin"
        };
        return this.http.post(this.apiEndpoints['search'], param, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().message); });
    };
    ApprovalRemoteDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], ApprovalRemoteDataService);
    return ApprovalRemoteDataService;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-remote-data.service.js.map

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applications_applications_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscriptions_subscriptions_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approval_routes__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__approval_main_approval_main_component__ = __webpack_require__(396);
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
                __WEBPACK_IMPORTED_MODULE_4__approval_routes__["a" /* ApprovalRoutes */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__applications_applications_component__["a" /* ApplicationsComponent */], __WEBPACK_IMPORTED_MODULE_3__subscriptions_subscriptions_component__["a" /* SubscriptionsComponent */], __WEBPACK_IMPORTED_MODULE_5__approval_main_approval_main_component__["a" /* ApprovalMainComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalsModule);
    return ApprovalsModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approvals.module.js.map

/***/ },

/***/ 399:
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
            template: __webpack_require__(869),
            styles: [__webpack_require__(852)]
        }), 
        __metadata('design:paramtypes', [])
    ], SubscriptionsComponent);
    return SubscriptionsComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/subscriptions.component.js.map

/***/ },

/***/ 400:
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

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RemoteDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemoteDataService = (function () {
    function RemoteDataService(http) {
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
    RemoteDataService.prototype.login = function (data) {
        return this.http.post(this.apiEndpoints['login'], data, this.options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().message); });
    };
    /**
     * Logout Service api
     * @param userId
     * @returns {Observable<boolean>}
     */
    RemoteDataService.prototype.logout = function (userId) {
        return this.http.get(this.apiEndpoints['logout'] + '/' + userId)
            .map(function (response) { return response.json().success; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().message); });
    };
    RemoteDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], RemoteDataService);
    return RemoteDataService;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/remote-data.service.js.map

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_models_dashboard_data_models__ = __webpack_require__(400);
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
    function DashboardRemoteDataService(http) {
        this.http = http;
        this.apiContext = 'api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        this.apiEndpoints = {
            dashboardData: this.apiContext + '/applications/statistics',
        };
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
    DashboardRemoteDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], DashboardRemoteDataService);
    return DashboardRemoteDataService;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/dashboard-remote-data.service.js.map

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routes__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approval_summery_approval_summery_component__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__approval_count_approval_count_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__approval_history_graph_approval_history_graph_component__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__commons_components_responsive_table_responsive_table_component__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__approvals_approval_remote_data_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_remote_data_service__ = __webpack_require__(402);
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
                __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["ChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__approvals_approval_remote_data_service__["a" /* ApprovalRemoteDataService */], __WEBPACK_IMPORTED_MODULE_10__dashboard_remote_data_service__["a" /* DashboardRemoteDataService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__approval_summery_approval_summery_component__["a" /* ApprovalSummeryComponent */], __WEBPACK_IMPORTED_MODULE_5__approval_count_approval_count_component__["a" /* ApprovalCountComponent */], __WEBPACK_IMPORTED_MODULE_6__approval_history_graph_approval_history_graph_component__["a" /* ApprovalHistoryGraphComponent */], __WEBPACK_IMPORTED_MODULE_7__commons_components_responsive_table_responsive_table_component__["a" /* ResponsiveTableComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/dashboard.module.js.map

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__approvals_approval_remote_data_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_remote_data_service__ = __webpack_require__(402);
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
    function HomeComponent(approvalService, dashboardService) {
        this.approvalService = approvalService;
        this.dashboardService = dashboardService;
        this.myApplicationHeaders = ['id', 'applicationDescription', 'createTime', 'userName'];
        this.myAppSubscriptionHeaders = ['id', 'applicationDescription', 'createTime', 'subscriber'];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.approvalService.getUserApplicationTasks().subscribe(function (response) { _this.myApplications = response; }, function (error) { alert(error); });
        this.approvalService.getUserAppSubscriptionTasks().subscribe(function (response) { _this.myAppSubscriptionTask = response; }, function (error) { alert(error); });
        this.approvalService.getUserGroupApplicationTasks().subscribe(function (response) { _this.allApplications = response; }, function (error) { alert(error); });
        this.approvalService.getUserGroupAppSubscriptionTask().subscribe(function (response) { _this.allSubscriptions = response; }, function (error) { alert(error); });
        this.dashboardService.getDashboardData().subscribe(function (response) { _this.dashboardData = response; }, function (error) { alert(error); });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(877),
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__approvals_approval_remote_data_service__["a" /* ApprovalRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__approvals_approval_remote_data_service__["a" /* ApprovalRemoteDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dashboard_remote_data_service__["a" /* DashboardRemoteDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__dashboard_remote_data_service__["a" /* DashboardRemoteDataService */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/home.component.js.map

/***/ },

/***/ 405:
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
            template: __webpack_require__(878),
            styles: [__webpack_require__(863)]
        }), 
        __metadata('design:paramtypes', [])
    ], HistoryMainComponent);
    return HistoryMainComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/history-main.component.js.map

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_panel_search_panel_component__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_results_search_results_component__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_main_history_main_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_routes__ = __webpack_require__(663);
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

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routes__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_login_user_login_component__ = __webpack_require__(408);
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

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__ = __webpack_require__(125);
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
            template: __webpack_require__(881),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], UserLoginComponent);
    return UserLoginComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/user-login.component.js.map

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"app/approvals/approvals.module": [
		398
	],
	"app/dashboard/dashboard.module": [
		403
	],
	"app/history/history.module": [
		406
	],
	"app/login/login.module": [
		407
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
webpackAsyncContext.id = 528;


/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(649);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/main.js.map

/***/ },

/***/ 648:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_services_app_common_service__ = __webpack_require__(177);
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
            template: __webpack_require__(867),
            styles: [":host{background-color:blue}"],
            styles: [__webpack_require__(849)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__commons_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__commons_services_app_common_service__["a" /* AppCommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__commons_services_app_common_service__["a" /* AppCommonService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/app.component.js.map

/***/ },

/***/ 649:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__commons_commons_module__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_guard__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__commons_components_header_header_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commons_components_hamburger_menu_hamburger_menu_component__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__commons_components_user_avatar_user_avatar_component__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__commons_components_main_menu_main_menu_component__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__commons_components_breadcrumbs_breadcrumbs_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts__);
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
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["ButtonsModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["PopoverModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["DropdownModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__app_guard__["a" /* AppGuard */],
                __WEBPACK_IMPORTED_MODULE_8__app_guard__["b" /* LoginGuard */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/app.module.js.map

/***/ },

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_guard__ = __webpack_require__(394);
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
var RootLevelRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/app.routes.js.map

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__applications_applications_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscriptions_subscriptions_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__approval_main_approval_main_component__ = __webpack_require__(396);
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
var ApprovalRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval.routes.js.map

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_remote_data_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_common_service__ = __webpack_require__(177);
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
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__services_remote_data_service__["a" /* LoginRemoteDataService */], __WEBPACK_IMPORTED_MODULE_4__services_app_common_service__["a" /* AppCommonService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CommonsModule);
    return CommonsModule;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/commons.module.js.map

/***/ },

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
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
    function BreadcrumbsComponent(_router) {
        this._router = _router;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; })
            .subscribe(function (event) {
            _this.activeView = event.url;
        });
    };
    BreadcrumbsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumbs',
            template: "\n      {{activeView || 'HOME'}}\n  ",
            styles: [__webpack_require__(853)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/breadcrumbs.component.js.map

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__ = __webpack_require__(177);
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
            styles: [__webpack_require__(854)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */]) === 'function' && _a) || Object])
    ], HamburgerMenuComponent);
    return HamburgerMenuComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/hamburger-menu.component.js.map

/***/ },

/***/ 655:
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
            template: __webpack_require__(870),
            styles: [__webpack_require__(855)],
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/header.component.js.map

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__ = __webpack_require__(177);
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
            template: __webpack_require__(871),
            styles: [__webpack_require__(856)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_common_service__["a" /* AppCommonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], MainMenuComponent);
    return MainMenuComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/main-menu.component.js.map

/***/ },

/***/ 657:
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
            template: __webpack_require__(872),
            styles: [__webpack_require__(857)]
        }), 
        __metadata('design:paramtypes', [])
    ], ResponsiveTableComponent);
    return ResponsiveTableComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/responsive-table.component.js.map

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(125);
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
            template: __webpack_require__(873),
            styles: [__webpack_require__(858)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], UserAvatarComponent);
    return UserAvatarComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/user-avatar.component.js.map

/***/ },

/***/ 659:
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
    ], ApprovalCountComponent.prototype, "count", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ApprovalCountComponent.prototype, "name", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ApprovalCountComponent.prototype, "backColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ApprovalCountComponent.prototype, "iconClass", void 0);
    ApprovalCountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-approval-count',
            template: __webpack_require__(874),
            styles: [__webpack_require__(859)]
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalCountComponent);
    return ApprovalCountComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-count.component.js.map

/***/ },

/***/ 660:
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
            template: __webpack_require__(875),
            styles: [__webpack_require__(860)],
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalHistoryGraphComponent);
    return ApprovalHistoryGraphComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-history-graph.component.js.map

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_models_dashboard_data_models__ = __webpack_require__(400);
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
            template: __webpack_require__(876),
            styles: [__webpack_require__(861)],
        }), 
        __metadata('design:paramtypes', [])
    ], ApprovalSummeryComponent);
    return ApprovalSummeryComponent;
    var _a;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/approval-summery.component.js.map

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(404);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardRoutes; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    }
];
var DashboardRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/dashboard.routes.js.map

/***/ },

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_main_history_main_component__ = __webpack_require__(405);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HistoryRoutes; });


var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__history_main_history_main_component__["a" /* HistoryMainComponent */]
    }];
var HistoryRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/history.routes.js.map

/***/ },

/***/ 664:
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
            template: __webpack_require__(879),
            styles: [__webpack_require__(864)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPanelComponent);
    return SearchPanelComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/search-panel.component.js.map

/***/ },

/***/ 665:
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
            template: __webpack_require__(880),
            styles: [__webpack_require__(865)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/search-results.component.js.map

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_login_user_login_component__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginRoutes; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__user_login_user_login_component__["a" /* UserLoginComponent */]
    }
];
var LoginRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/login.routes.js.map

/***/ },

/***/ 667:
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

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/sumudu/git/workflow-ui/src/polyfills.js.map

/***/ },

/***/ 849:
/***/ function(module, exports) {

module.exports = ":host {\n  min-height: 100%;\n  background-color: #f5f5f5;\n  min-width: 300px; }\n\n.container-fluid {\n  height: 100%; }\n\n.content-container {\n  margin-left: -15px;\n  margin-right: -15px;\n  position: relative;\n  margin-top: 70px; }\n  @media screen and (max-width: 768px) {\n    .content-container {\n      margin-top: 140px; } }\n\n.menu-container {\n  position: fixed;\n  top: 70px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 100; }\n  @media screen and (max-width: 768px) {\n    .menu-container {\n      top: 140px; } }\n\n.view-container {\n  -webkit-transition: margin-left 0.8s ease-in-out;\n  transition: margin-left 0.8s ease-in-out;\n  margin-left: 50px; }\n  .view-container.menu-expand {\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s;\n    margin-left: 285px; }\n  .view-container .breadcrumbs-bar {\n    border-bottom: inset 1px #dfdfdf;\n    border-radius: 0px;\n    height: 46px;\n    line-height: 2.2em; }\n"

/***/ },

/***/ 850:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 851:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 852:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 853:
/***/ function(module, exports) {

module.exports = ":host {\n  line-height: 5rem; }\n"

/***/ },

/***/ 854:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.hm-menu-container {\n  position: relative;\n  width: 50px;\n  height: 50px; }\n  .hm-menu-container .hamburger-menu {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    width: 25px;\n    height: 22px;\n    cursor: pointer; }\n    .hm-menu-container .hamburger-menu .bar,\n    .hm-menu-container .hamburger-menu .bar:after,\n    .hm-menu-container .hamburger-menu .bar:before {\n      width: 25px;\n      height: 2px; }\n    .hm-menu-container .hamburger-menu .bar {\n      position: relative;\n      -webkit-transform: translateY(10px);\n              transform: translateY(10px);\n      background: white;\n      -webkit-transition: all 0ms 300ms;\n      transition: all 0ms 300ms; }\n      .hm-menu-container .hamburger-menu .bar:before {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        bottom: 10px;\n        background: white;\n        -webkit-transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n      .hm-menu-container .hamburger-menu .bar:after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: 10px;\n        background: white;\n        -webkit-transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n      .hm-menu-container .hamburger-menu .bar.animate {\n        background: rgba(255, 255, 255, 0); }\n        .hm-menu-container .hamburger-menu .bar.animate:after {\n          width: 15.625px;\n          top: 0;\n          left: 5px;\n          -webkit-transform-origin: 0px 0px;\n                  transform-origin: 0px 0px;\n          -webkit-transform: rotate(45deg);\n                  transform: rotate(45deg);\n          -webkit-transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n        .hm-menu-container .hamburger-menu .bar.animate:before {\n          width: 15.625px;\n          bottom: 0;\n          left: 5px;\n          -webkit-transform-origin: 0px 0px;\n                  transform-origin: 0px 0px;\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n          -webkit-transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1); }\n"

/***/ },

/***/ 855:
/***/ function(module, exports) {

module.exports = ".navbar {\n  background-color: #14354C;\n  border: 0;\n  border-radius: 0px;\n  margin-bottom: 0px;\n  z-index: 200;\n  height: 70px; }\n  .navbar .container-fluid {\n    padding: 10px 35px 10px 15px;\n    min-width: 400px; }\n  @media screen and (max-width: 768px) {\n    .navbar {\n      height: 140px; } }\n\n@media screen and (max-width: 768px) {\n  .navbar-header {\n    margin-left: 0px;\n    margin-right: 0px; } }\n\n@media screen and (max-width: 768px) {\n  .navbar-right {\n    margin-left: 15px; } }\n\n.navbar-brand {\n  float: right;\n  padding-left: 25px;\n  font-size: 2rem;\n  color: #E19131; }\n  .navbar-brand:hover, .navbar-brand:focus, .navbar-brand:active {\n    color: #E19131; }\n  .navbar-brand .man {\n    color: #8A98A0;\n    font-weight: 300; }\n\napp-hamburger-menu {\n  float: left; }\n"

/***/ },

/***/ 856:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block;\n  background-color: #1b4665;\n  height: 100%; }\n\nul {\n  list-style: none;\n  padding: 0px;\n  width: 50px;\n  -webkit-transition: width 0.3s ease-in-out;\n  transition: width 0.3s ease-in-out; }\n  ul li {\n    cursor: pointer;\n    width: 100%;\n    height: 46px;\n    border-bottom: solid 1px #164e6a;\n    position: relative;\n    -webkit-transition: all 0.3s ease-in;\n    transition: all 0.3s ease-in; }\n    ul li:hover {\n      background-color: #14354C; }\n    ul li:after {\n      content: '';\n      width: 0px;\n      height: 0px;\n      border-right: solid 8px #f5f5f5;\n      border-top: solid 10px transparent;\n      border-bottom: solid 10px transparent;\n      position: absolute;\n      right: 0px;\n      top: 14px;\n      display: none; }\n    ul li .icon {\n      display: inline-block;\n      text-align: center;\n      width: 100%;\n      line-height: 39px;\n      color: #adadad;\n      font-size: 1.3em; }\n    ul li .menu-name {\n      -webkit-animation-delay: 0.3s;\n      animation-delay: 0.3s;\n      color: #afafaf; }\n    ul li.selected {\n      background-color: #32c5d2; }\n      ul li.selected .icon {\n        color: white; }\n      ul li.selected .menu-name {\n        color: white; }\n      ul li.selected:after {\n        display: block; }\n  ul.is-expand {\n    width: 285px; }\n    ul.is-expand li .icon {\n      width: 50px; }\n"

/***/ },

/***/ 857:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.table-wrapper {\n  padding: 10px;\n  border: solid 1px #e7ecf1;\n  background-color: white; }\n  .table-wrapper .tbl-header {\n    font-weight: 600;\n    font-size: 1.3em;\n    padding: 5px 0px 15px; }\n  .table-wrapper .table {\n    display: table;\n    width: 100%; }\n    @media only screen and (max-width: 768px) {\n      .table-wrapper .table {\n        display: block; } }\n    .table-wrapper .table .tbl-row {\n      display: table-row;\n      background-color: #f6f6f6; }\n      .table-wrapper .table .tbl-row:nth-of-type(odd) {\n        background-color: white; }\n      .table-wrapper .table .tbl-row.header {\n        background-color: #32c5d2;\n        font-weight: 600; }\n      @media only screen and (max-width: 768px) {\n        .table-wrapper .table .tbl-row {\n          display: block; } }\n      .table-wrapper .table .tbl-row .tbl-cell {\n        display: table-cell;\n        padding: 10px 10px; }\n        @media only screen and (max-width: 768px) {\n          .table-wrapper .table .tbl-row .tbl-cell {\n            display: block; } }\n"

/***/ },

/***/ 858:
/***/ function(module, exports) {

module.exports = ":host {\n  height: 50px;\n  display: block;\n  background-color: #14354C;\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n  color: #8A98A0;\n  cursor: pointer; }\n  :host:hover {\n    color: white; }\n\n.avatar-component {\n  height: 100%;\n  /* &.expand{\n    background-color: $primary-color_light;\n  }*/ }\n  .avatar-component .avatar-dropdown {\n    margin-top: 12px; }\n    @media screen and (max-width: 768px) {\n      .avatar-component .avatar-dropdown {\n        width: 100%;\n        margin-top: 32px; } }\n  .avatar-component:before {\n    content: \"\";\n    display: inline-block;\n    vertical-align: middle;\n    height: 100%; }\n  .avatar-component > div {\n    display: inline-block;\n    vertical-align: middle;\n    padding: 5px; }\n    .avatar-component > div:first-child {\n      padding-right: 2px; }\n  .avatar-component .avatar {\n    width: 30px;\n    height: 30px;\n    border: solid 1px #8A98A0;\n    border-radius: 15px;\n    text-align: center;\n    padding-top: 3px; }\n  .avatar-component .arrow {\n    font-size: 0.8em;\n    padding-right: 15px; }\n\n.avatar-dropdown {\n  min-width: 250px;\n  padding: 0px; }\n  .avatar-dropdown li {\n    height: 35px;\n    border-bottom: solid 1px #f5f5f5; }\n    .avatar-dropdown li a {\n      height: 35px;\n      line-height: 27px;\n      -webkit-transition: background-color 0.2s ease-in;\n      transition: background-color 0.2s ease-in; }\n      .avatar-dropdown li a:hover {\n        background-color: #32c5d2; }\n"

/***/ },

/***/ 859:
/***/ function(module, exports) {

module.exports = ".approval-count {\n  height: 140px;\n  position: relative;\n  overflow: hidden; }\n  .approval-count .count {\n    position: absolute;\n    right: 10px;\n    top: 15px;\n    font-size: 4em;\n    color: white; }\n  .approval-count .name {\n    position: absolute;\n    right: 10px;\n    bottom: 30px;\n    color: #e9e9e9;\n    font-size: 1.2em; }\n  .approval-count .icon {\n    color: rgba(255, 255, 255, 0.4);\n    position: absolute;\n    bottom: 0px;\n    top: 40%;\n    font-size: 6em; }\n"

/***/ },

/***/ 860:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block;\n  min-height: 100px; }\n"

/***/ },

/***/ 861:
/***/ function(module, exports) {

module.exports = ":host {\n  display: block; }\n  @media screen and (max-width: 768px) {\n    :host {\n      padding: 0px 15px;\n      display: block; } }\n\napp-approval-count {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n"

/***/ },

/***/ 862:
/***/ function(module, exports) {

module.exports = "app-approval-history-graph {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\napp-responsive-table {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n"

/***/ },

/***/ 863:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 864:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 865:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = ".login-container {\n  width: 400px;\n  margin: 75px auto; }\n  .login-container input {\n    background-color: #dde3ec;\n    height: 43px;\n    color: #8290a3;\n    border: 1px solid #dde3ec; }\n    .login-container input:focus {\n      border: 1px solid #c3ccda; }\n  .login-container .logo-container {\n    margin-bottom: 35px;\n    text-align: center;\n    font-size: 2.5rem;\n    color: #E19131; }\n    .login-container .logo-container .man {\n      color: #8A98A0;\n      font-weight: 300; }\n  .login-container .form-container {\n    background-color: white;\n    box-shadow: 0px 0px 20px 3px #e6e5e5; }\n    .login-container .form-container .form-fields {\n      padding: 20px 30px; }\n    .login-container .form-container .sign-in {\n      margin: 0px;\n      padding: 30px 0px 10px;\n      text-align: center;\n      color: #32c5d2; }\n    .login-container .form-container .forgot-ps {\n      padding: 15px 30px 20px;\n      border-top: solid 1px #dde3ec;\n      text-align: right;\n      color: #7a8ca5; }\n  .login-container .action-container {\n    margin: 35px 0px 10px; }\n    .login-container .action-container .login {\n      background-color: #32c5d2;\n      color: white;\n      font-weight: 600;\n      -webkit-transition: all 0.4 ease-in;\n      transition: all 0.4 ease-in; }\n      .login-container .action-container .login:hover {\n        background-color: #289DA7; }\n    .login-container .action-container .checkbox-lbl {\n      margin-left: 10px; }\n  .login-container .copyright {\n    text-align: center;\n    margin: 0 auto 30px 0;\n    padding: 10px;\n    color: #7a8ca5;\n    font-size: 13px; }\n  .login-container .error {\n    font-size: 0.9em;\n    color: #f96565; }\n  .login-container .error-container {\n    min-height: 50px;\n    background-color: #bb3535;\n    color: white;\n    text-align: center;\n    padding: 20px 10px; }\n"

/***/ },

/***/ 867:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header *ngIf=\"isLoggedIn\"></app-header>\n  <div class=\"content-container\">\n    <div class=\"menu-container animated slideInLeft\" *ngIf=\"isLoggedIn\">\n      <app-main-menu></app-main-menu>\n    </div>\n    <div class=\"view-container\" [ngClass]=\"{'menu-expand':isMenuExpanded}\">\n      <div>\n        <div class=\"col-sm-12 breadcrumbs-bar\" *ngIf=\"isLoggedIn\" ><app-breadcrumbs></app-breadcrumbs></div>\n        <div class=\"col-sm-12\"> <router-outlet></router-outlet></div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 868:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n  applications works!\n</div>\n\n"

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\">\n  subscriptions works!\n</div>\n\n"

/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = "<nav class=\"row navbar navbar-default animated fadeInDown navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"home\">\n        WORKFLOW<span class=\"man\">MANAGER</span>\n      </a>\n      <app-hamburger-menu></app-hamburger-menu>\n    </div>\n\n    <div class=\"navbar-right text-right\">\n      <app-user-avatar></app-user-avatar>\n    </div>\n  </div>\n</nav>\n\n\n<!--<nav>\n  <button (click)=\"onLogoutClick()\">logout</button>\n</nav>-->\n"

/***/ },

/***/ 871:
/***/ function(module, exports) {

module.exports = "<ul [ngClass]=\"{'is-expand':isExpand}\">\n  <li  *ngFor=\"let menu of menuSource\"\n       (click)=\"onClick(menu)\"\n  [ngClass]=\"{'selected':menu.id==selectedMenu?.id}\"><span class=\"icon glyphicon\" [ngClass]=\"menu.iconName\"></span>\n  <span class=\"menu-name animated fadeIn\" *ngIf=\"isExpand\">{{menu.name}}</span>\n  </li>\n </ul>\n"

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n  <div class=\"tbl-header\">\n    {{tableHeader}}\n  </div>\n  <div class=\"table\">\n\n    <div class=\"tbl-row header\">\n      <div class=\"tbl-cell\" *ngFor=\"let field of fieldSet\">{{field}}</div>\n    </div>\n\n    <div class=\"tbl-row\" *ngFor=\"let item of dataSource\">\n      <div class=\"tbl-cell\" *ngFor=\"let field of fieldSet\">{{item[field]}}</div>\n    </div>\n\n  </div>\n</div>\n"

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = "<div class=\"avatar-component\"\n     (click)=\"onClick()\"\n     [ngClass]=\"{'expand':dropDownStatus.isOpen}\"\n     dropdown\n     [isOpen]=\"dropDownStatus.isOpen\">\n  <div>\n    <div class=\"avatar\" dropdownToggle>\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </div>\n  </div>\n  <div>Admin</div>\n  <div>\n    <span class=\"glyphicon arrow\" [ngClass]=\"{'glyphicon-chevron-up':dropDownStatus.isOpen,'glyphicon-chevron-down':!dropDownStatus.isOpen}\"></span>\n  </div>\n\n  <ul class=\"dropdown-menu avatar-dropdown animated fadeIn\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n    <li>\n      <a class=\"dropdown-item\" href=\"#\">My Profile</a>\n    </li>\n    <li>\n      <a class=\"dropdown-item\" href=\"#\">My Assignments</a>\n    </li>\n    <li>\n      <a class=\"dropdown-item\" href=\"\" (click)=\"onMenuClick('logout')\">Logout</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = "<div class=\"approval-count\" [ngStyle]=\"{'background-color':backColor}\">\n  <span class=\"count\">{{count}}</span>\n  <span class=\"name\">{{name}}</span>\n  <span class=\"icon glyphicon\" [ngClass]=\"iconClass\"></span>\n</div>\n"

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <canvas baseChart\n            [datasets]=\"barChartDataSubscriptions\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptionsSubscriptions\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"></canvas>\n  </div>\n  <div class=\"col-sm-6\">\n    <canvas baseChart\n            [datasets]=\"barChartDataApplications\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptionsApplications\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"></canvas>\n  </div>\n</div>\n\n\n"

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-approval-count class=\"col-sm-6\"\n                      [count]=\"appDetailsSummery?.totalAppCreations\"\n                      backColor=\"#3598dc\"\n                      iconClass=\"glyphicon-gift\"\n                      name=\"Application Creations\"></app-approval-count>\n\n  <app-approval-count class=\"col-sm-6\"\n                      [count]=\"appDetailsSummery?.totalSubCreations\"\n                      backColor=\"#8E44AD\"\n                      iconClass=\"glyphicon-hand-right\"\n                      name=\"Subscription Creations\"></app-approval-count>\n</div>\n"

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeInUp\" style=\"animation-delay: 0.3s\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <app-approval-summery [appDetailsSummery]=\"dashboardData\"></app-approval-summery>\n    </div>\n    <div class=\"col-lg-6\">\n      <app-approval-history-graph></app-approval-history-graph>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <app-responsive-table\n        tableHeader=\"MY APPLICATIONS\"\n        [dataSource]=\"myApplications\"\n        [fieldSet]=\"myApplicationHeaders\"></app-responsive-table>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <app-responsive-table\n        tableHeader=\"MY SUBSCRIPTIONS\"\n        [dataSource]=\"myAppSubscriptionTask\"\n        [fieldSet]=\"myAppSubscriptionHeaders\"></app-responsive-table>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <app-responsive-table\n        tableHeader=\"All APPLICATIONS\"\n        [dataSource]=\"allApplications\"\n        [fieldSet]=\"myApplicationHeaders\"></app-responsive-table>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <app-responsive-table\n        tableHeader=\"ALl SUBSCRIPTIONS\"\n        [dataSource]=\"allSubscriptions\"\n        [fieldSet]=\"myAppSubscriptionHeaders\"></app-responsive-table>\n    </div>\n  </div>\n\n\n</div>\n\n"

/***/ },

/***/ 878:
/***/ function(module, exports) {

module.exports = "<p>\n  history-main works!\n</p>\n"

/***/ },

/***/ 879:
/***/ function(module, exports) {

module.exports = "<p>\n  search-panel works!\n</p>\n"

/***/ },

/***/ 880:
/***/ function(module, exports) {

module.exports = "<p>\n  search-results works!\n</p>\n"

/***/ },

/***/ 881:
/***/ function(module, exports) {

module.exports = "<div class=\"login-container animated fadeInDown\" style=\"animation-delay: 0.5s\">\n\n  <div class=\"logo-container\">\n   WORKFLOW<span class=\"man\">MANAGER</span>\n  </div>\n\n  <!--Form Container - START-->\n  <div class=\"form-container\">\n    <h3 class=\"sign-in\">Sign In</h3>\n    <!--login form START-->\n    <form #loginForm=\"ngForm\" novalidate (ngSubmit)=\"onLoginClick(loginForm)\" >\n      <div class=\"form-fields\">\n        <div class=\"form-group\">\n          <input class=\"form-control\"\n                 type=\"text\"\n                 autocomplete=\"off\"\n                 placeholder=\"Username\"\n                 name=\"userName\"\n                 #userNameRef=\"ngModel\"\n                 required\n                 [(ngModel)]=\"userName\">\n          <span class=\"error\" *ngIf=\"userNameRef.errors?.required && (userNameRef.dirty || isSubmitted)\" >User name can not be empty</span>\n        </div>\n\n        <div class=\"form-group\">\n          <input class=\"form-control\"\n                 type=\"password\"\n                 autocomplete=\"off\"\n                 placeholder=\"Password\"\n                 name=\"password\"\n                 #passwordRef=\"ngModel\"\n                 required\n                 [(ngModel)]=\"password\">\n          <span class=\"error\" *ngIf=\"passwordRef.errors?.required && (passwordRef.dirty || isSubmitted)\">Password can not be empty</span>\n        </div>\n\n        <div class=\"action-container\">\n          <button class=\"btn login\" >LOGIN</button>\n          <label class=\"checkbox-lbl\">\n            <input type=\"checkbox\">\n            Remember\n            <span></span>\n          </label>\n\n\n        </div>\n      </div>\n\n      <div class=\"forgot-ps\" >forgot password</div>\n\n\n    </form> <!--login form END-->\n\n  </div><!--Form Container - END-->\n\n  <div  class=\"copyright\">  ©2017 WSO2Telco. Workflow Manager. </div>\n\n  <div class=\"error-container animated bounceIn\" *ngIf=\"loginError\">{{loginError}}</div>\n\n</div>\n\n\n\n"

/***/ }

},[1147]);
//# sourceMappingURL=main.bundle.map