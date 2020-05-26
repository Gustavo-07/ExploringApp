function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab3/tab3.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab3/tab3.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title id=\"titulo\">\r\n      ExploringApp\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Información cultural</ion-card-title>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      <ion-slides>\r\n        <ion-slide>\r\n          <div>\r\n            <ion-card-subtitle id=\"subtitulo\">Historia</ion-card-subtitle>\r\n           <img id=\"imagen\" src=\"assets/img/historia.png\" />\r\n            \r\n          </div>\r\n        </ion-slide>\r\n  \r\n        <ion-slide>\r\n          <div class=\"slide\">\r\n            <ion-card-subtitle id=\"subtitulo\">Juglares</ion-card-subtitle>\r\n            <img id=\"imagen\" src=\"assets/img/juglares.png\" />\r\n           \r\n           </div>\r\n        </ion-slide>\r\n  \r\n        <ion-slide>\r\n          <ion-card-subtitle id=\"subtitulo\">Leyendas</ion-card-subtitle>\r\n          <img id=\"imagen\" src=\"assets/img/sirena.png\" />\r\n        </ion-slide>\r\n  \r\n        <ion-slide>\r\n          <ion-card-subtitle>Platos tipicos</ion-card-subtitle>\r\n          <img id=\"imagen\" src=\"assets/img/plato.png\" />\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <ion-button fill=\"outline\" slot=\"end\" expand=\"block\" >Ver más</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n    \r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>Sitios Turísticos</ion-card-title>\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content>\r\n        <ion-slides>\r\n          <ion-slide>\r\n            <div>\r\n              <ion-card-subtitle id=\"subtitulo\">Balneario Hurtado</ion-card-subtitle>\r\n             <img id=\"imagen\" src=\"assets/img/hurtado.png\" />\r\n              \r\n            </div>\r\n          </ion-slide>\r\n    \r\n          <ion-slide>\r\n            <div class=\"slide\">\r\n              <ion-card-subtitle id=\"subtitulo\">Parque de la leyenda Vallenata</ion-card-subtitle>\r\n              <img id=\"imagen\" src=\"assets/img/parque.png\" />\r\n             \r\n             </div>\r\n          </ion-slide>\r\n    \r\n          <ion-slide>\r\n            <ion-card-subtitle id=\"subtitulo\">Plaza Alfonso López</ion-card-subtitle>\r\n            <img id=\"imagen\" src=\"assets/img/historia.png\" />\r\n          </ion-slide>\r\n    \r\n          <ion-slide>\r\n            <ion-card-subtitle>La iglesia de la Concepción</ion-card-subtitle>\r\n            <img id=\"imagen\" src=\"assets/img/iglesia.png\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <ion-card-subtitle id=\"subtitulo\">El callejón de la Purrututú</ion-card-subtitle>\r\n            <img id=\"imagen\" src=\"assets/img/purrupupu.png\" />\r\n          </ion-slide>\r\n    \r\n        </ion-slides>\r\n        <ion-button fill=\"outline\" slot=\"end\" expand=\"block\" >Ver más</ion-button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n     \r\n  \r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Eventos anuales</ion-card-title>\r\n          </ion-card-header>\r\n        \r\n          <ion-card-content>\r\n            <ion-slides>\r\n              <ion-slide>\r\n                <div>\r\n                  <ion-card-subtitle id=\"subtitulo\">Festival de la Leyenda Vallenata</ion-card-subtitle>\r\n                 <img id=\"imagen\" src=\"assets/img/festival.png\" />\r\n                </div>\r\n              </ion-slide>\r\n        \r\n              <ion-slide>\r\n                <div class=\"slide\">\r\n                  <ion-card-subtitle id=\"subtitulo\">Fiestas Celestiales</ion-card-subtitle>\r\n                  <img id=\"imagen\" src=\"assets/img/fiestas.png\" />\r\n                 </div>\r\n              </ion-slide>\r\n        \r\n            </ion-slides>\r\n            <ion-button fill=\"outline\" slot=\"end\" expand=\"block\" routerLink=\"/eventos\" routerDirection=\"root\">Ver más</ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n</ion-content>\r\n    \r\n      \r\n    \r\n  \r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/tab3/tab3-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/tab3/tab3-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: Tab3PageRoutingModule */

  /***/
  function srcAppPagesTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
      return Tab3PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/pages/tab3/tab3.page.ts");

    var routes = [{
      path: '',
      component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
    }];

    var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
      _classCallCheck(this, Tab3PageRoutingModule);
    };

    Tab3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tab3/tab3.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/tab3/tab3.module.ts ***!
    \*******************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppPagesTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/pages/tab3/tab3.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tab3-routing.module */
    "./src/app/pages/tab3/tab3-routing.module.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/pages/tab3/tab3.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/tab3/tab3.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#titulo {\n  color: #0066CC; }\n\n.ion-text-justify {\n  text-align: justify; }\n\n#imagen {\n  width: 100%;\n  height: 100%; }\n\nion-slides {\n  height: 100%; }\n\n.swiper-slide {\n  display: block; }\n\n.swiper-slide h2 {\n  margin-top: 2.8rem; }\n\n.swiper-slide img {\n  max-height: 100%;\n  max-width: 100%;\n  margin: 10px 0 10px;\n  pointer-events: none; }\n\nb {\n  font-weight: 500; }\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b); }\n\np b {\n  color: var(--ion-text-color, #000000); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMy9DOlxcVXNlcnNcXEVWQVxcRGVza3RvcFxcSU9OSUNcXFByb3llY3RvLU1vdmlsXFxFeHBsb3JpbmdBcHAvc3JjXFxhcHBcXHBhZ2VzXFx0YWIzXFx0YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSxxQ0FBcUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0dWxve1xyXG4gICAgY29sb3I6ICMwMDY2Q0M7XHJcbiAgfVxyXG5cclxuLmlvbi10ZXh0LWp1c3RpZnl7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4jaW1hZ2Vue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5zd2lwZXItc2xpZGUgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMi44cmVtO1xyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZSBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTBweCAwIDEwcHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIGIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xyXG4gIH1cclxuXHJcbiAgcCBiIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tab3/tab3.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/tab3/tab3.page.ts ***!
    \*****************************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppPagesTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Tab3Page = function Tab3Page() {
      _classCallCheck(this, Tab3Page);
    };

    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab3/tab3.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/pages/tab3/tab3.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map