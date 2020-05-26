function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ultimas-noticias-ultimas-noticias-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ultimas-noticias/ultimas-noticias.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ultimas-noticias/ultimas-noticias.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUltimasNoticiasUltimasNoticiasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title id=\"titulo\">Ultimas Noticias</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-card>\n    <ion-card-content>\n     \n      <ion-item>\n        <ion-icon name=\"alert-circle-outline\" slot=\"start\" color=\"danger\"></ion-icon>\n        <ion-label>Alerta COVID-19</ion-label>\n      </ion-item>\n\n     <ion-text class=\"ion-text-justify\">Es posible que la información del evento no esté actualizada debido a la crisis del (COVID-19). \n        Ponte en contacto con los organizadores del evento para confirmar la información.</ion-text>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n \n      <ion-label><ion-label> </ion-label>15-Ago-2020</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\" color=\"medium\">Más</ion-button>\n    </ion-item>\n    <ion-card-header>\n      <ion-card-title>Valledupar Cesar Riendas</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      Fedequinas\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      \n      <ion-label><ion-label> </ion-label>20-Sep-2020</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\" color=\"medium\">Más</ion-button>\n    </ion-item>\n    <ion-card-header>\n      <ion-card-title>Media Maraton de Valledupar</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      Deportes y recreación\n    </ion-card-content>\n  </ion-card>\n\n  \n  <ion-card>\n    <ion-item>\n      \n      <ion-label><ion-label> </ion-label>18-Sep-2020</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\" color=\"medium\">Más</ion-button>\n    </ion-item>\n    <ion-card-header>\n      <ion-card-title>Valledupar vs. Cortuluá, Fútbol de Colombia</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      Futbol Ya!\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-item>\n      \n      <ion-label><ion-label> </ion-label>24-Jul-2020</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\" color=\"medium\">Más</ion-button>\n    </ion-item>\n    <ion-card-header>\n      <ion-card-title>Valledupar vs. Orsomarso, Fútbol de Colombia</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      Futbol Ya!\n    </ion-card-content>\n  </ion-card>\n\n \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/ultimas-noticias/ultimas-noticias-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/ultimas-noticias/ultimas-noticias-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: UltimasNoticiasPageRoutingModule */

  /***/
  function srcAppPagesUltimasNoticiasUltimasNoticiasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UltimasNoticiasPageRoutingModule", function () {
      return UltimasNoticiasPageRoutingModule;
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


    var _ultimas_noticias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ultimas-noticias.page */
    "./src/app/pages/ultimas-noticias/ultimas-noticias.page.ts");

    var routes = [{
      path: '',
      component: _ultimas_noticias_page__WEBPACK_IMPORTED_MODULE_3__["UltimasNoticiasPage"]
    }];

    var UltimasNoticiasPageRoutingModule = function UltimasNoticiasPageRoutingModule() {
      _classCallCheck(this, UltimasNoticiasPageRoutingModule);
    };

    UltimasNoticiasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UltimasNoticiasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ultimas-noticias/ultimas-noticias.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/ultimas-noticias/ultimas-noticias.module.ts ***!
    \*******************************************************************/

  /*! exports provided: UltimasNoticiasPageModule */

  /***/
  function srcAppPagesUltimasNoticiasUltimasNoticiasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UltimasNoticiasPageModule", function () {
      return UltimasNoticiasPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ultimas_noticias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ultimas-noticias-routing.module */
    "./src/app/pages/ultimas-noticias/ultimas-noticias-routing.module.ts");
    /* harmony import */


    var _ultimas_noticias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ultimas-noticias.page */
    "./src/app/pages/ultimas-noticias/ultimas-noticias.page.ts");

    var UltimasNoticiasPageModule = function UltimasNoticiasPageModule() {
      _classCallCheck(this, UltimasNoticiasPageModule);
    };

    UltimasNoticiasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ultimas_noticias_routing_module__WEBPACK_IMPORTED_MODULE_5__["UltimasNoticiasPageRoutingModule"]],
      declarations: [_ultimas_noticias_page__WEBPACK_IMPORTED_MODULE_6__["UltimasNoticiasPage"]]
    })], UltimasNoticiasPageModule);
    /***/
  },

  /***/
  "./src/app/pages/ultimas-noticias/ultimas-noticias.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/ultimas-noticias/ultimas-noticias.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUltimasNoticiasUltimasNoticiasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#titulo {\n  color: #0066CC; }\n\n.ion-text-justify {\n  text-align: justify; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdWx0aW1hcy1ub3RpY2lhcy9DOlxcVXNlcnNcXEVWQVxcRGVza3RvcFxcSU9OSUNcXFByb3llY3RvLU1vdmlsXFxFeHBsb3JpbmdBcHAvc3JjXFxhcHBcXHBhZ2VzXFx1bHRpbWFzLW5vdGljaWFzXFx1bHRpbWFzLW5vdGljaWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VsdGltYXMtbm90aWNpYXMvdWx0aW1hcy1ub3RpY2lhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0dWxve1xyXG4gICAgY29sb3I6ICMwMDY2Q0M7XHJcbiAgfVxyXG4gIFxyXG4uaW9uLXRleHQtanVzdGlmeXtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/ultimas-noticias/ultimas-noticias.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/ultimas-noticias/ultimas-noticias.page.ts ***!
    \*****************************************************************/

  /*! exports provided: UltimasNoticiasPage */

  /***/
  function srcAppPagesUltimasNoticiasUltimasNoticiasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UltimasNoticiasPage", function () {
      return UltimasNoticiasPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UltimasNoticiasPage = /*#__PURE__*/function () {
      function UltimasNoticiasPage() {
        _classCallCheck(this, UltimasNoticiasPage);
      }

      _createClass(UltimasNoticiasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UltimasNoticiasPage;
    }();

    UltimasNoticiasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ultimas-noticias',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ultimas-noticias.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ultimas-noticias/ultimas-noticias.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ultimas-noticias.page.scss */
      "./src/app/pages/ultimas-noticias/ultimas-noticias.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UltimasNoticiasPage);
    /***/
  }
}]);
//# sourceMappingURL=ultimas-noticias-ultimas-noticias-module-es5.js.map