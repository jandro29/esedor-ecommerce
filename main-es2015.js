(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ally.ts":
/*!*************************!*\
  !*** ./src/app/ally.ts ***!
  \*************************/
/*! exports provided: Ally */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ally", function() { return Ally; });
class Ally {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_gracias_gracias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/gracias/gracias.component */ "./src/app/pages/gracias/gracias.component.ts");






const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'gracias', component: _pages_gracias_gracias_component__WEBPACK_IMPORTED_MODULE_3__["GraciasComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-google-tag-manager */ "./node_modules/angular-google-tag-manager/__ivy_ngcc__/fesm2015/angular-google-tag-manager.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whatsapp/whatsapp.component */ "./src/app/whatsapp/whatsapp.component.ts");





class AppComponent {
    constructor(gtmService) {
        this.gtmService = gtmService;
        this.title = 'frontend-angular-test';
    }
    ngOnInit() {
        this.gtmService.addGtmToDom();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_1__["GoogleTagManagerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-whatsapp");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_3__["WhatsappComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_1__["GoogleTagManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-parallax-scroll */ "./node_modules/ngx-parallax-scroll/__ivy_ngcc__/fesm2015/ngx-parallax-scroll.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-google-analytics */ "./node_modules/ngx-google-analytics/__ivy_ngcc__/fesm2015/ngx-google-analytics.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/hero/hero.component */ "./src/app/components/hero/hero.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ "./src/app/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_allies_allies_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/allies/allies.component */ "./src/app/components/allies/allies.component.ts");
/* harmony import */ var _components_formula_steps_steps_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/formula/steps/steps.component */ "./src/app/components/formula/steps/steps.component.ts");
/* harmony import */ var _components_formula_steps_slider_steps_slider_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/formula/steps-slider/steps-slider.component */ "./src/app/components/formula/steps-slider/steps-slider.component.ts");
/* harmony import */ var _components_formula_formula_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/formula/formula.component */ "./src/app/components/formula/formula.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_gracias_gracias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/gracias/gracias.component */ "./src/app/pages/gracias/gracias.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_hero_footer_hero_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/hero-footer/hero-footer.component */ "./src/app/components/hero-footer/hero-footer.component.ts");
/* harmony import */ var _components_selected_project_selected_project_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/selected-project/selected-project.component */ "./src/app/components/selected-project/selected-project.component.ts");
/* harmony import */ var _components_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/contact-modal/contact-modal.component */ "./src/app/components/contact-modal/contact-modal.component.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal.service.ts");
/* harmony import */ var _components_steps_slider_test_steps_slider_test_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/steps-slider-test/steps-slider-test.component */ "./src/app/components/steps-slider-test/steps-slider-test.component.ts");
/* harmony import */ var _components_comercio_comercio_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/comercio/comercio.component */ "./src/app/components/comercio/comercio.component.ts");
/* harmony import */ var _whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./whatsapp/whatsapp.component */ "./src/app/whatsapp/whatsapp.component.ts");































const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _modal_service__WEBPACK_IMPORTED_MODULE_24__["ModalService"],
        {
            provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SWIPER_CONFIG"],
            useValue: DEFAULT_SWIPER_CONFIG,
        },
        {
            provide: 'googleTagManagerId',
            useValue: 'GTM-TT62JBS'
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__["NgxParallaxScrollModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"],
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__["NgxGoogleAnalyticsModule"].forRoot('UA-133445489-1')
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_11__["HeroComponent"],
        _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
        _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_13__["ContactFormComponent"],
        _components_allies_allies_component__WEBPACK_IMPORTED_MODULE_14__["AlliesComponent"],
        _components_formula_steps_steps_component__WEBPACK_IMPORTED_MODULE_15__["StepsComponent"],
        _components_formula_steps_slider_steps_slider_component__WEBPACK_IMPORTED_MODULE_16__["StepsSliderComponent"],
        _components_formula_formula_component__WEBPACK_IMPORTED_MODULE_17__["FormulaComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
        _pages_gracias_gracias_component__WEBPACK_IMPORTED_MODULE_19__["GraciasComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
        _components_hero_footer_hero_footer_component__WEBPACK_IMPORTED_MODULE_21__["HeroFooterComponent"],
        _components_selected_project_selected_project_component__WEBPACK_IMPORTED_MODULE_22__["SelectedProjectComponent"],
        _components_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_23__["ContactModalComponent"],
        _components_steps_slider_test_steps_slider_test_component__WEBPACK_IMPORTED_MODULE_25__["StepsSliderTestComponent"],
        _components_comercio_comercio_component__WEBPACK_IMPORTED_MODULE_26__["ComercioComponent"],
        _whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_27__["WhatsappComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__["NgxParallaxScrollModule"],
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"], ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__["NgxGoogleAnalyticsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_11__["HeroComponent"],
                    _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                    _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_13__["ContactFormComponent"],
                    _components_allies_allies_component__WEBPACK_IMPORTED_MODULE_14__["AlliesComponent"],
                    _components_formula_steps_steps_component__WEBPACK_IMPORTED_MODULE_15__["StepsComponent"],
                    _components_formula_steps_slider_steps_slider_component__WEBPACK_IMPORTED_MODULE_16__["StepsSliderComponent"],
                    _components_formula_formula_component__WEBPACK_IMPORTED_MODULE_17__["FormulaComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                    _pages_gracias_gracias_component__WEBPACK_IMPORTED_MODULE_19__["GraciasComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                    _components_hero_footer_hero_footer_component__WEBPACK_IMPORTED_MODULE_21__["HeroFooterComponent"],
                    _components_selected_project_selected_project_component__WEBPACK_IMPORTED_MODULE_22__["SelectedProjectComponent"],
                    _components_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_23__["ContactModalComponent"],
                    _components_steps_slider_test_steps_slider_test_component__WEBPACK_IMPORTED_MODULE_25__["StepsSliderTestComponent"],
                    _components_comercio_comercio_component__WEBPACK_IMPORTED_MODULE_26__["ComercioComponent"],
                    _whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_27__["WhatsappComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__["NgxParallaxScrollModule"],
                    ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"],
                    ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__["NgxGoogleAnalyticsModule"].forRoot('UA-133445489-1')
                ],
                providers: [
                    _modal_service__WEBPACK_IMPORTED_MODULE_24__["ModalService"],
                    {
                        provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SWIPER_CONFIG"],
                        useValue: DEFAULT_SWIPER_CONFIG,
                    },
                    {
                        provide: 'googleTagManagerId',
                        useValue: 'GTM-TT62JBS'
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/allies/allies.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/allies/allies.component.ts ***!
  \*******************************************************/
/*! exports provided: AlliesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlliesComponent", function() { return AlliesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ally */ "./src/app/ally.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AlliesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ally_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imagePath + ally_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ally_r1.name)("title", ally_r1.name);
} }
class AlliesComponent {
    constructor() {
        this.imagePath = 'assets/images/';
        this.allies = [
            new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('Niubiz', 'niubiz.svg'),
            new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('Toulou', 'toulou.svg'),
            new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('CCL', 'ccl.svg'),
            new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('Urbaner', 'urbaner.svg'),
            new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('MapIt', 'map-it.svg'),
            new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('infomatica', 'infomatica.svg'),
            new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('Svitzer', 'svitzer.svg'),
            new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('dohwa', 'dohwa.svg')
        ];
    }
    ngOnInit() {
    }
}
AlliesComponent.ɵfac = function AlliesComponent_Factory(t) { return new (t || AlliesComponent)(); };
AlliesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlliesComponent, selectors: [["app-allies"]], decls: 14, vars: 1, consts: [["id", "alliesSection", 1, "allies", "mb-12"], [1, "container", "mx-auto"], [1, "flex", "flex-wrap", "items-center"], [1, "w-full", "md:hidden", "mx-auto", "px-4", "mb-12", "md:mb-0"], [1, "text-2xl", "leading-tight", "font-light", "text-center"], [1, "w-full", "md:w-8/12", "lg:w-7/12", "px-6"], [1, "flex", "flex-wrap"], ["class", "w-1/2 sm:w-1/3", 4, "ngFor", "ngForOf"], [1, "w-full", "md:w-3/12", "mx-auto", "px-4", "hidden", "md:block"], [1, "text-4xl", "lg:text-5xl", "leading-tight", "font-light", "text-left"], [1, "w-1/2", "sm:w-1/3"], [1, "ally-item"], [1, "ally-item__image", 3, "src", "alt", "title"]], template: function AlliesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nuestros aliados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AlliesComponent_div_8_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nuestros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "aliados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".ally-item[_ngcontent-%COMP%] {\n  height: 33.33vh;\n  max-height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1rem;\n}\n@media screen and (min-width: 768px) {\n  .ally-item[_ngcontent-%COMP%] {\n    max-height: 200px;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .ally-item[_ngcontent-%COMP%] {\n    max-height: 245px;\n  }\n}\n.ally-item__image[_ngcontent-%COMP%] {\n  max-width: 120px;\n  max-height: 120px;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGxpZXMvQzpcXFVzZXJzXFxqY2FsZFxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXGVzZWRvci1lY29tbWVyY2VcXGVzZWRvci1lY29tbWVyY2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsbGllc1xcYWxsaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbGllcy9hbGxpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDRjtBREFFO0VBUEY7SUFRSSxpQkFBQTtFQ0dGO0FBQ0Y7QURGRTtFQVZGO0lBV0ksaUJBQUE7RUNLRjtBQUNGO0FESkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsaWVzL2FsbGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGx5LWl0ZW0ge1xuICBoZWlnaHQ6IDMzLjMzdmg7XG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIG1heC1oZWlnaHQ6IDI0NXB4O1xuICB9XG4gICZfX2ltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxyXG4iLCIuYWxseS1pdGVtIHtcbiAgaGVpZ2h0OiAzMy4zM3ZoO1xuICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5hbGx5LWl0ZW0ge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFsbHktaXRlbSB7XG4gICAgbWF4LWhlaWdodDogMjQ1cHg7XG4gIH1cbn1cbi5hbGx5LWl0ZW1fX2ltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlliesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-allies',
                templateUrl: './allies.component.html',
                styleUrls: ['./allies.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/comercio/comercio.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/comercio/comercio.component.ts ***!
  \***********************************************************/
/*! exports provided: ComercioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercioComponent", function() { return ComercioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ComercioComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r2.description);
} }
function ComercioComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r3.description, " ");
} }
class ComercioComponent {
    constructor() {
        this.config = {
            slidesPerView: 'auto',
            navigation: false,
            pagination: false
        };
        this.services = [
            {
                title: 'Automatiza',
                description: 'Ahorra tiempo conectando procesos de forma funcional y eficaz de forma automática.'
            },
            {
                title: 'Escala',
                description: 'Haz crecer tu negocio sin límites gracias a procesos optimizados.'
            },
            {
                title: 'Optimiza',
                description: 'Mejora cada parte de tu tienda para obtener mejores resultados.'
            },
            {
                title: 'Controla',
                description: 'Toma decisiones inteligentes con métricas en tiempo real.'
            }
        ];
    }
    ngOnInit() { }
}
ComercioComponent.ɵfac = function ComercioComponent_Factory(t) { return new (t || ComercioComponent)(); };
ComercioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComercioComponent, selectors: [["app-comercio"]], decls: 21, vars: 3, consts: [[1, "block", "lg:hidden"], [1, "flex", "pt-16", "pb-12"], [1, "container", "m-auto"], [1, "w-full", "px-4", "mb-12"], [1, "flex", "text-[12px]", "text-center", "leading-tight", "font-light", "justify-center"], [1, "swiper-container", 3, "swiper"], [1, "swiper-wrapper", "pb-8"], ["class", "w-1/3 flex swiper-slide", 4, "ngFor", "ngForOf"], [1, "section-comercio", "hidden", "md:block", "pt-20"], [1, "container", "mx-auto"], [1, "flex", "w-full", "px-4", "md:px-6", "mb-16", "justify-center"], [1, "flex", "text-black", "text-[12px]", "leading-tight", "font-light", "justify-center"], [1, "mt-[40px]"], [1, "flex", "text-black", "text-2xl", "lg:text-5xl", "leading-tight", "font-bold", "justify-center"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-4", "gap-8", "mt-6"], ["class", "rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105", 4, "ngFor", "ngForOf"], [1, "w-1/3", "flex", "swiper-slide"], [1, "service-responsive-item"], [1, "service-responsive-item__title"], [1, "text-center", "text-xl", "font-bold"], [1, "service-responsive-item__content"], [1, "text-black", "mb-8", "text-[0.5rem]"], [1, "rounded-lg", "shadow-lg", "overflow-hidden", "transform", "transition", "hover:scale-105"], [1, "bg-black", "py-6", "text-center"], [1, "text-white", "text-lg", "font-semibold"], [1, "bg-white", "px-4", "py-6", "text-center", "border-t-4", "border-blue-500", "shadow-[0_8px_30px_rgba(0,0,255,0.15)]"], [1, "text-sm", "text-gray-700", "leading-relaxed"]], template: function ComercioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "COMERCIO ELECTR\u00D3NICO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ComercioComponent_div_8_Template, 8, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "COMERCIO ELECTRONICO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Escala sin l\u00EDmites, tu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " tienda crece contigo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ComercioComponent_div_20_Template, 7, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
    } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@charset \"UTF-8\";\n.section-comercio[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n}\n.swiper-slide[_ngcontent-%COMP%]:not(.swiper-slide-active)   .service-responsive-item[_ngcontent-%COMP%] {\n  transform: scale(0.75);\n  opacity: 0;\n}\n.service-responsive-item[_ngcontent-%COMP%] {\n  width: 250px;\n  margin: auto;\n  border-radius: 5px;\n  transition: all 0.3s;\n  position: relative;\n}\n.service-responsive-item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--blue);\n  display: block;\n  width: 286px;\n  height: 330px;\n  position: absolute;\n  left: -18px;\n  top: 25px;\n  z-index: 0;\n  border-radius: 5px;\n}\n.service-responsive-item__title[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  height: 156px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1.5rem;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  position: relative;\n  z-index: 1;\n}\n.service-responsive-item__content[_ngcontent-%COMP%] {\n  height: 265px;\n  padding: 1rem 1.5rem;\n  text-align: center;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 10px 20px rgba(0, 41, 255, 0.4);\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  position: relative;\n  background-color: #fff;\n  z-index: 1;\n}\n.swiper-slide[_ngcontent-%COMP%]:not(.swiper-slide-active)   .service-responsive-item[_ngcontent-%COMP%] {\n  transform: scale(0.75);\n  opacity: 0;\n}\n.servi-item__image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  border: 2px solid red;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21lcmNpby9jb21lcmNpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb21lcmNpby9DOlxcVXNlcnNcXGpjYWxkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZXNlZG9yLWVjb21tZXJjZVxcZXNlZG9yLWVjb21tZXJjZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29tZXJjaW9cXGNvbWVyY2lvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FERUY7QUNFRTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtBRENKO0FDR0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBREFGO0FDQ0U7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FEQ0o7QUNDRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRENKO0FDQ0U7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FEQ0o7QUNJRTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtBRERKO0FDS0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUF1QixtQ0FBQTtBRER6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tZXJjaW8vY29tZXJjaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2VjdGlvbi1jb21lcmNpbyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zd2lwZXItc2xpZGU6bm90KC5zd2lwZXItc2xpZGUtYWN0aXZlKSAuc2VydmljZS1yZXNwb25zaXZlLWl0ZW0ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uc2VydmljZS1yZXNwb25zaXZlLWl0ZW0ge1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlcnZpY2UtcmVzcG9uc2l2ZS1pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI4NnB4O1xuICBoZWlnaHQ6IDMzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xOHB4O1xuICB0b3A6IDI1cHg7XG4gIHotaW5kZXg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5zZXJ2aWNlLXJlc3BvbnNpdmUtaXRlbV9fdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxNTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5zZXJ2aWNlLXJlc3BvbnNpdmUtaXRlbV9fY29udGVudCB7XG4gIGhlaWdodDogMjY1cHg7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCA0MSwgMjU1LCAwLjQpO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTtcbn1cblxuLnN3aXBlci1zbGlkZTpub3QoLnN3aXBlci1zbGlkZS1hY3RpdmUpIC5zZXJ2aWNlLXJlc3BvbnNpdmUtaXRlbSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5zZXJ2aS1pdGVtX19pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAvKiBwYXJhIHF1ZSB2ZWFzIHNpIGVzdMOhIGNhcmdhbmRvICovXG59IiwiLnNlY3Rpb24tY29tZXJjaW8ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc3dpcGVyLXNsaWRlOm5vdCguc3dpcGVyLXNsaWRlLWFjdGl2ZSkge1xuICAuc2VydmljZS1yZXNwb25zaXZlLWl0ZW0ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjc1KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5zZXJ2aWNlLXJlc3BvbnNpdmUtaXRlbSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjg2cHg7XG4gICAgaGVpZ2h0OiAzMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTE4cHg7XG4gICAgdG9wOiAyNXB4O1xuICAgIHotaW5kZXg6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gICZfX3RpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMTU2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gICZfX2NvbnRlbnQge1xuICAgIGhlaWdodDogMjY1cHg7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDQxLCAyNTUsIDAuNCk7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuXG4uc3dpcGVyLXNsaWRlOm5vdCguc3dpcGVyLXNsaWRlLWFjdGl2ZSkge1xuICAuc2VydmljZS1yZXNwb25zaXZlLWl0ZW0ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjc1KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5zZXJ2aS1pdGVtX19pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAycHggc29saWQgcmVkOyAvKiBwYXJhIHF1ZSB2ZWFzIHNpIGVzdMOhIGNhcmdhbmRvICovXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComercioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comercio',
                templateUrl: './comercio.component.html',
                styleUrls: ['./comercio.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contact-form/contact-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-form/contact-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function ContactFormComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
const _c0 = function () { return [1, 2, 3, 4]; };
function ContactFormComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactFormComponent_div_26_div_1_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function ContactFormComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CONVERSEMOS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class ContactFormComponent {
    constructor(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.isLoading = false;
        this.bgPrimary = false;
        this.captcha = '';
        this.contactForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
                ]],
            phone: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9 ]{7,11}")
                ]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    resolved(captchaResponse) {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
        this.captcha = captchaResponse;
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.isLoading || this.captcha === '')
            return;
        this.isLoading = true;
        const formData = Object.assign(Object.assign({}, this.contactForm.value), { captcha: this.captcha });
        this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].contactFormApi, formData)
            .subscribe(data => {
            console.log('data: ', data);
            this.isLoading = false;
            return this.router.navigate(['/gracias']);
        }, error => {
            console.error('error', error);
            console.error('error resp', error.response);
            this.isLoading = false;
            return alert('No se pudo procesar el formulario');
        });
    }
    get name() { return this.contactForm.get('name'); }
    get email() { return this.contactForm.get('email'); }
    get phone() { return this.contactForm.get('phone'); }
    get description() { return this.contactForm.get('description'); }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], inputs: { bgPrimary: "bgPrimary" }, decls: 28, vars: 18, consts: [[1, "main-form"], [3, "formGroup", "ngSubmit"], [1, "main-form__content"], [1, "form-control", "mb-4"], ["for", "name", 1, "form-label-container"], [1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-input"], ["for", "correo", 1, "form-label-container"], ["type", "text", "id", "correo", "formControlName", "email", 1, "form-input"], ["for", "celular", 1, "form-label-container"], ["type", "tel", "id", "celular", "formControlName", "phone", 1, "form-input"], ["for", "consulta", 1, "form-label-container"], ["type", "text", "id", "consulta", "formControlName", "description", 1, "form-input"], [1, "form-captcha"], ["siteKey", "6LfNfKYZAAAAACappGs0nm7mzAkL_HwIc8KXWu4B", 3, "resolved"], ["type", "submit", "id", "desktopHero-contactForm", 1, "btn", "btn-primary", "main-form__submit", "flex", "items-center", "justify-center", 2, "height", "44px", 3, "disabled"], ["class", "lds-ellipsis", 4, "ngIf"], [4, "ngIf"], [1, "lds-ellipsis"], [4, "ngFor", "ngForOf"], ["src", "assets/images/right-arrow-white.svg", 1, "ml-4", 2, "height", "16px"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Celular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cu\u00E9ntanos sobre el proyecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "re-captcha", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resolved", function ContactFormComponent_Template_re_captcha_resolved_24_listener($event) { return ctx.resolved($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ContactFormComponent_div_26_Template, 2, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ContactFormComponent_ng_container_27_Template, 3, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx.bgPrimary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.name.invalid ? "" : "is-valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isLoading ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.email.invalid ? "" : "is-valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isLoading ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.phone.invalid ? "" : "is-valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isLoading ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.description.invalid ? "" : "is-valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isLoading ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".main-form[_ngcontent-%COMP%] {\n  width: 280px;\n}\n@media screen and (min-width: 768px) {\n  .main-form[_ngcontent-%COMP%] {\n    width: 270px;\n  }\n}\n.main-form__content[_ngcontent-%COMP%] {\n  background-color: #000;\n  border-top-right-radius: 6px;\n  border-top-left-radius: 6px;\n  padding: 1rem;\n  padding-bottom: 0;\n}\n.main-form__content.primary[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n}\n.main-form__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.main-form__submit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.main-form__submit[_ngcontent-%COMP%]:hover:enabled   img[_ngcontent-%COMP%] {\n  transform: translateX(10px);\n}\n.form-captcha[_ngcontent-%COMP%] {\n  transform-origin: left;\n  transform: scale(0.82) translateY(-10px);\n}\n@media screen and (min-width: 768px) {\n  .form-captcha[_ngcontent-%COMP%] {\n    transform: scale(0.785) translateY(-10px);\n  }\n}\n.form-control[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top-right-radius: 0.3rem;\n  border-top-left-radius: 0.3rem;\n  width: 100%;\n}\n.form-label-container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  padding: 0 0.5rem;\n  padding-right: 2rem;\n}\n.form-label-container.is-valid[_ngcontent-%COMP%]::before {\n  content: url('check-icon.png');\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 10px;\n}\n.form-label[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n  font-weight: 300;\n  font-size: 0.8rem;\n  display: block;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #A0A0A0;\n  font-size: 0.85rem;\n  padding-bottom: 0.4rem;\n}\n.form-input[_ngcontent-%COMP%]:disabled {\n  background-color: #fff;\n  color: #cecdcd;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.lds-ellipsis[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 74px;\n  height: 44px;\n}\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 17px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n  animation: lds-ellipsis1 0.6s infinite;\n}\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n  animation: lds-ellipsis3 0.6s infinite;\n}\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LWZvcm0vQzpcXFVzZXJzXFxqY2FsZFxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXGVzZWRvci1lY29tbWVyY2VcXGVzZWRvci1lY29tbWVyY2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRhY3QtZm9ybVxcY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURBRTtFQUZGO0lBR0ksWUFBQTtFQ0dGO0FBQ0Y7QURGRTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0lKO0FESEk7RUFDRSw2QkFBQTtBQ0tOO0FERkU7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ0lKO0FESEk7RUFDRSwwQkFBQTtBQ0tOO0FERk07RUFDRSwyQkFBQTtBQ0lSO0FERUE7RUFDRSxzQkFBQTtFQUNBLHdDQUFBO0FDQ0Y7QURBRTtFQUhGO0lBSUkseUNBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDR0Y7QURBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDR0Y7QURESTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDR047QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0FDRUo7QURBRTtFQUNFLGFBQUE7QUNFSjtBRElBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0VBQ1EsbURBQUE7QUNEVjtBRElBO0VBQ0UsU0FBQTtFQUNBLDhDQUFBO0VBQ1Esc0NBQUE7QUNEVjtBRElBO0VBQ0UsU0FBQTtFQUNBLDhDQUFBO0VBQ1Esc0NBQUE7QUNEVjtBRElBO0VBQ0UsVUFBQTtFQUNBLDhDQUFBO0VBQ1Esc0NBQUE7QUNEVjtBRElBO0VBQ0UsVUFBQTtFQUNBLDhDQUFBO0VBQ1Esc0NBQUE7QUNEVjtBRElBO0VBQ0U7SUFDRSxtQkFBQTtFQ0RGO0VESUE7SUFDRSxtQkFBQTtFQ0ZGO0FBQ0Y7QURLQTtFQUNFO0lBQ0UsbUJBQUE7RUNIRjtFRE1BO0lBQ0UsbUJBQUE7RUNKRjtBQUNGO0FET0E7RUFDRTtJQUNFLG1CQUFBO0VDTEY7RURRQTtJQUNFLG1CQUFBO0VDTkY7QUFDRjtBRFNBO0VBQ0U7SUFDRSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSxtQkFBQTtFQ1JGO0FBQ0Y7QURXQTtFQUNFO0lBQ0UsMEJBQUE7RUNURjtFRFlBO0lBQ0UsNkJBQUE7RUNWRjtBQUNGO0FEYUE7RUFDRTtJQUNFLDBCQUFBO0VDWEY7RURjQTtJQUNFLDZCQUFBO0VDWkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWZvcm0ge1xuICB3aWR0aDogMjgwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDI3MHB4O1xuICB9XG4gICZfX2NvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAmLnByaW1hcnkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgfVxuICB9XG4gICZfX3N1Ym1pdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBpbWcge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgfVxuICAgICY6aG92ZXI6ZW5hYmxlZCB7XG4gICAgICBpbWcge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLWNhcHRjaGEge1xuICB0cmFuc2Zvcm0tb3JpZ2luOmxlZnQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoLjgyKSB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43ODUpIHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjNyZW07XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4zcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tbGFiZWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICYuaXMtdmFsaWQge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2hlY2staWNvbi5wbmcnKTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgY29sb3I6ICNBMEEwQTA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogLjhyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI0EwQTBBMDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjRyZW07XG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICNjZWNkY2Q7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuXG4vLyBMb2FkZXJcblxuLmxkcy1lbGxpcHNpcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzRweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxN3B4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcbn1cblxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgbGVmdDogOHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xuICAgICAgICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiA4cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG5cbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDMycHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG5cbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XG4gIGxlZnQ6IDU2cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcbiAgfVxufVxyXG4iLCIubWFpbi1mb3JtIHtcbiAgd2lkdGg6IDI4MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tZm9ybSB7XG4gICAgd2lkdGg6IDI3MHB4O1xuICB9XG59XG4ubWFpbi1mb3JtX19jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5tYWluLWZvcm1fX2NvbnRlbnQucHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xufVxuLm1haW4tZm9ybV9fc3VibWl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xufVxuLm1haW4tZm9ybV9fc3VibWl0IGltZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuLm1haW4tZm9ybV9fc3VibWl0OmhvdmVyOmVuYWJsZWQgaW1nIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xufVxuXG4uZm9ybS1jYXB0Y2hhIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgyKSB0cmFuc2xhdGVZKC0xMHB4KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWNhcHRjaGEge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43ODUpIHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjNyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1sYWJlbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG59XG4uZm9ybS1sYWJlbC1jb250YWluZXIuaXMtdmFsaWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2hlY2staWNvbi5wbmdcIik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgY29sb3I6ICNBMEEwQTA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcm0taW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNBMEEwQTA7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcbn1cbi5mb3JtLWlucHV0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNjZWNkY2Q7XG59XG4uZm9ybS1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5sZHMtZWxsaXBzaXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDc0cHg7XG4gIGhlaWdodDogNDRweDtcbn1cblxuLmxkcy1lbGxpcHNpcyBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTdweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiA4cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xuICBsZWZ0OiAzMnB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cblxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTZweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-form',
                templateUrl: './contact-form.component.html',
                styleUrls: ['./contact-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { bgPrimary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/contact-modal/contact-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/contact-modal/contact-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModalComponent", function() { return ContactModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modal.service */ "./src/app/modal.service.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-form/contact-form.component */ "./src/app/components/contact-form/contact-form.component.ts");




class ContactModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.showState = false;
    }
    ngOnInit() {
        this.modalService.modalState$.subscribe(modalState => this.showState = modalState);
    }
    ClickedOut(event) {
        if (event.target.classList.contains('modal')) {
            this.closeModal();
        }
    }
    closeModal() {
        this.modalService.updateModalState(false);
    }
}
ContactModalComponent.ɵfac = function ContactModalComponent_Factory(t) { return new (t || ContactModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"])); };
ContactModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactModalComponent, selectors: [["app-contact-modal"]], decls: 10, vars: 3, consts: [[1, "modal", 3, "click"], [1, "modal-close", 3, "click"], [1, "ml-5", "modal-close__img"], ["src", "assets/images/close-icon.svg"], [1, "modal-container", "flex"], [1, "modal__content", "py-8", "px-8", "md:px-16", "hidden", "sm:flex", "items-center", "justify-center"], [1, "text-4xl", "font-light", "text-yellow", "leading-tight"], [3, "bgPrimary"]], template: function ContactModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactModalComponent_Template_div_click_0_listener($event) { return ctx.ClickedOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactModalComponent_Template_div_click_1_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cerrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Estas a un paso de vender por internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-contact-form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgPrimary", true);
    } }, directives: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_2__["ContactFormComponent"]], styles: [".modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  opacity: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  pointer-events: none;\n  transition: all 0.3s;\n  padding: 4rem 2rem 3rem;\n  overflow-y: auto;\n  z-index: 999;\n}\n.modal.show[_ngcontent-%COMP%] {\n  -webkit-user-select: unset;\n  -moz-user-select: unset;\n  -ms-user-select: unset;\n  user-select: unset;\n  pointer-events: unset;\n  opacity: 1;\n}\n.modal-close[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 1.2rem;\n  right: 1rem;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 300;\n  line-height: 1;\n  color: #193EFF;\n  cursor: pointer;\n}\n@media screen and (min-width: 768px) {\n  .modal-close[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.modal-close__img[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n.modal-close__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 18px;\n}\n@media screen and (min-width: 768px) {\n  .modal-close__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 22px;\n  }\n}\n.modal-close[_ngcontent-%COMP%]:hover   .modal-close__img[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.modal-container[_ngcontent-%COMP%] {\n  margin: auto;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n  background: var(--blue);\n  align-items: stretch;\n}\n@media screen and (min-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 768px;\n  }\n}\n.modal__content[_ngcontent-%COMP%] {\n  background-image: url('modal-img.jpg');\n  background-size: cover;\n  width: calc(100% - 270px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LW1vZGFsL0M6XFxVc2Vyc1xcamNhbGRcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxlc2Vkb3ItZWNvbW1lcmNlXFxlc2Vkb3ItZWNvbW1lcmNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0LW1vZGFsXFxjb250YWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtbW9kYWwvY29udGFjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBRUEsVUFBQTtFQUNBLHlCQUFBO0VBQ0csc0JBQUE7RUFDQyxxQkFBQTtFQUNJLGlCQUFBO0VBQ1Isb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQUY7QURDRTtFQUNFLDBCQUFBO0VBQ0csdUJBQUE7RUFDQyxzQkFBQTtFQUNJLGtCQUFBO0VBQ1IscUJBQUE7RUFDQSxVQUFBO0FDQ0o7QURDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDSjtBREFJO0VBWkY7SUFhSSxlQUFBO0VDR0o7QUFDRjtBREZJO0VBQ0Usb0JBQUE7QUNJTjtBREhNO0VBQ0UsWUFBQTtBQ0tSO0FESlE7RUFGRjtJQUdJLFlBQUE7RUNPUjtBQUNGO0FESE07RUFDRSx5QkFBQTtBQ0tSO0FEREU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBRUEsdUJBQUE7RUFDQSxvQkFBQTtBQ0VKO0FEREk7RUFSRjtJQVNJLFdBQUE7SUFFQSxnQkFBQTtFQ0dKO0FBQ0Y7QURERTtFQUNFLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LW1vZGFsL2NvbnRhY3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vIHotaW5kZXg6IC05OTk7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcGFkZGluZzogNHJlbSAycmVtIDNyZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHotaW5kZXg6IDk5OTtcbiAgJi5zaG93IHtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB1bnNldDtcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiB1bnNldDtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiB1bnNldDtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiB1bnNldDtcbiAgICBwb2ludGVyLWV2ZW50czogdW5zZXQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAmLWNsb3NlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMS4ycmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogIzE5M0VGRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gICAgJl9faW1nIHtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5tb2RhbC1jbG9zZV9faW1nIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi1jb250YWluZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsIGJsYWNrIDUwJSwgIzE5M0VGRiA1MCUpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICB9XG4gIH1cbiAgJl9fY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21vZGFsLWltZy5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNzBweCk7XG4gIH1cbn1cclxuIiwiLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwYWRkaW5nOiA0cmVtIDJyZW0gM3JlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgei1pbmRleDogOTk5O1xufVxuLm1vZGFsLnNob3cge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB1bnNldDtcbiAgLW1vei11c2VyLXNlbGVjdDogdW5zZXQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdW5zZXQ7XG4gIHVzZXItc2VsZWN0OiB1bnNldDtcbiAgcG9pbnRlci1ldmVudHM6IHVuc2V0O1xuICBvcGFjaXR5OiAxO1xufVxuLm1vZGFsLWNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEuMnJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzE5M0VGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWNsb3NlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbi5tb2RhbC1jbG9zZV9faW1nIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ubW9kYWwtY2xvc2VfX2ltZyBpbWcge1xuICBoZWlnaHQ6IDE4cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtY2xvc2VfX2ltZyBpbWcge1xuICAgIGhlaWdodDogMjJweDtcbiAgfVxufVxuLm1vZGFsLWNsb3NlOmhvdmVyIC5tb2RhbC1jbG9zZV9faW1nIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5tb2RhbC1jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICB9XG59XG4ubW9kYWxfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21vZGFsLWltZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNzBweCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-modal',
                templateUrl: './contact-modal.component.html',
                styleUrls: ['./contact-modal.component.scss']
            }]
    }], function () { return [{ type: src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 45, vars: 0, consts: [[1, "main-footer", "pt-4", "md:pt-8"], [1, "container", "mx-auto"], [1, "flex", "wrap", "flex-col", "md:flex-row"], [1, "w-full", "md:w-1/5", "px-4", "mb-12", "hidden", "lg:block"], ["src", "assets/images/logo.png", "alt", "Esedor"], [1, "w-full", "md:w-5/12", "lg:w-2/5", "py-4", "md:py-0", "px-4", "md:mb-12"], [1, "md:text-sm", "mb-5", 2, "color", "#6E6E6E"], [1, "w-full", "md:w-4/12", "lg:w-1/5", "py-4", "md:py-0", "px-4", "md:mb-12", "border-t", "md:border-t-0"], [1, "mb-2"], ["href", "tel:017738905", 1, "flex", "items-center"], [1, "mr-2", 2, "width", "20px"], ["src", "assets/images/phone-icon.svg", 2, "height", "22px"], ["href", "mailto:hola@esedor.com", 1, "flex", "items-center"], ["src", "assets/images/mail-icon.svg", 2, "height", "22px"], [1, "w-full", "md:w-3/12", "lg:w-1/5", "py-4", "md:py-0", "px-4", "md:mb-12", "border-t", "md:border-t-0"], [1, "flex", "flex-wrap"], [1, "w-full", "md:text-sm", "mb-5", 2, "color", "#6E6E6E"], [1, "mb-1", "w-1/3", "md:w-full"], ["href", "https://www.linkedin.com/company/esedor/", "target", "_blank"], ["href", "https://www.instagram.com/esedor.latam/", "target", "_blank"], ["href", "https://www.facebook.com/esedorla", "target", "_blank"], [1, "footer-bar", "py-3", "text-xs", "border-t"], [1, "container", "mx-auto", "px-4"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Oficina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Swiss Tower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Av. Alfredo Benavides #1944 - Piso 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Miraflores, Lima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " +01 773 8905 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " hola@esedor.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sociales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Instagam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u00A9 2020 ESEDOR, todos los derechos reservados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/formula/formula.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/formula/formula.component.ts ***!
  \*********************************************************/
/*! exports provided: FormulaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaComponent", function() { return FormulaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modal.service */ "./src/app/modal.service.ts");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./steps/steps.component */ "./src/app/components/formula/steps/steps.component.ts");
/* harmony import */ var _steps_slider_test_steps_slider_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../steps-slider-test/steps-slider-test.component */ "./src/app/components/steps-slider-test/steps-slider-test.component.ts");






class FormulaComponent {
    constructor(elementRef, document, modalService) {
        this.elementRef = elementRef;
        this.document = document;
        this.modalService = modalService;
        this.toAllies = () => {
            let topPosition = this.document.getElementById('alliesSection').offsetTop;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        };
        this.handleSquareFirst = (event) => {
            let wYOffset = window.pageYOffset;
            let rotation = (wYOffset - 500) / 75;
            this.elementRef.nativeElement
                .querySelector('.square--first')
                .style.transform = `rotate(-${rotation}deg)`;
        };
        this.handleSquareSecond = (event) => {
            let wYOffset = window.pageYOffset;
            let rotation = (wYOffset - 500) / 90;
            this.elementRef.nativeElement
                .querySelector('.square--second')
                .style.transform = `rotate(${rotation}deg)`;
        };
        this.handlePoligono = (event) => {
            let wYOffset = window.pageYOffset;
            let rotation = wYOffset / 15;
            this.elementRef.nativeElement
                .querySelector('.poligono')
                .style.transform = `rotate(${rotation}deg)`;
        };
    }
    handleModal() {
        this.modalService.updateModalState(true);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        window.addEventListener('scroll', this.handleSquareFirst, true);
        window.addEventListener('scroll', this.handleSquareSecond, true);
        window.addEventListener('scroll', this.handlePoligono, true);
    }
    ngOnDestroy() {
        window.removeEventListener('scroll', this.handleSquareFirst, true);
        window.removeEventListener('scroll', this.handleSquareSecond, true);
        window.removeEventListener('scroll', this.handlePoligono, true);
    }
}
FormulaComponent.ɵfac = function FormulaComponent_Factory(t) { return new (t || FormulaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
FormulaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormulaComponent, selectors: [["app-formula"]], decls: 19, vars: 0, consts: [[1, "overflow-hidden"], [1, "relative"], ["src", "assets/images/square.png", 1, "square", "square--first"], ["src", "assets/images/square.png", 1, "square", "square--second"], ["src", "assets/images/poligono.png", 1, "poligono"], [1, "container", "mx-auto", "md:pt-16"], [1, "flex", "flex-wrap", "px-4"], [1, "w-full", "md:w-4/5", "lg:w-3/5", "mx-auto", "md:px-6"], [1, "font-medium", "text-center", "mb-6", "text-lg", "md:text-base"], [1, "text-2xl", "md:text-3xl", "lg:text-4xl", "font-light", "text-center"], [1, "flex", "flex-wrap", "px-4", "mt-16"], [1, "w-full", "md:w-2/3", "lg:w-2/5", "mx-auto", "flex", "justify-center"], [1, "btn", "btn-primary", "flex", "items-center", "justify-center", 3, "click"], ["src", "assets/images/right-arrow-white.svg", 1, "ml-4", 2, "height", "14px"]], template: function FormulaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nuestra f\u00F3rmula de escalamiento empresarial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Creamos tu tienda online que conecta todos tus canales de venta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormulaComponent_Template_button_click_14_listener() { return ctx.handleModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " CONVERSEMOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-steps-slider-test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_steps_steps_component__WEBPACK_IMPORTED_MODULE_3__["StepsComponent"], _steps_slider_test_steps_slider_test_component__WEBPACK_IMPORTED_MODULE_4__["StepsSliderTestComponent"]], styles: [".square[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  width: 500px;\n  transition: all 0.2s;\n}\n@media screen and (min-width: 768px) {\n  .square[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.square--first[_ngcontent-%COMP%] {\n  top: 50px;\n  right: -300px;\n}\n.square--second[_ngcontent-%COMP%] {\n  top: 480px;\n  left: -350px;\n}\n.poligono[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  width: 500px;\n  right: -350px;\n  bottom: 250px;\n  transition: all 0.3s linear;\n}\n@media screen and (min-width: 768px) {\n  .poligono[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL0M6XFxVc2Vyc1xcamNhbGRcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxlc2Vkb3ItZWNvbW1lcmNlXFxlc2Vkb3ItZWNvbW1lcmNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb3JtdWxhXFxmb3JtdWxhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm11bGEvZm9ybXVsYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NGO0FEQUU7RUFMRjtJQU1JLGNBQUE7RUNHRjtBQUNGO0FERkU7RUFDRSxTQUFBO0VBQ0EsYUFBQTtBQ0lKO0FERkU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0lKO0FEQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ0dGO0FERkU7RUFQRjtJQVFJLGNBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL2Zvcm11bGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3F1YXJlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICYtLWZpcnN0IHtcbiAgICB0b3A6IDUwcHg7XG4gICAgcmlnaHQ6IC0zMDBweDtcbiAgfVxuICAmLS1zZWNvbmQge1xuICAgIHRvcDogNDgwcHg7XG4gICAgbGVmdDogLTM1MHB4O1xuICB9XG59XG5cbi5wb2xpZ29ubyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICByaWdodDogLTM1MHB4O1xuICBib3R0b206IDI1MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cclxuIiwiLnNxdWFyZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zcXVhcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uc3F1YXJlLS1maXJzdCB7XG4gIHRvcDogNTBweDtcbiAgcmlnaHQ6IC0zMDBweDtcbn1cbi5zcXVhcmUtLXNlY29uZCB7XG4gIHRvcDogNDgwcHg7XG4gIGxlZnQ6IC0zNTBweDtcbn1cblxuLnBvbGlnb25vIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAwcHg7XG4gIHJpZ2h0OiAtMzUwcHg7XG4gIGJvdHRvbTogMjUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5wb2xpZ29ubyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormulaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formula',
                templateUrl: './formula.component.html',
                styleUrls: ['./formula.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: src_app_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/formula/steps-slider/steps-slider.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/formula/steps-slider/steps-slider.component.ts ***!
  \***************************************************************************/
/*! exports provided: StepsSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsSliderComponent", function() { return StepsSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modal.service */ "./src/app/modal.service.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");




class StepsSliderComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.config = {
            slidesPerView: 'auto',
            navigation: false,
            pagination: false
        };
    }
    ngOnInit() {
    }
    openModal() {
        this.modalService.updateModalState(true);
    }
}
StepsSliderComponent.ɵfac = function StepsSliderComponent_Factory(t) { return new (t || StepsSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"])); };
StepsSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepsSliderComponent, selectors: [["app-steps-slider"]], decls: 31, vars: 1, consts: [[1, "steps-slider", "py-16", "hidden", "md:flex"], [1, "swiper-container", "steps-slider__container", "my-auto", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide", "steps-slider__item", "text-white", "px-3", 2, "width", "90%"], [1, "flex", "flex-wrap"], [1, "w-1/2", "flex", "flex-col", "items-start", "py-8", "pr-12"], [1, "font-bold"], [1, "text-2xl", "lg:text-3xl", "font-light", "mb-4"], [1, "mb-12"], ["id", "desktopSteps-step-4", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", "mt-auto", 3, "click"], ["src", "assets/images/right-arrow-white.svg", 1, "ml-4", 2, "height", "14px"], [1, "w-1/2", "pl-0", "lg:pl-12", "pr-6", "lg:pr-12"], ["src", "assets/images/steps/step-04.svg", 2, "height", "420px"], ["id", "desktopSteps-step-5", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", "mt-auto", 3, "click"], ["src", "assets/images/steps/step-05.svg", 2, "height", "420px"]], template: function StepsSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CUARTO PASO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Seleccionamos la tecnolog\u00EDa y definimos el alcance del proyecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Evaluamos entre desarrollar un c\u00F3digo personalizado o usar soluciones de c\u00F3digo abierto, y luego definimos los sprints clave para asegurar el impacto comercial de tu tienda online.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsSliderComponent_Template_button_click_12_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " CONVERSEMOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "QUINTO PASO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Performance de tu producto digital y potenciamos tus ventas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Estrategias integrales de marketing, combinando Social Media, UX/UI, Google Ads, SEO y CRO para aumentar visibilidad, atraer clientes y lograr un crecimiento sostenido.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsSliderComponent_Template_button_click_26_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " CONVERSEMOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
    } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"]], styles: [".steps-slider[_ngcontent-%COMP%] {\n  background: #000;\n  height: 100vh;\n  min-height: 768px;\n  max-height: 1080px;\n}\n.steps-slider__container[_ngcontent-%COMP%] {\n  padding-left: calc((100% - 860px)/2 + 1rem);\n}\n@media screen and (min-width: 1050px) {\n  .steps-slider__container[_ngcontent-%COMP%] {\n    padding-left: calc((100% - 1024px)/2 + 1rem);\n  }\n}\n@media screen and (min-width: 1200px) {\n  .steps-slider__container[_ngcontent-%COMP%] {\n    padding-left: calc((100% - 1140px)/2 + 1rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL3N0ZXBzLXNsaWRlci9DOlxcVXNlcnNcXGpjYWxkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZXNlZG9yLWVjb21tZXJjZVxcZXNlZG9yLWVjb21tZXJjZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9ybXVsYVxcc3RlcHMtc2xpZGVyXFxzdGVwcy1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXVsYS9zdGVwcy1zbGlkZXIvc3RlcHMtc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSwyQ0FBQTtBQ0VKO0FEREk7RUFGRjtJQUdJLDRDQUFBO0VDSUo7QUFDRjtBREhJO0VBTEY7SUFNSSw0Q0FBQTtFQ01KO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm11bGEvc3RlcHMtc2xpZGVyL3N0ZXBzLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcy1zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiA3NjhweDtcbiAgbWF4LWhlaWdodDogMTA4MHB4O1xuICAmX19jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYygoMTAwJSAtIDg2MHB4KS8yICsgMXJlbSk7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA1MHB4KSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoKDEwMCUgLSAxMDI0cHgpLzIgKyAxcmVtKTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoKDEwMCUgLSAxMTQwcHgpLzIgKyAxcmVtKTtcbiAgICB9XG4gIH1cbn1cclxuIiwiLnN0ZXBzLXNsaWRlciB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1pbi1oZWlnaHQ6IDc2OHB4O1xuICBtYXgtaGVpZ2h0OiAxMDgwcHg7XG59XG4uc3RlcHMtc2xpZGVyX19jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGMoKDEwMCUgLSA4NjBweCkvMiArIDFyZW0pO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA1MHB4KSB7XG4gIC5zdGVwcy1zbGlkZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKCgxMDAlIC0gMTAyNHB4KS8yICsgMXJlbSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuc3RlcHMtc2xpZGVyX19jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYygoMTAwJSAtIDExNDBweCkvMiArIDFyZW0pO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepsSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-steps-slider',
                templateUrl: './steps-slider.component.html',
                styleUrls: ['./steps-slider.component.scss']
            }]
    }], function () { return [{ type: src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/formula/steps/steps.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/formula/steps/steps.component.ts ***!
  \*************************************************************/
/*! exports provided: StepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsComponent", function() { return StepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modal.service */ "./src/app/modal.service.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function StepsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "assets/images/steps/" + step_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r2.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r2.description);
} }
class StepsComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.config = {
            slidesPerView: 1,
            navigation: {
                prevEl: '.prev-btn',
                nextEl: '.next-btn'
            },
            pagination: false
        };
        this.sliderIndex = 0;
        this.steps = [];
        this.steps.push({ title: 'PRIMER PASO', subtitle: 'Agregamos valor ofreciendo experiencias excepcionales', description: 'Identificamos cuándo, dónde y cómo compra tu cliente usando un set de disciplinas de investigación UX.', image: 'step-01.svg' });
        this.steps.push({ title: 'SEGUNDO PASO', subtitle: 'Pensamos en la lógica y creamos un prototipo', description: 'Creamos versiones interactivas de escritorio, tablet y dispositivo móvil, plasmados en el prototipo de UX en Figma.', image: 'step-02.svg' });
        this.steps.push({ title: 'TERCER PASO', subtitle: 'Diseñamos tu tienda virtual y sistema de diseño', description: 'Creamos la identidad visual de tu marca con una guía de estilos de la interfaz de usuario e implementamos un sistema de diseño.', image: 'step-03.svg' });
        this.steps.push({ title: 'CUARTO PASO', subtitle: 'Definimos la tecnología y establecemos el alcance', description: 'Creamos un nuevo código fuente o usamos uno de código abierto, y establecemos los sprints necesarios para cumplir tus objetivos.', image: 'step-04-responsive.svg' });
        this.steps.push({ title: 'QUINTO PASO', subtitle: 'Lanzamos tu producto y la campaña de marketing', description: 'Llegamos a más usuarios usando creando un social media plan y una campaña de Google ADS agrandando tu funnel de clientes.', image: 'step-05-responsive.svg' });
    }
    openModal() {
        this.modalService.updateModalState(true);
    }
    ngOnInit() {
    }
}
StepsComponent.ɵfac = function StepsComponent_Factory(t) { return new (t || StepsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"])); };
StepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepsComponent, selectors: [["app-steps"]], decls: 60, vars: 6, consts: [[1, "md:hidden", "pt-24"], [1, "flex", "justify-between", "items-center", "w-full", "sm:w-2/3", "mx-auto", "mt-8", "mb-12", "px-4"], ["src", "assets/images/left-arrow.svg", 1, "prev-btn"], [1, "text-center"], [1, "text-sm", "font-bold"], ["src", "assets/images/right-arrow.svg", 1, "next-btn"], [1, "swiper-container", "my-auto", 3, "swiper", "index", "indexChange"], ["stepsSwiper", ""], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "block", "w-full", "text-center", "mt-10", "mb-24"], ["id", "responsiveSteps", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", 3, "click"], ["src", "assets/images/right-arrow-white.svg", 1, "ml-4", 2, "height", "14px"], [1, "hidden", "md:block"], [1, "flex", "flex-wrap", "items-center", "py-20", "px-4"], [1, "w-1/2", "lg:pl-20"], [1, "font-bold"], [1, "text-2xl", "lg:text-3xl", "font-light", "mb-4"], [1, "mb-12"], ["id", "desktopSteps-step-1", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", 3, "click"], ["src", "assets/images/icono-wsp.svg", 1, "mr-4", 2, "height", "14px"], [1, "w-1/2"], ["src", "assets/images/steps/step-01.svg", 1, "w-full"], [1, "flex", "flex-wrap", "py-20", "px-4"], ["src", "assets/images/steps/step-02.svg", 1, "w-full"], [1, "w-1/2", "pl-12", "lg:pl-32"], ["id", "desktopSteps-step-2", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", 3, "click"], [1, "flex", "flex-wrap", "items-end", "xl:items-start", "pt-16", "px-4"], [1, "w-1/2", "lg:pl-20", "pt-4", "pb-8"], ["id", "desktopSteps-step-3", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", 3, "click"], ["src", "assets/images/steps/step-03.svg", 1, "w-full"], [1, "swiper-slide"], [1, "responsive-step"], [1, "responsive-step__image"], [1, "w-full", "mb-4", "mx-auto", 3, "src"], [1, "px-6", "pt-3"], [1, "text-xl", "sm:text-2xl", "mb-3"], [1, "text-sm"]], template: function StepsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function StepsComponent_Template_div_indexChange_9_listener($event) { return ctx.sliderIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StepsComponent_div_12_Template, 9, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_Template_button_click_14_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " CONVERSEMOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "PRIMER PASO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Entendemos tu negocio para crear experiencias de compra escalables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Antes de dise\u00F1ar tu tienda online, investigamos y analizamos a fondo tu negocio y el comportamiento de tus clientes, asegurando una soluci\u00F3n personalizada y efectiva para de tu empresa o proyecto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_Template_button_click_26_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " CONVERSEMOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "SEGUNDO PASO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Definimos la estructura y creamos un prototipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Desarrollamos versiones personalizadas de tu tienda online para escritorio, tablet y m\u00F3vil, reflejadas en prototipos interactivos dise\u00F1ados, garantizando una experiencia de usuario \u00F3ptima en todas las plataformas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_Template_button_click_42_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " CONVERSEMOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "TERCER PASO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Dise\u00F1amos tu tienda virtual y su sistema visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Desarrollamos la identidad visual de tu marca, creando una gu\u00EDa de estilos completa para toda la interfaz de usuario. Adem\u00E1s, si buscas escalar tu negocio, implementamos un sistema de dise\u00F1o flexible que permite adaptaciones futuras sin complicaciones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_Template_button_click_54_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " CONVERSEMOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.steps[ctx.sliderIndex].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.sliderIndex + 1, "/", ctx.steps.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config)("index", ctx.sliderIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
    } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".prev-btn[_ngcontent-%COMP%]:focus, .next-btn[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.responsive-step[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: auto;\n  transition: all 0.3s;\n}\n\n.responsive-step__image[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  height: 250px;\n  margin: auto;\n}\n\n.responsive-step__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n\n.swiper-slide[_ngcontent-%COMP%]:not(.swiper-slide-active)   .responsive-step[_ngcontent-%COMP%] {\n  transform: scale(0.75);\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL3N0ZXBzL0M6XFxVc2Vyc1xcamNhbGRcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxlc2Vkb3ItZWNvbW1lcmNlXFxlc2Vkb3ItZWNvbW1lcmNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb3JtdWxhXFxzdGVwc1xcc3RlcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXVsYS9zdGVwcy9zdGVwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDREY7O0FERUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNHLG1CQUFBO0FDQ1Q7O0FES0U7RUFDRSxzQkFBQTtFQUNBLFVBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXVsYS9zdGVwcy9zdGVwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2LWJ0biwgLm5leHQtYnRuIHtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxufVxuXG4ucmVzcG9uc2l2ZS1zdGVwIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgJl9faW1hZ2Uge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuICB9XG59XG5cbi5zd2lwZXItc2xpZGU6bm90KC5zd2lwZXItc2xpZGUtYWN0aXZlKSB7XG4gIC5yZXNwb25zaXZlLXN0ZXAge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjc1KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XHJcbiIsIi5wcmV2LWJ0bjpmb2N1cywgLm5leHQtYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLnJlc3BvbnNpdmUtc3RlcCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ucmVzcG9uc2l2ZS1zdGVwX19pbWFnZSB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4ucmVzcG9uc2l2ZS1zdGVwX19pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uc3dpcGVyLXNsaWRlOm5vdCguc3dpcGVyLXNsaWRlLWFjdGl2ZSkgLnJlc3BvbnNpdmUtc3RlcCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gIG9wYWNpdHk6IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-steps',
                templateUrl: './steps.component.html',
                styleUrls: ['./steps.component.scss']
            }]
    }], function () { return [{ type: src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "main-header", "py-4", "md:py-8"], [1, "container", "px-4", "md:px-6", "mx-auto"], ["src", "assets/images/logo.png", "alt", "Esedor", 1, "logo"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n@media screen and (min-width: 768px) {\n  .logo[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxqY2FsZFxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXGVzZWRvci1lY29tbWVyY2VcXGVzZWRvci1lY29tbWVyY2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURBRTtFQUZGO0lBR0ksWUFBQTtFQ0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxufVxyXG4iLCIubWFpbi1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ28ge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/hero-footer/hero-footer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/hero-footer/hero-footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeroFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroFooterComponent", function() { return HeroFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact-form/contact-form.component */ "./src/app/components/contact-form/contact-form.component.ts");
/* harmony import */ var ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-parallax-scroll */ "./node_modules/ngx-parallax-scroll/__ivy_ngcc__/fesm2015/ngx-parallax-scroll.js");




class HeroFooterComponent {
    constructor() {
        this.ParallaxCajaConf = {
            parallaxSpeed: 0.3,
            parallaxSmoothness: 0.5,
            parallaxDirection: 'straight',
            parallaxTimingFunction: 'ease-out',
            parallaxThrottleTime: 0
        };
        this.ParallaxCarritoConf = {
            parallaxSpeed: 0.1,
            parallaxSmoothness: 1,
            parallaxDirection: 'reverse',
            parallaxTimingFunction: 'ease-out',
            parallaxThrottleTime: 0
        };
        this.ParallaxCursorConf = {
            parallaxSpeed: 0.3,
            parallaxSmoothness: 2,
            parallaxDirection: 'reverse',
            parallaxTimingFunction: 'ease-out',
            parallaxThrottleTime: 0
        };
        this.ParallaxPoligonoConf = {
            parallaxSpeed: 0.3,
            parallaxSmoothness: 1,
            parallaxDirection: 'straight',
            parallaxTimingFunction: 'ease-out',
            parallaxThrottleTime: 0
        };
    }
    ngOnInit() {
    }
}
HeroFooterComponent.ɵfac = function HeroFooterComponent_Factory(t) { return new (t || HeroFooterComponent)(); };
HeroFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroFooterComponent, selectors: [["app-hero-footer"]], decls: 47, vars: 5, consts: [[1, "main-hero", "flex", "pt-24", "pb-12", "md:py-0"], [1, "container", "main-hero__container", "m-auto", "relative", "z-10"], [1, "flex", "flex-wrap", "items-center", "px-6"], [1, "main-hero__copy", "w-full", "sm:w-1/2", "md:w-5/12", "lg:w-4/12", "xl:pl-20", "mx-auto"], [1, "text-2xl", "md:text-4xl", "lg:text-5xl", "font-light", "md:font-medium", "leading-tight", "mb-20", "md:mb-10"], ["href", "https://calendly.com/esedor-e", "target", "_blank", 1, "btn", "btn-primary", "hidden", "md:inline-flex", "items-center"], ["src", "assets/images/phone-icon-white.svg", 1, "mr-3", 2, "height", "25px"], ["src", "assets/images/google-hangouts-icon.svg", 1, "ml-4", 2, "height", "22px"], ["src", "assets/images/calendly-icon.svg", 1, "ml-2", 2, "height", "22px"], [1, "w-full", "sm:w-1/2", "md:w-3/12", "flex", "mx-auto"], [1, "hero__right-container", "mx-auto", "md:mr-0"], [1, "text-center", "mb-2", "hidden", "md:block"], ["ngxParallaxScroll", "", 1, "footer-hero__donut", 3, "config"], ["media", "(max-width:767px)", "sizes", "1px", "srcset", "assets/images/blank.gif"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/donut-small.png"], ["src", "assets/images/hero/donut-small.png"], ["ngxParallaxScroll", "", 1, "footer-hero__caja", 3, "config"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/caja.png"], ["src", "assets/images/hero/caja.png"], ["ngxParallaxScroll", "", 1, "footer-hero__carrito", 3, "config"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/carrito.png"], ["src", "assets/images/hero/carrito.png"], ["ngxParallaxScroll", "", 1, "footer-hero__cursor", 3, "config"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/cursor.png"], ["src", "assets/images/hero/cursor.png"], ["ngxParallaxScroll", "", 1, "footer-hero__poligono", 3, "config"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/poligono.png"], ["src", "assets/images/hero/poligono.png"]], template: function HeroFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Estas listo para vender por tu tienda virtual?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Ll\u00E1manos por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00BFTienes dudas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u00A1Estamos listos para ayudarte!. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Comienza hoy mismo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-contact-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "source", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "source", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "source", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "source", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "source", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ParallaxCajaConf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ParallaxCajaConf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ParallaxCarritoConf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ParallaxCursorConf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ParallaxPoligonoConf);
    } }, directives: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__["ContactFormComponent"], ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__["ParallaxScrollDirective"]], styles: [".main-hero[_ngcontent-%COMP%] {\n  background-color: #B4D2FF;\n  position: relative;\n  overflow: hidden;\n}\n@media screen and (min-width: 768px) {\n  .main-hero[_ngcontent-%COMP%] {\n    height: 100vh;\n    min-height: 768px;\n    max-height: 1080px;\n  }\n}\n@media screen and (max-width: 639px) {\n  .main-hero__copy[_ngcontent-%COMP%] {\n    max-width: 280px;\n    margin: auto;\n  }\n}\n.footer-hero__container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.footer-hero__donut[_ngcontent-%COMP%], .footer-hero__caja[_ngcontent-%COMP%], .footer-hero__carrito[_ngcontent-%COMP%], .footer-hero__cursor[_ngcontent-%COMP%], .footer-hero__poligono[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  display: none;\n}\n@media screen and (min-width: 768px) {\n  .footer-hero__donut[_ngcontent-%COMP%], .footer-hero__caja[_ngcontent-%COMP%], .footer-hero__carrito[_ngcontent-%COMP%], .footer-hero__cursor[_ngcontent-%COMP%], .footer-hero__poligono[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.footer-hero__donut[_ngcontent-%COMP%] {\n  height: 100px;\n  left: 0;\n  bottom: 1750px;\n}\n.footer-hero__donut[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.footer-hero__caja[_ngcontent-%COMP%] {\n  top: -1600px;\n  right: -4rem;\n  height: 350px;\n}\n.footer-hero__caja[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 350px;\n}\n.footer-hero__carrito[_ngcontent-%COMP%] {\n  height: 300px;\n  bottom: -450px;\n  left: calc(50% - 100px);\n}\n.footer-hero__carrito[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n  transform: rotateY(180deg);\n}\n.footer-hero__poligono[_ngcontent-%COMP%] {\n  height: 150px;\n  left: 5rem;\n  top: -1400px;\n}\n.footer-hero__poligono[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px;\n}\n.footer-hero__cursor[_ngcontent-%COMP%] {\n  height: 100px;\n  right: 4rem;\n  bottom: -1600px;\n}\n.footer-hero__cursor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZXJvLWZvb3Rlci9DOlxcVXNlcnNcXGpjYWxkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZXNlZG9yLWVjb21tZXJjZVxcZXNlZG9yLWVjb21tZXJjZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVyby1mb290ZXJcXGhlcm8tZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlcm8tZm9vdGVyL2hlcm8tZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURBRTtFQUpGO0lBS0ksYUFBQTtJQUVBLGlCQUFBO0lBRUEsa0JBQUE7RUNDRjtBQUNGO0FEQ0k7RUFERjtJQUVJLGdCQUFBO0lBRUEsWUFBQTtFQ0NKO0FBQ0Y7QURJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0RKO0FER0U7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0csc0JBQUE7RUFDQyxxQkFBQTtFQUNJLGlCQUFBO0VBQ1IsYUFBQTtBQ0RKO0FERUk7RUFQRjtJQVFJLGNBQUE7RUNDSjtBQUNGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7QUNDSjtBREFJO0VBQ0UsYUFBQTtBQ0VOO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0UsYUFBQTtBQ0VOO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDQ0o7QURBSTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtBQ0VOO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0UsYUFBQTtBQ0VOO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjtBREFJO0VBQ0UsYUFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZXJvLWZvb3Rlci9oZXJvLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjREMkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIG1pbi1oZWlnaHQ6IDc2OHB4O1xuXG4gICAgbWF4LWhlaWdodDogMTA4MHB4O1xuICB9XG4gICZfX2NvcHkge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDI4MHB4O1xuXG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi5mb290ZXItaGVybyB7XG4gICZfX2NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgJl9fZG9udXQsICZfX2NhamEsICZfX2NhcnJpdG8sICZfX2N1cnNvciwgJl9fcG9saWdvbm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuICAmX19kb251dCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMTc1MHB4O1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgfVxuICAmX19jYWphIHtcbiAgICB0b3A6IC0xNjAwcHg7XG4gICAgcmlnaHQ6IC00cmVtO1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgfVxuICB9XG4gICZfX2NhcnJpdG8ge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm90dG9tOiAtNDUwcHg7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB9XG4gIH1cbiAgJl9fcG9saWdvbm8ge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbGVmdDogNXJlbTtcbiAgICB0b3A6IC0xNDAwcHg7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgfVxuICB9XG4gICZfX2N1cnNvciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICByaWdodDogNHJlbTtcbiAgICBib3R0b206IC0xNjAwcHg7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICB9XG59XHJcbiIsIi5tYWluLWhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjREMkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1oZXJvIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDc2OHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwODBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgLm1haW4taGVyb19fY29weSB7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuLmZvb3Rlci1oZXJvX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uZm9vdGVyLWhlcm9fX2RvbnV0LCAuZm9vdGVyLWhlcm9fX2NhamEsIC5mb290ZXItaGVyb19fY2Fycml0bywgLmZvb3Rlci1oZXJvX19jdXJzb3IsIC5mb290ZXItaGVyb19fcG9saWdvbm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyLWhlcm9fX2RvbnV0LCAuZm9vdGVyLWhlcm9fX2NhamEsIC5mb290ZXItaGVyb19fY2Fycml0bywgLmZvb3Rlci1oZXJvX19jdXJzb3IsIC5mb290ZXItaGVyb19fcG9saWdvbm8ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uZm9vdGVyLWhlcm9fX2RvbnV0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAxNzUwcHg7XG59XG4uZm9vdGVyLWhlcm9fX2RvbnV0IGltZyB7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uZm9vdGVyLWhlcm9fX2NhamEge1xuICB0b3A6IC0xNjAwcHg7XG4gIHJpZ2h0OiAtNHJlbTtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cbi5mb290ZXItaGVyb19fY2FqYSBpbWcge1xuICBoZWlnaHQ6IDM1MHB4O1xufVxuLmZvb3Rlci1oZXJvX19jYXJyaXRvIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm90dG9tOiAtNDUwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xufVxuLmZvb3Rlci1oZXJvX19jYXJyaXRvIGltZyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLmZvb3Rlci1oZXJvX19wb2xpZ29ubyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIGxlZnQ6IDVyZW07XG4gIHRvcDogLTE0MDBweDtcbn1cbi5mb290ZXItaGVyb19fcG9saWdvbm8gaW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5mb290ZXItaGVyb19fY3Vyc29yIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcmlnaHQ6IDRyZW07XG4gIGJvdHRvbTogLTE2MDBweDtcbn1cbi5mb290ZXItaGVyb19fY3Vyc29yIGltZyB7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero-footer',
                templateUrl: './hero-footer.component.html',
                styleUrls: ['./hero-footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/hero/hero.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact-form/contact-form.component */ "./src/app/components/contact-form/contact-form.component.ts");
/* harmony import */ var ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-parallax-scroll */ "./node_modules/ngx-parallax-scroll/__ivy_ngcc__/fesm2015/ngx-parallax-scroll.js");




// import { gsap, ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);
class HeroComponent {
    constructor() {
        this.showDropdown = false;
        this.ParallaxCajaConf = {
            parallaxSpeed: 0.3,
            parallaxSmoothness: 0.8,
            parallaxDirection: 'reverse',
            parallaxTimingFunction: 'ease-out',
            parallaxThrottleTime: 0
        };
        this.ParallaxCarritoConf = {
            parallaxSpeed: 0.1,
            parallaxSmoothness: 1,
            parallaxDirection: 'reverse',
            parallaxTimingFunction: 'ease-out',
            parallaxThrottleTime: 0
        };
        this.ParallaxCursorConf = {
            parallaxSpeed: 0.3,
            parallaxSmoothness: 2,
            parallaxDirection: 'reverse',
            parallaxTimingFunction: 'ease-out',
            parallaxThrottleTime: 0
        };
        this.ParallaxPoligonoConf = {
            parallaxSpeed: 0.3,
            parallaxSmoothness: 1,
            parallaxDirection: 'straight',
            parallaxTimingFunction: 'ease-out',
            parallaxThrottleTime: 0
        };
    }
    ngOnInit() {
        // let mediaQuery = window.matchMedia("(min-width: 768px)");
        // this.mainHeroScrollTrigger(mediaQuery);
        // mediaQuery.addListener(this.mainHeroScrollTrigger);
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(); };
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], decls: 44, vars: 1, consts: [[1, "main-hero", "flex"], [1, "container", "main-hero__container", "m-auto"], [1, "flex", "flex-wrap", "items-center", "px-4", "md:px-6"], [1, "w-full", "sm:w-6/12", "lg:pr-12", "main-hero__copy"], [1, "text-2xl", "md:text-4xl", "lg:text-4xl", "font-medium", "leading-tight", "mb-4", "md:mb-10"], [1, "md:pr-12", "mb-2", "md:mb-12", "text-sm", "md:text-normal"], [1, "dropdown"], ["id", "desktopHero-callUs", "hreflang", "https://calendar.app.google/xxZWD5pwh4BUzUzL6", "href", "https://calendly.com/esedor-e", "target", "_blank", 1, "btn", "btn-primary", "items-center", "hidden", "md:flex"], ["src", "assets/images/icono-wsp.svg", 1, "mr-3", 2, "height", "25px"], ["src", "assets/images/arrow.svg", 1, "ml-4", 2, "height", "22px"], [1, "w-full", "sm:w-6/12", "flex"], [1, "hero__right-container", "mx-auto", "md:mr-0"], [1, "text-center", "mb-2", "hidden", "md:block"], ["media", "(max-width:767px)", "sizes", "1px", "srcset", "assets/images/blank.gif"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/donut.png"], ["src", "assets/images/hero/donut.png", 1, "main-hero__donut"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/caja.png"], ["src", "assets/images/hero/caja.png", "ngxParallaxScroll", "", 1, "main-hero__caja", 3, "config"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/carrito.png"], ["src", "assets/images/hero/carrito.png", 1, "main-hero__carrito"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/cursor.png"], ["src", "assets/images/hero/cursor.png", 1, "main-hero__cursor"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/poligono.png"], ["src", "assets/images/hero/poligono.png", 1, "main-hero__poligono"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lleva tu negocio al siguiente nivel con un e-commerce de alto rendimiento en tiempo record. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Desarrollamos tiendas online a medida para impulsar el crecimiento de tu empresa. Atrae m\u00E1s clientes, optimiza tus procesos y vende de manera eficiente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Conversemos sobre tu proyecto hoy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00BFTienes dudas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A1Estamos listos para ayudarte!. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Comienza hoy mismo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-contact-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "source", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "source", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "source", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "source", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ParallaxCajaConf);
    } }, directives: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__["ContactFormComponent"], ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__["ParallaxScrollDirective"]], styles: [".main-hero[_ngcontent-%COMP%] {\n  background-color: #B4D2FF;\n  position: relative;\n  overflow: hidden;\n  padding-top: 5rem;\n  padding-bottom: 2rem;\n}\n@media screen and (min-width: 768px) {\n  .main-hero[_ngcontent-%COMP%] {\n    height: 100vh;\n    min-height: 768px;\n    max-height: 1080px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n}\n.main-hero__container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 639px) {\n  .main-hero__copy[_ngcontent-%COMP%] {\n    max-width: 280px;\n    margin: auto;\n  }\n}\n.main-hero__donut[_ngcontent-%COMP%], .main-hero__caja[_ngcontent-%COMP%], .main-hero__carrito[_ngcontent-%COMP%], .main-hero__cursor[_ngcontent-%COMP%], .main-hero__poligono[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  display: none;\n}\n@media screen and (min-width: 768px) {\n  .main-hero__donut[_ngcontent-%COMP%], .main-hero__caja[_ngcontent-%COMP%], .main-hero__carrito[_ngcontent-%COMP%], .main-hero__cursor[_ngcontent-%COMP%], .main-hero__poligono[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.main-hero__donut[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n}\n.main-hero__caja[_ngcontent-%COMP%] {\n  bottom: -3rem;\n  left: 0rem;\n  height: 300px;\n}\n.main-hero__carrito[_ngcontent-%COMP%] {\n  height: 440px;\n  bottom: 0;\n  left: calc(50% - 220px);\n  -webkit-animation: floating 8s linear infinite;\n  animation: floating 8s linear infinite;\n}\n@-webkit-keyframes floating {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(3rem);\n  }\n}\n@keyframes floating {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(3rem);\n  }\n}\n.main-hero__poligono[_ngcontent-%COMP%] {\n  height: 120px;\n  left: 25%;\n  top: 4rem;\n  -webkit-animation: rotate 9s linear infinite;\n  animation: rotate 9s linear infinite;\n}\n@-webkit-keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.main-hero__cursor[_ngcontent-%COMP%] {\n  height: 120px;\n  left: 55%;\n  top: 10rem;\n  -webkit-animation: cursorTranslation 4s infinite;\n  animation: cursorTranslation 4s infinite;\n}\n@-webkit-keyframes cursorTranslation {\n  0%, 100% {\n    transform: translate(0);\n  }\n  33% {\n    transform: translate(40px, -30px);\n  }\n  66% {\n    transform: translate(90px, 40px);\n  }\n}\n@keyframes cursorTranslation {\n  0%, 100% {\n    transform: translate(0);\n  }\n  33% {\n    transform: translate(40px, -30px);\n  }\n  66% {\n    transform: translate(90px, 40px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZXJvL0M6XFxVc2Vyc1xcamNhbGRcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxlc2Vkb3ItZWNvbW1lcmNlXFxlc2Vkb3ItZWNvbW1lcmNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZXJvXFxoZXJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlcm8vaGVyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREFFO0VBTkY7SUFPSSxhQUFBO0lBRUEsaUJBQUE7SUFFQSxrQkFBQTtJQUVBLGNBQUE7SUFFQSxpQkFBQTtFQ0RGO0FBQ0Y7QURFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0FKO0FER0k7RUFERjtJQUVJLGdCQUFBO0lBRUEsWUFBQTtFQ0RKO0FBQ0Y7QURHRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDRyxzQkFBQTtFQUNDLHFCQUFBO0VBQ0ksaUJBQUE7RUFDUixhQUFBO0FDREo7QURFSTtFQVBGO0lBUUksY0FBQTtFQ0NKO0FBQ0Y7QURDRTtFQUNFLE1BQUE7RUFDQSxRQUFBO0FDQ0o7QURDRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7RUFDUSxzQ0FBQTtBQ0NaO0FEQUk7RUFDRTtJQUNFLHdCQUFBO0VDRU47RURDSTtJQUNFLDJCQUFBO0VDQ047QUFDRjtBRENJO0VBQ0U7SUFDRSx3QkFBQTtFQ0NOO0VERUk7SUFDRSwyQkFBQTtFQ0FOO0FBQ0Y7QURHRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0VBQ1Esb0NBQUE7QUNEWjtBREVJO0VBQ0U7SUFDRSxvQkFBQTtFQ0FOO0VER0k7SUFDRSx5QkFBQTtFQ0ROO0FBQ0Y7QURHSTtFQUNFO0lBQ0Usb0JBQUE7RUNETjtFRElJO0lBQ0UseUJBQUE7RUNGTjtBQUNGO0FES0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtFQUNRLHdDQUFBO0FDSFo7QURJSTtFQUNFO0lBQ0UsdUJBQUE7RUNGTjtFREtJO0lBQ0UsaUNBQUE7RUNITjtFRE1JO0lBQ0UsZ0NBQUE7RUNKTjtBQUNGO0FETUk7RUFDRTtJQUNFLHVCQUFBO0VDSk47RURPSTtJQUNFLGlDQUFBO0VDTE47RURRSTtJQUNFLGdDQUFBO0VDTk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taGVybyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNEQyRkY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICBtaW4taGVpZ2h0OiA3NjhweDtcblxuICAgIG1heC1oZWlnaHQ6IDEwODBweDtcblxuICAgIHBhZGRpbmctdG9wOiAwO1xuXG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbiAgJl9fY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAmX19jb3B5IHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuICAgICAgbWF4LXdpZHRoOiAyODBweDtcblxuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgfVxuICAmX19kb251dCwgJl9fY2FqYSwgJl9fY2Fycml0bywgJl9fY3Vyc29yLCAmX19wb2xpZ29ubyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gICZfX2RvbnV0IHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgJl9fY2FqYSB7XG4gICAgYm90dG9tOiAtM3JlbTtcbiAgICBsZWZ0OiAwcmVtO1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbiAgJl9fY2Fycml0byB7XG4gICAgaGVpZ2h0OiA0NDBweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAyMjBweCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZsb2F0aW5nIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmxvYXRpbmcgOHMgbGluZWFyIGluZmluaXRlO1xuICAgIEAtd2Via2l0LWtleWZyYW1lcyBmbG9hdGluZyB7XG4gICAgICAwJSwgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cblxuICAgICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgICAgIDAlLCAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuXG4gICAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX3BvbGlnb25vIHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGxlZnQ6IDI1JTtcbiAgICB0b3A6IDRyZW07XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSA5cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZSA5cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgfVxuXG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyByb3RhdGUge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAgIH1cblxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2N1cnNvciB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBsZWZ0OiA1NSU7XG4gICAgdG9wOiAxMHJlbTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY3Vyc29yVHJhbnNsYXRpb24gNHMgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IGN1cnNvclRyYW5zbGF0aW9uIDRzIGluZmluaXRlO1xuICAgIEAtd2Via2l0LWtleWZyYW1lcyBjdXJzb3JUcmFuc2xhdGlvbiB7XG4gICAgICAwJSwgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAzMyUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LCAtMzBweCk7XG4gICAgICB9XG5cbiAgICAgIDY2JSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDkwcHgsIDQwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGN1cnNvclRyYW5zbGF0aW9uIHtcbiAgICAgIDAlLCAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICB9XG5cbiAgICAgIDMzJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwcHgsIC0zMHB4KTtcbiAgICAgIH1cblxuICAgICAgNjYlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTBweCwgNDBweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XHJcbiIsIi5tYWluLWhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjREMkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiA1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLWhlcm8ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogNzY4cHg7XG4gICAgbWF4LWhlaWdodDogMTA4MHB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG59XG4ubWFpbi1oZXJvX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuICAubWFpbi1oZXJvX19jb3B5IHtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuLm1haW4taGVyb19fZG9udXQsIC5tYWluLWhlcm9fX2NhamEsIC5tYWluLWhlcm9fX2NhcnJpdG8sIC5tYWluLWhlcm9fX2N1cnNvciwgLm1haW4taGVyb19fcG9saWdvbm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1oZXJvX19kb251dCwgLm1haW4taGVyb19fY2FqYSwgLm1haW4taGVyb19fY2Fycml0bywgLm1haW4taGVyb19fY3Vyc29yLCAubWFpbi1oZXJvX19wb2xpZ29ubyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5tYWluLWhlcm9fX2RvbnV0IHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cbi5tYWluLWhlcm9fX2NhamEge1xuICBib3R0b206IC0zcmVtO1xuICBsZWZ0OiAwcmVtO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuLm1haW4taGVyb19fY2Fycml0byB7XG4gIGhlaWdodDogNDQwcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMjBweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmbG9hdGluZyA4cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogZmxvYXRpbmcgOHMgbGluZWFyIGluZmluaXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmbG9hdGluZyB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gIH1cbn1cbi5tYWluLWhlcm9fX3BvbGlnb25vIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbGVmdDogMjUlO1xuICB0b3A6IDRyZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgOXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHJvdGF0ZSA5cyBsaW5lYXIgaW5maW5pdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5tYWluLWhlcm9fX2N1cnNvciB7XG4gIGhlaWdodDogMTIwcHg7XG4gIGxlZnQ6IDU1JTtcbiAgdG9wOiAxMHJlbTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGN1cnNvclRyYW5zbGF0aW9uIDRzIGluZmluaXRlO1xuICBhbmltYXRpb246IGN1cnNvclRyYW5zbGF0aW9uIDRzIGluZmluaXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGN1cnNvclRyYW5zbGF0aW9uIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCwgLTMwcHgpO1xuICB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTBweCwgNDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY3Vyc29yVHJhbnNsYXRpb24ge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LCAtMzBweCk7XG4gIH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5MHB4LCA0MHB4KTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero',
                templateUrl: './hero.component.html',
                styleUrls: ['./hero.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/selected-project/selected-project.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/selected-project/selected-project.component.ts ***!
  \***************************************************************************/
/*! exports provided: SelectedProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedProjectComponent", function() { return SelectedProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = ["scrollContainer"];
function SelectedProjectComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Proyecto seleccionado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Visitar web ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proyecto_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyecto_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyecto_r3.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Servicios: ", proyecto_r3.servicios, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", proyecto_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", proyecto_r3.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SelectedProjectComponent {
    constructor() {
        this.proyectos = [
            {
                nombre: 'MAP-IT',
                descripcion: `Fundado en el 2019 en la industria del Turismo es la primera
plataforma ecommerce de experiencias inmersivas en Perú...`,
                servicios: 'Branding, fotografía, experiencia de usuario y desarrollo a medida.',
                imagen: 'assets/images/mapit-logo.png',
                link: 'https://map-it.pe'
            },
            {
                nombre: 'MAP-IT',
                descripcion: `Fundado en el 2019 en la industria del Turismo es la primera
plataforma ecommerce de experiencias inmersivas en Perú...`,
                servicios: 'Branding, fotografía, experiencia de usuario y desarrollo a medida.',
                imagen: 'assets/images/mapit-logo.png',
                link: 'https://map-it.pe'
            },
            {
                nombre: 'MAP-IT',
                descripcion: `Fundado en el 2019 en la industria del Turismo es la primera
plataforma ecommerce de experiencias inmersivas en Perú...`,
                servicios: 'Branding, fotografía, experiencia de usuario y desarrollo a medida.',
                imagen: 'assets/images/mapit-logo.png',
                link: 'https://map-it.pe'
            }
        ];
    }
    ngOnInit() { }
    onScroll(event) {
        const container = this.scrollContainer.nativeElement;
        const isScrollable = container.scrollWidth > container.clientWidth;
        const atStart = container.scrollLeft === 0;
        const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;
        const goingRight = event.deltaY > 0;
        const goingLeft = event.deltaY < 0;
        // Solo aplicar scroll horizontal si hay más para deslizar
        if (isScrollable && ((goingRight && !atEnd) || (goingLeft && !atStart))) {
            container.scrollLeft += event.deltaY;
            event.preventDefault(); // Evita el scroll vertical solo si hay scroll horizontal disponible
        }
    }
}
SelectedProjectComponent.ɵfac = function SelectedProjectComponent_Factory(t) { return new (t || SelectedProjectComponent)(); };
SelectedProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectedProjectComponent, selectors: [["app-selected-project"]], viewQuery: function SelectedProjectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollContainer = _t.first);
    } }, decls: 5, vars: 1, consts: [[1, "horizontal-scroll-section", "h-screen", "overflow-hidden", "bg-black", "text-white"], [1, "horizontal-wrapper", "flex", "h-full", "overflow-x-auto", "overflow-y-hidden", "snap-x", "snap-mandatory", "scroll-smooth", "scrollbar-hidden", 3, "wheel"], ["scrollContainer", "", "scrollContainer", ""], ["class", "snap-start w-screen flex-shrink-0 flex items-center px-12", 4, "ngFor", "ngForOf"], [1, "snap-start", "w-screen", "flex-shrink-0", "flex", "items-center", "px-12"], [1, "flex", "w-full", "flex-wrap"], [1, "w-1/2", "px-4"], [1, "text-sm", "mb-2"], [1, "text-5xl", "font-bold", "mb-4"], [1, "whitespace-pre-line", "mb-6"], [1, "mb-6"], ["target", "_blank", 1, "inline-flex", "items-center", "underline", "hover:opacity-70", "transition", 3, "href"], [1, "ml-2"], ["alt", "Mockup", 1, "rounded-lg", "w-full", "h-[400px]", "object-cover", 3, "src"]], template: function SelectedProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function SelectedProjectComponent_Template_div_wheel_1_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectedProjectComponent_div_4_Template, 17, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".selected-project-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #000;\n  color: #fff;\n  margin-bottom: -10px;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  border-bottom-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\n@media screen and (min-width: 768px) {\n  .selected-project-section[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, black 90%, transparent 90%);\n    display: block;\n    height: 768px;\n    margin-bottom: -84px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n}\n.selected-project-section__image[_ngcontent-%COMP%] {\n  width: 100%;\n  order: 0;\n}\n@media screen and (min-width: 768px) {\n  .selected-project-section__image[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    top: 84px;\n    right: 0;\n    height: 600px;\n    width: 50%;\n    -o-object-fit: cover;\n    object-fit: cover;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .selected-project-section__image[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n.selected-project-section__container[_ngcontent-%COMP%] {\n  order: 1;\n}\n.project-cta[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.project-cta__span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: 2px;\n  transition: all 0.3s;\n}\n.project-cta__img[_ngcontent-%COMP%] {\n  width: 200px;\n  transform: translateX(-25px);\n  transition: all 0.3s;\n}\n.project-cta[_ngcontent-%COMP%]:hover   .project-cta__span[_ngcontent-%COMP%] {\n  letter-spacing: 4px;\n}\n.project-cta[_ngcontent-%COMP%]:hover   .project-cta__img[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n}\n.scrollbar-hidden[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.scrollbar-hidden[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3RlZC1wcm9qZWN0L0M6XFxVc2Vyc1xcamNhbGRcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxlc2Vkb3ItZWNvbW1lcmNlXFxlc2Vkb3ItZWNvbW1lcmNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWxlY3RlZC1wcm9qZWN0XFxzZWxlY3RlZC1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdGVkLXByb2plY3Qvc2VsZWN0ZWQtcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtBQ0NGO0FEQUU7RUFWRjtJQVdJLDhEQUFBO0lBRUEsY0FBQTtJQUVBLGFBQUE7SUFFQSxvQkFBQTtJQUVBLDZCQUFBO0lBRUEsNEJBQUE7RUNGRjtBQUNGO0FER0U7RUFDRSxXQUFBO0VBQ0EsUUFBQTtBQ0RKO0FERUk7RUFIRjtJQUlJLGNBQUE7SUFFQSxrQkFBQTtJQUVBLFNBQUE7SUFFQSxRQUFBO0lBRUEsYUFBQTtJQUVBLFVBQUE7SUFFQSxvQkFBQTtJQUVHLGlCQUFBO0VDTlA7QUFDRjtBRE9JO0VBcEJGO0lBcUJJLFVBQUE7RUNKSjtBQUNGO0FETUU7RUFDRSxRQUFBO0FDSko7QURRQTtFQUNFLGdCQUFBO0FDTEY7QURNRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNKSjtBRE1FO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNKSjtBRE9JO0VBQ0UsbUJBQUE7QUNMTjtBRE9JO0VBQ0Usd0JBQUE7QUNMTjtBRFVBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFVBO0VBQ0UscUJBQUE7RUFBdUIsWUFBQTtFQUN2Qix3QkFBQTtFQUEwQiwyQkFBQTtBQ0w1QjtBRFFBO0VBQ0UsYUFBQTtFQUFlLDBCQUFBO0FDSmpCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3RlZC1wcm9qZWN0L3NlbGVjdGVkLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQtcHJvamVjdC1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIGJsYWNrIDkwJSwgdHJhbnNwYXJlbnQgOTAlKTtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaGVpZ2h0OiA3NjhweDtcblxuICAgIG1hcmdpbi1ib3R0b206IC04NHB4O1xuXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG5cbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG4gICZfX2ltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvcmRlcjogMDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgdG9wOiA4NHB4O1xuXG4gICAgICByaWdodDogMDtcblxuICAgICAgaGVpZ2h0OiA2MDBweDtcblxuICAgICAgd2lkdGg6IDUwJTtcblxuICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICB9XG4gICZfX2NvbnRhaW5lciB7XG4gICAgb3JkZXI6IDE7XG4gIH1cbn1cblxuLnByb2plY3QtY3RhIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJl9fc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxuICAmX19pbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1cHgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG4gICY6aG92ZXIge1xuICAgIC5wcm9qZWN0LWN0YV9fc3BhbiB7XG4gICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIH1cbiAgICAucHJvamVjdC1jdGFfX2ltZyB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICB9XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyAvLyBzb2xvIG9jdWx0YSBzY3JvbGwgaG9yaXpvbnRhbCBnbG9iYWxcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4ge1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG59XG5cbi5zY3JvbGxiYXItaGlkZGVuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xufVxyXG4iLCIuc2VsZWN0ZWQtcHJvamVjdC1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWxlY3RlZC1wcm9qZWN0LXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgYmxhY2sgOTAlLCB0cmFuc3BhcmVudCA5MCUpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNzY4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTg0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxufVxuLnNlbGVjdGVkLXByb2plY3Qtc2VjdGlvbl9faW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgb3JkZXI6IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2VsZWN0ZWQtcHJvamVjdC1zZWN0aW9uX19pbWFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogODRweDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuc2VsZWN0ZWQtcHJvamVjdC1zZWN0aW9uX19pbWFnZSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuLnNlbGVjdGVkLXByb2plY3Qtc2VjdGlvbl9fY29udGFpbmVyIHtcbiAgb3JkZXI6IDE7XG59XG5cbi5wcm9qZWN0LWN0YSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvamVjdC1jdGFfX3NwYW4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnByb2plY3QtY3RhX19pbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjVweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnByb2plY3QtY3RhOmhvdmVyIC5wcm9qZWN0LWN0YV9fc3BhbiB7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG59XG4ucHJvamVjdC1jdGE6aG92ZXIgLnByb2plY3QtY3RhX19pbWcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uc2Nyb2xsYmFyLWhpZGRlbiB7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLyogRmlyZWZveCAqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbn1cblxuLnNjcm9sbGJhci1oaWRkZW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selected-project',
                templateUrl: './selected-project.component.html',
                styleUrls: ['./selected-project.component.scss']
            }]
    }], function () { return []; }, { scrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollContainer', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ServicesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r2.description);
} }
function ServicesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imagePath + service_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", service_r3.title)("title", service_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.description);
} }
class ServicesComponent {
    constructor() {
        this.imagePath = 'assets/images/';
        this.config = {
            slidesPerView: 'auto',
            navigation: false,
            pagination: false
        };
        this.services = [
            {
                title: 'Escala tu negocio con la tecnología de los grandes',
                description: 'No necesitas ser una gran empresa para tener una tienda online de nivel empresarial. Con nuestra solución, tendrás acceso a las mismas herramientas y tecnología que las grandes marcas, adaptadas a las necesidades de tu negocio, sin costos excesivos.',
                image: 'escala.svg'
            },
            {
                title: 'Un equipo experto en constante evolución para tu negocio',
                description: 'Tu tienda estará en manos de un equipo de expertos que no solo entiende el presente, sino que está siempre a la vanguardia de las últimas tendencias y herramientas. Esto significa que tu tienda se mantendrá siempre actualizada, escalando con las necesidades de tu negocio.',
                image: 'equipo.svg'
            },
            {
                title: 'Implementación rápida, resultados inmediatos',
                description: 'Olvídate de meses de espera. Nuestra implementación ágil te permite lanzar tu tienda online rápidamente, sin sacrificar calidad. Implementamos las mejores prácticas de UX/UI, SEO, CRO y velocidad de carga para garantizar que cada visitante tenga la mejor experiencia de compra.',
                image: 'implementacion.svg'
            },
            {
                title: 'Escala sin límites: tu tienda crece contigo',
                description: 'Te ayudamos a construir una tienda que no solo funcione ahora, sino que crezca contigo. Desde el inicio, nuestras soluciones están pensadas para escalar: desde un catálogo pequeño hasta miles de productos, con integración total y sin fricciones.',
                image: ''
            },
        ];
    }
    ngOnInit() { }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 15, vars: 3, consts: [[1, "flex", "md:hidden", "pt-16", "pb-12"], [1, "container", "m-auto"], [1, "w-full", "px-4", "mb-12"], [1, "flex", "text-2xl", "text-center", "leading-tight", "font-light", "justify-center"], [1, "swiper-container", 3, "swiper"], [1, "swiper-wrapper", "pb-8"], ["class", "w-1/3 flex swiper-slide", 4, "ngFor", "ngForOf"], [1, "section-services", "hidden", "md:flex", "pt-20", "pb-12"], [1, "container", "mx-auto"], [1, "w-full", "px-4", "md:px-6", "mb-16"], [1, "flex", "text-white", "text-4xl", "leading-tight", "font-light", "justify-center"], [1, "flex", "flex-wrap"], ["class", "w-1/2 lg:w-1/4 service-item px-6 mb-16", 4, "ngFor", "ngForOf"], [1, "w-1/3", "flex", "swiper-slide"], [1, "service-responsive-item"], [1, "service-responsive-item__title"], [1, "text-center", "text-xl", "font-bold"], [1, "service-responsive-item__content"], [1, "text-black", "mb-8", "text-[0.5rem]"], [1, "w-1/2", "lg:w-1/4", "service-item", "px-6", "mb-16"], [1, "w-16", "h-16", "object-contain", 3, "src", "alt", "title"], [1, "text-lg", "font-bold", "mb-6", "mt-6"], [1, "text-sm"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Beneficios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServicesComponent_div_7_Template, 8, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Beneficios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ServicesComponent_div_14_Template, 6, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
    } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@charset \"UTF-8\";\n.section-services[_ngcontent-%COMP%] {\n  background-color: #000;\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n}\n.service-item[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.service-responsive-item[_ngcontent-%COMP%] {\n  width: 250px;\n  margin: auto;\n  border-radius: 5px;\n  transition: all 0.3s;\n  position: relative;\n}\n.service-responsive-item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--blue);\n  display: block;\n  width: 286px;\n  height: 330px;\n  position: absolute;\n  left: -18px;\n  top: 25px;\n  z-index: 0;\n  border-radius: 5px;\n}\n.service-responsive-item__title[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  height: 156px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1.5rem;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  position: relative;\n  z-index: 1;\n}\n.service-responsive-item__content[_ngcontent-%COMP%] {\n  height: 265px;\n  padding: 1rem 1.5rem;\n  text-align: center;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 10px 20px rgba(0, 41, 255, 0.4);\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  position: relative;\n  background-color: #fff;\n  z-index: 1;\n}\n.swiper-slide[_ngcontent-%COMP%]:not(.swiper-slide-active)   .service-responsive-item[_ngcontent-%COMP%] {\n  transform: scale(0.75);\n  opacity: 0;\n}\n.servi-item__image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  border: 2px solid red;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9DOlxcVXNlcnNcXGpjYWxkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZXNlZG9yLWVjb21tZXJjZVxcZXNlZG9yLWVjb21tZXJjZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VydmljZXNcXHNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURFRjtBQ0NBO0VBQ0UsV0FBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBREVGO0FDREU7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FER0o7QUNERTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBREdKO0FDREU7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FER0o7QUNFRTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtBRENKO0FDR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUF1QixtQ0FBQTtBREN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2VjdGlvbi1zZXJ2aWNlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zZXJ2aWNlLWl0ZW0ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlcnZpY2UtcmVzcG9uc2l2ZS1pdGVtIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZXJ2aWNlLXJlc3BvbnNpdmUtaXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyODZweDtcbiAgaGVpZ2h0OiAzMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMThweDtcbiAgdG9wOiAyNXB4O1xuICB6LWluZGV4OiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2VydmljZS1yZXNwb25zaXZlLWl0ZW1fX3RpdGxlIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTU2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uc2VydmljZS1yZXNwb25zaXZlLWl0ZW1fX2NvbnRlbnQge1xuICBoZWlnaHQ6IDI2NXB4O1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgNDEsIDI1NSwgMC40KTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zd2lwZXItc2xpZGU6bm90KC5zd2lwZXItc2xpZGUtYWN0aXZlKSAuc2VydmljZS1yZXNwb25zaXZlLWl0ZW0ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uc2VydmktaXRlbV9faW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgLyogcGFyYSBxdWUgdmVhcyBzaSBlc3TDoSBjYXJnYW5kbyAqL1xufSIsIi5zZWN0aW9uLXNlcnZpY2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnNlcnZpY2UtaXRlbSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VydmljZS1yZXNwb25zaXZlLWl0ZW0ge1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI4NnB4O1xuICAgIGhlaWdodDogMzMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xOHB4O1xuICAgIHRvcDogMjVweDtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICAmX190aXRsZSB7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDE1NnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAmX19jb250ZW50IHtcbiAgICBoZWlnaHQ6IDI2NXB4O1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCA0MSwgMjU1LCAwLjQpO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbn1cblxuLnN3aXBlci1zbGlkZTpub3QoLnN3aXBlci1zbGlkZS1hY3RpdmUpIHtcbiAgLnNlcnZpY2UtcmVzcG9uc2l2ZS1pdGVtIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43NSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uc2VydmktaXRlbV9faW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgLyogcGFyYSBxdWUgdmVhcyBzaSBlc3TDoSBjYXJnYW5kbyAqL1xufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/steps-slider-test/steps-slider-test.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/steps-slider-test/steps-slider-test.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StepsSliderTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsSliderTestComponent", function() { return StepsSliderTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var src_app_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modal.service */ "./src/app/modal.service.ts");




gsap_all__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
class StepsSliderTestComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
        gsap_all__WEBPACK_IMPORTED_MODULE_1__["gsap"].to('.steps-slider__container', {
            scrollTrigger: {
                trigger: '.steps-slider__container',
                start: 'top top',
                pinSpacing: false,
                pin: true,
                scrub: true
            },
            x: () => {
                const stepsSliderItem = document.querySelector('.steps-slider__item');
                return `-=${stepsSliderItem.offsetWidth}`;
            }
        });
    }
    openModal() {
        this.modalService.updateModalState(true);
    }
}
StepsSliderTestComponent.ɵfac = function StepsSliderTestComponent_Factory(t) { return new (t || StepsSliderTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
StepsSliderTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepsSliderTestComponent, selectors: [["app-steps-slider-test"]], decls: 31, vars: 0, consts: [[1, "steps-slider", "hidden", "md:flex"], [1, "steps-slider__container"], [1, "swiper-wrapper"], [1, "swiper-slide", "flex", "items-center", "steps-slider__item", "text-white", "px-3", "my-auto", 2, "width", "90%"], [1, "flex", "flex-wrap"], [1, "w-1/2", "flex", "flex-col", "items-start", "py-8", "pr-12"], [1, "font-bold"], [1, "text-2xl", "lg:text-3xl", "font-light", "mb-4"], [1, "mb-12"], ["id", "desktopSteps-step-4", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", "mt-auto", 3, "click"], ["src", "assets/images/right-arrow-white.svg", 1, "ml-4", 2, "height", "14px"], [1, "w-1/2", "pl-0", "lg:pl-12", "pr-6", "lg:pr-12"], ["src", "assets/images/steps/step-04.svg", 2, "height", "420px"], ["id", "desktopSteps-step-5", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", "mt-auto", 3, "click"], ["src", "assets/images/steps/step-05.svg", 2, "height", "420px"]], template: function StepsSliderTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CUARTO PASO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LSeleccionamos la tecnolog\u00EDa y definimos el alcance del proyecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Evaluamos entre desarrollar un c\u00F3digo personalizado o usar soluciones de c\u00F3digo abierto, y luego definimos los sprints clave para asegurar el impacto comercial de tu tienda online.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsSliderTestComponent_Template_button_click_12_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " CONVERSEMOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "QUINTO PASO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Performance de tu producto digital y potenciamos tus ventas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Estrategias integrales de marketing, combinando Social Media, UX/UI, Google Ads, SEO y CRO para aumentar visibilidad, atraer clientes y lograr un crecimiento sostenido.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsSliderTestComponent_Template_button_click_26_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " CONVERSEMOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".steps-slider[_ngcontent-%COMP%] {\n  background: #000;\n  height: 200vh;\n  min-height: 768px;\n}\n.steps-slider__container[_ngcontent-%COMP%] {\n  padding-left: calc((100% - 860px)/2 + 1rem);\n  height: 100vh;\n}\n@media screen and (min-width: 1050px) {\n  .steps-slider__container[_ngcontent-%COMP%] {\n    padding-left: calc((100% - 1024px)/2 + 1rem);\n  }\n}\n@media screen and (min-width: 1200px) {\n  .steps-slider__container[_ngcontent-%COMP%] {\n    padding-left: calc((100% - 1140px)/2 + 1rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGVwcy1zbGlkZXItdGVzdC9DOlxcVXNlcnNcXGpjYWxkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZXNlZG9yLWVjb21tZXJjZVxcZXNlZG9yLWVjb21tZXJjZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcc3RlcHMtc2xpZGVyLXRlc3RcXHN0ZXBzLXNsaWRlci10ZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0ZXBzLXNsaWRlci10ZXN0L3N0ZXBzLXNsaWRlci10ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNDRjtBREFFO0VBQ0UsMkNBQUE7RUFDQSxhQUFBO0FDRUo7QURESTtFQUhGO0lBSUksNENBQUE7RUNJSjtBQUNGO0FESEk7RUFORjtJQU9JLDRDQUFBO0VDTUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RlcHMtc2xpZGVyLXRlc3Qvc3RlcHMtc2xpZGVyLXRlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHMtc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgaGVpZ2h0OiAyMDB2aDtcbiAgbWluLWhlaWdodDogNzY4cHg7XG4gICZfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKCgxMDAlIC0gODYwcHgpLzIgKyAxcmVtKTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNTBweCkge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCgxMDAlIC0gMTAyNHB4KS8yICsgMXJlbSk7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCgxMDAlIC0gMTE0MHB4KS8yICsgMXJlbSk7XG4gICAgfVxuICB9XG59XHJcbiIsIi5zdGVwcy1zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBoZWlnaHQ6IDIwMHZoO1xuICBtaW4taGVpZ2h0OiA3NjhweDtcbn1cbi5zdGVwcy1zbGlkZXJfX2NvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogY2FsYygoMTAwJSAtIDg2MHB4KS8yICsgMXJlbSk7XG4gIGhlaWdodDogMTAwdmg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDUwcHgpIHtcbiAgLnN0ZXBzLXNsaWRlcl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoKDEwMCUgLSAxMDI0cHgpLzIgKyAxcmVtKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zdGVwcy1zbGlkZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKCgxMDAlIC0gMTE0MHB4KS8yICsgMXJlbSk7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepsSliderTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-steps-slider-test',
                templateUrl: './steps-slider-test.component.html',
                styleUrls: ['./steps-slider-test.component.scss']
            }]
    }], function () { return [{ type: src_app_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modal.service.ts":
/*!**********************************!*\
  !*** ./src/app/modal.service.ts ***!
  \**********************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ModalService {
    constructor() {
        this.modalState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.modalState$ = this.modalState.asObservable();
    }
    updateModalState(updatedState) {
        this.modalState.next(updatedState);
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/gracias/gracias.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/gracias/gracias.component.ts ***!
  \****************************************************/
/*! exports provided: GraciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraciasComponent", function() { return GraciasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GraciasComponent {
    constructor() { }
    ngOnInit() {
    }
}
GraciasComponent.ɵfac = function GraciasComponent_Factory(t) { return new (t || GraciasComponent)(); };
GraciasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraciasComponent, selectors: [["app-gracias"]], decls: 20, vars: 0, consts: [[1, "gracias-hero"], [1, "container", "m-auto", "relative", "z-10"], [1, "flex", "flex-wrap", "flex-col", "px-6"], [1, "w-full", "lg:w-8/12", "mx-auto", "sm:pr-24"], [1, "font-medium", "text-3xl", "sm:text-5xl"], [1, "font-light", "textl-xl", "sm:text-3xl", "mb-6"], [1, "mb-12", "sm:mb-24", "pr-8"], ["id", "gracias-backCta", "href", "https://esedor.com", 1, "btn", "btn-primary"], [1, "gracias-hero__poligono"], ["src", "assets/images/hero/poligono.png"], [1, "gracias-hero__donut"], ["src", "assets/images/hero/donut-small.png"], [1, "gracias-hero__carrito"], ["src", "assets/images/hero/carrito.png"], [1, "gracias-hero__cursor"], ["src", "assets/images/hero/cursor.png"]], template: function GraciasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A1Muchas gracias!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Recibimos tu mensaje con \u00E9xito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nos pondremos en contacto muy pronto para ayudarte con tu ecommerce, te invitamos a seguir explorando m\u00E1s de lo que hacemos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Seguir explorando");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".gracias-hero[_ngcontent-%COMP%] {\n  background-color: #B4D2FF;\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n}\n.gracias-hero__container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.gracias-hero__donut[_ngcontent-%COMP%], .gracias-hero__caja[_ngcontent-%COMP%], .gracias-hero__carrito[_ngcontent-%COMP%], .gracias-hero__cursor[_ngcontent-%COMP%], .gracias-hero__poligono[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.gracias-hero__donut[_ngcontent-%COMP%] {\n  top: 0;\n  right: 80px;\n  transform: rotate(90deg);\n  transform-origin: right;\n}\n.gracias-hero__carrito[_ngcontent-%COMP%] {\n  display: none;\n  height: 440px;\n  bottom: 4rem;\n  right: 0rem;\n  -webkit-animation: floating 5s ease-in infinite;\n  animation: floating 5s ease-in infinite;\n}\n@media screen and (min-width: 992px) {\n  .gracias-hero__carrito[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .gracias-hero__carrito[_ngcontent-%COMP%] {\n    right: 5rem;\n  }\n}\n@-webkit-keyframes floating {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(3rem);\n  }\n}\n@keyframes floating {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(3rem);\n  }\n}\n.gracias-hero__poligono[_ngcontent-%COMP%] {\n  height: 80px;\n  left: 20px;\n  top: 2rem;\n  -webkit-animation: rotate 7s linear infinite;\n  animation: rotate 7s linear infinite;\n}\n.gracias-hero__poligono[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n}\n@media screen and (min-width: 640px) {\n  .gracias-hero__poligono[_ngcontent-%COMP%] {\n    height: 120px;\n    top: 4rem;\n    left: 50px;\n  }\n  .gracias-hero__poligono[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n}\n@-webkit-keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.gracias-hero__cursor[_ngcontent-%COMP%] {\n  height: 100px;\n  left: 35%;\n  bottom: 30px;\n  -webkit-animation: cursorTranslation 4s infinite;\n  animation: cursorTranslation 4s infinite;\n}\n@-webkit-keyframes cursorTranslation {\n  0%, 100% {\n    transform: translate(0);\n  }\n  33% {\n    transform: translate(40px, -30px);\n  }\n  66% {\n    transform: translate(90px, 40px);\n  }\n}\n@keyframes cursorTranslation {\n  0%, 100% {\n    transform: translate(0);\n  }\n  33% {\n    transform: translate(40px, -30px);\n  }\n  66% {\n    transform: translate(90px, 40px);\n  }\n}\n.gracias-hero__cursor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JhY2lhcy9DOlxcVXNlcnNcXGpjYWxkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZXNlZG9yLWVjb21tZXJjZVxcZXNlZG9yLWVjb21tZXJjZS9zcmNcXGFwcFxccGFnZXNcXGdyYWNpYXNcXGdyYWNpYXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2dyYWNpYXMvZ3JhY2lhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0VKO0FEQUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0csc0JBQUE7RUFDQyxxQkFBQTtFQUNJLGlCQUFBO0FDRVo7QURBRTtFQUNFLE1BQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDUSx1Q0FBQTtBQ0VaO0FEREk7RUFQRjtJQVFJLGNBQUE7RUNJSjtBQUNGO0FESEk7RUFWRjtJQVdJLFdBQUE7RUNNSjtBQUNGO0FETEk7RUFDRTtJQUNFLHdCQUFBO0VDT047RURKSTtJQUNFLDJCQUFBO0VDTU47QUFDRjtBREpJO0VBQ0U7SUFDRSx3QkFBQTtFQ01OO0VESEk7SUFDRSwyQkFBQTtFQ0tOO0FBQ0Y7QURGRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0VBQ1Esb0NBQUE7QUNJWjtBREhJO0VBQ0UsWUFBQTtBQ0tOO0FESEk7RUFURjtJQVVJLGFBQUE7SUFFQSxTQUFBO0lBRUEsVUFBQTtFQ0lKO0VERkk7SUFDRSxhQUFBO0VDSU47QUFDRjtBREZJO0VBQ0U7SUFDRSxvQkFBQTtFQ0lOO0VEREk7SUFDRSx5QkFBQTtFQ0dOO0FBQ0Y7QURESTtFQUNFO0lBQ0Usb0JBQUE7RUNHTjtFREFJO0lBQ0UseUJBQUE7RUNFTjtBQUNGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNRLHdDQUFBO0FDQ1o7QURBSTtFQUNFO0lBQ0UsdUJBQUE7RUNFTjtFRENJO0lBQ0UsaUNBQUE7RUNDTjtFREVJO0lBQ0UsZ0NBQUE7RUNBTjtBQUNGO0FERUk7RUFDRTtJQUNFLHVCQUFBO0VDQU47RURHSTtJQUNFLGlDQUFBO0VDRE47RURJSTtJQUNFLGdDQUFBO0VDRk47QUFDRjtBRElJO0VBQ0UsYUFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JhY2lhcy9ncmFjaWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYWNpYXMtaGVybyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNEQyRkY7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgJl9fY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAmX19kb251dCwgJl9fY2FqYSwgJl9fY2Fycml0bywgJl9fY3Vyc29yLCAmX19wb2xpZ29ubyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgJl9fZG9udXQge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogODBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG4gIH1cbiAgJl9fY2Fycml0byB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgIGJvdHRvbTogNHJlbTtcbiAgICByaWdodDogMHJlbTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmxvYXRpbmcgNXMgZWFzZS1pbiBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmxvYXRpbmcgNXMgZWFzZS1pbiBpbmZpbml0ZTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgICAgcmlnaHQ6IDVyZW07XG4gICAgfVxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBmbG9hdGluZyB7XG4gICAgICAwJSwgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cblxuICAgICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgICAgIDAlLCAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuXG4gICAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX3BvbGlnb25vIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbGVmdDogMjBweDtcbiAgICB0b3A6IDJyZW07XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSA3cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZSA3cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAgIGhlaWdodDogMTIwcHg7XG5cbiAgICAgIHRvcDogNHJlbTtcblxuICAgICAgbGVmdDogNTBweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgfVxuXG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyByb3RhdGUge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAgIH1cblxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2N1cnNvciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBsZWZ0OiAzNSU7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjdXJzb3JUcmFuc2xhdGlvbiA0cyBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogY3Vyc29yVHJhbnNsYXRpb24gNHMgaW5maW5pdGU7XG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGN1cnNvclRyYW5zbGF0aW9uIHtcbiAgICAgIDAlLCAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICB9XG5cbiAgICAgIDMzJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwcHgsIC0zMHB4KTtcbiAgICAgIH1cblxuICAgICAgNjYlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTBweCwgNDBweCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgY3Vyc29yVHJhbnNsYXRpb24ge1xuICAgICAgMCUsIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgIH1cblxuICAgICAgMzMlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCwgLTMwcHgpO1xuICAgICAgfVxuXG4gICAgICA2NiUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5MHB4LCA0MHB4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICB9XG59XHJcbiIsIi5ncmFjaWFzLWhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjREMkZGO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZ3JhY2lhcy1oZXJvX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uZ3JhY2lhcy1oZXJvX19kb251dCwgLmdyYWNpYXMtaGVyb19fY2FqYSwgLmdyYWNpYXMtaGVyb19fY2Fycml0bywgLmdyYWNpYXMtaGVyb19fY3Vyc29yLCAuZ3JhY2lhcy1oZXJvX19wb2xpZ29ubyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5ncmFjaWFzLWhlcm9fX2RvbnV0IHtcbiAgdG9wOiAwO1xuICByaWdodDogODBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbn1cbi5ncmFjaWFzLWhlcm9fX2NhcnJpdG8ge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDQ0MHB4O1xuICBib3R0b206IDRyZW07XG4gIHJpZ2h0OiAwcmVtO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmxvYXRpbmcgNXMgZWFzZS1pbiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBmbG9hdGluZyA1cyBlYXNlLWluIGluZmluaXRlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmdyYWNpYXMtaGVyb19fY2Fycml0byB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAuZ3JhY2lhcy1oZXJvX19jYXJyaXRvIHtcbiAgICByaWdodDogNXJlbTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmbG9hdGluZyB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gIH1cbn1cbi5ncmFjaWFzLWhlcm9fX3BvbGlnb25vIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBsZWZ0OiAyMHB4O1xuICB0b3A6IDJyZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgN3MgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHJvdGF0ZSA3cyBsaW5lYXIgaW5maW5pdGU7XG59XG4uZ3JhY2lhcy1oZXJvX19wb2xpZ29ubyBpbWcge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuICAuZ3JhY2lhcy1oZXJvX19wb2xpZ29ubyB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB0b3A6IDRyZW07XG4gICAgbGVmdDogNTBweDtcbiAgfVxuICAuZ3JhY2lhcy1oZXJvX19wb2xpZ29ubyBpbWcge1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLmdyYWNpYXMtaGVyb19fY3Vyc29yIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbGVmdDogMzUlO1xuICBib3R0b206IDMwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjdXJzb3JUcmFuc2xhdGlvbiA0cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBjdXJzb3JUcmFuc2xhdGlvbiA0cyBpbmZpbml0ZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBjdXJzb3JUcmFuc2xhdGlvbiB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwcHgsIC0zMHB4KTtcbiAgfVxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDkwcHgsIDQwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGN1cnNvclRyYW5zbGF0aW9uIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCwgLTMwcHgpO1xuICB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTBweCwgNDBweCk7XG4gIH1cbn1cbi5ncmFjaWFzLWhlcm9fX2N1cnNvciBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraciasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gracias',
                templateUrl: './gracias.component.html',
                styleUrls: ['./gracias.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/contact-modal/contact-modal.component */ "./src/app/components/contact-modal/contact-modal.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hero/hero.component */ "./src/app/components/hero/hero.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_comercio_comercio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/comercio/comercio.component */ "./src/app/components/comercio/comercio.component.ts");
/* harmony import */ var _components_formula_formula_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/formula/formula.component */ "./src/app/components/formula/formula.component.ts");
/* harmony import */ var _components_allies_allies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/allies/allies.component */ "./src/app/components/allies/allies.component.ts");
/* harmony import */ var _components_selected_project_selected_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/selected-project/selected-project.component */ "./src/app/components/selected-project/selected-project.component.ts");
/* harmony import */ var _components_hero_footer_hero_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/hero-footer/hero-footer.component */ "./src/app/components/hero-footer/hero-footer.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");












class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 0, consts: [["id", "main-hero"], [1, "relative", "bg-white"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-contact-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-comercio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-formula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-allies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-selected-project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-hero-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_1__["ContactModalComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__["HeroComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"], _components_comercio_comercio_component__WEBPACK_IMPORTED_MODULE_5__["ComercioComponent"], _components_formula_formula_component__WEBPACK_IMPORTED_MODULE_6__["FormulaComponent"], _components_allies_allies_component__WEBPACK_IMPORTED_MODULE_7__["AlliesComponent"], _components_selected_project_selected_project_component__WEBPACK_IMPORTED_MODULE_8__["SelectedProjectComponent"], _components_hero_footer_hero_footer_component__WEBPACK_IMPORTED_MODULE_9__["HeroFooterComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/whatsapp/whatsapp.component.ts":
/*!************************************************!*\
  !*** ./src/app/whatsapp/whatsapp.component.ts ***!
  \************************************************/
/*! exports provided: WhatsappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappComponent", function() { return WhatsappComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WhatsappComponent {
    constructor() { }
    ngOnInit() {
    }
}
WhatsappComponent.ɵfac = function WhatsappComponent_Factory(t) { return new (t || WhatsappComponent)(); };
WhatsappComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhatsappComponent, selectors: [["app-whatsapp"]], decls: 3, vars: 0, consts: [[1, "fixed", "top-[38rem]", "right-5", "z-[999]", "wsp-icono"], ["href", "https://wa.me/1234567890", "target", "_blank", "rel", "noopener noreferrer"], ["alt", "Arrow", "src", "assets/images/icono-whatsapp.svg", 1, "w-[39.6px]", "lg:w-[60%]", "2xl:w-[100%]"]], template: function WhatsappComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wsp-icono[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 38rem;\n  right: 5px;\n  z-index: 10000000000000000000000000000000000000000000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hhdHNhcHAvQzpcXFVzZXJzXFxqY2FsZFxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXGVzZWRvci1lY29tbWVyY2VcXGVzZWRvci1lY29tbWVyY2Uvc3JjXFxhcHBcXHdoYXRzYXBwXFx3aGF0c2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2hhdHNhcHAvd2hhdHNhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx3REFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd2hhdHNhcHAvd2hhdHNhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3NwLWljb25ve1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzhyZW07XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk7XG59XHJcbiIsIi53c3AtaWNvbm8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzhyZW07XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhatsappComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-whatsapp',
                templateUrl: './whatsapp.component.html',
                styleUrls: ['./whatsapp.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    contactFormApi: 'http://localhost:4000/contact-form'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jcald\OneDrive\Escritorio\esedor-ecommerce\esedor-ecommerce\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map