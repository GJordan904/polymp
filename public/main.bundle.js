webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./welcome/welcome.module": [
		"./src/app/welcome/welcome.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_error_component__ = __webpack_require__("./src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ROUTES = [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomeModule' },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__error_error_component__["a" /* ErrorComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(ROUTES)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
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
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authCheck().subscribe(function (resp) {
            console.log(resp);
            if (resp && _this.router) {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__("./src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__ = __webpack_require__("./src/app/services/scroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__welcome_welcome_module__ = __webpack_require__("./src/app/welcome/welcome.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__http_headers_interceptor__ = __webpack_require__("./src/app/http/headers-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__http_xsrf_interceptor__ = __webpack_require__("./src/app/http/xsrf-interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__["a" /* ScrollService */],
            __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard__["a" /* AuthGuard */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_12__http_headers_interceptor__["a" /* HeadersInterceptor */],
                multi: true,
            },
            {
                provide: __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_13__http_xsrf_interceptor__["a" /* XsrfInterceptor */],
                multi: true,
            }
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__welcome_welcome_module__["WelcomeModule"],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("./node_modules/rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        var _this = this;
        return this.auth.authCheck()
            .map(function (resp) {
            if (!resp) {
                _this.auth.setUrl(url);
                var extras = {
                    queryParams: { 'redirect': true }
                };
                _this.router.navigate(['/welcome/login'], extras);
            }
            return resp;
        })
            .first();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("./node_modules/rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.authCheck = function () {
        var _this = this;
        if (this.user) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(true);
        }
        return this.http.get('/auth/check')
            .map(function (resp) {
            var response = false;
            if (resp.authenticated) {
                _this.user = resp.authenticated;
                response = true;
            }
            _this.authenticated = response;
            return response;
        })
            .first();
    };
    AuthService.prototype.setUrl = function (url) {
        this.destinationUrl = url;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/auth/logister/logister.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"view\">\n\n  <div *ngSwitchCase=\"'dual'\">\n\n    <app-card-tabs adlCardClasses=\"my-card pulsing\" adlNavClasses=\"nav-fill\">\n\n      <app-card-tab title=\"Register\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <form [formGroup]=\"registerForm\" novalidate>\n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"Email\" class=\"form-control form-control-lg\" formControlName=\"email\">\n                  <div formGroupName=\"passwords\">\n                    <input type=\"password\" placeholder=\"Password\" class=\"form-control form-control-lg\" formControlName=\"password\">\n                    <input type=\"password\" placeholder=\"Re-Type Password\" class=\"form-control form-control-lg\" formControlName=\"rePassword\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <button type=\"submit\"\n                          [disabled]=\"registerForm.pristine\" class=\"btn btn-success btn-block\">Register</button>\n                  <button type=\"button\" class=\"btn btn-block btn-dark btn-social\"><img src=\"assets/img/facebook.svg\"></button>\n                  <button type=\"button\" class=\"btn btn-block btn-dark btn-social\"><img src=\"assets/img/twitter.svg\"></button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </app-card-tab>\n\n      <app-card-tab title=\"Login\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <form [formGroup]=\"loginForm\" novalidate>\n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"Email\" class=\"form-control form-control-lg\" formControlName=\"email\">\n                  <input type=\"password\" placeholder=\"Password\" class=\"form-control form-control-lg\" formControlName=\"password\">\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"remember\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">Remember Me</span>\n                  </label>\n                </div>\n                <div class=\"form-group\">\n                  <button type=\"button\"\n                          (click)=\"login()\"\n                          [disabled]=\"loginForm.pristine || loginForm.invalid\"\n                          class=\"btn btn-success btn-block\">Login</button>\n                  <button type=\"button\" class=\"btn btn-block btn-dark btn-social\"><img src=\"assets/img/facebook.svg\"></button>\n                  <button type=\"button\" class=\"btn btn-block btn-dark btn-social\"><img src=\"assets/img/twitter.svg\"></button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </app-card-tab>\n\n    </app-card-tabs>\n\n  </div>\n\n  <div *ngSwitchCase=\"'login'\">\n    <div class=\"card my-card\">\n      <div class=\"card-header\">\n        <h1>Login</h1>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <form [formGroup]=\"loginForm\" novalidate>\n                <div class=\"form-group\">\n                  <input type=\"email\" placeholder=\"Email\" class=\"form-control form-control-lg\" formControlName=\"email\">\n                  <input type=\"password\" placeholder=\"Password\" class=\"form-control form-control-lg\" formControlName=\"password\">\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"remember\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">Remember Me</span>\n                  </label>\n                </div>\n                <div class=\"form-group\">\n                  <button type=\"button\"\n                          (click)=\"login()\"\n                          [disabled]=\"loginForm.pristine || loginForm.invalid\"\n                          class=\"btn btn-success btn-block\">Login</button>\n                  <button type=\"button\" class=\"btn btn-block btn-dark btn-social\"><img src=\"assets/img/facebook.svg\"></button>\n                  <button type=\"button\" class=\"btn btn-block btn-dark btn-social\"><img src=\"assets/img/twitter.svg\"></button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/auth/logister/logister.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/auth/logister/logister.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogisterComponent = (function () {
    function LogisterComponent(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
    }
    LogisterComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LogisterComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]],
            remember: ''
        });
        this.registerForm = this.fb.group({
            passwords: this.fb.group({
                password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]],
                rePassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]]
            }, { validator: this.matchPasswords }),
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email], this.uniqueEmail],
        });
    };
    LogisterComponent.prototype.matchPasswords = function (c) {
        if (c.get('password').value !== c.get('rePassword').value) {
            return { invalid: true };
        }
    };
    LogisterComponent.prototype.uniqueEmail = function (c) {
        return this.http.get("/api/validate/email?" + c.value)
            .map(function (res) { return res.json().unique ? null : { value: c.value }; });
    };
    LogisterComponent.prototype.login = function () {
        var _this = this;
        this.http.post('/auth/login', this.loginForm.value)
            .subscribe(function (resp) {
            if (resp.success) {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    LogisterComponent.prototype.register = function () {
    };
    return LogisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('view'),
    __metadata("design:type", String)
], LogisterComponent.prototype, "view", void 0);
LogisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'logister',
        template: __webpack_require__("./src/app/auth/logister/logister.component.html"),
        styles: [__webpack_require__("./src/app/auth/logister/logister.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LogisterComponent);

var _a, _b, _c;
//# sourceMappingURL=logister.component.js.map

/***/ }),

/***/ "./src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'error',
        styles: [__webpack_require__("./src/app/error/error.style.scss")],
        template: __webpack_require__("./src/app/error/error.template.html")
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "./src/app/error/error.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/error/error.template.html":
/***/ (function(module, exports) {

module.exports = "<p>error</p>\n"

/***/ }),

/***/ "./src/app/http/headers-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadersInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadersInterceptor = (function () {
    function HeadersInterceptor() {
    }
    HeadersInterceptor.prototype.intercept = function (req, next) {
        // Clone the request to add the new header.
        var headers = {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        };
        var request = req.clone({
            setHeaders: headers
        });
        // Pass on the cloned request instead of the original request.
        return next.handle(request);
    };
    return HeadersInterceptor;
}());
HeadersInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], HeadersInterceptor);

//# sourceMappingURL=headers-interceptor.js.map

/***/ }),

/***/ "./src/app/http/xsrf-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XsrfInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var XsrfInterceptor = (function () {
    function XsrfInterceptor(tokenService) {
        this.tokenService = tokenService;
    }
    XsrfInterceptor.prototype.intercept = function (req, next) {
        var lcUrl = req.url.toLowerCase();
        // Angular default implementation save for the fact we
        // do not skip GET requests
        if (req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has('X-XSRF-TOKEN')) {
            req = req.clone({ headers: req.headers.set('X-XSRF-TOKEN', token) });
        }
        return next.handle(req);
    };
    return XsrfInterceptor;
}());
XsrfInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpXsrfTokenExtractor */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpXsrfTokenExtractor */]) === "function" && _a || Object])
], XsrfInterceptor);

var _a;
//# sourceMappingURL=xsrf-interceptor.js.map

/***/ }),

/***/ "./src/app/libs/ng2-table/components/ng-table-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2TableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_ng_table_component__ = __webpack_require__("./src/app/libs/ng2-table/components/table/ng-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_ng_table_filtering_directive__ = __webpack_require__("./src/app/libs/ng2-table/components/table/ng-table-filtering.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_ng_table_paging_directive__ = __webpack_require__("./src/app/libs/ng2-table/components/table/ng-table-paging.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_ng_table_sorting_directive__ = __webpack_require__("./src/app/libs/ng2-table/components/table/ng-table-sorting.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_any_pipe_pipe__ = __webpack_require__("./src/app/libs/ng2-table/components/pipes/any-pipe.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Ng2TableModule = (function () {
    function Ng2TableModule() {
    }
    return Ng2TableModule;
}());
Ng2TableModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__table_ng_table_component__["a" /* NgTableComponent */], __WEBPACK_IMPORTED_MODULE_3__table_ng_table_filtering_directive__["a" /* NgTableFilteringDirective */], __WEBPACK_IMPORTED_MODULE_4__table_ng_table_paging_directive__["a" /* NgTablePagingDirective */], __WEBPACK_IMPORTED_MODULE_5__table_ng_table_sorting_directive__["a" /* NgTableSortingDirective */], __WEBPACK_IMPORTED_MODULE_6__pipes_any_pipe_pipe__["a" /* AnyPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__table_ng_table_component__["a" /* NgTableComponent */], __WEBPACK_IMPORTED_MODULE_3__table_ng_table_filtering_directive__["a" /* NgTableFilteringDirective */], __WEBPACK_IMPORTED_MODULE_4__table_ng_table_paging_directive__["a" /* NgTablePagingDirective */], __WEBPACK_IMPORTED_MODULE_5__table_ng_table_sorting_directive__["a" /* NgTableSortingDirective */]]
    })
], Ng2TableModule);

//# sourceMappingURL=ng-table-module.js.map

/***/ }),

/***/ "./src/app/libs/ng2-table/components/pipes/any-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AnyPipe = (function () {
    function AnyPipe() {
    }
    AnyPipe.prototype.transform = function (value, pipe) {
        if (!pipe) {
            return value;
        }
        return pipe.transform(value);
    };
    return AnyPipe;
}());
AnyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'anyPipe',
        pure: false
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AnyPipe);

//# sourceMappingURL=any-pipe.pipe.js.map

/***/ }),

/***/ "./src/app/libs/ng2-table/components/table/ng-table-filtering.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgTableFilteringDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {setProperty} from 'angular2/ts/src/core/forms/directives/shared';
function setProperty(renderer, elementRef, propName, propValue) {
    renderer.setElementProperty(elementRef, propName, propValue);
}
var NgTableFilteringDirective = (function () {
    function NgTableFilteringDirective(element, renderer) {
        this.ngTableFiltering = {
            filterString: '',
            columnName: 'name'
        };
        this.tableChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.element = element;
        this.renderer = renderer;
        // Set default value for filter
        setProperty(this.renderer, this.element, 'value', this.ngTableFiltering.filterString);
    }
    Object.defineProperty(NgTableFilteringDirective.prototype, "config", {
        get: function () {
            return this.ngTableFiltering;
        },
        set: function (value) {
            this.ngTableFiltering = value;
        },
        enumerable: true,
        configurable: true
    });
    NgTableFilteringDirective.prototype.onChangeFilter = function (event) {
        this.ngTableFiltering.filterString = event;
        this.tableChanged.emit({ filtering: this.ngTableFiltering });
    };
    return NgTableFilteringDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgTableFilteringDirective.prototype, "ngTableFiltering", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NgTableFilteringDirective.prototype, "tableChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgTableFilteringDirective.prototype, "config", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target.value']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgTableFilteringDirective.prototype, "onChangeFilter", null);
NgTableFilteringDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[ngTableFiltering]' }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object])
], NgTableFilteringDirective);

var _a, _b, _c;
//# sourceMappingURL=ng-table-filtering.directive.js.map

/***/ }),

/***/ "./src/app/libs/ng2-table/components/table/ng-table-paging.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgTablePagingDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgTablePagingDirective = (function () {
    function NgTablePagingDirective() {
        this.ngTablePaging = true;
        this.tableChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(NgTablePagingDirective.prototype, "config", {
        get: function () {
            return this.ngTablePaging;
        },
        set: function (value) {
            this.ngTablePaging = value;
        },
        enumerable: true,
        configurable: true
    });
    NgTablePagingDirective.prototype.onChangePage = function (event) {
        // Object.assign(this.config, event);
        if (this.ngTablePaging) {
            this.tableChanged.emit({ paging: event });
        }
    };
    return NgTablePagingDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NgTablePagingDirective.prototype, "ngTablePaging", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NgTablePagingDirective.prototype, "tableChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgTablePagingDirective.prototype, "config", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('pagechanged', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgTablePagingDirective.prototype, "onChangePage", null);
NgTablePagingDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[ngTablePaging]' })
], NgTablePagingDirective);

var _a;
//# sourceMappingURL=ng-table-paging.directive.js.map

/***/ }),

/***/ "./src/app/libs/ng2-table/components/table/ng-table-sorting.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgTableSortingDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgTableSortingDirective = (function () {
    function NgTableSortingDirective() {
        this.sortChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(NgTableSortingDirective.prototype, "config", {
        get: function () {
            return this.ngTableSorting;
        },
        set: function (value) {
            this.ngTableSorting = value;
        },
        enumerable: true,
        configurable: true
    });
    NgTableSortingDirective.prototype.onToggleSort = function (event) {
        if (event) {
            event.preventDefault();
        }
        if (this.ngTableSorting && this.column && this.column.sort !== false) {
            switch (this.column.sort) {
                case 'asc':
                    this.column.sort = 'desc';
                    break;
                case 'desc':
                    this.column.sort = '';
                    break;
                default:
                    this.column.sort = 'asc';
                    break;
            }
            this.sortChanged.emit(this.column);
        }
    };
    return NgTableSortingDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgTableSortingDirective.prototype, "ngTableSorting", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgTableSortingDirective.prototype, "column", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NgTableSortingDirective.prototype, "sortChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgTableSortingDirective.prototype, "config", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgTableSortingDirective.prototype, "onToggleSort", null);
NgTableSortingDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[ngTableSorting]' })
], NgTableSortingDirective);

var _a;
//# sourceMappingURL=ng-table-sorting.directive.js.map

/***/ }),

/***/ "./src/app/libs/ng2-table/components/table/ng-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgTableComponent = (function () {
    function NgTableComponent(sanitizer) {
        this.sanitizer = sanitizer;
        // Table values
        this.rows = [];
        // Outputs (Events)
        this.tableChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cellClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showFilterRow = false;
        this._columns = [];
        this._config = {};
    }
    Object.defineProperty(NgTableComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (conf) {
            if (!conf.className) {
                conf.className = 'table-striped table-bordered';
            }
            if (conf.className instanceof Array) {
                conf.className = conf.className.join(' ');
            }
            this._config = conf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgTableComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (values) {
            var _this = this;
            values.forEach(function (value) {
                if (value.filtering) {
                    _this.showFilterRow = true;
                }
                if (value.className && value.className instanceof Array) {
                    value.className = value.className.join(' ');
                }
                var column = _this._columns.find(function (col) { return col.name === value.name; });
                if (column) {
                    Object.assign(column, value);
                }
                if (!column) {
                    _this._columns.push(value);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    NgTableComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    Object.defineProperty(NgTableComponent.prototype, "configColumns", {
        get: function () {
            var sortColumns = [];
            this.columns.forEach(function (column) {
                if (column.sort) {
                    sortColumns.push(column);
                }
            });
            return { columns: sortColumns };
        },
        enumerable: true,
        configurable: true
    });
    NgTableComponent.prototype.onChangeTable = function (column) {
        this._columns.forEach(function (col) {
            if (col.name !== column.name && col.sort !== false) {
                col.sort = '';
            }
        });
        this.tableChanged.emit({ sorting: this.configColumns });
    };
    NgTableComponent.prototype.getData = function (row, propertyName) {
        return propertyName.split('.').reduce(function (prev, curr) { return prev[curr]; }, row);
    };
    NgTableComponent.prototype.cellClick = function (row, column) {
        this.cellClicked.emit({ row: row, column: column });
    };
    return NgTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgTableComponent.prototype, "rows", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgTableComponent.prototype, "config", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NgTableComponent.prototype, "tableChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], NgTableComponent.prototype, "cellClicked", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgTableComponent.prototype, "columns", null);
NgTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ng-table',
        template: "\n    <table class=\"table dataTable\" ngClass=\"{{config.className || ''}}\"\n           role=\"grid\" style=\"width: 100%;\">\n      <thead>\n        <tr role=\"row\">\n          <th *ngFor=\"let column of columns\" [ngTableSorting]=\"config\" [column]=\"column\" \n              (sortChanged)=\"onChangeTable($event)\" ngClass=\"{{column.className || ''}}\">\n            {{column.title}}\n            <i *ngIf=\"config && column.sort\" class=\"pull-right fa\"\n              [ngClass]=\"{'fa-chevron-down': column.sort === 'desc', 'fa-chevron-up': column.sort === 'asc'}\"></i>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr *ngIf=\"showFilterRow\">\n        <td *ngFor=\"let column of columns\">\n          <input *ngIf=\"column.filtering\" placeholder=\"{{column.filtering.placeholder}}\"\n                 [ngTableFiltering]=\"column.filtering\"\n                 class=\"form-control\"\n                 style=\"width: auto;\"\n                 (tableChanged)=\"onChangeTable(config)\"/>\n        </td>\n      </tr>\n        <tr *ngFor=\"let row of rows\">\n          <td (click)=\"cellClick(row, column.name)\" *ngFor=\"let column of columns\" [innerHtml]=\"sanitize(getData(row, column.name)) | anyPipe:column.pipe\"></td>\n        </tr>\n      </tbody>\n    </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _c || Object])
], NgTableComponent);

var _a, _b, _c;
//# sourceMappingURL=ng-table.component.js.map

/***/ }),

/***/ "./src/app/services/scroll.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// modified version of from https://github.com/abhazelton/animate-on-scroll




var ScrollService = (function () {
    function ScrollService() {
        var _this = this;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        // set initial value
        this.manageScrollPos();
        // create observable that we can subscribe to from component or directive
        this.scrollObs = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].fromEvent(window, 'scroll');
        // initiate subscription to update values
        this.scrollObs.takeUntil(this.ngUnsubscribe)
            .subscribe(function () { return _this.manageScrollPos(); });
        // create observable for changes in screen size
        this.resizeObs = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].fromEvent(window, 'resize');
        // initiate subscription to update values
        this.resizeObs.takeUntil(this.ngUnsubscribe)
            .subscribe(function () { return _this.manageScrollPos(); });
    }
    ScrollService.prototype.manageScrollPos = function () {
        // update service property
        this.pos = window.pageYOffset;
    };
    ScrollService.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    /**
     * get window height utility function
     *
     * @returns void
     */
    ScrollService.prototype.getWinHeight = function () {
        return window.screen.height;
    };
    /**
     * get offsetTop value for element
     *
     * @returns void
     */
    ScrollService.prototype.getOffsetTop = function (el) {
        var viewportTop = el.nativeElement.getBoundingClientRect().top;
        var clientTop = el.nativeElement.clientTop;
        // get vertical position for selected element
        return viewportTop + this.pos - clientTop;
    };
    /**
     * get offsetBottom value for element
     *
     * @returns void
     */
    ScrollService.prototype.getOffsetBottom = function (el) {
        var viewportTop = el.nativeElement.getBoundingClientRect().top;
        var clientBottom = el.nativeElement.clientTop + el.nativeElement.clientHeight;
        // get vertical position for selected element
        return viewportTop + this.pos - clientBottom;
    };
    return ScrollService;
}());
ScrollService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ScrollService);

//# sourceMappingURL=scroll.service.js.map

/***/ }),

/***/ "./src/app/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_error_component__ = __webpack_require__("./src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_logister_logister_component__ = __webpack_require__("./src/app/auth/logister/logister.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_ui_module__ = __webpack_require__("./src/app/ui/ui.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widget_widget_module__ = __webpack_require__("./src/app/widget/widget.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ui_ui_module__["a" /* UiModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_4__auth_logister_logister_component__["a" /* LogisterComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ui_ui_module__["a" /* UiModule */],
            __WEBPACK_IMPORTED_MODULE_4__auth_logister_logister_component__["a" /* LogisterComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_7__widget_widget_module__["a" /* WidgetModule */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./src/app/ui/anim-in-view/anim-in-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimInViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimInViewComponent = (function () {
    function AnimInViewComponent() {
        this.visible = false;
        this.setClasses = {};
    }
    AnimInViewComponent.prototype.ngAfterViewInit = function () {
        this.setClass();
    };
    AnimInViewComponent.prototype.show = function (el) {
        this.visible = true;
        this.setClass();
    };
    AnimInViewComponent.prototype.setClass = function () {
        this.setClasses = (_a = {
                'animated ': this.visible
            },
            _a[this.classes] = this.visible,
            _a['invisible'] = !this.visible,
            _a);
        var _a;
    };
    return AnimInViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('classes'),
    __metadata("design:type", String)
], AnimInViewComponent.prototype, "classes", void 0);
AnimInViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'anim-in-view',
        template: "<div elInView\n                  (show)=\"show($event)\"\n                  [ngClass]=\"setClasses\">\n                <ng-content></ng-content>\n            </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AnimInViewComponent);

//# sourceMappingURL=anim-in-view.component.js.map

/***/ }),

/***/ "./src/app/ui/card-tabs/card-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardTabComponent = (function () {
    function CardTabComponent() {
        this.active = false;
    }
    CardTabComponent.prototype.ngOnInit = function () {
    };
    return CardTabComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], CardTabComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CardTabComponent.prototype, "active", void 0);
CardTabComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-tab',
        styles: [__webpack_require__("./src/app/ui/card-tabs/card-tabs.component.scss")],
        template: '<div [hidden]="!active"><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [])
], CardTabComponent);

//# sourceMappingURL=card-tab.component.js.map

/***/ }),

/***/ "./src/app/ui/card-tabs/card-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"cardClasses\">\n    <div class=\"card-header nav-card\">\n        <ul [ngClass]=\"navClasses\">\n            <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [ngClass]=\"{'active': tab.active, 'nav-item': true}\">\n                {{tab.title}}\n            </li>\n        </ul>\n    </div>\n    <div class=\"card-body\">\n        <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/card-tabs/card-tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-item {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/ui/card-tabs/card-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_tab_component__ = __webpack_require__("./src/app/ui/card-tabs/card-tab.component.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardTabsComponent = (function () {
    function CardTabsComponent() {
    }
    CardTabsComponent.prototype.ngOnInit = function () {
        this.setClasses();
    };
    CardTabsComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    CardTabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    CardTabsComponent.prototype.setClasses = function () {
        var typeClass = {};
        if (this.type) {
            typeClass = (_a = {}, _a[this.type] = true, _a);
        }
        this.navClasses = __assign((_b = { 'nav': true }, _b[this.adlNavClasses] = true, _b), typeClass);
        this.cardClasses = (_c = {
                'card': true
            },
            _c[this.adlCardClasses] = true,
            _c);
        var _a, _b, _c;
    };
    return CardTabsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
    __metadata("design:type", String)
], CardTabsComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('adlCardClasses'),
    __metadata("design:type", String)
], CardTabsComponent.prototype, "adlCardClasses", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('adlNavClasses'),
    __metadata("design:type", String)
], CardTabsComponent.prototype, "adlNavClasses", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__card_tab_component__["a" /* CardTabComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], CardTabsComponent.prototype, "tabs", void 0);
CardTabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-tabs',
        template: __webpack_require__("./src/app/ui/card-tabs/card-tabs.component.html"),
        styles: [__webpack_require__("./src/app/ui/card-tabs/card-tabs.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CardTabsComponent);

var _a;
//# sourceMappingURL=card-tabs.component.js.map

/***/ }),

/***/ "./src/app/ui/directives/el-in-view.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElInViewDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scroll_service__ = __webpack_require__("./src/app/services/scroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_visibility_class__ = __webpack_require__("./src/app/ui/directives/manage-visibility.class.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElInViewDirective = (function (_super) {
    __extends(ElInViewDirective, _super);
    function ElInViewDirective(el, scroll) {
        var _this = _super.call(this, el, scroll) || this;
        _this.el = el;
        _this.scroll = scroll;
        _this.show = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    /**
     * check for visibility of element
     */
    ElInViewDirective.prototype.manageVisibility = function () {
        var winHeight = this.scroll.getWinHeight();
        var scrollTrigger = this.offsetTop + 150 - winHeight;
        if (!this.eivVisible && this.scroll.pos >= scrollTrigger) {
            this.eivVisible = true;
            this.show.emit(this.el);
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
        }
    };
    return ElInViewDirective;
}(__WEBPACK_IMPORTED_MODULE_2__manage_visibility_class__["a" /* ManageVisibility */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('show'),
    __metadata("design:type", Object)
], ElInViewDirective.prototype, "show", void 0);
ElInViewDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[elInView]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_scroll_service__["a" /* ScrollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_scroll_service__["a" /* ScrollService */]) === "function" && _b || Object])
], ElInViewDirective);

var _a, _b;
//# sourceMappingURL=el-in-view.directive.js.map

/***/ }),

/***/ "./src/app/ui/directives/manage-visibility.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageVisibility; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

var ManageVisibility = (function () {
    function ManageVisibility(el, scroll) {
        this.el = el;
        this.scroll = scroll;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    ManageVisibility.prototype.ngOnInit = function () {
        this.eivVisible = false;
        this.offsetTop = this.scroll.getOffsetTop(this.el);
    };
    ManageVisibility.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.manageVisibility();
        this.scroll.scrollObs.takeUntil(this.ngUnsubscribe)
            .subscribe(function () { return _this.manageVisibility(); });
        this.scroll.resizeObs.takeUntil(this.ngUnsubscribe)
            .subscribe(function () { return _this.manageVisibility(); });
    };
    ManageVisibility.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    /**
     * check for visibility of element
     */
    ManageVisibility.prototype.manageVisibility = function () {
    };
    return ManageVisibility;
}());

//# sourceMappingURL=manage-visibility.class.js.map

/***/ }),

/***/ "./src/app/ui/directives/parallax/parallax.config.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=parallax.config.js.map

/***/ }),

/***/ "./src/app/ui/directives/parallax/parallax.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scroll_service__ = __webpack_require__("./src/app/services/scroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_visibility_class__ = __webpack_require__("./src/app/ui/directives/manage-visibility.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parallax_config__ = __webpack_require__("./src/app/ui/directives/parallax/parallax.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parallax_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__parallax_config__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParallaxDirective = (function (_super) {
    __extends(ParallaxDirective, _super);
    function ParallaxDirective(el, scroll) {
        var _this = _super.call(this, el, scroll) || this;
        _this.el = el;
        _this.scroll = scroll;
        return _this;
    }
    ParallaxDirective.prototype.ngOnInit = function () {
        var config = {
            startPosition: 0,
            ratio: .5,
            cssUnit: 'px',
            maxValue: 0,
            minValue: 0
        };
        this.parallax = __assign({}, config, this.parallax);
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * check for visibility of element
     */
    ParallaxDirective.prototype.manageVisibility = function () {
        var winHeight = this.scroll.getWinHeight();
        var scrollTrigger = this.offsetTop - winHeight;
        if (!this.eivVisible && this.scroll.pos >= scrollTrigger) {
            this.eivVisible = true;
        }
        if (this.eivVisible) {
            var resultVal = void 0;
            var calcVal = void 0;
            calcVal = ((this.scroll.pos * this.parallax.ratio) + this.parallax.startPosition) * -1;
            if (this.parallax.maxValue && calcVal >= this.parallax.maxValue)
                calcVal = this.parallax.maxValue;
            else if (this.parallax.minValue && calcVal <= this.parallax.minValue)
                calcVal = this.parallax.minValue;
            // added after realizing original setup wasn't compatible in Firefox
            // debugger;
            resultVal = 'center calc(50% + ' + calcVal + this.parallax.cssUnit + ')';
            this.el.nativeElement.style['backgroundPosition'] = resultVal;
        }
        if (this.eivVisible && this.scroll.pos < scrollTrigger) {
            this.eivVisible = false;
        }
    };
    return ParallaxDirective;
}(__WEBPACK_IMPORTED_MODULE_2__manage_visibility_class__["a" /* ManageVisibility */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('parallax'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__parallax_config__["ParallaxConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__parallax_config__["ParallaxConfig"]) === "function" && _a || Object)
], ParallaxDirective.prototype, "parallax", void 0);
ParallaxDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[parallax]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_scroll_service__["a" /* ScrollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_scroll_service__["a" /* ScrollService */]) === "function" && _c || Object])
], ParallaxDirective);

var _a, _b, _c;
//# sourceMappingURL=parallax.directive.js.map

/***/ }),

/***/ "./src/app/ui/dropzone/dropzone-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropzonePreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropzone_service__ = __webpack_require__("./src/app/ui/dropzone/dropzone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropzonePreviewComponent = (function () {
    function DropzonePreviewComponent(dzService) {
        var _this = this;
        this.dzService = dzService;
        this.que = [];
        this.done = [];
        this.onFileAdded = function (file) {
            file.id = _this.que.length;
            _this.que.push({
                name: file.name,
                size: file.size,
                progress: 0,
                bytesSent: 0,
                thumbnail: '',
                status: 'Queued For Upload'
            });
        };
        this.onUploadProgress = function (event) {
            _this.que[event.file.id].progress = event.progress;
            _this.que[event.file.id].progress = event.bytesSent;
        };
        this.onComplete = function (file) {
            _this.done.push(_this.que[file.id]);
            _this.que.splice(file.id, 1);
        };
        this.onSuccess = function (event) {
        };
    }
    DropzonePreviewComponent.prototype.ngOnInit = function () {
        this.que = [];
        this.dzService.addedFile.subscribe(this.onFileAdded);
        this.dzService.uploadProgress.subscribe(this.onUploadProgress);
        this.dzService.success.subscribe(this.onSuccess);
        this.dzService.complete.subscribe(this.onComplete);
    };
    return DropzonePreviewComponent;
}());
DropzonePreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dropzone-previews',
        template: __webpack_require__("./src/app/ui/dropzone/dropzone.component.html"),
        styles: [__webpack_require__("./src/app/ui/dropzone/dropzone.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dropzone_service__["a" /* DropzoneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dropzone_service__["a" /* DropzoneService */]) === "function" && _a || Object])
], DropzonePreviewComponent);

var _a;
//# sourceMappingURL=dropzone-preview.component.js.map

/***/ }),

/***/ "./src/app/ui/dropzone/dropzone.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card widget\">\n    <div class=\"col-xs-12 col-sm-6\">\n        <div class=\"que\">\n            <div *ngFor=\"let item of que\" class=\"dz-preview\">\n                <div class=\"dz-thumbnail\">\n                    <img [src]=\"item.thumbnail\">\n                </div>\n                <div class=\"dz-name\">{{ item.name }}</div>\n                <div class=\"dz-status\">{{ item.status }}</div>\n                <div class=\"progress\">\n                    <div [style.width]=\"item.progress + '%'\" class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\"\n                         aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"dz-count\">{{ item.bytesSent | BytesTransform }} / {{ item.size | BytesTransform }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-6\">\n        <div class=\"done\">\n            <div *ngFor=\"let item of done\" class=\"dz-preview\">\n                <div class=\"dz-thumbnail\">\n                    <img [src]=\"item.thumbnail\">\n                </div>\n                <div class=\"dz-name\">{{ item.name }}</div>\n                <div class=\"dz-status\">{{ item.status }}</div>\n                <div class=\"dz-count\">{{ item.bytesSent | BytesTransform }} / {{ item.size | BytesTransform }}</div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/dropzone/dropzone.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:100,400,700);", ""]);

// module
exports.push([module.i, ".list-group, .que, .done {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item-action, .dz-preview {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n  .list-group-item-action:focus, .dz-preview:focus, .list-group-item-action:hover, .dz-preview:hover {\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .list-group-item-action:active, .dz-preview:active {\n    color: #93a3b1;\n    background-color: #e9ecef; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n  .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n  .list-group-item:focus, .list-group-item:hover {\n    text-decoration: none; }\n  .list-group-item.disabled, .list-group-item:disabled {\n    color: #868e96;\n    background-color: #fff; }\n  .list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #8884FF;\n    border-color: #8884FF; }\n\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0; }\n\n.list-group-item-primary {\n  color: #474585;\n  background-color: #deddff; }\n\na.list-group-item-primary,\nbutton.list-group-item-primary {\n  color: #474585; }\n  a.list-group-item-primary:focus, a.list-group-item-primary:hover,\n  button.list-group-item-primary:focus,\n  button.list-group-item-primary:hover {\n    color: #474585;\n    background-color: #c5c4ff; }\n  a.list-group-item-primary.active,\n  button.list-group-item-primary.active {\n    color: #fff;\n    background-color: #474585;\n    border-color: #474585; }\n\n.list-group-item-secondary {\n  color: #464a4e;\n  background-color: #dddfe2; }\n\na.list-group-item-secondary,\nbutton.list-group-item-secondary {\n  color: #464a4e; }\n  a.list-group-item-secondary:focus, a.list-group-item-secondary:hover,\n  button.list-group-item-secondary:focus,\n  button.list-group-item-secondary:hover {\n    color: #464a4e;\n    background-color: #cfd2d6; }\n  a.list-group-item-secondary.active,\n  button.list-group-item-secondary.active {\n    color: #fff;\n    background-color: #464a4e;\n    border-color: #464a4e; }\n\n.list-group-item-success {\n  color: #395528;\n  background-color: #d6e5cd; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #395528; }\n  a.list-group-item-success:focus, a.list-group-item-success:hover,\n  button.list-group-item-success:focus,\n  button.list-group-item-success:hover {\n    color: #395528;\n    background-color: #c8dcbc; }\n  a.list-group-item-success.active,\n  button.list-group-item-success.active {\n    color: #fff;\n    background-color: #395528;\n    border-color: #395528; }\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #0c5460; }\n  a.list-group-item-info:focus, a.list-group-item-info:hover,\n  button.list-group-item-info:focus,\n  button.list-group-item-info:hover {\n    color: #0c5460;\n    background-color: #abdde5; }\n  a.list-group-item-info.active,\n  button.list-group-item-info.active {\n    color: #fff;\n    background-color: #0c5460;\n    border-color: #0c5460; }\n\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #856404; }\n  a.list-group-item-warning:focus, a.list-group-item-warning:hover,\n  button.list-group-item-warning:focus,\n  button.list-group-item-warning:hover {\n    color: #856404;\n    background-color: #ffe8a1; }\n  a.list-group-item-warning.active,\n  button.list-group-item-warning.active {\n    color: #fff;\n    background-color: #856404;\n    border-color: #856404; }\n\n.list-group-item-danger {\n  color: #6e2126;\n  background-color: #f3c9cc; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #6e2126; }\n  a.list-group-item-danger:focus, a.list-group-item-danger:hover,\n  button.list-group-item-danger:focus,\n  button.list-group-item-danger:hover {\n    color: #6e2126;\n    background-color: #eeb4b8; }\n  a.list-group-item-danger.active,\n  button.list-group-item-danger.active {\n    color: #fff;\n    background-color: #6e2126;\n    border-color: #6e2126; }\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe; }\n\na.list-group-item-light,\nbutton.list-group-item-light {\n  color: #818182; }\n  a.list-group-item-light:focus, a.list-group-item-light:hover,\n  button.list-group-item-light:focus,\n  button.list-group-item-light:hover {\n    color: #818182;\n    background-color: #ececf6; }\n  a.list-group-item-light.active,\n  button.list-group-item-light.active {\n    color: #fff;\n    background-color: #818182;\n    border-color: #818182; }\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca; }\n\na.list-group-item-dark,\nbutton.list-group-item-dark {\n  color: #1b1e21; }\n  a.list-group-item-dark:focus, a.list-group-item-dark:hover,\n  button.list-group-item-dark:focus,\n  button.list-group-item-dark:hover {\n    color: #1b1e21;\n    background-color: #b9bbbe; }\n  a.list-group-item-dark.active,\n  button.list-group-item-dark.active {\n    color: #fff;\n    background-color: #1b1e21;\n    border-color: #1b1e21; }\n\n.dz-preview {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  .dz-preview .stats {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .dz-preview .dz-thumbnail {\n    width: 25%; }\n    .dz-preview .dz-thumbnail image {\n      width: 100%;\n      height: auto; }\n\n.que {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.done {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/ui/dropzone/dropzone.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropzoneDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropzone_service__ = __webpack_require__("./src/app/ui/dropzone/dropzone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropzoneDirective = (function () {
    function DropzoneDirective(service, el, renderer) {
        var _this = this;
        this.service = service;
        this.el = el;
        this.renderer = renderer;
        this.dzClick = function (evt) {
            _this.service.dz.hiddenFileInput.click();
        };
    }
    DropzoneDirective.prototype.ngOnInit = function () {
        this.service.init(this.el.nativeElement.getAttribute('id'));
        this.renderer.listen(this.el.nativeElement, 'click', this.dzClick);
    };
    return DropzoneDirective;
}());
DropzoneDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[dropzone]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dropzone_service__["a" /* DropzoneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dropzone_service__["a" /* DropzoneService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _c || Object])
], DropzoneDirective);

var _a, _b, _c;
//# sourceMappingURL=dropzone.directive.js.map

/***/ }),

/***/ "./src/app/ui/dropzone/dropzone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropzoneService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dropzone__ = __webpack_require__("./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DropzoneService = (function () {
    function DropzoneService(tokenService) {
        this.tokenService = tokenService;
        this.dropSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.dragStartSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.dragEndSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.dragEnterSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.dragOverSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.dragLeaveSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.addedFileSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.removedFileSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.thumbnailSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.errorSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.processingSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.uploadProgressSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.sendingSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.successSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.completeSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.canceledSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.maxFilesReachedSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.maxFilesExceededSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.processingMultipleSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.sendingMultipleSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.successMultipleSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.completeMultipleSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.canceledMultipleSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.totalUploadProgressSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.drop = this.dropSource.asObservable();
        this.dragStart = this.dragStartSource.asObservable();
        this.dragEnd = this.dragEndSource.asObservable();
        this.dragEnter = this.dragEnterSource.asObservable();
        this.dragOver = this.dragOverSource.asObservable();
        this.dragLeave = this.dragLeaveSource.asObservable();
        this.addedFile = this.addedFileSource.asObservable();
        this.removedFile = this.removedFileSource.asObservable();
        this.thumbnail = this.thumbnailSource.asObservable();
        this.error = this.errorSource.asObservable();
        this.processing = this.processingSource.asObservable();
        this.uploadProgress = this.uploadProgressSource.asObservable();
        this.sending = this.sendingSource.asObservable();
        this.success = this.successSource.asObservable();
        this.complete = this.completeSource.asObservable();
        this.canceled = this.canceledSource.asObservable();
        this.maxFilesReached = this.maxFilesReachedSource.asObservable();
        this.maxFilesExceded = this.maxFilesExceededSource.asObservable();
        this.processingMultiple = this.processingMultipleSource.asObservable();
        this.sendingMultiple = this.sendingMultipleSource.asObservable();
        this.successMultiple = this.successMultipleSource.asObservable();
        this.completeMultiple = this.completeMultipleSource.asObservable();
        this.canceledMultiple = this.canceledMultipleSource.asObservable();
        this.totalUploadProgress = this.totalUploadProgressSource.asObservable();
    }
    DropzoneService.prototype.init = function (id) {
        var _this = this;
        console.log(id);
        this.dz = new __WEBPACK_IMPORTED_MODULE_1_dropzone___default.a("#" + id, {
            previewTemplate: '',
            paramName: 'file',
            url: '/api/transfer',
            withCredentials: true,
            createImageThumbnails: true,
            clickable: true,
            drop: function (e) {
                _this.dropSource.next(e);
            },
            dragstart: function (e) {
                _this.dragStartSource.next(e);
            },
            dragend: function (e) {
                _this.dragEndSource.next(e);
            },
            dragenter: function (e) {
                _this.dragEnterSource.next(e);
            },
            dragover: function (e) {
                _this.dragOverSource.next(e);
            },
            dragleave: function (e) {
                _this.dragLeaveSource.next(e);
            },
            addedfile: function (file) {
                _this.addedFileSource.next(file);
            },
            removedfile: function (file) {
                _this.removedFileSource.next(file);
            },
            thumbnail: function (file, dataUrl) {
                _this.thumbnailSource.next({ file: file, url: dataUrl });
            },
            error: function (file, error, xhr) {
                _this.errorSource.next({ file: file, error: error, xhr: xhr });
            },
            processing: function (file) {
                _this.processingSource.next(file);
            },
            uploadprogress: function (file, progress, bytesSent) {
                _this.uploadProgressSource.next({ file: file, progress: progress, bytesSent: bytesSent });
            },
            sending: function (file, xhr, form) {
                var token = _this.tokenService.getToken();
                xhr.setRequestHeader('X-XSRF-TOKEN', token);
                _this.sendingSource.next({ file: file, xhr: xhr, form: form });
            },
            success: function (file, response) {
                _this.successSource.next({ file: file, response: response });
            },
            complete: function (file) {
                _this.completeSource.next(file);
            },
            canceled: function (file) {
                _this.canceledSource.next(file);
            },
            maxfilesreached: function (file) {
                _this.maxFilesReachedSource.next(file);
            },
            maxfilesexceeded: function (file) {
                _this.maxFilesExceededSource.next(file);
            },
            processingmultiple: function (file) {
                _this.processingMultipleSource.next(file);
            },
            sendingmultiple: function (file, xhr, form) {
                _this.sendingMultipleSource.next({ file: file, xhr: xhr, form: form });
            },
            successmultiple: function (file, response) {
                _this.successMultipleSource.next({ file: file, response: response });
            },
            completemultiple: function (file) {
                _this.completeMultipleSource.next(file);
            },
            canceledmultiple: function (file) {
                _this.canceledMultipleSource.next(file);
            },
            totaluploadprogress: function (uploadProgress, totalBytes, totalBytesSent) {
                _this.totalUploadProgressSource.next({ uploadProgress: uploadProgress, totalBytes: totalBytes, totalBytesSent: totalBytesSent });
            },
        });
    };
    return DropzoneService;
}());
DropzoneService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpXsrfTokenExtractor */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpXsrfTokenExtractor */]) === "function" && _a || Object])
], DropzoneService);

var _a;
//# sourceMappingURL=dropzone.service.js.map

/***/ }),

/***/ "./src/app/ui/navbar/welcome/welcome.navbar.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = navbarBgAnimation;
/* harmony export (immutable) */ __webpack_exports__["c"] = navbarLogoAnimation;
/* harmony export (immutable) */ __webpack_exports__["b"] = navbarLinkAnimation;
/* harmony export (immutable) */ __webpack_exports__["d"] = navbarLowerLinkAnimation;
/* harmony export (immutable) */ __webpack_exports__["e"] = navbarNavAnimation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");

function navbarBgAnimation() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('animNavBg', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('above', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ background: 'rgba(45, 60, 65, 0.75)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('below', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ background: 'rgba(52, 51, 70, 1)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('above => below', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s ease-in')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('below => above', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s ease-in'))
    ]);
}
function navbarLogoAnimation() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('animNavLogo', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('above', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            transform: 'translateX(0)'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('below', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            transform: 'translateX(-200%)'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('above => below', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms 350ms ease-in')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('below => above', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in'))
    ]);
}
function navbarLinkAnimation() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('animNavLinks', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('above', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            transform: 'scale(1)'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('below', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            transform: 'scale(0)'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('above => below', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('350ms ease-in')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('below => above', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('350ms 500ms ease-in'))
    ]);
}
function navbarLowerLinkAnimation() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('animLowerLinks', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('above', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            opacity: '0'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('below', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            opacity: '1'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('above => below', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('550ms 1.75s ease-in')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('below => above', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('550ms ease-in'))
    ]);
}
function navbarNavAnimation() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('animNavNav', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('below', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ width: '0%' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms 1.75s ease-in')
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ width: '0%' }))
        ])
    ]);
}
//# sourceMappingURL=welcome.navbar.animations.js.map

/***/ }),

/***/ "./src/app/ui/navbar/welcome/welcome.navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav [@animNavBg]=\"location\"\n     #navbar\n     class=\"navbar fixed-top navbar-expand-md navbar-dark\" >\n  <button class=\"navbar-toggler\" type=\"button\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\" [@animNavLinks]=\"location\">\n        <a routerLink=\"/\" class=\"nav-link\">Home</a>\n      </li>\n      <li class=\"nav-item\" [@animNavLinks]=\"location\">\n        <a href=\"/features\" class=\"nav-link\">Features</a>\n      </li>\n      <li class=\"nav-item\" [@animNavLogo]=\"location\">\n        <a class=\"navbar-brand\" href=\"#\"><img src=\"/assets/img/logo-cloud.png\"></a>\n      </li>\n      <li class=\"nav-item\" [@animNavLinks]=\"location\">\n        <a routerLink=\"/welcome/pricing\" class=\"nav-link\">Pricing</a>\n      </li>\n      <li class=\"nav-item\" [@animNavLinks]=\"location\">\n        <a routerLink=\"/welcome/login\" class=\"nav-link\">Login</a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav above\" [@animNavNav]=\"location\" *ngIf=\"location === 'below'\">\n      <li class=\"nav-item active\" [@animLowerLinks]=\"location\">\n        <a routerLink=\"/\" class=\"nav-link\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item\" [@animLowerLinks]=\"location\">\n        <a href=\"/features\" class=\"nav-link\">Features</a>\n      </li>\n      <li class=\"nav-item\" [@animLowerLinks]=\"location\">\n        <a routerLink=\"/welcome/pricing\" class=\"nav-link\" >Pricing</a>\n      </li>\n      <li class=\"nav-item\" [@animLowerLinks]=\"location\">\n        <a routerLink=\"/welcome/login\" class=\"nav-link\">Login</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/ui/navbar/welcome/welcome.navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:100,400,700);", ""]);

// module
exports.push([module.i, ".navbar .navbar-nav {\n  width: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end; }\n  .navbar .navbar-nav.above {\n    width: 0; }\n  .navbar .navbar-nav .nav-item {\n    font-size: 1.75rem;\n    width: 20%;\n    text-align: center; }\n    .navbar .navbar-nav .nav-item.active .nav-link {\n      color: #468d9d;\n      font-weight: 700; }\n    .navbar .navbar-nav .nav-item .nav-link {\n      color: #93a3b1; }\n    .navbar .navbar-nav .nav-item .navbar-brand {\n      margin: 0 2rem; }\n\n.navbar.navbar-dark {\n  background: rgba(45, 60, 65, 0.55); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/ui/navbar/welcome/welcome.navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scroll_service__ = __webpack_require__("./src/app/services/scroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_manage_visibility_class__ = __webpack_require__("./src/app/ui/directives/manage-visibility.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_navbar_animations__ = __webpack_require__("./src/app/ui/navbar/welcome/welcome.navbar.animations.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomeNavbarComponent = (function (_super) {
    __extends(WelcomeNavbarComponent, _super);
    function WelcomeNavbarComponent(el, scroll) {
        var _this = _super.call(this, el, scroll) || this;
        _this.el = el;
        _this.scroll = scroll;
        _this.location = 'above';
        return _this;
    }
    WelcomeNavbarComponent.prototype.ngAfterViewInit = function () {
        this.elHeight = this.navbar.nativeElement.offsetHeight;
        var trigger = this.getTrigger();
        this.location = trigger < this.scroll.pos ? 'below' : 'above';
        _super.prototype.ngAfterViewInit.call(this);
    };
    WelcomeNavbarComponent.prototype.manageVisibility = function () {
        var trigger = this.getTrigger();
        if (!this.eivVisible && this.scroll.pos >= trigger) {
            this.eivVisible = true;
            this.location = 'below';
        }
        if (this.eivVisible && this.scroll.pos < trigger) {
            this.eivVisible = false;
            this.location = 'above';
        }
    };
    WelcomeNavbarComponent.prototype.getTrigger = function () {
        var winHeight = this.scroll.getWinHeight();
        return winHeight / 2;
    };
    return WelcomeNavbarComponent;
}(__WEBPACK_IMPORTED_MODULE_2__directives_manage_visibility_class__["a" /* ManageVisibility */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('navbar'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], WelcomeNavbarComponent.prototype, "navbar", void 0);
WelcomeNavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'welcome-navbar',
        template: __webpack_require__("./src/app/ui/navbar/welcome/welcome.navbar.component.html"),
        styles: [__webpack_require__("./src/app/ui/navbar/welcome/welcome.navbar.component.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__welcome_navbar_animations__["a" /* navbarBgAnimation */])(),
            Object(__WEBPACK_IMPORTED_MODULE_3__welcome_navbar_animations__["b" /* navbarLinkAnimation */])(),
            Object(__WEBPACK_IMPORTED_MODULE_3__welcome_navbar_animations__["c" /* navbarLogoAnimation */])(),
            Object(__WEBPACK_IMPORTED_MODULE_3__welcome_navbar_animations__["e" /* navbarNavAnimation */])(),
            Object(__WEBPACK_IMPORTED_MODULE_3__welcome_navbar_animations__["d" /* navbarLowerLinkAnimation */])()
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_scroll_service__["a" /* ScrollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_scroll_service__["a" /* ScrollService */]) === "function" && _c || Object])
], WelcomeNavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=welcome.navbar.component.js.map

/***/ }),

/***/ "./src/app/ui/pipes/bytes-transform.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BytesTransform; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BytesTransform = (function () {
    function BytesTransform() {
    }
    BytesTransform.prototype.transform = function (value, args) {
        if (value.changingThisBreaksApplicationSecurity !== undefined) {
            value = value.changingThisBreaksApplicationSecurity;
        }
        if (value == 0) {
            value = 0 + '/B';
        }
        else {
            if (value / 1000 < 1)
                value = value.toFixed(2) + '/B';
            if (value / 1000000 < 1)
                value = (value / 1000).toFixed(2) + '/KB';
            if (value / 1000000000 < 1)
                value = (value / 1000000).toFixed(2) + '/MB';
            else
                value = (value / 1000000000).toFixed(2) + '/GB';
        }
        return value;
    };
    return BytesTransform;
}());
BytesTransform = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'BytesTransform'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BytesTransform);

//# sourceMappingURL=bytes-transform.pipe.js.map

/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_tabs_card_tabs_component__ = __webpack_require__("./src/app/ui/card-tabs/card-tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_tabs_card_tab_component__ = __webpack_require__("./src/app/ui/card-tabs/card-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_el_in_view_directive__ = __webpack_require__("./src/app/ui/directives/el-in-view.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__anim_in_view_anim_in_view_component__ = __webpack_require__("./src/app/ui/anim-in-view/anim-in-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_parallax_parallax_directive__ = __webpack_require__("./src/app/ui/directives/parallax/parallax.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_welcome_welcome_navbar_component__ = __webpack_require__("./src/app/ui/navbar/welcome/welcome.navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_svg_round_progressbar__ = __webpack_require__("./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dropzone_dropzone_preview_component__ = __webpack_require__("./src/app/ui/dropzone/dropzone-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dropzone_dropzone_directive__ = __webpack_require__("./src/app/ui/dropzone/dropzone.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_bytes_transform_pipe__ = __webpack_require__("./src/app/ui/pipes/bytes-transform.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dropzone_dropzone_service__ = __webpack_require__("./src/app/ui/dropzone/dropzone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var UiModule = (function () {
    function UiModule(circleConfig) {
        this.circleConfig = circleConfig;
        circleConfig.setDefaults({
            color: '#8884FF',
            background: '#5C5D8D',
            responsive: true,
            rounded: true,
            animation: 'easeInOutQuad'
        });
    }
    return UiModule;
}());
UiModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular_svg_round_progressbar__["RoundProgressModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__card_tabs_card_tabs_component__["a" /* CardTabsComponent */],
            __WEBPACK_IMPORTED_MODULE_2__card_tabs_card_tab_component__["a" /* CardTabComponent */],
            __WEBPACK_IMPORTED_MODULE_4__directives_el_in_view_directive__["a" /* ElInViewDirective */],
            __WEBPACK_IMPORTED_MODULE_5__anim_in_view_anim_in_view_component__["a" /* AnimInViewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__directives_parallax_parallax_directive__["a" /* ParallaxDirective */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_welcome_welcome_navbar_component__["a" /* WelcomeNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dropzone_dropzone_directive__["a" /* DropzoneDirective */],
            __WEBPACK_IMPORTED_MODULE_10__dropzone_dropzone_preview_component__["a" /* DropzonePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_bytes_transform_pipe__["a" /* BytesTransform */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__card_tabs_card_tabs_component__["a" /* CardTabsComponent */],
            __WEBPACK_IMPORTED_MODULE_2__card_tabs_card_tab_component__["a" /* CardTabComponent */],
            __WEBPACK_IMPORTED_MODULE_4__directives_el_in_view_directive__["a" /* ElInViewDirective */],
            __WEBPACK_IMPORTED_MODULE_5__anim_in_view_anim_in_view_component__["a" /* AnimInViewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__directives_parallax_parallax_directive__["a" /* ParallaxDirective */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_welcome_welcome_navbar_component__["a" /* WelcomeNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9_angular_svg_round_progressbar__["RoundProgressModule"],
            __WEBPACK_IMPORTED_MODULE_11__dropzone_dropzone_directive__["a" /* DropzoneDirective */],
            __WEBPACK_IMPORTED_MODULE_10__dropzone_dropzone_preview_component__["a" /* DropzonePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_bytes_transform_pipe__["a" /* BytesTransform */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__dropzone_dropzone_service__["a" /* DropzoneService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_angular_svg_round_progressbar__["RoundProgressConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_angular_svg_round_progressbar__["RoundProgressConfig"]) === "function" && _a || Object])
], UiModule);

var _a;
//# sourceMappingURL=ui.module.js.map

/***/ }),

/***/ "./src/app/welcome/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n  <div class=\"logo-row\">\n    <div class=\"logo\"></div>\n  </div>\n</div>\n<section class=\"trans-section\">\n  <div class=\"row justify-content-around\">\n    <div class=\"col-5\">\n      <h1>Cloud Media <span class=\"next\">Storage & Player</span></h1>\n      <hr>\n      <p>\n        <span class=\"lead\">Poly MP</span> is a cloud media solution that provides a single, secure, location for storing,\n        sharing, and playing back all your files.\n      </p>\n      <p>\n        <span class=\"lead\">Storage</span> is offered in various quantities depending on your needs and is easily\n        scalable.\n      </p>\n      <p>\n        <span class=\"lead\">Media Player</span> capable of playing back virtually any media format is available with free registration.\n      </p>\n    </div>\n    <div class=\"col-5\">\n      <div class=\"infograph\" >\n        <img src=\"/assets/img/cloud-storage.png\">\n      </div>\n    </div>\n  </div>\n  <div class=\"connector\">\n    <div class=\"col-6\">\n      <object type=\"image/svg+xml\" data=\"/assets/img/gradient-connectors1.svg\"></object>\n    </div>\n  </div>\n  <div class=\"row justify-content-around\">\n    <div class=\"col-5\">\n      <div class=\"infograph\">\n        <img src=\"/assets/img/all-devices.png\">\n      </div>\n    </div>\n    <div class=\"col-5\">\n      <h1><span class=\"next\">Any Device</span> Anywhere</h1>\n      <hr>\n      <p>\n        <span class=\"lead\">Adaptive Streaming</span> technology is used to provide the smoothest quality audio\n        and video experience possible.\n      </p>\n      <p>\n        <span class=\"lead\">Cloud Servers</span> offer the ability to access your media at anytime from anywhere\n        with a network connection.\n      </p>\n      <p>\n        <span class=\"lead\">Social Sharing,</span> upload your videos and easily post them to your favorite social\n        network, letting Poly MP handle transcoding to the proper format.\n      </p>\n    </div>\n  </div>\n  <div class=\"row justify-content-around align-items-center\">\n    <div class=\"col-5\">\n      <h1>Register For <span>FREE</span></h1>\n      <hr>\n      <p>\n        Poly MP offers an easily scalable membership system that starts with its free membership. No credit card\n        required, simply fill in the email and password fields in the form to the right. Our free membership\n        includes the following:\n      </p>\n      <ul>\n        <li>2GB of Storage Space</li>\n        <li>Media Player</li>\n        <li>Customizable Dashboard</li>\n        <li>Easy Sharing</li>\n      </ul>\n      <p class=\"lead\">See our <a routerLink=\"/welcome/pricing\">pricing page</a> for more information</p>\n    </div>\n    <div class=\"col-5\">\n      <logister view=\"dual\"></logister>\n    </div>\n  </div>\n</section>\n\n<section class=\"red-space-section\" [parallax]=\"plaxHeaderConf\">\n  <div class=\"content\">\n    <anim-in-view classes=\"row mt-3 animated fadeInDown duration-15\">\n      <i class=\"material-icons md-7 md-brand\">cloud_done</i>\n      <div class=\"col\">\n        <h1><span>Safe</span> In The Cloud</h1>\n        <p>\n          Store and access all your media through our secure servers. We utilize a major cloud\n          computing server network, capable of almost constant up-time.\n        </p>\n      </div>\n    </anim-in-view>\n\n    <anim-in-view classes=\"row mt-3 animated fadeInDown duration-15\">\n      <i class=\"material-icons md-7 md-brand\">share</i>\n      <div class=\"col\">\n        <h1>Easily <span>Share</span> Media</h1>\n        <p>\n          Share your pictures and videos with your friends and family. With Poly MP,\n          you can upload any video format and seamlessly share it on your favorite social network or directly through your dashboard.\n        </p>\n      </div>\n    </anim-in-view>\n\n    <anim-in-view classes=\"row mt-3 animated fadeInDown duration-15\">\n      <i class=\"material-icons md-7 md-brand\">cloud_done</i>\n      <div class=\"col\">\n        <h1>Play Virtually <span>Anything</span></h1>\n        <p>\n          You can store any file type and playback virtually any media type. If you find a format\n          we don't currently support, please let us know.\n        </p>\n      </div>\n    </anim-in-view>\n  </div>\n</section>\n\n<section class=\"trans-section\">\n  <div class=\"centered-header\">\n    <h1 class=\"text-center\"><span>NOW</span><br>All Your Media</h1>\n  </div>\n  <div class=\"icon-row\" elInView (show)=\"fillIcons($event)\">\n    <div class=\"icon\" *ngFor=\"let icon of fileIcons\">\n      <img [src]=\"icon\" class=\"img-fluid\">\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"vertical-divider\"></div>\n  </div>\n  <div class=\"centered-header\">\n    <h1 class=\"text-center\"><span>ON</span><br>All Your Devices</h1>\n  </div>\n\n  <div class=\"icon-row\">\n    <div class=\"icon\" *ngFor=\"let icon of deviceIcons\">\n      <img [src]=\"icon\" class=\"img-fluid\">\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"vertical-divider\"></div>\n  </div>\n  <div class=\"centered-header\">\n    <h1 class=\"text-center\"><span>IN</span><br>One Place</h1>\n  </div>\n  <div class=\"logo-row short\">\n    <div class=\"logo\"></div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/welcome/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:100,400,700);", ""]);

// module
exports.push([module.i, ".logo-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n  height: 100vh;\n  margin: 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .logo-row.short {\n    height: 350px; }\n    .logo-row.short .logo {\n      background: url(\"/assets/img/logo.png\") center center no-repeat;\n      background-size: contain; }\n  .logo-row .logo {\n    width: 100%;\n    height: 100%; }\n    @media (max-width: 991px) {\n      .logo-row .logo {\n        background: url(\"/assets/img/logo.png\") center no-repeat;\n        background-size: contain; } }\n    @media (min-width: 768px) {\n      .logo-row .logo {\n        background: url(\"/assets/img/logo.svg\") center no-repeat; } }\n\n.icon-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .icon-row .icon {\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    margin-top: 2rem;\n    padding: 2.5rem;\n    flex: 0 0 50%;\n    max-width: 50%; }\n    @media (min-width: 576px) {\n      .icon-row .icon {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 33.33333333%;\n                flex: 0 0 33.33333333%;\n        max-width: 33.33333333%; } }\n    @media (min-width: 768px) {\n      .icon-row .icon {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 25%;\n                flex: 0 0 25%;\n        max-width: 25%; } }\n    @media (min-width: 992px) {\n      .icon-row .icon {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 16.66666667%;\n                flex: 0 0 16.66666667%;\n        max-width: 16.66666667%; } }\n\n.infograph {\n  padding: 2rem; }\n  .infograph img {\n    height: auto;\n    width: 100%; }\n\n.connector {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .connector object {\n    height: auto;\n    width: 100%;\n    opacity: .75; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/welcome/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
        this.fileIcons = [];
        this.deviceIcons = [];
        this.plaxHeaderConf = {
            startPosition: -750,
            ratio: .365,
            maxValue: null,
            minValue: null
        };
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.fillIcons = function () {
        var base = '/assets/img/icons/';
        var icons = ['aac.png', 'avi.png', 'flv.png', 'mkv.png', 'mov.png', 'mp3.png', 'mp4.png', 'mpeg.png', 'mpg.png', 'wma.png'];
        for (var _i = 0, icons_1 = icons; _i < icons_1.length; _i++) {
            var icon = icons_1[_i];
            this.fileIcons.push(base + icon);
        }
        icons = ['desktop.png', 'phone.png', 'tablet.png'];
        for (var _a = 0, icons_2 = icons; _a < icons_2.length; _a++) {
            var icon = icons_2[_a];
            this.deviceIcons.push(base + icon);
        }
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("./src/app/welcome/landing/landing.component.html"),
        styles: [__webpack_require__("./src/app/welcome/landing/landing.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "./src/app/welcome/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:100,400,700);", ""]);

// module
exports.push([module.i, ".login-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n  height: 80vh;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 84px 0 0 0; }\n  .login-row .login-col {\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    -ms-flex: 0 0 83.33333333%;\n        flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n    @media (min-width: 768px) {\n      .login-row .login-col {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 66.66666667%;\n                flex: 0 0 66.66666667%;\n        max-width: 66.66666667%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/welcome/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: "<div class=\"login-row\">\n      <div class=\"login-col\">\n          <logister view=\"login\"></logister>\n      </div>\n  </div> ",
        styles: [__webpack_require__("./src/app/welcome/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/welcome/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pricing works!\n</p>\n"

/***/ }),

/***/ "./src/app/welcome/pricing/pricing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/welcome/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    return PricingComponent;
}());
PricingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pricing',
        template: __webpack_require__("./src/app/welcome/pricing/pricing.component.html"),
        styles: [__webpack_require__("./src/app/welcome/pricing/pricing.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PricingComponent);

//# sourceMappingURL=pricing.component.js.map

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'welcome',
        template: __webpack_require__("./src/app/welcome/welcome.template.html"),
        styles: [__webpack_require__("./src/app/welcome/welcome.style.scss")]
    })
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("./src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pricing_pricing_component__ = __webpack_require__("./src/app/welcome/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_landing_component__ = __webpack_require__("./src/app/welcome/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/welcome/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__welcome_component__["a" /* WelcomeComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__landing_landing_component__["a" /* LandingComponent */] },
            { path: 'pricing', component: __WEBPACK_IMPORTED_MODULE_4__pricing_pricing_component__["a" /* PricingComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
        ]
    }
];
var WelcomeModule = (function () {
    function WelcomeModule() {
    }
    return WelcomeModule;
}());
WelcomeModule.routes = routes;
WelcomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__pricing_pricing_component__["a" /* PricingComponent */],
            __WEBPACK_IMPORTED_MODULE_5__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)
        ]
    })
], WelcomeModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ "./src/app/welcome/welcome.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:100,400,700);", ""]);

// module
exports.push([module.i, ".main-content {\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  min-height: 100vh;\n  padding: 0;\n  overflow-y: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/welcome/welcome.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-wrapper\">\n\n    <div class=\"container-fluid\">\n        <welcome-navbar></welcome-navbar>\n    </div>\n\n    <div class=\"main-content\">\n        <router-outlet></router-outlet>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/widget/latest-uploads/latest-uploads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestUploads; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_pipes_bytes_transform_pipe__ = __webpack_require__("./src/app/ui/pipes/bytes-transform.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LatestUploads = (function () {
    function LatestUploads(el) {
        this.el = el;
        this.latestOptions = {
            show: {
                reload: true,
                fullScreen: true,
                close: false
            },
            expanded: true,
            fullScreen: false,
            load: '/api/latest-uploads',
            title: 'Latest Uploads'
        };
        this.rows = [];
        this.columns = [
            { title: 'Name', name: 'name', sort: '' },
            { title: 'Size', name: 'size', sort: '', pipe: new __WEBPACK_IMPORTED_MODULE_1__ui_pipes_bytes_transform_pipe__["a" /* BytesTransform */]() },
            { title: 'Type', name: 'type', sort: '' },
            { title: 'Uploaded At.', name: 'created_at', sort: 'desc', pipe: new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]('short') }
        ];
        this.page = 1;
        this.itemsPerPage = 5;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            sorting: { columns: this.columns },
            filtering: { filterString: '' }
        };
        this.data = [];
        this.pagingConfigStyle = {
            'background': 'none',
            'border': 'none'
        };
    }
    LatestUploads.prototype.ngOnInit = function () {
        this.length = this.data.length;
    };
    LatestUploads.prototype.ngAfterViewInit = function () {
    };
    LatestUploads.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.data; }
        var start = (page - 1) * this.itemsPerPage;
        var end = start + this.itemsPerPage;
        this.rows = this.data.splice(start, end);
    };
    LatestUploads.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    LatestUploads.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        if (filteredData.length > 0) {
            this.columns.forEach(function (column) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].toString().match(config.filtering.filterString);
                });
            });
            if (!config.filtering) {
                return filteredData;
            }
            if (config.filtering.columnName) {
                return filteredData.filter(function (item) {
                    return item[config.filtering.columnName].match(_this.config.filtering.filterString);
                });
            }
            var tempArray_1 = [];
            filteredData.forEach(function (item) {
                var flag = false;
                _this.columns.forEach(function (column) {
                    if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                        flag = true;
                    }
                });
                if (flag) {
                    tempArray_1.push(item);
                }
            });
            filteredData = tempArray_1;
        }
        return filteredData;
    };
    LatestUploads.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.data, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.changePage(page, sortedData);
        this.length = sortedData.length;
    };
    LatestUploads.prototype.onLoad = function (latestUploads) {
        this.data = latestUploads.latestUploads;
        this.onChangeTable(this.config);
    };
    return LatestUploads;
}());
LatestUploads = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'latest-uploads',
        template: __webpack_require__("./src/app/widget/latest-uploads/latest-uploads.template.html"),
        styles: [__webpack_require__("./src/app/widget/latest-uploads/latest-uploads.style.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], LatestUploads);

var _a;
//# sourceMappingURL=latest-uploads.component.js.map

/***/ }),

/***/ "./src/app/widget/latest-uploads/latest-uploads.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/widget/latest-uploads/latest-uploads.template.html":
/***/ (function(module, exports) {

module.exports = "<widget [options]=\"latestOptions\" (loadCB)=\"onLoad($event)\">\n    <p class=\"search-filter\">\n        <input *ngIf=\"config.filtering\"\n               [ngTableFiltering]=\"config.filtering\"\n               (tableChanged)=\"onChangeTable(config)\"\n               class=\"form-control input-transparent\"\n               placeholder=\"Filter Table\" type=\"text\">\n    </p>\n    <ng-table [config]=\"config\"\n              (tableChanged)=\"onChangeTable(config)\"\n              [rows]=\"rows\" [columns]=\"columns\">\n    </ng-table>\n    <ngb-pagination class=\"pagination mt-1\"\n                    [(page)]=\"page\"\n                    [pageSize]=\"maxSize\"\n                    [collectionSize]=\"length\"\n                    [maxSize]=\"maxSize\"\n                    [boundaryLinks]=\"true\"\n                    (pageChange)=\"changePage($event)\">\n    </ngb-pagination>\n    <pre class=\"card card-block card-header\" [ngStyle]=\"pagingConfigStyle\">Page: {{page}} / {{numPages}}</pre>\n</widget>"

/***/ }),

/***/ "./src/app/widget/widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetComponent = (function () {
    function WidgetComponent(http) {
        this.http = http;
        this.loadCB = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.DEFAULTS = {
            show: {
                reload: true,
                fullScreen: true,
                close: true
            },
            expanded: true,
            fullScreen: false,
            load: false,
            title: 'Widget'
        };
    }
    ;
    WidgetComponent.prototype.ngOnInit = function () {
        this.settings = __assign({}, this.DEFAULTS, this.options);
        this.state = this.settings.expanded ? 'expanded' : 'collapsed';
    };
    WidgetComponent.prototype.ngAfterViewInit = function () {
        if (this.settings.load) {
            this.loadData(this.settings.load);
        }
    };
    WidgetComponent.prototype.changeState = function (state) {
        this.state = state;
    };
    WidgetComponent.prototype.expand = function () {
        this.state = 'expanded';
    };
    WidgetComponent.prototype.fullscreen = function () {
        this.state = 'fullscreen';
    };
    WidgetComponent.prototype.restore = function () {
        this.state = 'expanded';
    };
    WidgetComponent.prototype.loadData = function (load) {
        var _this = this;
        var timeout = 0;
        var url = '';
        if (load instanceof Array) {
            url = load[0];
            timeout = load[1];
        }
        else {
            url = load;
        }
        setTimeout(this.http.get(url)
            .subscribe(function (data) {
            _this.loadCB.emit(data);
        }), timeout);
    };
    return WidgetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
    __metadata("design:type", Object)
], WidgetComponent.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('loadCB'),
    __metadata("design:type", Object)
], WidgetComponent.prototype, "loadCB", void 0);
WidgetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'widget',
        template: __webpack_require__("./src/app/widget/widget.template.html"),
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('state', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    height: '*'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    height: 0,
                    overflow: 'hidden'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('fullscreen', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    'z-index': 10000,
                    'background-color': 'rgba(51,51,51,.95)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('350ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('* => fullscreen', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        transform: 'scale(0)'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('350ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1)' }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('fullscreen => expanded', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-out'),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    })
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], WidgetComponent);

var _a;
//# sourceMappingURL=widget.component.js.map

/***/ }),

/***/ "./src/app/widget/widget.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__latest_uploads_latest_uploads_component__ = __webpack_require__("./src/app/widget/latest-uploads/latest-uploads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_ng2_table_components_ng_table_module__ = __webpack_require__("./src/app/libs/ng2-table/components/ng-table-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widget_component__ = __webpack_require__("./src/app/widget/widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WidgetModule = (function () {
    function WidgetModule() {
    }
    return WidgetModule;
}());
WidgetModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__libs_ng2_table_components_ng_table_module__["a" /* Ng2TableModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__widget_component__["a" /* WidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_1__latest_uploads_latest_uploads_component__["a" /* LatestUploads */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__widget_component__["a" /* WidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_1__latest_uploads_latest_uploads_component__["a" /* LatestUploads */]
        ]
    })
], WidgetModule);

//# sourceMappingURL=widget.module.js.map

/***/ }),

/***/ "./src/app/widget/widget.template.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'card widget': true, expanded: state === 'expanded', collapsed: state === 'collapsed'}\"\n     [@state]=\"state\">\n    <div class=\"card-header\">\n        <div class=\"row justify-content-between align-items-center pl-1 pr-1\">\n            <h5>{{settings.title}}</h5>\n            <div class=\"widget-controls\">\n                <div *ngIf=\"settings.show.reload\"\n                     (click)=\"loadData(settings.load)\"\n                     class=\"widget-control\">\n                    <i class=\"material-icons\">refresh</i>\n                </div>\n                <div *ngIf=\"state === 'collapsed'\"\n                     (click)=\"changeState('expanded')\"\n                     class=\"widget-control\">\n                    <i class=\"material-icons\">add</i>\n                </div>\n                <div *ngIf=\"state === 'expanded' || state === 'fullscreen'\"\n                     (click)=\"changeState('collapsed')\"\n                     class=\"widget-control\">\n                    <i class=\"material-icons\">remove</i>\n                </div>\n                <div *ngIf=\"options.show.fullScreen\">\n                    <div *ngIf=\"state !== 'fullscreen'\"\n                         (click)=\"changeState('fullscreen')\"\n                         class=\"widget-control\">\n                        <i class=\"material-icons\">fullscreen</i>\n                    </div>\n                    <div *ngIf=\"state === 'fullscreen'\"\n                         (click)=\"changeState('expanded')\"\n                         class=\"widget-control\">\n                        <i class=\"material-icons\">fullscreen_exit</i>\n                    </div>\n                </div>\n                <div *ngIf=\"settings.show.close\" class=\"widget-control\">\n                    <i class=\"material-icons\">close</i>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map