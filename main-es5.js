function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/ally.ts":
  /*!*************************!*\
    !*** ./src/app/ally.ts ***!
    \*************************/

  /*! exports provided: Ally */

  /***/
  function srcAppAllyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ally", function () {
      return Ally;
    });

    var Ally = function Ally(name, image) {
      _classCallCheck(this, Ally);

      this.name = name;
      this.image = image;
    };
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_gracias_gracias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/gracias/gracias.component */
    "./src/app/pages/gracias/gracias.component.ts");

    var routes = [{
      path: '',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'gracias',
      component: _pages_gracias_gracias_component__WEBPACK_IMPORTED_MODULE_3__["GraciasComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-google-tag-manager */
    "./node_modules/angular-google-tag-manager/__ivy_ngcc__/fesm2015/angular-google-tag-manager.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(gtmService) {
        _classCallCheck(this, AppComponent);

        this.gtmService = gtmService;
        this.title = 'frontend-angular-test';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.gtmService.addGtmToDom();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_1__["GoogleTagManagerService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_1__["GoogleTagManagerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-parallax-scroll */
    "./node_modules/ngx-parallax-scroll/__ivy_ngcc__/fesm2015/ngx-parallax-scroll.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-google-analytics */
    "./node_modules/ngx-google-analytics/__ivy_ngcc__/fesm2015/ngx-google-analytics.js");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/hero/hero.component */
    "./src/app/components/hero/hero.component.ts");
    /* harmony import */


    var _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/services/services.component */
    "./src/app/components/services/services.component.ts");
    /* harmony import */


    var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/contact-form/contact-form.component */
    "./src/app/components/contact-form/contact-form.component.ts");
    /* harmony import */


    var _components_allies_allies_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/allies/allies.component */
    "./src/app/components/allies/allies.component.ts");
    /* harmony import */


    var _components_formula_steps_steps_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/formula/steps/steps.component */
    "./src/app/components/formula/steps/steps.component.ts");
    /* harmony import */


    var _components_formula_steps_slider_steps_slider_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/formula/steps-slider/steps-slider.component */
    "./src/app/components/formula/steps-slider/steps-slider.component.ts");
    /* harmony import */


    var _components_formula_formula_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/formula/formula.component */
    "./src/app/components/formula/formula.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_gracias_gracias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/gracias/gracias.component */
    "./src/app/pages/gracias/gracias.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_hero_footer_hero_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/hero-footer/hero-footer.component */
    "./src/app/components/hero-footer/hero-footer.component.ts");
    /* harmony import */


    var _components_selected_project_selected_project_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/selected-project/selected-project.component */
    "./src/app/components/selected-project/selected-project.component.ts");
    /* harmony import */


    var _components_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/contact-modal/contact-modal.component */
    "./src/app/components/contact-modal/contact-modal.component.ts");
    /* harmony import */


    var _modal_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./modal.service */
    "./src/app/modal.service.ts");
    /* harmony import */


    var _components_steps_slider_test_steps_slider_test_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/steps-slider-test/steps-slider-test.component */
    "./src/app/components/steps-slider-test/steps-slider-test.component.ts");
    /* harmony import */


    var _components_comercio_comercio_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/comercio/comercio.component */
    "./src/app/components/comercio/comercio.component.ts");

    var DEFAULT_SWIPER_CONFIG = {
      direction: 'horizontal',
      slidesPerView: 'auto'
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_modal_service__WEBPACK_IMPORTED_MODULE_24__["ModalService"], {
        provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SWIPER_CONFIG"],
        useValue: DEFAULT_SWIPER_CONFIG
      }, {
        provide: 'googleTagManagerId',
        useValue: 'GTM-TT62JBS'
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__["NgxParallaxScrollModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"], ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__["NgxGoogleAnalyticsModule"].forRoot('UA-133445489-1')]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_11__["HeroComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_13__["ContactFormComponent"], _components_allies_allies_component__WEBPACK_IMPORTED_MODULE_14__["AlliesComponent"], _components_formula_steps_steps_component__WEBPACK_IMPORTED_MODULE_15__["StepsComponent"], _components_formula_steps_slider_steps_slider_component__WEBPACK_IMPORTED_MODULE_16__["StepsSliderComponent"], _components_formula_formula_component__WEBPACK_IMPORTED_MODULE_17__["FormulaComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _pages_gracias_gracias_component__WEBPACK_IMPORTED_MODULE_19__["GraciasComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"], _components_hero_footer_hero_footer_component__WEBPACK_IMPORTED_MODULE_21__["HeroFooterComponent"], _components_selected_project_selected_project_component__WEBPACK_IMPORTED_MODULE_22__["SelectedProjectComponent"], _components_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_23__["ContactModalComponent"], _components_steps_slider_test_steps_slider_test_component__WEBPACK_IMPORTED_MODULE_25__["StepsSliderTestComponent"], _components_comercio_comercio_component__WEBPACK_IMPORTED_MODULE_26__["ComercioComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__["NgxParallaxScrollModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"], ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__["NgxGoogleAnalyticsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_11__["HeroComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_13__["ContactFormComponent"], _components_allies_allies_component__WEBPACK_IMPORTED_MODULE_14__["AlliesComponent"], _components_formula_steps_steps_component__WEBPACK_IMPORTED_MODULE_15__["StepsComponent"], _components_formula_steps_slider_steps_slider_component__WEBPACK_IMPORTED_MODULE_16__["StepsSliderComponent"], _components_formula_formula_component__WEBPACK_IMPORTED_MODULE_17__["FormulaComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _pages_gracias_gracias_component__WEBPACK_IMPORTED_MODULE_19__["GraciasComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"], _components_hero_footer_hero_footer_component__WEBPACK_IMPORTED_MODULE_21__["HeroFooterComponent"], _components_selected_project_selected_project_component__WEBPACK_IMPORTED_MODULE_22__["SelectedProjectComponent"], _components_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_23__["ContactModalComponent"], _components_steps_slider_test_steps_slider_test_component__WEBPACK_IMPORTED_MODULE_25__["StepsSliderTestComponent"], _components_comercio_comercio_component__WEBPACK_IMPORTED_MODULE_26__["ComercioComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__["NgxParallaxScrollModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"], ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__["NgxGoogleAnalyticsModule"].forRoot('UA-133445489-1')],
          providers: [_modal_service__WEBPACK_IMPORTED_MODULE_24__["ModalService"], {
            provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SWIPER_CONFIG"],
            useValue: DEFAULT_SWIPER_CONFIG
          }, {
            provide: 'googleTagManagerId',
            useValue: 'GTM-TT62JBS'
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/allies/allies.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/allies/allies.component.ts ***!
    \*******************************************************/

  /*! exports provided: AlliesComponent */

  /***/
  function srcAppComponentsAlliesAlliesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlliesComponent", function () {
      return AlliesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../ally */
    "./src/app/ally.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AlliesComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ally_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imagePath + ally_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ally_r1.name)("title", ally_r1.name);
      }
    }

    var AlliesComponent = /*#__PURE__*/function () {
      function AlliesComponent() {
        _classCallCheck(this, AlliesComponent);

        this.imagePath = 'assets/images/';
        this.allies = [new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('Niubiz', 'niubiz.svg'), new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('Toulou', 'toulou.svg'), new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('CCL', 'ccl.svg'), new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('Urbaner', 'urbaner.svg'), new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('MapIt', 'map-it.svg'), new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('infomatica', 'infomatica.svg'), new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('Svitzer', 'svitzer.svg'), new _ally__WEBPACK_IMPORTED_MODULE_1__["Ally"]('dohwa', 'dohwa.svg')];
      }

      _createClass(AlliesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlliesComponent;
    }();

    AlliesComponent.ɵfac = function AlliesComponent_Factory(t) {
      return new (t || AlliesComponent)();
    };

    AlliesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlliesComponent,
      selectors: [["app-allies"]],
      decls: 14,
      vars: 1,
      consts: [["id", "alliesSection", 1, "allies", "mb-12"], [1, "container", "mx-auto"], [1, "flex", "flex-wrap", "items-center"], [1, "w-full", "md:hidden", "mx-auto", "px-4", "mb-12", "md:mb-0"], [1, "text-2xl", "leading-tight", "font-light", "text-center"], [1, "w-full", "md:w-8/12", "lg:w-7/12", "px-6"], [1, "flex", "flex-wrap"], ["class", "w-1/2 sm:w-1/3", 4, "ngFor", "ngForOf"], [1, "w-full", "md:w-3/12", "mx-auto", "px-4", "hidden", "md:block"], [1, "text-4xl", "lg:text-5xl", "leading-tight", "font-light", "text-left"], [1, "w-1/2", "sm:w-1/3"], [1, "ally-item"], [1, "ally-item__image", 3, "src", "alt", "title"]],
      template: function AlliesComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allies);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".ally-item[_ngcontent-%COMP%] {\n  height: 33.33vh;\n  max-height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1rem;\n}\n@media screen and (min-width: 768px) {\n  .ally-item[_ngcontent-%COMP%] {\n    max-height: 200px;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .ally-item[_ngcontent-%COMP%] {\n    max-height: 245px;\n  }\n}\n.ally-item__image[_ngcontent-%COMP%] {\n  max-width: 120px;\n  max-height: 120px;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGxpZXMvQzpcXFVzZXJzXFxqY2FsZFxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXGVjb21lcmNlLWVzZWRvclxcZXNlZG9yLWVjb21tZXJjZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWxsaWVzXFxhbGxpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWxsaWVzL2FsbGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFQRjtJQVFJLGlCQUFBO0VDR0Y7QUFDRjtBREZFO0VBVkY7SUFXSSxpQkFBQTtFQ0tGO0FBQ0Y7QURKRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbGxpZXMvYWxsaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbHktaXRlbSB7XG4gIGhlaWdodDogMzMuMzN2aDtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgbWF4LWhlaWdodDogMjQ1cHg7XG4gIH1cbiAgJl9faW1hZ2Uge1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XHJcbiIsIi5hbGx5LWl0ZW0ge1xuICBoZWlnaHQ6IDMzLjMzdmg7XG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFsbHktaXRlbSB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuYWxseS1pdGVtIHtcbiAgICBtYXgtaGVpZ2h0OiAyNDVweDtcbiAgfVxufVxuLmFsbHktaXRlbV9faW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlliesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-allies',
          templateUrl: './allies.component.html',
          styleUrls: ['./allies.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/comercio/comercio.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/comercio/comercio.component.ts ***!
    \***********************************************************/

  /*! exports provided: ComercioComponent */

  /***/
  function srcAppComponentsComercioComercioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComercioComponent", function () {
      return ComercioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ComercioComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r1.description, " ");
      }
    }

    var ComercioComponent = /*#__PURE__*/function () {
      function ComercioComponent() {
        _classCallCheck(this, ComercioComponent);

        this.services = [{
          title: 'Automatiza',
          description: 'Ahorra tiempo conectando procesos de forma funcional y eficaz de forma automática.'
        }, {
          title: 'Escala',
          description: 'Haz crecer tu negocio sin límites gracias a procesos optimizados.'
        }, {
          title: 'Optimiza',
          description: 'Mejora cada parte de tu tienda para obtener mejores resultados.'
        }, {
          title: 'Controla',
          description: 'Toma decisiones inteligentes con métricas en tiempo real.'
        }];
      }

      _createClass(ComercioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComercioComponent;
    }();

    ComercioComponent.ɵfac = function ComercioComponent_Factory(t) {
      return new (t || ComercioComponent)();
    };

    ComercioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComercioComponent,
      selectors: [["app-comercio"]],
      decls: 12,
      vars: 1,
      consts: [[1, "section-comercio", "pt-20"], [1, "container", "mx-auto"], [1, "flex", "w-full", "px-4", "md:px-6", "mb-16", "justify-center"], [1, "flex", "text-black", "text-[12px]", "leading-tight", "font-light", "justify-center"], [1, "mt-[40px]"], [1, "flex", "text-black", "text-5xl", "leading-tight", "font-bold", "justify-center"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-4", "gap-8", "mt-6"], ["class", "rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105", 4, "ngFor", "ngForOf"], [1, "rounded-xl", "shadow-lg", "overflow-hidden", "transform", "transition", "hover:scale-105"], [1, "bg-black", "py-6", "text-center"], [1, "text-white", "text-lg", "font-semibold"], [1, "bg-white", "px-4", "py-6", "text-center", "border-t-4", "border-blue-500", "shadow-[0_8px_30px_rgba(0,0,255,0.15)]"], [1, "text-sm", "text-gray-700", "leading-relaxed"]],
      template: function ComercioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "COMERCIO ELECTRONICO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Escala sin l\xEDmites, tu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " tienda crece contigo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ComercioComponent_div_11_Template, 7, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".section-comercio[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21lcmNpby9DOlxcVXNlcnNcXGpjYWxkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZWNvbWVyY2UtZXNlZG9yXFxlc2Vkb3ItZWNvbW1lcmNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21lcmNpb1xcY29tZXJjaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tZXJjaW8vY29tZXJjaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21lcmNpby9jb21lcmNpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWNvbWVyY2lvIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cclxuIiwiLnNlY3Rpb24tY29tZXJjaW8ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComercioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comercio',
          templateUrl: './comercio.component.html',
          styleUrls: ['./comercio.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contact-form/contact-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/contact-form/contact-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ContactFormComponent */

  /***/
  function srcAppComponentsContactFormContactFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function () {
      return ContactFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactFormComponent_div_26_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    var _c0 = function _c0() {
      return [1, 2, 3, 4];
    };

    function ContactFormComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactFormComponent_div_26_div_1_Template, 1, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function ContactFormComponent_ng_container_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CONVERSEMOS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var ContactFormComponent = /*#__PURE__*/function () {
      function ContactFormComponent(fb, http, router) {
        _classCallCheck(this, ContactFormComponent);

        this.fb = fb;
        this.http = http;
        this.router = router;
        this.isLoading = false;
        this.bgPrimary = false;
        this.captcha = '';
        this.contactForm = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9 ]{7,11}")]],
          description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(ContactFormComponent, [{
        key: "resolved",
        value: function resolved(captchaResponse) {
          console.log("Resolved captcha with response: ".concat(captchaResponse));
          this.captcha = captchaResponse;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          if (this.isLoading || this.captcha === '') return;
          this.isLoading = true;
          var formData = Object.assign(Object.assign({}, this.contactForm.value), {
            captcha: this.captcha
          });
          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].contactFormApi, formData).subscribe(function (data) {
            console.log('data: ', data);
            _this.isLoading = false;
            return _this.router.navigate(['/gracias']);
          }, function (error) {
            console.error('error', error);
            console.error('error resp', error.response);
            _this.isLoading = false;
            return alert('No se pudo procesar el formulario');
          });
        }
      }, {
        key: "name",
        get: function get() {
          return this.contactForm.get('name');
        }
      }, {
        key: "email",
        get: function get() {
          return this.contactForm.get('email');
        }
      }, {
        key: "phone",
        get: function get() {
          return this.contactForm.get('phone');
        }
      }, {
        key: "description",
        get: function get() {
          return this.contactForm.get('description');
        }
      }]);

      return ContactFormComponent;
    }();

    ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) {
      return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactFormComponent,
      selectors: [["app-contact-form"]],
      inputs: {
        bgPrimary: "bgPrimary"
      },
      decls: 28,
      vars: 18,
      consts: [[1, "main-form"], [3, "formGroup", "ngSubmit"], [1, "main-form__content"], [1, "form-control", "mb-4"], ["for", "name", 1, "form-label-container"], [1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-input"], ["for", "correo", 1, "form-label-container"], ["type", "text", "id", "correo", "formControlName", "email", 1, "form-input"], ["for", "celular", 1, "form-label-container"], ["type", "tel", "id", "celular", "formControlName", "phone", 1, "form-input"], ["for", "consulta", 1, "form-label-container"], ["type", "text", "id", "consulta", "formControlName", "description", 1, "form-input"], [1, "form-captcha"], ["siteKey", "6LfNfKYZAAAAACappGs0nm7mzAkL_HwIc8KXWu4B", 3, "resolved"], ["type", "submit", "id", "desktopHero-contactForm", 1, "btn", "btn-primary", "main-form__submit", "flex", "items-center", "justify-center", 2, "height", "44px", 3, "disabled"], ["class", "lds-ellipsis", 4, "ngIf"], [4, "ngIf"], [1, "lds-ellipsis"], [4, "ngFor", "ngForOf"], ["src", "assets/images/right-arrow-white.svg", 1, "ml-4", 2, "height", "16px"]],
      template: function ContactFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cu\xE9ntanos sobre el proyecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "re-captcha", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resolved", function ContactFormComponent_Template_re_captcha_resolved_24_listener($event) {
            return ctx.resolved($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ContactFormComponent_div_26_Template, 2, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ContactFormComponent_ng_container_27_Template, 3, 0, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: [".main-form[_ngcontent-%COMP%] {\n  width: 280px;\n}\n@media screen and (min-width: 768px) {\n  .main-form[_ngcontent-%COMP%] {\n    width: 270px;\n  }\n}\n.main-form__content[_ngcontent-%COMP%] {\n  background-color: #000;\n  border-top-right-radius: 6px;\n  border-top-left-radius: 6px;\n  padding: 1rem;\n  padding-bottom: 0;\n}\n.main-form__content.primary[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n}\n.main-form__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.main-form__submit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.main-form__submit[_ngcontent-%COMP%]:hover:enabled   img[_ngcontent-%COMP%] {\n  transform: translateX(10px);\n}\n.form-captcha[_ngcontent-%COMP%] {\n  transform-origin: left;\n  transform: scale(0.82) translateY(-10px);\n}\n@media screen and (min-width: 768px) {\n  .form-captcha[_ngcontent-%COMP%] {\n    transform: scale(0.785) translateY(-10px);\n  }\n}\n.form-control[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top-right-radius: 0.3rem;\n  border-top-left-radius: 0.3rem;\n  width: 100%;\n}\n.form-label-container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  padding: 0 0.5rem;\n  padding-right: 2rem;\n}\n.form-label-container.is-valid[_ngcontent-%COMP%]::before {\n  content: url('check-icon.png');\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 10px;\n}\n.form-label[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n  font-weight: 300;\n  font-size: 0.8rem;\n  display: block;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #A0A0A0;\n  font-size: 0.85rem;\n  padding-bottom: 0.4rem;\n}\n.form-input[_ngcontent-%COMP%]:disabled {\n  background-color: #fff;\n  color: #cecdcd;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.lds-ellipsis[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 74px;\n  height: 44px;\n}\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 17px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n  animation: lds-ellipsis1 0.6s infinite;\n}\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n  animation: lds-ellipsis3 0.6s infinite;\n}\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LWZvcm0vQzpcXFVzZXJzXFxqY2FsZFxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXGVjb21lcmNlLWVzZWRvclxcZXNlZG9yLWVjb21tZXJjZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdC1mb3JtXFxjb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBREFFO0VBRkY7SUFHSSxZQUFBO0VDR0Y7QUFDRjtBREZFO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDSUo7QURISTtFQUNFLDZCQUFBO0FDS047QURGRTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDSUo7QURISTtFQUNFLDBCQUFBO0FDS047QURGTTtFQUNFLDJCQUFBO0FDSVI7QURFQTtFQUNFLHNCQUFBO0VBQ0Esd0NBQUE7QUNDRjtBREFFO0VBSEY7SUFJSSx5Q0FBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNHRjtBREFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNHRjtBRERJO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNHTjtBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQUU7RUFDRSxzQkFBQTtFQUNBLGNBQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtBQ0VKO0FESUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7RUFDUSxtREFBQTtBQ0RWO0FESUE7RUFDRSxTQUFBO0VBQ0EsOENBQUE7RUFDUSxzQ0FBQTtBQ0RWO0FESUE7RUFDRSxTQUFBO0VBQ0EsOENBQUE7RUFDUSxzQ0FBQTtBQ0RWO0FESUE7RUFDRSxVQUFBO0VBQ0EsOENBQUE7RUFDUSxzQ0FBQTtBQ0RWO0FESUE7RUFDRSxVQUFBO0VBQ0EsOENBQUE7RUFDUSxzQ0FBQTtBQ0RWO0FESUE7RUFDRTtJQUNFLG1CQUFBO0VDREY7RURJQTtJQUNFLG1CQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0U7SUFDRSxtQkFBQTtFQ0hGO0VETUE7SUFDRSxtQkFBQTtFQ0pGO0FBQ0Y7QURPQTtFQUNFO0lBQ0UsbUJBQUE7RUNMRjtFRFFBO0lBQ0UsbUJBQUE7RUNORjtBQUNGO0FEU0E7RUFDRTtJQUNFLG1CQUFBO0VDUEY7RURVQTtJQUNFLG1CQUFBO0VDUkY7QUFDRjtBRFdBO0VBQ0U7SUFDRSwwQkFBQTtFQ1RGO0VEWUE7SUFDRSw2QkFBQTtFQ1ZGO0FBQ0Y7QURhQTtFQUNFO0lBQ0UsMEJBQUE7RUNYRjtFRGNBO0lBQ0UsNkJBQUE7RUNaRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZm9ybSB7XG4gIHdpZHRoOiAyODBweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogMjcwcHg7XG4gIH1cbiAgJl9fY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICYucHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICB9XG4gIH1cbiAgJl9fc3VibWl0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGltZyB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICB9XG4gICAgJjpob3ZlcjplbmFibGVkIHtcbiAgICAgIGltZyB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tY2FwdGNoYSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46bGVmdDtcbiAgdHJhbnNmb3JtOiBzY2FsZSguODIpIHRyYW5zbGF0ZVkoLTEwcHgpO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjc4NSkgdHJhbnNsYXRlWSgtMTBweCk7XG4gIH1cbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuM3JlbTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjNyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1sYWJlbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgJi5pcy12YWxpZCB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGVjay1pY29uLnBuZycpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICByaWdodDogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tbGFiZWwge1xuICBjb2xvcjogI0EwQTBBMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAuOHJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjQTBBMEEwO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuNHJlbTtcbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogI2NlY2RjZDtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG5cbi8vIExvYWRlclxuXG4ubGRzLWVsbGlwc2lzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi5sZHMtZWxsaXBzaXMgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XG59XG5cbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDhweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbiAgICAgICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cblxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogMzJweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbiAgICAgICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cblxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTZweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcbiAgICAgICAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xuICB9XG59XHJcbiIsIi5tYWluLWZvcm0ge1xuICB3aWR0aDogMjgwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1mb3JtIHtcbiAgICB3aWR0aDogMjcwcHg7XG4gIH1cbn1cbi5tYWluLWZvcm1fX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLm1haW4tZm9ybV9fY29udGVudC5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG59XG4ubWFpbi1mb3JtX19zdWJtaXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG59XG4ubWFpbi1mb3JtX19zdWJtaXQgaW1nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4ubWFpbi1mb3JtX19zdWJtaXQ6aG92ZXI6ZW5hYmxlZCBpbWcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG59XG5cbi5mb3JtLWNhcHRjaGEge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuODIpIHRyYW5zbGF0ZVkoLTEwcHgpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0tY2FwdGNoYSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc4NSkgdHJhbnNsYXRlWSgtMTBweCk7XG4gIH1cbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjNyZW07XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWxhYmVsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cbi5mb3JtLWxhYmVsLWNvbnRhaW5lci5pcy12YWxpZDo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGVjay1pY29uLnBuZ1wiKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICByaWdodDogMTBweDtcbn1cblxuLmZvcm0tbGFiZWwge1xuICBjb2xvcjogI0EwQTBBMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI0EwQTBBMDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xufVxuLmZvcm0taW5wdXQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI2NlY2RjZDtcbn1cbi5mb3JtLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxkcy1lbGxpcHNpcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzRweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxN3B4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XG59XG5cbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IDhweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XG59XG5cbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDhweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG5cbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDMycHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xuICBsZWZ0OiA1NnB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-form',
          templateUrl: './contact-form.component.html',
          styleUrls: ['./contact-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
        bgPrimary: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/contact-modal/contact-modal.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/contact-modal/contact-modal.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ContactModalComponent */

  /***/
  function srcAppComponentsContactModalContactModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactModalComponent", function () {
      return ContactModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/modal.service */
    "./src/app/modal.service.ts");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../contact-form/contact-form.component */
    "./src/app/components/contact-form/contact-form.component.ts");

    var ContactModalComponent = /*#__PURE__*/function () {
      function ContactModalComponent(modalService) {
        _classCallCheck(this, ContactModalComponent);

        this.modalService = modalService;
        this.showState = false;
      }

      _createClass(ContactModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.modalService.modalState$.subscribe(function (modalState) {
            return _this2.showState = modalState;
          });
        }
      }, {
        key: "ClickedOut",
        value: function ClickedOut(event) {
          if (event.target.classList.contains('modal')) {
            this.closeModal();
          }
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalService.updateModalState(false);
        }
      }]);

      return ContactModalComponent;
    }();

    ContactModalComponent.ɵfac = function ContactModalComponent_Factory(t) {
      return new (t || ContactModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]));
    };

    ContactModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactModalComponent,
      selectors: [["app-contact-modal"]],
      decls: 10,
      vars: 3,
      consts: [[1, "modal", 3, "click"], [1, "modal-close", 3, "click"], [1, "ml-5", "modal-close__img"], ["src", "assets/images/close-icon.svg"], [1, "modal-container", "flex"], [1, "modal__content", "py-8", "px-8", "md:px-16", "hidden", "sm:flex", "items-center", "justify-center"], [1, "text-4xl", "font-light", "text-yellow", "leading-tight"], [3, "bgPrimary"]],
      template: function ContactModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactModalComponent_Template_div_click_0_listener($event) {
            return ctx.ClickedOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactModalComponent_Template_div_click_1_listener() {
            return ctx.closeModal();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgPrimary", true);
        }
      },
      directives: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_2__["ContactFormComponent"]],
      styles: [".modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  opacity: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  pointer-events: none;\n  transition: all 0.3s;\n  padding: 4rem 2rem 3rem;\n  overflow-y: auto;\n  z-index: 999;\n}\n.modal.show[_ngcontent-%COMP%] {\n  -webkit-user-select: unset;\n  -moz-user-select: unset;\n  -ms-user-select: unset;\n  user-select: unset;\n  pointer-events: unset;\n  opacity: 1;\n}\n.modal-close[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 1.2rem;\n  right: 1rem;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 300;\n  line-height: 1;\n  color: #193EFF;\n  cursor: pointer;\n}\n@media screen and (min-width: 768px) {\n  .modal-close[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.modal-close__img[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n.modal-close__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 18px;\n}\n@media screen and (min-width: 768px) {\n  .modal-close__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 22px;\n  }\n}\n.modal-close[_ngcontent-%COMP%]:hover   .modal-close__img[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.modal-container[_ngcontent-%COMP%] {\n  margin: auto;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n  background: var(--blue);\n  align-items: stretch;\n}\n@media screen and (min-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 768px;\n  }\n}\n.modal__content[_ngcontent-%COMP%] {\n  background-image: url('modal-img.jpg');\n  background-size: cover;\n  width: calc(100% - 270px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LW1vZGFsL0M6XFxVc2Vyc1xcamNhbGRcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxlY29tZXJjZS1lc2Vkb3JcXGVzZWRvci1lY29tbWVyY2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRhY3QtbW9kYWxcXGNvbnRhY3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1tb2RhbC9jb250YWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFFQSxVQUFBO0VBQ0EseUJBQUE7RUFDRyxzQkFBQTtFQUNDLHFCQUFBO0VBQ0ksaUJBQUE7RUFDUixvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNBRjtBRENFO0VBQ0UsMEJBQUE7RUFDRyx1QkFBQTtFQUNDLHNCQUFBO0VBQ0ksa0JBQUE7RUFDUixxQkFBQTtFQUNBLFVBQUE7QUNDSjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQUk7RUFaRjtJQWFJLGVBQUE7RUNHSjtBQUNGO0FERkk7RUFDRSxvQkFBQTtBQ0lOO0FESE07RUFDRSxZQUFBO0FDS1I7QURKUTtFQUZGO0lBR0ksWUFBQTtFQ09SO0FBQ0Y7QURITTtFQUNFLHlCQUFBO0FDS1I7QURERTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFFQSx1QkFBQTtFQUNBLG9CQUFBO0FDRUo7QURESTtFQVJGO0lBU0ksV0FBQTtJQUVBLGdCQUFBO0VDR0o7QUFDRjtBRERFO0VBQ0Usc0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtbW9kYWwvY29udGFjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcbiAgZGlzcGxheTogZmxleDtcbiAgLy8gei1pbmRleDogLTk5OTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwYWRkaW5nOiA0cmVtIDJyZW0gM3JlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgei1pbmRleDogOTk5O1xuICAmLnNob3cge1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHVuc2V0O1xuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IHVuc2V0O1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IHVuc2V0O1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IHVuc2V0O1xuICAgIHBvaW50ZXItZXZlbnRzOiB1bnNldDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gICYtY2xvc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxLjJyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiAjMTkzRUZGO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgICAmX19pbWcge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgLm1vZGFsLWNsb3NlX19pbWcge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgYmxhY2sgNTAlLCAjMTkzRUZGIDUwJSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIH1cbiAgfVxuICAmX19jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbW9kYWwtaW1nLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI3MHB4KTtcbiAgfVxufVxyXG4iLCIubW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbSAzcmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB6LWluZGV4OiA5OTk7XG59XG4ubW9kYWwuc2hvdyB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHVuc2V0O1xuICAtbW96LXVzZXItc2VsZWN0OiB1bnNldDtcbiAgLW1zLXVzZXItc2VsZWN0OiB1bnNldDtcbiAgdXNlci1zZWxlY3Q6IHVuc2V0O1xuICBwb2ludGVyLWV2ZW50czogdW5zZXQ7XG4gIG9wYWNpdHk6IDE7XG59XG4ubW9kYWwtY2xvc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMS4ycmVtO1xuICByaWdodDogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjMTkzRUZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtY2xvc2Uge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuLm1vZGFsLWNsb3NlX19pbWcge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5tb2RhbC1jbG9zZV9faW1nIGltZyB7XG4gIGhlaWdodDogMThweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1jbG9zZV9faW1nIGltZyB7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICB9XG59XG4ubW9kYWwtY2xvc2U6aG92ZXIgLm1vZGFsLWNsb3NlX19pbWcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gIH1cbn1cbi5tb2RhbF9fY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbW9kYWwtaW1nLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI3MHB4KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-modal',
          templateUrl: './contact-modal.component.html',
          styleUrls: ['./contact-modal.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 45,
      vars: 0,
      consts: [[1, "main-footer", "pt-4", "md:pt-8"], [1, "container", "mx-auto"], [1, "flex", "wrap", "flex-col", "md:flex-row"], [1, "w-full", "md:w-1/5", "px-4", "mb-12", "hidden", "lg:block"], ["src", "assets/images/logo.png", "alt", "Esedor"], [1, "w-full", "md:w-5/12", "lg:w-2/5", "py-4", "md:py-0", "px-4", "md:mb-12"], [1, "md:text-sm", "mb-5", 2, "color", "#6E6E6E"], [1, "w-full", "md:w-4/12", "lg:w-1/5", "py-4", "md:py-0", "px-4", "md:mb-12", "border-t", "md:border-t-0"], [1, "mb-2"], ["href", "tel:017738905", 1, "flex", "items-center"], [1, "mr-2", 2, "width", "20px"], ["src", "assets/images/phone-icon.svg", 2, "height", "22px"], ["href", "mailto:hola@esedor.com", 1, "flex", "items-center"], ["src", "assets/images/mail-icon.svg", 2, "height", "22px"], [1, "w-full", "md:w-3/12", "lg:w-1/5", "py-4", "md:py-0", "px-4", "md:mb-12", "border-t", "md:border-t-0"], [1, "flex", "flex-wrap"], [1, "w-full", "md:text-sm", "mb-5", 2, "color", "#6E6E6E"], [1, "mb-1", "w-1/3", "md:w-full"], ["href", "https://www.linkedin.com/company/esedor/", "target", "_blank"], ["href", "https://www.instagram.com/esedor.latam/", "target", "_blank"], ["href", "https://www.facebook.com/esedorla", "target", "_blank"], [1, "footer-bar", "py-3", "text-xs", "border-t"], [1, "container", "mx-auto", "px-4"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \xA9 2020 ESEDOR, todos los derechos reservados. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/formula/formula.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/formula/formula.component.ts ***!
    \*********************************************************/

  /*! exports provided: FormulaComponent */

  /***/
  function srcAppComponentsFormulaFormulaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormulaComponent", function () {
      return FormulaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modal.service */
    "./src/app/modal.service.ts");
    /* harmony import */


    var _steps_steps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./steps/steps.component */
    "./src/app/components/formula/steps/steps.component.ts");
    /* harmony import */


    var _steps_slider_test_steps_slider_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../steps-slider-test/steps-slider-test.component */
    "./src/app/components/steps-slider-test/steps-slider-test.component.ts");

    var FormulaComponent = /*#__PURE__*/function () {
      function FormulaComponent(elementRef, document, modalService) {
        var _this3 = this;

        _classCallCheck(this, FormulaComponent);

        this.elementRef = elementRef;
        this.document = document;
        this.modalService = modalService;

        this.toAllies = function () {
          var topPosition = _this3.document.getElementById('alliesSection').offsetTop;

          window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
          });
        };

        this.handleSquareFirst = function (event) {
          var wYOffset = window.pageYOffset;
          var rotation = (wYOffset - 500) / 75;
          _this3.elementRef.nativeElement.querySelector('.square--first').style.transform = "rotate(-".concat(rotation, "deg)");
        };

        this.handleSquareSecond = function (event) {
          var wYOffset = window.pageYOffset;
          var rotation = (wYOffset - 500) / 90;
          _this3.elementRef.nativeElement.querySelector('.square--second').style.transform = "rotate(".concat(rotation, "deg)");
        };

        this.handlePoligono = function (event) {
          var wYOffset = window.pageYOffset;
          var rotation = wYOffset / 15;
          _this3.elementRef.nativeElement.querySelector('.poligono').style.transform = "rotate(".concat(rotation, "deg)");
        };
      }

      _createClass(FormulaComponent, [{
        key: "handleModal",
        value: function handleModal() {
          this.modalService.updateModalState(true);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          window.addEventListener('scroll', this.handleSquareFirst, true);
          window.addEventListener('scroll', this.handleSquareSecond, true);
          window.addEventListener('scroll', this.handlePoligono, true);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          window.removeEventListener('scroll', this.handleSquareFirst, true);
          window.removeEventListener('scroll', this.handleSquareSecond, true);
          window.removeEventListener('scroll', this.handlePoligono, true);
        }
      }]);

      return FormulaComponent;
    }();

    FormulaComponent.ɵfac = function FormulaComponent_Factory(t) {
      return new (t || FormulaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]));
    };

    FormulaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormulaComponent,
      selectors: [["app-formula"]],
      decls: 19,
      vars: 0,
      consts: [[1, "overflow-hidden"], [1, "relative"], ["src", "assets/images/square.png", 1, "square", "square--first"], ["src", "assets/images/square.png", 1, "square", "square--second"], ["src", "assets/images/poligono.png", 1, "poligono"], [1, "container", "mx-auto", "md:pt-16"], [1, "flex", "flex-wrap", "px-4"], [1, "w-full", "md:w-4/5", "lg:w-3/5", "mx-auto", "md:px-6"], [1, "font-medium", "text-center", "mb-6", "text-lg", "md:text-base"], [1, "text-2xl", "md:text-3xl", "lg:text-4xl", "font-light", "text-center"], [1, "flex", "flex-wrap", "px-4", "mt-16"], [1, "w-full", "md:w-2/3", "lg:w-2/5", "mx-auto", "flex", "justify-center"], [1, "btn", "btn-primary", "flex", "items-center", "justify-center", 3, "click"], ["src", "assets/images/right-arrow-white.svg", 1, "ml-4", 2, "height", "14px"]],
      template: function FormulaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nuestra f\xF3rmula de escalamiento empresarial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Creamos tu tienda online que conecta todos tus canales de venta.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormulaComponent_Template_button_click_14_listener() {
            return ctx.handleModal();
          });

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
        }
      },
      directives: [_steps_steps_component__WEBPACK_IMPORTED_MODULE_3__["StepsComponent"], _steps_slider_test_steps_slider_test_component__WEBPACK_IMPORTED_MODULE_4__["StepsSliderTestComponent"]],
      styles: [".square[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  width: 500px;\n  transition: all 0.2s;\n}\n@media screen and (min-width: 768px) {\n  .square[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.square--first[_ngcontent-%COMP%] {\n  top: 50px;\n  right: -300px;\n}\n.square--second[_ngcontent-%COMP%] {\n  top: 480px;\n  left: -350px;\n}\n.poligono[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  width: 500px;\n  right: -350px;\n  bottom: 250px;\n  transition: all 0.3s linear;\n}\n@media screen and (min-width: 768px) {\n  .poligono[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL0M6XFxVc2Vyc1xcamNhbGRcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxlY29tZXJjZS1lc2Vkb3JcXGVzZWRvci1lY29tbWVyY2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvcm11bGFcXGZvcm11bGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXVsYS9mb3JtdWxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDQ0Y7QURBRTtFQUxGO0lBTUksY0FBQTtFQ0dGO0FBQ0Y7QURGRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0FDSUo7QURGRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDSUo7QURBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FDR0Y7QURGRTtFQVBGO0lBUUksY0FBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm11bGEvZm9ybXVsYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcXVhcmUge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgJi0tZmlyc3Qge1xuICAgIHRvcDogNTBweDtcbiAgICByaWdodDogLTMwMHB4O1xuICB9XG4gICYtLXNlY29uZCB7XG4gICAgdG9wOiA0ODBweDtcbiAgICBsZWZ0OiAtMzUwcHg7XG4gIH1cbn1cblxuLnBvbGlnb25vIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAwcHg7XG4gIHJpZ2h0OiAtMzUwcHg7XG4gIGJvdHRvbTogMjUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxyXG4iLCIuc3F1YXJlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNxdWFyZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5zcXVhcmUtLWZpcnN0IHtcbiAgdG9wOiA1MHB4O1xuICByaWdodDogLTMwMHB4O1xufVxuLnNxdWFyZS0tc2Vjb25kIHtcbiAgdG9wOiA0ODBweDtcbiAgbGVmdDogLTM1MHB4O1xufVxuXG4ucG9saWdvbm8ge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MDBweDtcbiAgcmlnaHQ6IC0zNTBweDtcbiAgYm90dG9tOiAyNTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnBvbGlnb25vIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormulaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-formula',
          templateUrl: './formula.component.html',
          styleUrls: ['./formula.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: src_app_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/formula/steps-slider/steps-slider.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/formula/steps-slider/steps-slider.component.ts ***!
    \***************************************************************************/

  /*! exports provided: StepsSliderComponent */

  /***/
  function srcAppComponentsFormulaStepsSliderStepsSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepsSliderComponent", function () {
      return StepsSliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/modal.service */
    "./src/app/modal.service.ts");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");

    var StepsSliderComponent = /*#__PURE__*/function () {
      function StepsSliderComponent(modalService) {
        _classCallCheck(this, StepsSliderComponent);

        this.modalService = modalService;
        this.config = {
          slidesPerView: 'auto',
          navigation: false,
          pagination: false
        };
      }

      _createClass(StepsSliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openModal",
        value: function openModal() {
          this.modalService.updateModalState(true);
        }
      }]);

      return StepsSliderComponent;
    }();

    StepsSliderComponent.ɵfac = function StepsSliderComponent_Factory(t) {
      return new (t || StepsSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]));
    };

    StepsSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StepsSliderComponent,
      selectors: [["app-steps-slider"]],
      decls: 31,
      vars: 1,
      consts: [[1, "steps-slider", "py-16", "hidden", "md:flex"], [1, "swiper-container", "steps-slider__container", "my-auto", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide", "steps-slider__item", "text-white", "px-3", 2, "width", "90%"], [1, "flex", "flex-wrap"], [1, "w-1/2", "flex", "flex-col", "items-start", "py-8", "pr-12"], [1, "font-bold"], [1, "text-2xl", "lg:text-3xl", "font-light", "mb-4"], [1, "mb-12"], ["id", "desktopSteps-step-4", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", "mt-auto", 3, "click"], ["src", "assets/images/right-arrow-white.svg", 1, "ml-4", 2, "height", "14px"], [1, "w-1/2", "pl-0", "lg:pl-12", "pr-6", "lg:pr-12"], ["src", "assets/images/steps/step-04.svg", 2, "height", "420px"], ["id", "desktopSteps-step-5", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", "mt-auto", 3, "click"], ["src", "assets/images/steps/step-05.svg", 2, "height", "420px"]],
      template: function StepsSliderComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LSeleccionamos la tecnolog\xEDa y definimos el alcance del proyecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Evaluamos entre desarrollar un c\xF3digo personalizado o usar soluciones de c\xF3digo abierto, y luego definimos los sprints clave para asegurar el impacto comercial de tu tienda online.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsSliderComponent_Template_button_click_12_listener() {
            return ctx.openModal();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsSliderComponent_Template_button_click_26_listener() {
            return ctx.openModal();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        }
      },
      directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"]],
      styles: [".steps-slider[_ngcontent-%COMP%] {\n  background: #000;\n  height: 100vh;\n  min-height: 768px;\n  max-height: 1080px;\n}\n.steps-slider__container[_ngcontent-%COMP%] {\n  padding-left: calc((100% - 860px)/2 + 1rem);\n}\n@media screen and (min-width: 1050px) {\n  .steps-slider__container[_ngcontent-%COMP%] {\n    padding-left: calc((100% - 1024px)/2 + 1rem);\n  }\n}\n@media screen and (min-width: 1200px) {\n  .steps-slider__container[_ngcontent-%COMP%] {\n    padding-left: calc((100% - 1140px)/2 + 1rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL3N0ZXBzLXNsaWRlci9DOlxcVXNlcnNcXGpjYWxkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZWNvbWVyY2UtZXNlZG9yXFxlc2Vkb3ItZWNvbW1lcmNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb3JtdWxhXFxzdGVwcy1zbGlkZXJcXHN0ZXBzLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL3N0ZXBzLXNsaWRlci9zdGVwcy1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLDJDQUFBO0FDRUo7QURESTtFQUZGO0lBR0ksNENBQUE7RUNJSjtBQUNGO0FESEk7RUFMRjtJQU1JLDRDQUFBO0VDTUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXVsYS9zdGVwcy1zbGlkZXIvc3RlcHMtc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBzLXNsaWRlciB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1pbi1oZWlnaHQ6IDc2OHB4O1xuICBtYXgtaGVpZ2h0OiAxMDgwcHg7XG4gICZfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKCgxMDAlIC0gODYwcHgpLzIgKyAxcmVtKTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDUwcHgpIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygoMTAwJSAtIDEwMjRweCkvMiArIDFyZW0pO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygoMTAwJSAtIDExNDBweCkvMiArIDFyZW0pO1xuICAgIH1cbiAgfVxufVxyXG4iLCIuc3RlcHMtc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogNzY4cHg7XG4gIG1heC1oZWlnaHQ6IDEwODBweDtcbn1cbi5zdGVwcy1zbGlkZXJfX2NvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogY2FsYygoMTAwJSAtIDg2MHB4KS8yICsgMXJlbSk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDUwcHgpIHtcbiAgLnN0ZXBzLXNsaWRlcl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoKDEwMCUgLSAxMDI0cHgpLzIgKyAxcmVtKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zdGVwcy1zbGlkZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKCgxMDAlIC0gMTE0MHB4KS8yICsgMXJlbSk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepsSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-steps-slider',
          templateUrl: './steps-slider.component.html',
          styleUrls: ['./steps-slider.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/formula/steps/steps.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/formula/steps/steps.component.ts ***!
    \*************************************************************/

  /*! exports provided: StepsComponent */

  /***/
  function srcAppComponentsFormulaStepsStepsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepsComponent", function () {
      return StepsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/modal.service */
    "./src/app/modal.service.ts");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StepsComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var step_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "assets/images/steps/" + step_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r2.subtitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r2.description);
      }
    }

    var StepsComponent = /*#__PURE__*/function () {
      function StepsComponent(modalService) {
        _classCallCheck(this, StepsComponent);

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
        this.steps.push({
          title: 'PRIMER PASO',
          subtitle: 'Agregamos valor ofreciendo experiencias excepcionales',
          description: 'Identificamos cuándo, dónde y cómo compra tu cliente usando un set de disciplinas de investigación UX.',
          image: 'step-01.svg'
        });
        this.steps.push({
          title: 'SEGUNDO PASO',
          subtitle: 'Pensamos en la lógica y creamos un prototipo',
          description: 'Creamos versiones interactivas de escritorio, tablet y dispositivo móvil, plasmados en el prototipo de UX en Figma.',
          image: 'step-02.svg'
        });
        this.steps.push({
          title: 'TERCER PASO',
          subtitle: 'Diseñamos tu tienda virtual y sistema de diseño',
          description: 'Creamos la identidad visual de tu marca con una guía de estilos de la interfaz de usuario e implementamos un sistema de diseño.',
          image: 'step-03.svg'
        });
        this.steps.push({
          title: 'CUARTO PASO',
          subtitle: 'Definimos la tecnología y establecemos el alcance',
          description: 'Creamos un nuevo código fuente o usamos uno de código abierto, y establecemos los sprints necesarios para cumplir tus objetivos.',
          image: 'step-04-responsive.svg'
        });
        this.steps.push({
          title: 'QUINTO PASO',
          subtitle: 'Lanzamos tu producto y la campaña de marketing',
          description: 'Llegamos a más usuarios usando creando un social media plan y una campaña de Google ADS agrandando tu funnel de clientes.',
          image: 'step-05-responsive.svg'
        });
      }

      _createClass(StepsComponent, [{
        key: "openModal",
        value: function openModal() {
          this.modalService.updateModalState(true);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StepsComponent;
    }();

    StepsComponent.ɵfac = function StepsComponent_Factory(t) {
      return new (t || StepsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]));
    };

    StepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StepsComponent,
      selectors: [["app-steps"]],
      decls: 60,
      vars: 6,
      consts: [[1, "md:hidden", "pt-24"], [1, "flex", "justify-between", "items-center", "w-full", "sm:w-2/3", "mx-auto", "mt-8", "mb-12", "px-4"], ["src", "assets/images/left-arrow.svg", 1, "prev-btn"], [1, "text-center"], [1, "text-sm", "font-bold"], ["src", "assets/images/right-arrow.svg", 1, "next-btn"], [1, "swiper-container", "my-auto", 3, "swiper", "index", "indexChange"], ["stepsSwiper", ""], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "block", "w-full", "text-center", "mt-10", "mb-24"], ["id", "responsiveSteps", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", 3, "click"], ["src", "assets/images/right-arrow-white.svg", 1, "ml-4", 2, "height", "14px"], [1, "hidden", "md:block"], [1, "flex", "flex-wrap", "items-center", "py-20", "px-4"], [1, "w-1/2", "lg:pl-20"], [1, "font-bold"], [1, "text-2xl", "lg:text-3xl", "font-light", "mb-4"], [1, "mb-12"], ["id", "desktopSteps-step-1", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", 3, "click"], ["src", "assets/images/icono-wsp.svg", 1, "mr-4", 2, "height", "14px"], [1, "w-1/2"], ["src", "assets/images/steps/step-01.svg", 1, "w-full"], [1, "flex", "flex-wrap", "py-20", "px-4"], ["src", "assets/images/steps/step-02.svg", 1, "w-full"], [1, "w-1/2", "pl-12", "lg:pl-32"], ["id", "desktopSteps-step-2", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", 3, "click"], [1, "flex", "flex-wrap", "items-end", "xl:items-start", "pt-16", "px-4"], [1, "w-1/2", "lg:pl-20", "pt-4", "pb-8"], ["id", "desktopSteps-step-3", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", 3, "click"], ["src", "assets/images/steps/step-03.svg", 1, "w-full"], [1, "swiper-slide"], [1, "responsive-step"], [1, "responsive-step__image"], [1, "w-full", "mb-4", "mx-auto", 3, "src"], [1, "px-6", "pt-3"], [1, "text-xl", "sm:text-2xl", "mb-3"], [1, "text-sm"]],
      template: function StepsComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexChange", function StepsComponent_Template_div_indexChange_9_listener($event) {
            return ctx.sliderIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StepsComponent_div_12_Template, 9, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_Template_button_click_14_listener() {
            return ctx.openModal();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Antes de dise\xF1ar tu tienda online, investigamos y analizamos a fondo tu negocio y el comportamiento de tus clientes, asegurando una soluci\xF3n personalizada y efectiva para de tu empresa o proyecto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_Template_button_click_26_listener() {
            return ctx.openModal();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \"Desarrollamos versiones personalizadas de tu tienda online para escritorio, tablet y m\xF3vil, reflejadas en prototipos interactivos dise\xF1ados, garantizando una experiencia de usuario \xF3ptima en todas las plataformas.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_Template_button_click_42_listener() {
            return ctx.openModal();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Dise\xF1amos tu tienda virtual y su sistema visual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Desarrollamos la identidad visual de tu marca, creando una gu\xEDa de estilos completa para toda la interfaz de usuario. Adem\xE1s, si buscas escalar tu negocio, implementamos un sistema de dise\xF1o flexible que permite adaptaciones futuras sin complicaciones.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_Template_button_click_54_listener() {
            return ctx.openModal();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.steps[ctx.sliderIndex].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.sliderIndex + 1, "/", ctx.steps.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config)("index", ctx.sliderIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
        }
      },
      directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".prev-btn[_ngcontent-%COMP%]:focus, .next-btn[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.responsive-step[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: auto;\n  transition: all 0.3s;\n}\n\n.responsive-step__image[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  height: 250px;\n  margin: auto;\n}\n\n.responsive-step__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n\n.swiper-slide[_ngcontent-%COMP%]:not(.swiper-slide-active)   .responsive-step[_ngcontent-%COMP%] {\n  transform: scale(0.75);\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL3N0ZXBzL0M6XFxVc2Vyc1xcamNhbGRcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxlY29tZXJjZS1lc2Vkb3JcXGVzZWRvci1lY29tbWVyY2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvcm11bGFcXHN0ZXBzXFxzdGVwcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL3N0ZXBzL3N0ZXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsVUFBQTtBQ0FKOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNERjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUo7O0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0csbUJBQUE7QUNDVDs7QURLRTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL3N0ZXBzL3N0ZXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXYtYnRuLCAubmV4dC1idG4ge1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG59XG5cbi5yZXNwb25zaXZlLXN0ZXAge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAmX19pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB9XG4gIH1cbn1cblxuLnN3aXBlci1zbGlkZTpub3QoLnN3aXBlci1zbGlkZS1hY3RpdmUpIHtcbiAgLnJlc3BvbnNpdmUtc3RlcCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNzUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cclxuIiwiLnByZXYtYnRuOmZvY3VzLCAubmV4dC1idG46Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4ucmVzcG9uc2l2ZS1zdGVwIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5yZXNwb25zaXZlLXN0ZXBfX2ltYWdlIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yZXNwb25zaXZlLXN0ZXBfX2ltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5zd2lwZXItc2xpZGU6bm90KC5zd2lwZXItc2xpZGUtYWN0aXZlKSAucmVzcG9uc2l2ZS1zdGVwIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgb3BhY2l0eTogMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-steps',
          templateUrl: './steps.component.html',
          styleUrls: ['./steps.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 0,
      consts: [[1, "main-header", "py-4", "md:py-8"], [1, "container", "px-4", "md:px-6", "mx-auto"], ["src", "assets/images/logo.png", "alt", "Esedor", 1, "logo"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".main-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n@media screen and (min-width: 768px) {\n  .logo[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxqY2FsZFxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXGVjb21lcmNlLWVzZWRvclxcZXNlZG9yLWVjb21tZXJjZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREFFO0VBRkY7SUFHSSxZQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG59XHJcbiIsIi5tYWluLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubG9nbyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/hero-footer/hero-footer.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/hero-footer/hero-footer.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HeroFooterComponent */

  /***/
  function srcAppComponentsHeroFooterHeroFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroFooterComponent", function () {
      return HeroFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../contact-form/contact-form.component */
    "./src/app/components/contact-form/contact-form.component.ts");
    /* harmony import */


    var ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-parallax-scroll */
    "./node_modules/ngx-parallax-scroll/__ivy_ngcc__/fesm2015/ngx-parallax-scroll.js");

    var HeroFooterComponent = /*#__PURE__*/function () {
      function HeroFooterComponent() {
        _classCallCheck(this, HeroFooterComponent);

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

      _createClass(HeroFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroFooterComponent;
    }();

    HeroFooterComponent.ɵfac = function HeroFooterComponent_Factory(t) {
      return new (t || HeroFooterComponent)();
    };

    HeroFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroFooterComponent,
      selectors: [["app-hero-footer"]],
      decls: 46,
      vars: 5,
      consts: [[1, "main-hero", "flex", "pt-24", "pb-12", "md:py-0"], [1, "container", "main-hero__container", "m-auto", "relative", "z-10"], [1, "flex", "flex-wrap", "items-center", "px-6"], [1, "main-hero__copy", "w-full", "sm:w-1/2", "md:w-5/12", "lg:w-4/12", "xl:pl-20", "mx-auto"], [1, "text-2xl", "md:text-4xl", "lg:text-5xl", "font-light", "md:font-medium", "leading-tight", "mb-20", "md:mb-10"], ["href", "https://calendly.com/esedor-e", "target", "_blank", 1, "btn", "btn-primary", "hidden", "md:inline-flex", "items-center"], ["src", "assets/images/phone-icon-white.svg", 1, "mr-3", 2, "height", "25px"], ["src", "assets/images/google-hangouts-icon.svg", 1, "ml-4", 2, "height", "22px"], ["src", "assets/images/calendly-icon.svg", 1, "ml-2", 2, "height", "22px"], [1, "w-full", "sm:w-1/2", "md:w-3/12", "flex", "mx-auto"], [1, "hero__right-container", "mx-auto", "md:mr-0"], [1, "text-center", "mb-2", "hidden", "md:block"], ["ngxParallaxScroll", "", 1, "footer-hero__donut", 3, "config"], ["media", "(max-width:767px)", "sizes", "1px", "srcset", "assets/images/blank.gif"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/donut-small.png"], ["src", "assets/images/hero/donut-small.png"], ["ngxParallaxScroll", "", 1, "footer-hero__caja", 3, "config"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/caja.png"], ["src", "assets/images/hero/caja.png"], ["ngxParallaxScroll", "", 1, "footer-hero__carrito", 3, "config"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/carrito.png"], ["src", "assets/images/hero/carrito.png"], ["ngxParallaxScroll", "", 1, "footer-hero__cursor", 3, "config"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/cursor.png"], ["src", "assets/images/hero/cursor.png"], ["ngxParallaxScroll", "", 1, "footer-hero__poligono", 3, "config"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/poligono.png"], ["src", "assets/images/hero/poligono.png"]],
      template: function HeroFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Estas listo para vender por tu tienda virtual?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Ll\xE1manos por ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Solicita m\xE1s informaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " o ll\xE1manos al ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "(01)773-8905");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-contact-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "source", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "source", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "source", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "source", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "source", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "source", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "source", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "source", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "source", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "source", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ParallaxCajaConf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ParallaxCajaConf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ParallaxCarritoConf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ParallaxCursorConf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ParallaxPoligonoConf);
        }
      },
      directives: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__["ContactFormComponent"], ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__["ParallaxScrollDirective"]],
      styles: [".main-hero[_ngcontent-%COMP%] {\n  background-color: #B4D2FF;\n  position: relative;\n  overflow: hidden;\n}\n@media screen and (min-width: 768px) {\n  .main-hero[_ngcontent-%COMP%] {\n    height: 100vh;\n    min-height: 768px;\n    max-height: 1080px;\n  }\n}\n@media screen and (max-width: 639px) {\n  .main-hero__copy[_ngcontent-%COMP%] {\n    max-width: 280px;\n    margin: auto;\n  }\n}\n.footer-hero__container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.footer-hero__donut[_ngcontent-%COMP%], .footer-hero__caja[_ngcontent-%COMP%], .footer-hero__carrito[_ngcontent-%COMP%], .footer-hero__cursor[_ngcontent-%COMP%], .footer-hero__poligono[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  display: none;\n}\n@media screen and (min-width: 768px) {\n  .footer-hero__donut[_ngcontent-%COMP%], .footer-hero__caja[_ngcontent-%COMP%], .footer-hero__carrito[_ngcontent-%COMP%], .footer-hero__cursor[_ngcontent-%COMP%], .footer-hero__poligono[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.footer-hero__donut[_ngcontent-%COMP%] {\n  height: 100px;\n  left: 0;\n  bottom: 1750px;\n}\n.footer-hero__donut[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.footer-hero__caja[_ngcontent-%COMP%] {\n  top: -1600px;\n  right: -4rem;\n  height: 350px;\n}\n.footer-hero__caja[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 350px;\n}\n.footer-hero__carrito[_ngcontent-%COMP%] {\n  height: 300px;\n  bottom: -450px;\n  left: calc(50% - 100px);\n}\n.footer-hero__carrito[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n  transform: rotateY(180deg);\n}\n.footer-hero__poligono[_ngcontent-%COMP%] {\n  height: 150px;\n  left: 5rem;\n  top: -1400px;\n}\n.footer-hero__poligono[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px;\n}\n.footer-hero__cursor[_ngcontent-%COMP%] {\n  height: 100px;\n  right: 4rem;\n  bottom: -1600px;\n}\n.footer-hero__cursor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZXJvLWZvb3Rlci9DOlxcVXNlcnNcXGpjYWxkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZWNvbWVyY2UtZXNlZG9yXFxlc2Vkb3ItZWNvbW1lcmNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZXJvLWZvb3RlclxcaGVyby1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVyby1mb290ZXIvaGVyby1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREFFO0VBSkY7SUFLSSxhQUFBO0lBRUEsaUJBQUE7SUFFQSxrQkFBQTtFQ0NGO0FBQ0Y7QURDSTtFQURGO0lBRUksZ0JBQUE7SUFFQSxZQUFBO0VDQ0o7QUFDRjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDREo7QURHRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDRyxzQkFBQTtFQUNDLHFCQUFBO0VBQ0ksaUJBQUE7RUFDUixhQUFBO0FDREo7QURFSTtFQVBGO0lBUUksY0FBQTtFQ0NKO0FBQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0FDRU47QURDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0FDRU47QURDRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNDSjtBREFJO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0FDRU47QURDRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0FDRU47QURDRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlcm8tZm9vdGVyL2hlcm8tZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taGVybyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNEQyRkY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgbWluLWhlaWdodDogNzY4cHg7XG5cbiAgICBtYXgtaGVpZ2h0OiAxMDgwcHg7XG4gIH1cbiAgJl9fY29weSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgICAgIG1heC13aWR0aDogMjgwcHg7XG5cbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cbn1cblxuLmZvb3Rlci1oZXJvIHtcbiAgJl9fY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAmX19kb251dCwgJl9fY2FqYSwgJl9fY2Fycml0bywgJl9fY3Vyc29yLCAmX19wb2xpZ29ubyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gICZfX2RvbnV0IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAxNzUwcHg7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICB9XG4gICZfX2NhamEge1xuICAgIHRvcDogLTE2MDBweDtcbiAgICByaWdodDogLTRyZW07XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICB9XG4gIH1cbiAgJl9fY2Fycml0byB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBib3R0b206IC00NTBweDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIH1cbiAgfVxuICAmX19wb2xpZ29ubyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBsZWZ0OiA1cmVtO1xuICAgIHRvcDogLTE0MDBweDtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9XG4gIH1cbiAgJl9fY3Vyc29yIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHJpZ2h0OiA0cmVtO1xuICAgIGJvdHRvbTogLTE2MDBweDtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gIH1cbn1cclxuIiwiLm1haW4taGVybyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNEQyRkY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLWhlcm8ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogNzY4cHg7XG4gICAgbWF4LWhlaWdodDogMTA4MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuICAubWFpbi1oZXJvX19jb3B5IHtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4uZm9vdGVyLWhlcm9fX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5mb290ZXItaGVyb19fZG9udXQsIC5mb290ZXItaGVyb19fY2FqYSwgLmZvb3Rlci1oZXJvX19jYXJyaXRvLCAuZm9vdGVyLWhlcm9fX2N1cnNvciwgLmZvb3Rlci1oZXJvX19wb2xpZ29ubyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb290ZXItaGVyb19fZG9udXQsIC5mb290ZXItaGVyb19fY2FqYSwgLmZvb3Rlci1oZXJvX19jYXJyaXRvLCAuZm9vdGVyLWhlcm9fX2N1cnNvciwgLmZvb3Rlci1oZXJvX19wb2xpZ29ubyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5mb290ZXItaGVyb19fZG9udXQge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDE3NTBweDtcbn1cbi5mb290ZXItaGVyb19fZG9udXQgaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5mb290ZXItaGVyb19fY2FqYSB7XG4gIHRvcDogLTE2MDBweDtcbiAgcmlnaHQ6IC00cmVtO1xuICBoZWlnaHQ6IDM1MHB4O1xufVxuLmZvb3Rlci1oZXJvX19jYWphIGltZyB7XG4gIGhlaWdodDogMzUwcHg7XG59XG4uZm9vdGVyLWhlcm9fX2NhcnJpdG8ge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3R0b206IC00NTBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG59XG4uZm9vdGVyLWhlcm9fX2NhcnJpdG8gaW1nIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uZm9vdGVyLWhlcm9fX3BvbGlnb25vIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbGVmdDogNXJlbTtcbiAgdG9wOiAtMTQwMHB4O1xufVxuLmZvb3Rlci1oZXJvX19wb2xpZ29ubyBpbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLmZvb3Rlci1oZXJvX19jdXJzb3Ige1xuICBoZWlnaHQ6IDEwMHB4O1xuICByaWdodDogNHJlbTtcbiAgYm90dG9tOiAtMTYwMHB4O1xufVxuLmZvb3Rlci1oZXJvX19jdXJzb3IgaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero-footer',
          templateUrl: './hero-footer.component.html',
          styleUrls: ['./hero-footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/hero/hero.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/hero/hero.component.ts ***!
    \***************************************************/

  /*! exports provided: HeroComponent */

  /***/
  function srcAppComponentsHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../contact-form/contact-form.component */
    "./src/app/components/contact-form/contact-form.component.ts");
    /* harmony import */


    var ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-parallax-scroll */
    "./node_modules/ngx-parallax-scroll/__ivy_ngcc__/fesm2015/ngx-parallax-scroll.js"); // import { gsap, ScrollTrigger } from "gsap/all";
    // gsap.registerPlugin(ScrollTrigger);


    var HeroComponent = /*#__PURE__*/function () {
      function HeroComponent() {
        _classCallCheck(this, HeroComponent);

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

      _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// let mediaQuery = window.matchMedia("(min-width: 768px)");
          // this.mainHeroScrollTrigger(mediaQuery);
          // mediaQuery.addListener(this.mainHeroScrollTrigger);
        }
      }]);

      return HeroComponent;
    }();

    HeroComponent.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)();
    };

    HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      decls: 44,
      vars: 1,
      consts: [[1, "main-hero", "flex"], [1, "container", "main-hero__container", "m-auto"], [1, "flex", "flex-wrap", "items-center", "px-4", "md:px-6"], [1, "w-full", "sm:w-6/12", "lg:pr-12", "main-hero__copy"], [1, "text-2xl", "md:text-4xl", "lg:text-4xl", "font-medium", "leading-tight", "mb-4", "md:mb-10"], [1, "md:pr-12", "mb-2", "md:mb-12", "text-sm", "md:text-normal"], [1, "dropdown"], ["id", "desktopHero-callUs", "href", "https://calendly.com/esedor-e", "target", "_blank", 1, "btn", "btn-primary", "items-center", "hidden", "md:flex"], ["src", "assets/images/icono-wsp.svg", 1, "mr-3", 2, "height", "25px"], ["src", "assets/images/arrow.svg", 1, "ml-4", 2, "height", "22px"], [1, "w-full", "sm:w-6/12", "flex"], [1, "hero__right-container", "mx-auto", "md:mr-0"], [1, "text-center", "mb-2", "hidden", "md:block"], ["media", "(max-width:767px)", "sizes", "1px", "srcset", "assets/images/blank.gif"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/donut.png"], ["src", "assets/images/hero/donut.png", 1, "main-hero__donut"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/caja.png"], ["src", "assets/images/hero/caja.png", "ngxParallaxScroll", "", 1, "main-hero__caja", 3, "config"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/carrito.png"], ["src", "assets/images/hero/carrito.png", 1, "main-hero__carrito"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/cursor.png"], ["src", "assets/images/hero/cursor.png", 1, "main-hero__cursor"], ["media", "(min-width:768px)", "srcset", "assets/images/hero/poligono.png"], ["src", "assets/images/hero/poligono.png", 1, "main-hero__poligono"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lleva tu negocio al siguiente nivel con un e-commerce de alto rendimiento en tiempo record. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Desarrollamos tiendas online a medida para impulsar el crecimiento de tu empresa. Atrae m\xE1s clientes, optimiza tus procesos y vende de manera eficiente.");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xBFTienes dudas?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \xA1Estamos listos para ayudarte!. ");

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ParallaxCajaConf);
        }
      },
      directives: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__["ContactFormComponent"], ngx_parallax_scroll__WEBPACK_IMPORTED_MODULE_2__["ParallaxScrollDirective"]],
      styles: [".main-hero[_ngcontent-%COMP%] {\n  background-color: #B4D2FF;\n  position: relative;\n  overflow: hidden;\n  padding-top: 5rem;\n  padding-bottom: 2rem;\n}\n@media screen and (min-width: 768px) {\n  .main-hero[_ngcontent-%COMP%] {\n    height: 100vh;\n    min-height: 768px;\n    max-height: 1080px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n}\n.main-hero__container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 639px) {\n  .main-hero__copy[_ngcontent-%COMP%] {\n    max-width: 280px;\n    margin: auto;\n  }\n}\n.main-hero__donut[_ngcontent-%COMP%], .main-hero__caja[_ngcontent-%COMP%], .main-hero__carrito[_ngcontent-%COMP%], .main-hero__cursor[_ngcontent-%COMP%], .main-hero__poligono[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  display: none;\n}\n@media screen and (min-width: 768px) {\n  .main-hero__donut[_ngcontent-%COMP%], .main-hero__caja[_ngcontent-%COMP%], .main-hero__carrito[_ngcontent-%COMP%], .main-hero__cursor[_ngcontent-%COMP%], .main-hero__poligono[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.main-hero__donut[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n}\n.main-hero__caja[_ngcontent-%COMP%] {\n  bottom: -3rem;\n  left: 0rem;\n  height: 300px;\n}\n.main-hero__carrito[_ngcontent-%COMP%] {\n  height: 440px;\n  bottom: 0;\n  left: calc(50% - 220px);\n  -webkit-animation: floating 8s linear infinite;\n  animation: floating 8s linear infinite;\n}\n@-webkit-keyframes floating {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(3rem);\n  }\n}\n@keyframes floating {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(3rem);\n  }\n}\n.main-hero__poligono[_ngcontent-%COMP%] {\n  height: 120px;\n  left: 25%;\n  top: 4rem;\n  -webkit-animation: rotate 9s linear infinite;\n  animation: rotate 9s linear infinite;\n}\n@-webkit-keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.main-hero__cursor[_ngcontent-%COMP%] {\n  height: 120px;\n  left: 55%;\n  top: 10rem;\n  -webkit-animation: cursorTranslation 4s infinite;\n  animation: cursorTranslation 4s infinite;\n}\n@-webkit-keyframes cursorTranslation {\n  0%, 100% {\n    transform: translate(0);\n  }\n  33% {\n    transform: translate(40px, -30px);\n  }\n  66% {\n    transform: translate(90px, 40px);\n  }\n}\n@keyframes cursorTranslation {\n  0%, 100% {\n    transform: translate(0);\n  }\n  33% {\n    transform: translate(40px, -30px);\n  }\n  66% {\n    transform: translate(90px, 40px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZXJvL0M6XFxVc2Vyc1xcamNhbGRcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxlY29tZXJjZS1lc2Vkb3JcXGVzZWRvci1lY29tbWVyY2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlcm9cXGhlcm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0NGO0FEQUU7RUFORjtJQU9JLGFBQUE7SUFFQSxpQkFBQTtJQUVBLGtCQUFBO0lBRUEsY0FBQTtJQUVBLGlCQUFBO0VDREY7QUFDRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDQUo7QURHSTtFQURGO0lBRUksZ0JBQUE7SUFFQSxZQUFBO0VDREo7QUFDRjtBREdFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNHLHNCQUFBO0VBQ0MscUJBQUE7RUFDSSxpQkFBQTtFQUNSLGFBQUE7QUNESjtBREVJO0VBUEY7SUFRSSxjQUFBO0VDQ0o7QUFDRjtBRENFO0VBQ0UsTUFBQTtFQUNBLFFBQUE7QUNDSjtBRENFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDQ0o7QURDRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtFQUNRLHNDQUFBO0FDQ1o7QURBSTtFQUNFO0lBQ0Usd0JBQUE7RUNFTjtFRENJO0lBQ0UsMkJBQUE7RUNDTjtBQUNGO0FEQ0k7RUFDRTtJQUNFLHdCQUFBO0VDQ047RURFSTtJQUNFLDJCQUFBO0VDQU47QUFDRjtBREdFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7RUFDUSxvQ0FBQTtBQ0RaO0FERUk7RUFDRTtJQUNFLG9CQUFBO0VDQU47RURHSTtJQUNFLHlCQUFBO0VDRE47QUFDRjtBREdJO0VBQ0U7SUFDRSxvQkFBQTtFQ0ROO0VESUk7SUFDRSx5QkFBQTtFQ0ZOO0FBQ0Y7QURLRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdEQUFBO0VBQ1Esd0NBQUE7QUNIWjtBRElJO0VBQ0U7SUFDRSx1QkFBQTtFQ0ZOO0VES0k7SUFDRSxpQ0FBQTtFQ0hOO0VETUk7SUFDRSxnQ0FBQTtFQ0pOO0FBQ0Y7QURNSTtFQUNFO0lBQ0UsdUJBQUE7RUNKTjtFRE9JO0lBQ0UsaUNBQUE7RUNMTjtFRFFJO0lBQ0UsZ0NBQUE7RUNOTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1oZXJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I0RDJGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIG1pbi1oZWlnaHQ6IDc2OHB4O1xuXG4gICAgbWF4LWhlaWdodDogMTA4MHB4O1xuXG4gICAgcGFkZGluZy10b3A6IDA7XG5cbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuICAmX19jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gICZfX2NvcHkge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDI4MHB4O1xuXG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG4gICZfX2RvbnV0LCAmX19jYWphLCAmX19jYXJyaXRvLCAmX19jdXJzb3IsICZfX3BvbGlnb25vIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgJl9fZG9udXQge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICAmX19jYWphIHtcbiAgICBib3R0b206IC0zcmVtO1xuICAgIGxlZnQ6IDByZW07XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuICAmX19jYXJyaXRvIHtcbiAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDIyMHB4KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmxvYXRpbmcgOHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmbG9hdGluZyA4cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgICAgIDAlLCAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuXG4gICAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgZmxvYXRpbmcge1xuICAgICAgMCUsIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG5cbiAgICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJl9fcG9saWdvbm8ge1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgbGVmdDogMjUlO1xuICAgIHRvcDogNHJlbTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlIDlzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlIDlzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICB9XG5cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgfVxuXG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJl9fY3Vyc29yIHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGxlZnQ6IDU1JTtcbiAgICB0b3A6IDEwcmVtO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjdXJzb3JUcmFuc2xhdGlvbiA0cyBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogY3Vyc29yVHJhbnNsYXRpb24gNHMgaW5maW5pdGU7XG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGN1cnNvclRyYW5zbGF0aW9uIHtcbiAgICAgIDAlLCAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICB9XG5cbiAgICAgIDMzJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwcHgsIC0zMHB4KTtcbiAgICAgIH1cblxuICAgICAgNjYlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTBweCwgNDBweCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgY3Vyc29yVHJhbnNsYXRpb24ge1xuICAgICAgMCUsIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgIH1cblxuICAgICAgMzMlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCwgLTMwcHgpO1xuICAgICAgfVxuXG4gICAgICA2NiUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5MHB4LCA0MHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cclxuIiwiLm1haW4taGVybyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNEQyRkY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4taGVybyB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4taGVpZ2h0OiA3NjhweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDgwcHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbn1cbi5tYWluLWhlcm9fX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIC5tYWluLWhlcm9fX2NvcHkge1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG4ubWFpbi1oZXJvX19kb251dCwgLm1haW4taGVyb19fY2FqYSwgLm1haW4taGVyb19fY2Fycml0bywgLm1haW4taGVyb19fY3Vyc29yLCAubWFpbi1oZXJvX19wb2xpZ29ubyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLWhlcm9fX2RvbnV0LCAubWFpbi1oZXJvX19jYWphLCAubWFpbi1oZXJvX19jYXJyaXRvLCAubWFpbi1oZXJvX19jdXJzb3IsIC5tYWluLWhlcm9fX3BvbGlnb25vIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLm1haW4taGVyb19fZG9udXQge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLm1haW4taGVyb19fY2FqYSB7XG4gIGJvdHRvbTogLTNyZW07XG4gIGxlZnQ6IDByZW07XG4gIGhlaWdodDogMzAwcHg7XG59XG4ubWFpbi1oZXJvX19jYXJyaXRvIHtcbiAgaGVpZ2h0OiA0NDBweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIyMHB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZsb2F0aW5nIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBmbG9hdGluZyA4cyBsaW5lYXIgaW5maW5pdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxvYXRpbmcge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxufVxuLm1haW4taGVyb19fcG9saWdvbm8ge1xuICBoZWlnaHQ6IDEyMHB4O1xuICBsZWZ0OiAyNSU7XG4gIHRvcDogNHJlbTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSA5cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcm90YXRlIDlzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLm1haW4taGVyb19fY3Vyc29yIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbGVmdDogNTUlO1xuICB0b3A6IDEwcmVtO1xuICAtd2Via2l0LWFuaW1hdGlvbjogY3Vyc29yVHJhbnNsYXRpb24gNHMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogY3Vyc29yVHJhbnNsYXRpb24gNHMgaW5maW5pdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgY3Vyc29yVHJhbnNsYXRpb24ge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LCAtMzBweCk7XG4gIH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5MHB4LCA0MHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBjdXJzb3JUcmFuc2xhdGlvbiB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwcHgsIC0zMHB4KTtcbiAgfVxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDkwcHgsIDQwcHgpO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero',
          templateUrl: './hero.component.html',
          styleUrls: ['./hero.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/selected-project/selected-project.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/selected-project/selected-project.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SelectedProjectComponent */

  /***/
  function srcAppComponentsSelectedProjectSelectedProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectedProjectComponent", function () {
      return SelectedProjectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SelectedProjectComponent = /*#__PURE__*/function () {
      function SelectedProjectComponent() {
        _classCallCheck(this, SelectedProjectComponent);
      }

      _createClass(SelectedProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectedProjectComponent;
    }();

    SelectedProjectComponent.ɵfac = function SelectedProjectComponent_Factory(t) {
      return new (t || SelectedProjectComponent)();
    };

    SelectedProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectedProjectComponent,
      selectors: [["app-selected-project"]],
      decls: 22,
      vars: 0,
      consts: [[1, "selected-project-section", "md:pt-8", "pb-6", "md:pb-24"], [1, "container", "selected-project-section__container", "mx-auto", "pt-4", "md:pt-0", "px-8", "md:px-4"], [1, "w-full", "md:w-5/12", "lg:w-3/12", "md:pl-4"], [1, "block", "text-sm"], [1, "text-2xl", "md:text-5xl", "my-4", "md:my-12", "md:font-light"], [1, "mb-8", "md:mb-12", "leading-normal", "text-xs", "md:text-sm"], [1, "mb-8", "md:mb-20", "text-xs", "md:text-sm"], [1, "md:hidden", "text-right"], ["href", "https://mapit.pe", "target", "_blank", 1, "font-bold", "underline", "text-xs", 2, "font-family", "Poppins"], ["href", "https://mapit.pe", "target", "_blank", 1, "project-cta", "hidden", "md:block"], [1, "project-cta__span"], ["src", "assets/images/long-white-arrow.svg", 1, "project-cta__img"], ["media", "(max-width:767px)", "sizes", "768px", "srcset", "assets/images/mapit-logo.png"], ["media", "(min-width:768px)", "sizes", "1200px", "srcset", "assets/images/mapit-logo.png"], ["src", "assets/images/mapit-logo.png", "alt", "Map It", 1, "selected-project-section__image"]],
      template: function SelectedProjectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Proyecto seleccionado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MAP-IT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fundado en el 2019 en la industria del Turismo es la primera plataforma ecommerce de experiencias inmersivas en Per\xFA, ganadores de la S\xE9ptima generaci\xF3n(7G) de inn\xF3vate Per\xFA, el reto fue reinventarnos y adaptarnos al covid-19 ofreciendo por primera vez un servicio de experiencias online.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Servicios: Branding, fotograf\xEDa, experiencia de usuario y desarrollo a medida.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " VISITAR WEB ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Visitar web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "source", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "source", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".selected-project-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #000;\n  color: #fff;\n  margin-bottom: -10px;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  border-bottom-right-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\n@media screen and (min-width: 768px) {\n  .selected-project-section[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, black 90%, transparent 90%);\n    display: block;\n    height: 768px;\n    margin-bottom: -84px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n}\n.selected-project-section__image[_ngcontent-%COMP%] {\n  width: 100%;\n  order: 0;\n}\n@media screen and (min-width: 768px) {\n  .selected-project-section__image[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    top: 84px;\n    right: 0;\n    height: 600px;\n    width: 50%;\n    -o-object-fit: cover;\n    object-fit: cover;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .selected-project-section__image[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n.selected-project-section__container[_ngcontent-%COMP%] {\n  order: 1;\n}\n.project-cta[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.project-cta__span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: 2px;\n  transition: all 0.3s;\n}\n.project-cta__img[_ngcontent-%COMP%] {\n  width: 200px;\n  transform: translateX(-25px);\n  transition: all 0.3s;\n}\n.project-cta[_ngcontent-%COMP%]:hover   .project-cta__span[_ngcontent-%COMP%] {\n  letter-spacing: 4px;\n}\n.project-cta[_ngcontent-%COMP%]:hover   .project-cta__img[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3RlZC1wcm9qZWN0L0M6XFxVc2Vyc1xcamNhbGRcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxlY29tZXJjZS1lc2Vkb3JcXGVzZWRvci1lY29tbWVyY2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlbGVjdGVkLXByb2plY3RcXHNlbGVjdGVkLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VsZWN0ZWQtcHJvamVjdC9zZWxlY3RlZC1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FDQ0Y7QURBRTtFQVZGO0lBV0ksOERBQUE7SUFFQSxjQUFBO0lBRUEsYUFBQTtJQUVBLG9CQUFBO0lBRUEsNkJBQUE7SUFFQSw0QkFBQTtFQ0ZGO0FBQ0Y7QURHRTtFQUNFLFdBQUE7RUFDQSxRQUFBO0FDREo7QURFSTtFQUhGO0lBSUksY0FBQTtJQUVBLGtCQUFBO0lBRUEsU0FBQTtJQUVBLFFBQUE7SUFFQSxhQUFBO0lBRUEsVUFBQTtJQUVBLG9CQUFBO0lBRUcsaUJBQUE7RUNOUDtBQUNGO0FET0k7RUFwQkY7SUFxQkksVUFBQTtFQ0pKO0FBQ0Y7QURNRTtFQUNFLFFBQUE7QUNKSjtBRFFBO0VBQ0UsZ0JBQUE7QUNMRjtBRE1FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0pKO0FETUU7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0pKO0FET0k7RUFDRSxtQkFBQTtBQ0xOO0FET0k7RUFDRSx3QkFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3RlZC1wcm9qZWN0L3NlbGVjdGVkLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQtcHJvamVjdC1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIGJsYWNrIDkwJSwgdHJhbnNwYXJlbnQgOTAlKTtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaGVpZ2h0OiA3NjhweDtcblxuICAgIG1hcmdpbi1ib3R0b206IC04NHB4O1xuXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG5cbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG4gICZfX2ltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvcmRlcjogMDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgdG9wOiA4NHB4O1xuXG4gICAgICByaWdodDogMDtcblxuICAgICAgaGVpZ2h0OiA2MDBweDtcblxuICAgICAgd2lkdGg6IDUwJTtcblxuICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICB9XG4gICZfX2NvbnRhaW5lciB7XG4gICAgb3JkZXI6IDE7XG4gIH1cbn1cblxuLnByb2plY3QtY3RhIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJl9fc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxuICAmX19pbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1cHgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG4gICY6aG92ZXIge1xuICAgIC5wcm9qZWN0LWN0YV9fc3BhbiB7XG4gICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIH1cbiAgICAucHJvamVjdC1jdGFfX2ltZyB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICB9XG59XHJcbiIsIi5zZWxlY3RlZC1wcm9qZWN0LXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlbGVjdGVkLXByb2plY3Qtc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCBibGFjayA5MCUsIHRyYW5zcGFyZW50IDkwJSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA3NjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtODRweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG59XG4uc2VsZWN0ZWQtcHJvamVjdC1zZWN0aW9uX19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBvcmRlcjogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWxlY3RlZC1wcm9qZWN0LXNlY3Rpb25fX2ltYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4NHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5zZWxlY3RlZC1wcm9qZWN0LXNlY3Rpb25fX2ltYWdlIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG4uc2VsZWN0ZWQtcHJvamVjdC1zZWN0aW9uX19jb250YWluZXIge1xuICBvcmRlcjogMTtcbn1cblxuLnByb2plY3QtY3RhIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9qZWN0LWN0YV9fc3BhbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ucHJvamVjdC1jdGFfX2ltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNXB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ucHJvamVjdC1jdGE6aG92ZXIgLnByb2plY3QtY3RhX19zcGFuIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbn1cbi5wcm9qZWN0LWN0YTpob3ZlciAucHJvamVjdC1jdGFfX2ltZyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-selected-project',
          templateUrl: './selected-project.component.html',
          styleUrls: ['./selected-project.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/services/services.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/services/services.component.ts ***!
    \***********************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppComponentsServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ServicesComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var service_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r2.description);
      }
    }

    function ServicesComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imagePath + service_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", service_r3.title)("title", service_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.description);
      }
    }

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);

        this.imagePath = 'assets/images/';
        this.config = {
          slidesPerView: 'auto',
          navigation: false,
          pagination: false
        };
        this.services = [{
          title: '"Escala tu negocio con la tecnología de los grandes"',
          description: '"No necesitas ser una gran empresa para tener una tienda online de nivel empresarial. Con nuestra solución, tendrás acceso a las mismas herramientas y tecnología que las grandes marcas, adaptadas a las necesidades de tu negocio, sin costos excesivos."',
          image: 'escala.svg'
        }, {
          title: '"Un equipo experto en constante evolución para tu negocio"',
          description: '"Tu tienda estará en manos de un equipo de expertos que no solo entiende el presente, sino que está siempre a la vanguardia de las últimas tendencias y herramientas. Esto significa que tu tienda se mantendrá siempre actualizada, escalando con las necesidades de tu negocio."',
          image: 'equipo.svg'
        }, {
          title: '"Implementación rápida, resultados inmediatos"',
          description: 'Olvídate de meses de espera. Nuestra implementación ágil te permite lanzar tu tienda online rápidamente, sin sacrificar calidad. Implementamos las mejores prácticas de UX/UI, SEO, CRO y velocidad de carga para garantizar que cada visitante tenga la mejor experiencia de compra."',
          image: 'implementacion.svg'
        }];
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };

    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      decls: 15,
      vars: 3,
      consts: [[1, "flex", "md:hidden", "pt-16", "pb-12"], [1, "container", "m-auto"], [1, "w-full", "px-4", "mb-12"], [1, "flex", "text-2xl", "text-center", "leading-tight", "font-light", "justify-center"], [1, "swiper-container", 3, "swiper"], [1, "swiper-wrapper", "pb-8"], ["class", "w-1/3 flex swiper-slide", 4, "ngFor", "ngForOf"], [1, "section-services", "hidden", "md:flex", "pt-20", "pb-12"], [1, "container", "mx-auto"], [1, "w-full", "px-4", "md:px-6", "mb-16"], [1, "flex", "text-white", "text-4xl", "leading-tight", "font-light", "justify-center"], [1, "flex", "flex-wrap"], ["class", "w-1/2 lg:w-1/3 service-item px-6 mb-16", 4, "ngFor", "ngForOf"], [1, "w-1/3", "flex", "swiper-slide"], [1, "service-responsive-item"], [1, "service-responsive-item__title"], [1, "text-center", "text-2xl", "font-bold"], [1, "service-responsive-item__content"], [1, "text-blue", "mb-8"], [1, "w-1/2", "lg:w-1/3", "service-item", "px-6", "mb-16"], [1, "w-16", "h-16", "object-contain", 3, "src", "alt", "title"], [1, "text-lg", "font-bold", "mb-6", "mt-6"], [1, "text-sm"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        }
      },
      directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["@charset \"UTF-8\";\n.section-services[_ngcontent-%COMP%] {\n  background-color: #000;\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n}\n.service-item[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.service-responsive-item[_ngcontent-%COMP%] {\n  width: 250px;\n  margin: auto;\n  border-radius: 5px;\n  transition: all 0.3s;\n  position: relative;\n}\n.service-responsive-item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--blue);\n  display: block;\n  width: 286px;\n  height: 330px;\n  position: absolute;\n  left: -18px;\n  top: 25px;\n  z-index: 0;\n  border-radius: 5px;\n}\n.service-responsive-item__title[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  height: 156px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1.5rem;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  position: relative;\n  z-index: 1;\n}\n.service-responsive-item__content[_ngcontent-%COMP%] {\n  height: 225px;\n  padding: 1rem 1.5rem;\n  text-align: center;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 10px 20px rgba(0, 41, 255, 0.4);\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  position: relative;\n  background-color: #fff;\n  z-index: 1;\n}\n.swiper-slide[_ngcontent-%COMP%]:not(.swiper-slide-active)   .service-responsive-item[_ngcontent-%COMP%] {\n  transform: scale(0.75);\n  opacity: 0;\n}\n.servi-item__image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  border: 2px solid red;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9DOlxcVXNlcnNcXGpjYWxkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZWNvbWVyY2UtZXNlZG9yXFxlc2Vkb3ItZWNvbW1lcmNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZXJ2aWNlc1xcc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBREVGO0FDQ0E7RUFDRSxXQUFBO0FERUY7QUNDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FERUY7QUNERTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QURHSjtBQ0RFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FER0o7QUNERTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QURHSjtBQ0VFO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0FEQ0o7QUNHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQXVCLG1DQUFBO0FEQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zZWN0aW9uLXNlcnZpY2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnNlcnZpY2UtaXRlbSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VydmljZS1yZXNwb25zaXZlLWl0ZW0ge1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlcnZpY2UtcmVzcG9uc2l2ZS1pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI4NnB4O1xuICBoZWlnaHQ6IDMzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xOHB4O1xuICB0b3A6IDI1cHg7XG4gIHotaW5kZXg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5zZXJ2aWNlLXJlc3BvbnNpdmUtaXRlbV9fdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxNTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5zZXJ2aWNlLXJlc3BvbnNpdmUtaXRlbV9fY29udGVudCB7XG4gIGhlaWdodDogMjI1cHg7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCA0MSwgMjU1LCAwLjQpO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTtcbn1cblxuLnN3aXBlci1zbGlkZTpub3QoLnN3aXBlci1zbGlkZS1hY3RpdmUpIC5zZXJ2aWNlLXJlc3BvbnNpdmUtaXRlbSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5zZXJ2aS1pdGVtX19pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAvKiBwYXJhIHF1ZSB2ZWFzIHNpIGVzdMOhIGNhcmdhbmRvICovXG59IiwiLnNlY3Rpb24tc2VydmljZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc2VydmljZS1pdGVtIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZXJ2aWNlLXJlc3BvbnNpdmUtaXRlbSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjg2cHg7XG4gICAgaGVpZ2h0OiAzMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTE4cHg7XG4gICAgdG9wOiAyNXB4O1xuICAgIHotaW5kZXg6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gICZfX3RpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMTU2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gICZfX2NvbnRlbnQge1xuICAgIGhlaWdodDogMjI1cHg7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDQxLCAyNTUsIDAuNCk7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuXG4uc3dpcGVyLXNsaWRlOm5vdCguc3dpcGVyLXNsaWRlLWFjdGl2ZSkge1xuICAuc2VydmljZS1yZXNwb25zaXZlLWl0ZW0ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjc1KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5zZXJ2aS1pdGVtX19pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAycHggc29saWQgcmVkOyAvKiBwYXJhIHF1ZSB2ZWFzIHNpIGVzdMOhIGNhcmdhbmRvICovXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-services',
          templateUrl: './services.component.html',
          styleUrls: ['./services.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/steps-slider-test/steps-slider-test.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/steps-slider-test/steps-slider-test.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: StepsSliderTestComponent */

  /***/
  function srcAppComponentsStepsSliderTestStepsSliderTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepsSliderTestComponent", function () {
      return StepsSliderTestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! gsap/all */
    "./node_modules/gsap/all.js");
    /* harmony import */


    var src_app_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modal.service */
    "./src/app/modal.service.ts");

    gsap_all__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

    var StepsSliderTestComponent = /*#__PURE__*/function () {
      function StepsSliderTestComponent(modalService) {
        _classCallCheck(this, StepsSliderTestComponent);

        this.modalService = modalService;
      }

      _createClass(StepsSliderTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          gsap_all__WEBPACK_IMPORTED_MODULE_1__["gsap"].to('.steps-slider__container', {
            scrollTrigger: {
              trigger: '.steps-slider__container',
              start: 'top top',
              pinSpacing: false,
              pin: true,
              scrub: true
            },
            x: function x() {
              var stepsSliderItem = document.querySelector('.steps-slider__item');
              return "-=".concat(stepsSliderItem.offsetWidth);
            }
          });
        }
      }, {
        key: "openModal",
        value: function openModal() {
          this.modalService.updateModalState(true);
        }
      }]);

      return StepsSliderTestComponent;
    }();

    StepsSliderTestComponent.ɵfac = function StepsSliderTestComponent_Factory(t) {
      return new (t || StepsSliderTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]));
    };

    StepsSliderTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StepsSliderTestComponent,
      selectors: [["app-steps-slider-test"]],
      decls: 31,
      vars: 0,
      consts: [[1, "steps-slider", "hidden", "md:flex"], [1, "steps-slider__container"], [1, "swiper-wrapper"], [1, "swiper-slide", "flex", "items-center", "steps-slider__item", "text-white", "px-3", "my-auto", 2, "width", "90%"], [1, "flex", "flex-wrap"], [1, "w-1/2", "flex", "flex-col", "items-start", "py-8", "pr-12"], [1, "font-bold"], [1, "text-2xl", "lg:text-3xl", "font-light", "mb-4"], [1, "mb-12"], ["id", "desktopSteps-step-4", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", "mt-auto", 3, "click"], ["src", "assets/images/right-arrow-white.svg", 1, "ml-4", 2, "height", "14px"], [1, "w-1/2", "pl-0", "lg:pl-12", "pr-6", "lg:pr-12"], ["src", "assets/images/steps/step-04.svg", 2, "height", "420px"], ["id", "desktopSteps-step-5", 1, "btn", "has-arrow", "btn-primary", "inline-flex", "items-center", "justify-center", "mt-auto", 3, "click"], ["src", "assets/images/steps/step-05.svg", 2, "height", "420px"]],
      template: function StepsSliderTestComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LSeleccionamos la tecnolog\xEDa y definimos el alcance del proyecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Evaluamos entre desarrollar un c\xF3digo personalizado o usar soluciones de c\xF3digo abierto, y luego definimos los sprints clave para asegurar el impacto comercial de tu tienda online.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsSliderTestComponent_Template_button_click_12_listener() {
            return ctx.openModal();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsSliderTestComponent_Template_button_click_26_listener() {
            return ctx.openModal();
          });

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
        }
      },
      styles: [".steps-slider[_ngcontent-%COMP%] {\n  background: #000;\n  height: 200vh;\n  min-height: 768px;\n}\n.steps-slider__container[_ngcontent-%COMP%] {\n  padding-left: calc((100% - 860px)/2 + 1rem);\n  height: 100vh;\n}\n@media screen and (min-width: 1050px) {\n  .steps-slider__container[_ngcontent-%COMP%] {\n    padding-left: calc((100% - 1024px)/2 + 1rem);\n  }\n}\n@media screen and (min-width: 1200px) {\n  .steps-slider__container[_ngcontent-%COMP%] {\n    padding-left: calc((100% - 1140px)/2 + 1rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGVwcy1zbGlkZXItdGVzdC9DOlxcVXNlcnNcXGpjYWxkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZWNvbWVyY2UtZXNlZG9yXFxlc2Vkb3ItZWNvbW1lcmNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzdGVwcy1zbGlkZXItdGVzdFxcc3RlcHMtc2xpZGVyLXRlc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc3RlcHMtc2xpZGVyLXRlc3Qvc3RlcHMtc2xpZGVyLXRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQUU7RUFDRSwyQ0FBQTtFQUNBLGFBQUE7QUNFSjtBRERJO0VBSEY7SUFJSSw0Q0FBQTtFQ0lKO0FBQ0Y7QURISTtFQU5GO0lBT0ksNENBQUE7RUNNSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGVwcy1zbGlkZXItdGVzdC9zdGVwcy1zbGlkZXItdGVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcy1zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBoZWlnaHQ6IDIwMHZoO1xuICBtaW4taGVpZ2h0OiA3NjhweDtcbiAgJl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoKDEwMCUgLSA4NjBweCkvMiArIDFyZW0pO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA1MHB4KSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoKDEwMCUgLSAxMDI0cHgpLzIgKyAxcmVtKTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoKDEwMCUgLSAxMTQwcHgpLzIgKyAxcmVtKTtcbiAgICB9XG4gIH1cbn1cclxuIiwiLnN0ZXBzLXNsaWRlciB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGhlaWdodDogMjAwdmg7XG4gIG1pbi1oZWlnaHQ6IDc2OHB4O1xufVxuLnN0ZXBzLXNsaWRlcl9fY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKCgxMDAlIC0gODYwcHgpLzIgKyAxcmVtKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNTBweCkge1xuICAuc3RlcHMtc2xpZGVyX19jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYygoMTAwJSAtIDEwMjRweCkvMiArIDFyZW0pO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnN0ZXBzLXNsaWRlcl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoKDEwMCUgLSAxMTQwcHgpLzIgKyAxcmVtKTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepsSliderTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-steps-slider-test',
          templateUrl: './steps-slider-test.component.html',
          styleUrls: ['./steps-slider-test.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modal.service.ts":
  /*!**********************************!*\
    !*** ./src/app/modal.service.ts ***!
    \**********************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ModalService = /*#__PURE__*/function () {
      function ModalService() {
        _classCallCheck(this, ModalService);

        this.modalState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.modalState$ = this.modalState.asObservable();
      }

      _createClass(ModalService, [{
        key: "updateModalState",
        value: function updateModalState(updatedState) {
          this.modalState.next(updatedState);
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)();
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/gracias/gracias.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/gracias/gracias.component.ts ***!
    \****************************************************/

  /*! exports provided: GraciasComponent */

  /***/
  function srcAppPagesGraciasGraciasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraciasComponent", function () {
      return GraciasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GraciasComponent = /*#__PURE__*/function () {
      function GraciasComponent() {
        _classCallCheck(this, GraciasComponent);
      }

      _createClass(GraciasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GraciasComponent;
    }();

    GraciasComponent.ɵfac = function GraciasComponent_Factory(t) {
      return new (t || GraciasComponent)();
    };

    GraciasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GraciasComponent,
      selectors: [["app-gracias"]],
      decls: 20,
      vars: 0,
      consts: [[1, "gracias-hero"], [1, "container", "m-auto", "relative", "z-10"], [1, "flex", "flex-wrap", "flex-col", "px-6"], [1, "w-full", "lg:w-8/12", "mx-auto", "sm:pr-24"], [1, "font-medium", "text-3xl", "sm:text-5xl"], [1, "font-light", "textl-xl", "sm:text-3xl", "mb-6"], [1, "mb-12", "sm:mb-24", "pr-8"], ["id", "gracias-backCta", "href", "https://esedor.com", 1, "btn", "btn-primary"], [1, "gracias-hero__poligono"], ["src", "assets/images/hero/poligono.png"], [1, "gracias-hero__donut"], ["src", "assets/images/hero/donut-small.png"], [1, "gracias-hero__carrito"], ["src", "assets/images/hero/carrito.png"], [1, "gracias-hero__cursor"], ["src", "assets/images/hero/cursor.png"]],
      template: function GraciasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA1Muchas gracias!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Recibimos tu mensaje con \xE9xito");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nos pondremos en contacto muy pronto para ayudarte con tu ecommerce, te invitamos a seguir explorando m\xE1s de lo que hacemos.");

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
        }
      },
      styles: [".gracias-hero[_ngcontent-%COMP%] {\n  background-color: #B4D2FF;\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n}\n.gracias-hero__container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.gracias-hero__donut[_ngcontent-%COMP%], .gracias-hero__caja[_ngcontent-%COMP%], .gracias-hero__carrito[_ngcontent-%COMP%], .gracias-hero__cursor[_ngcontent-%COMP%], .gracias-hero__poligono[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.gracias-hero__donut[_ngcontent-%COMP%] {\n  top: 0;\n  right: 80px;\n  transform: rotate(90deg);\n  transform-origin: right;\n}\n.gracias-hero__carrito[_ngcontent-%COMP%] {\n  display: none;\n  height: 440px;\n  bottom: 4rem;\n  right: 0rem;\n  -webkit-animation: floating 5s ease-in infinite;\n  animation: floating 5s ease-in infinite;\n}\n@media screen and (min-width: 992px) {\n  .gracias-hero__carrito[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .gracias-hero__carrito[_ngcontent-%COMP%] {\n    right: 5rem;\n  }\n}\n@-webkit-keyframes floating {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(3rem);\n  }\n}\n@keyframes floating {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(3rem);\n  }\n}\n.gracias-hero__poligono[_ngcontent-%COMP%] {\n  height: 80px;\n  left: 20px;\n  top: 2rem;\n  -webkit-animation: rotate 7s linear infinite;\n  animation: rotate 7s linear infinite;\n}\n.gracias-hero__poligono[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n}\n@media screen and (min-width: 640px) {\n  .gracias-hero__poligono[_ngcontent-%COMP%] {\n    height: 120px;\n    top: 4rem;\n    left: 50px;\n  }\n  .gracias-hero__poligono[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n}\n@-webkit-keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.gracias-hero__cursor[_ngcontent-%COMP%] {\n  height: 100px;\n  left: 35%;\n  bottom: 30px;\n  -webkit-animation: cursorTranslation 4s infinite;\n  animation: cursorTranslation 4s infinite;\n}\n@-webkit-keyframes cursorTranslation {\n  0%, 100% {\n    transform: translate(0);\n  }\n  33% {\n    transform: translate(40px, -30px);\n  }\n  66% {\n    transform: translate(90px, 40px);\n  }\n}\n@keyframes cursorTranslation {\n  0%, 100% {\n    transform: translate(0);\n  }\n  33% {\n    transform: translate(40px, -30px);\n  }\n  66% {\n    transform: translate(90px, 40px);\n  }\n}\n.gracias-hero__cursor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JhY2lhcy9DOlxcVXNlcnNcXGpjYWxkXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZWNvbWVyY2UtZXNlZG9yXFxlc2Vkb3ItZWNvbW1lcmNlL3NyY1xcYXBwXFxwYWdlc1xcZ3JhY2lhc1xcZ3JhY2lhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3JhY2lhcy9ncmFjaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDRjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDRyxzQkFBQTtFQUNDLHFCQUFBO0VBQ0ksaUJBQUE7QUNFWjtBREFFO0VBQ0UsTUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FDRUo7QURBRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwrQ0FBQTtFQUNRLHVDQUFBO0FDRVo7QURESTtFQVBGO0lBUUksY0FBQTtFQ0lKO0FBQ0Y7QURISTtFQVZGO0lBV0ksV0FBQTtFQ01KO0FBQ0Y7QURMSTtFQUNFO0lBQ0Usd0JBQUE7RUNPTjtFREpJO0lBQ0UsMkJBQUE7RUNNTjtBQUNGO0FESkk7RUFDRTtJQUNFLHdCQUFBO0VDTU47RURISTtJQUNFLDJCQUFBO0VDS047QUFDRjtBREZFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7RUFDUSxvQ0FBQTtBQ0laO0FESEk7RUFDRSxZQUFBO0FDS047QURISTtFQVRGO0lBVUksYUFBQTtJQUVBLFNBQUE7SUFFQSxVQUFBO0VDSUo7RURGSTtJQUNFLGFBQUE7RUNJTjtBQUNGO0FERkk7RUFDRTtJQUNFLG9CQUFBO0VDSU47RURESTtJQUNFLHlCQUFBO0VDR047QUFDRjtBRERJO0VBQ0U7SUFDRSxvQkFBQTtFQ0dOO0VEQUk7SUFDRSx5QkFBQTtFQ0VOO0FBQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ1Esd0NBQUE7QUNDWjtBREFJO0VBQ0U7SUFDRSx1QkFBQTtFQ0VOO0VEQ0k7SUFDRSxpQ0FBQTtFQ0NOO0VERUk7SUFDRSxnQ0FBQTtFQ0FOO0FBQ0Y7QURFSTtFQUNFO0lBQ0UsdUJBQUE7RUNBTjtFREdJO0lBQ0UsaUNBQUE7RUNETjtFRElJO0lBQ0UsZ0NBQUE7RUNGTjtBQUNGO0FESUk7RUFDRSxhQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ncmFjaWFzL2dyYWNpYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JhY2lhcy1oZXJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I0RDJGRjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICAmX19jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gICZfX2RvbnV0LCAmX19jYWphLCAmX19jYXJyaXRvLCAmX19jdXJzb3IsICZfX3BvbGlnb25vIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICAmX19kb251dCB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiA4MHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgfVxuICAmX19jYXJyaXRvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGhlaWdodDogNDQwcHg7XG4gICAgYm90dG9tOiA0cmVtO1xuICAgIHJpZ2h0OiAwcmVtO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmbG9hdGluZyA1cyBlYXNlLWluIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmbG9hdGluZyA1cyBlYXNlLWluIGluZmluaXRlO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgICByaWdodDogNXJlbTtcbiAgICB9XG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgICAgIDAlLCAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuXG4gICAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgZmxvYXRpbmcge1xuICAgICAgMCUsIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG5cbiAgICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJl9fcG9saWdvbm8ge1xuICAgIGhlaWdodDogODBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHRvcDogMnJlbTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlIDdzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlIDdzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgaGVpZ2h0OiAxMjBweDtcblxuICAgICAgdG9wOiA0cmVtO1xuXG4gICAgICBsZWZ0OiA1MHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICB9XG5cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgfVxuXG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJl9fY3Vyc29yIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGxlZnQ6IDM1JTtcbiAgICBib3R0b206IDMwcHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGN1cnNvclRyYW5zbGF0aW9uIDRzIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBjdXJzb3JUcmFuc2xhdGlvbiA0cyBpbmZpbml0ZTtcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgY3Vyc29yVHJhbnNsYXRpb24ge1xuICAgICAgMCUsIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgIH1cblxuICAgICAgMzMlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCwgLTMwcHgpO1xuICAgICAgfVxuXG4gICAgICA2NiUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5MHB4LCA0MHB4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBjdXJzb3JUcmFuc2xhdGlvbiB7XG4gICAgICAwJSwgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAzMyUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LCAtMzBweCk7XG4gICAgICB9XG5cbiAgICAgIDY2JSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDkwcHgsIDQwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gIH1cbn1cclxuIiwiLmdyYWNpYXMtaGVybyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNEQyRkY7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ncmFjaWFzLWhlcm9fX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5ncmFjaWFzLWhlcm9fX2RvbnV0LCAuZ3JhY2lhcy1oZXJvX19jYWphLCAuZ3JhY2lhcy1oZXJvX19jYXJyaXRvLCAuZ3JhY2lhcy1oZXJvX19jdXJzb3IsIC5ncmFjaWFzLWhlcm9fX3BvbGlnb25vIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmdyYWNpYXMtaGVyb19fZG9udXQge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiA4MHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xufVxuLmdyYWNpYXMtaGVyb19fY2Fycml0byB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogNDQwcHg7XG4gIGJvdHRvbTogNHJlbTtcbiAgcmlnaHQ6IDByZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmbG9hdGluZyA1cyBlYXNlLWluIGluZmluaXRlO1xuICBhbmltYXRpb246IGZsb2F0aW5nIDVzIGVhc2UtaW4gaW5maW5pdGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuZ3JhY2lhcy1oZXJvX19jYXJyaXRvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIC5ncmFjaWFzLWhlcm9fX2NhcnJpdG8ge1xuICAgIHJpZ2h0OiA1cmVtO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxvYXRpbmcge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxufVxuLmdyYWNpYXMtaGVyb19fcG9saWdvbm8ge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogMnJlbTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSA3cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcm90YXRlIDdzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5ncmFjaWFzLWhlcm9fX3BvbGlnb25vIGltZyB7XG4gIGhlaWdodDogODBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5ncmFjaWFzLWhlcm9fX3BvbGlnb25vIHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHRvcDogNHJlbTtcbiAgICBsZWZ0OiA1MHB4O1xuICB9XG4gIC5ncmFjaWFzLWhlcm9fX3BvbGlnb25vIGltZyB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uZ3JhY2lhcy1oZXJvX19jdXJzb3Ige1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsZWZ0OiAzNSU7XG4gIGJvdHRvbTogMzBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGN1cnNvclRyYW5zbGF0aW9uIDRzIGluZmluaXRlO1xuICBhbmltYXRpb246IGN1cnNvclRyYW5zbGF0aW9uIDRzIGluZmluaXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGN1cnNvclRyYW5zbGF0aW9uIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCwgLTMwcHgpO1xuICB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTBweCwgNDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY3Vyc29yVHJhbnNsYXRpb24ge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LCAtMzBweCk7XG4gIH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5MHB4LCA0MHB4KTtcbiAgfVxufVxuLmdyYWNpYXMtaGVyb19fY3Vyc29yIGltZyB7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraciasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gracias',
          templateUrl: './gracias.component.html',
          styleUrls: ['./gracias.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/contact-modal/contact-modal.component */
    "./src/app/components/contact-modal/contact-modal.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/hero/hero.component */
    "./src/app/components/hero/hero.component.ts");
    /* harmony import */


    var _components_services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/services/services.component */
    "./src/app/components/services/services.component.ts");
    /* harmony import */


    var _components_comercio_comercio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/comercio/comercio.component */
    "./src/app/components/comercio/comercio.component.ts");
    /* harmony import */


    var _components_formula_formula_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/formula/formula.component */
    "./src/app/components/formula/formula.component.ts");
    /* harmony import */


    var _components_allies_allies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/allies/allies.component */
    "./src/app/components/allies/allies.component.ts");
    /* harmony import */


    var _components_selected_project_selected_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/selected-project/selected-project.component */
    "./src/app/components/selected-project/selected-project.component.ts");
    /* harmony import */


    var _components_hero_footer_hero_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/hero-footer/hero-footer.component */
    "./src/app/components/hero-footer/hero-footer.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 12,
      vars: 0,
      consts: [["id", "main-hero"], [1, "relative", "bg-white"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_components_contact_modal_contact_modal_component__WEBPACK_IMPORTED_MODULE_1__["ContactModalComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__["HeroComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"], _components_comercio_comercio_component__WEBPACK_IMPORTED_MODULE_5__["ComercioComponent"], _components_formula_formula_component__WEBPACK_IMPORTED_MODULE_6__["FormulaComponent"], _components_allies_allies_component__WEBPACK_IMPORTED_MODULE_7__["AlliesComponent"], _components_selected_project_selected_project_component__WEBPACK_IMPORTED_MODULE_8__["SelectedProjectComponent"], _components_hero_footer_hero_footer_component__WEBPACK_IMPORTED_MODULE_9__["HeroFooterComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\jcald\OneDrive\Escritorio\ecomerce-esedor\esedor-ecommerce\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map