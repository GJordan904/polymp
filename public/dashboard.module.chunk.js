webpackJsonp(["dashboard.module"],{

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
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

var Dashboard = (function () {
    function Dashboard() {
    }
    Dashboard.prototype.ngOnInit = function () {
        this.calcSidebar();
    };
    Dashboard.prototype.calcSidebar = function () {
        var width = window.innerWidth;
        this.sidebarOpen = width > 992;
    };
    return Dashboard;
}());
Dashboard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__("./src/app/dashboard/dashboard.template.html"),
        styles: [__webpack_require__("./src/app/dashboard/dashboard.style.scss")]
    }),
    __metadata("design:paramtypes", [])
], Dashboard);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("./src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/dashboard/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transfer_transfer_component__ = __webpack_require__("./src/app/dashboard/transfer/transfer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__files_files_component__ = __webpack_require__("./src/app/dashboard/files/files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_share_component__ = __webpack_require__("./src/app/dashboard/share/share.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transfer_transfer_resolver_service__ = __webpack_require__("./src/app/dashboard/transfer/transfer-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* Dashboard */], children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
            { path: 'files', component: __WEBPACK_IMPORTED_MODULE_6__files_files_component__["a" /* FilesComponent */] },
            { path: 'share', component: __WEBPACK_IMPORTED_MODULE_7__share_share_component__["a" /* ShareComponent */] },
            { path: 'transfer', component: __WEBPACK_IMPORTED_MODULE_5__transfer_transfer_component__["a" /* TransferComponent */], resolve: { stats: __WEBPACK_IMPORTED_MODULE_8__transfer_transfer_resolver_service__["a" /* TransferResolverService */] } },
            { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' }
        ]
    }
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule.routes = routes;
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__transfer_transfer_component__["a" /* TransferComponent */],
            __WEBPACK_IMPORTED_MODULE_6__files_files_component__["a" /* FilesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__share_share_component__["a" /* ShareComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__transfer_transfer_resolver_service__["a" /* TransferResolverService */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "./src/app/dashboard/dashboard.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:100,400,700);", ""]);

// module
exports.push([module.i, ".sidebar {\n  background: rgba(45, 60, 65, 0.75) 20% radial-gradient(farthest-side ellipse at 10% 0, rgba(45, 60, 65, 0.75) 20%, rgba(52, 51, 70, 0.75));\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 0;\n  height: calc(100vh - 57px);\n  transition: all 350ms ease-in-out;\n  padding: 0; }\n  .sidebar.open {\n    width: 80%; }\n    @media (min-width: 576px) {\n      .sidebar.open {\n        width: 40%; } }\n    @media (min-width: 992px) {\n      .sidebar.open {\n        width: 35%; } }\n    @media (min-width: 1200px) {\n      .sidebar.open {\n        width: 20%; } }\n    .sidebar.open .list-group {\n      width: 100%; }\n  .sidebar .list-group {\n    width: 0;\n    overflow: hidden;\n    transition: width 350ms ease-in; }\n    .sidebar .list-group .list-group-item {\n      background-color: transparent; }\n    .sidebar .list-group .list-group-item-action {\n      color: rgba(136, 132, 255, 0.5); }\n      .sidebar .list-group .list-group-item-action:hover {\n        background-color: rgba(0, 0, 0, 0.05); }\n\n.main-content {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding: 0;\n  transition: all 350ms ease-in-out; }\n  .main-content.open {\n    width: 20%; }\n    @media (min-width: 576px) {\n      .main-content.open {\n        width: 65%; } }\n    @media (min-width: 992px) {\n      .main-content.open {\n        width: 85%; } }\n\n.navbar {\n  padding: 0 1rem;\n  width: 100%; }\n  .navbar .navbar-brand {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n    .navbar .navbar-brand .menu-toggler {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      transition: all .35s ease-in-out; }\n      .navbar .navbar-brand .menu-toggler .line {\n        width: 2rem;\n        height: 2px;\n        border-radius: 0.3rem;\n        background-color: rgba(136, 132, 255, 0.5);\n        display: block;\n        margin: .15rem auto;\n        transition: all .35s ease-in-out; }\n      .navbar .navbar-brand .menu-toggler:hover {\n        cursor: pointer; }\n      .navbar .navbar-brand .menu-toggler.open {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg); }\n        .navbar .navbar-brand .menu-toggler.open .line:nth-child(1) {\n          width: 30px; }\n        .navbar .navbar-brand .menu-toggler.open .line:nth-child(2) {\n          width: 40px; }\n    .navbar .navbar-brand img {\n      height: 50px;\n      width: auto;\n      margin-left: 3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/dashboard/dashboard.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"navbar navbar-dark bg-dark\">\n      <div class=\"navbar-brand\">\n        <div [ngClass]=\"{'menu-toggler': true, open: sidebarOpen}\" (click)=\"sidebarOpen = !sidebarOpen\">\n          <span class=\"line\"></span>\n          <span class=\"line\"></span>\n          <span class=\"line\"></span>\n        </div>\n        <a class=\"d-inline-flex align-items-center\" routerLink=\"/dashboard\" href=\"#\">\n          <img src=\"/assets/img/logo-cloud.png\" class=\"d-inline-block\" alt=\"\">\n        </a>\n      </div>\n    </nav>\n  </div>\n  <div class=\"row flex-nowrap\">\n\n    <nav [ngClass]=\"{sidebar: true, open: sidebarOpen}\">\n      <div class=\"list-group\">\n        <a class=\"list-group-item list-group-item-action\" routerLink=\"home\" routerLinkActive=\"active\">Home</a>\n        <a class=\"list-group-item list-group-item-action\" routerLink=\"files\" routerLinkActive=\"active\">Files</a>\n        <a class=\"list-group-item list-group-item-action\" routerLink=\"share\" routerLinkActive=\"active\">Share</a>\n        <a class=\"list-group-item list-group-item-action\" routerLink=\"transfer\" routerLinkActive=\"active\">Transfer</a>\n      </div>\n    </nav>\n\n    <div [ngClass]=\"{'main-content': true, open: sidebarOpen}\">\n      <router-outlet></router-outlet>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/files/files.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  files works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/files/files.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/dashboard/files/files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesComponent; });
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

var FilesComponent = (function () {
    function FilesComponent() {
    }
    FilesComponent.prototype.ngOnInit = function () {
    };
    return FilesComponent;
}());
FilesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-files',
        template: __webpack_require__("./src/app/dashboard/files/files.component.html"),
        styles: [__webpack_require__("./src/app/dashboard/files/files.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FilesComponent);

//# sourceMappingURL=files.component.js.map

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-container\">\n  <div class=\"widget-row\">\n    <latest-uploads class=\"size third\"></latest-uploads>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/dashboard/home/home.component.html"),
        styles: [__webpack_require__("./src/app/dashboard/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/dashboard/share/share.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  share works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/share/share.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/dashboard/share/share.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareComponent; });
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

var ShareComponent = (function () {
    function ShareComponent() {
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    return ShareComponent;
}());
ShareComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-share',
        template: __webpack_require__("./src/app/dashboard/share/share.component.html"),
        styles: [__webpack_require__("./src/app/dashboard/share/share.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ShareComponent);

//# sourceMappingURL=share.component.js.map

/***/ }),

/***/ "./src/app/dashboard/transfer/transfer-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransferResolverService = (function () {
    function TransferResolverService(http, router) {
        this.http = http;
        this.router = router;
    }
    TransferResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        return this.http.get('/api/stats/transfer')
            .take(1)
            .map(function (stats) {
            if (stats) {
                return stats;
            }
            else {
                // TODO Handle more gracefully
                _this.router.navigate(['/dashboard/home']);
                return null;
            }
        });
    };
    return TransferResolverService;
}());
TransferResolverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TransferResolverService);

var _a, _b;
//# sourceMappingURL=transfer-resolver.service.js.map

/***/ }),

/***/ "./src/app/dashboard/transfer/transfer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-container\">\n    <div class=\"widget-row\">\n        <div class=\"size third\">\n            <div class=\"card widget\">\n                <div class=\"card-header\">\n                    <h4>Storage</h4>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"storage-label\">\n                        {{storage.used / storage.max | percent }}\n                        <div class=\"sub\">Used</div>\n                    </div>\n                    <round-progress [max]=\"storage.max\" [current]=\"storage.used\"></round-progress>\n                </div>\n            </div>\n        </div>\n        <div class=\"size two-third\">\n            <div id=\"dz\" class=\"card poly-dz\" dropzone>\n                <div class=\"inner\">\n                    <i class=\"material-icons md-6 md-blue\">cloud_upload</i>\n                    <div class=\"title\">\n                        Drop Files or Click <br>To Upload\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"widget-row\">\n        <div class=\"size full\">\n            <dropzone-previews></dropzone-previews>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/transfer/transfer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:100,400,700);", ""]);

// module
exports.push([module.i, ".storage-label {\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  -webkit-transform: translate(50%, -25%);\n          transform: translate(50%, -25%);\n  text-align: center;\n  font-size: 3.5rem; }\n  .storage-label .sub {\n    font-size: 1.25rem;\n    color: #468d9d; }\n\n.poly-dz {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: rgba(45, 60, 65, 0.35) 20% radial-gradient(farthest-side ellipse at 10% 0, rgba(45, 60, 65, 0.35) 20%, rgba(52, 51, 70, 0.35));\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n  .poly-dz:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n  .poly-dz .inner {\n    text-align: center;\n    border: 1px dashed #8884FF; }\n    .poly-dz .inner .title {\n      font-size: 2.75rem; }\n      .poly-dz .inner .title .sub {\n        font-size: 1.25rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/dashboard/transfer/transfer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransferComponent = (function () {
    function TransferComponent(route) {
        this.route = route;
        this.storage = {
            max: 0,
            used: 0,
        };
    }
    TransferComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            var stats = data.stats;
            _this.storage.max = stats.storage.used + stats.storage.remaining;
            _this.storage.used = stats.storage.used;
        });
    };
    return TransferComponent;
}());
TransferComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-transfer',
        template: __webpack_require__("./src/app/dashboard/transfer/transfer.component.html"),
        styles: [__webpack_require__("./src/app/dashboard/transfer/transfer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], TransferComponent);

var _a;
//# sourceMappingURL=transfer.component.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map