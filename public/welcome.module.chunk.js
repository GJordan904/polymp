webpackJsonp(["welcome.module"],{

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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


// module
exports.push([module.i, "", ""]);

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: "<div class=\"row justify-content-center align-items-center h-100\">\n      <logister view=\"login\"></logister>\n  </div> ",
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__pricing_pricing_component__["a" /* PricingComponent */],
            __WEBPACK_IMPORTED_MODULE_5__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)
        ]
    })
], WelcomeModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ "./src/app/welcome/welcome.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content {\n  min-height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/welcome/welcome.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-wrapper\">\n\n    <div class=\"main-nav\">\n        <welcome-navbar></welcome-navbar>\n    </div>\n\n    <div class=\"main-content\">\n        <router-outlet></router-outlet>\n    </div>\n\n</div>"

/***/ })

});
//# sourceMappingURL=welcome.module.chunk.js.map