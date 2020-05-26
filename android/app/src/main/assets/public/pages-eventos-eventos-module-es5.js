function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-eventos-eventos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/eventos/eventos.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/eventos/eventos.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEventosEventosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-header translucent>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/\" tab=\"evento\"></ion-back-button>\n      </ion-buttons>\n      <ion-title id=\"titulo\">Eventos anuales</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-card>\n      <ion-item>\n        <ion-card-title>Festival de la Leyenda Vallenata</ion-card-title>\n        <ion-button fill=\"outline\" slot=\"end\" color=\"medium\">Más</ion-button>\n      </ion-item>\n      \n      <ion-card-header>\n        <img id=\"imagen\" src=\"assets/img/festival.png\" />\n      </ion-card-header>\n    \n      <ion-card-content>\n        El Festival de la Leyenda Vallenata, \n        llamado también Festival Vallenato, es el evento más importante del vallenato.\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-item>\n        <ion-card-title>Fiestas Celestiales</ion-card-title>\n        <ion-button fill=\"outline\" slot=\"end\" color=\"medium\">Más</ion-button>\n      </ion-item>\n      <ion-card-header>\n        <img id=\"imagen\" src=\"assets/img/fiestas.png\" />\n        \n\n      </ion-card-header>\n    \n      <ion-card-content>\n    \n        Un evento donde a través \n        del género del vallenato se alaba a Dios con mensajes que llenan el alma y el espíritu.\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/eventos/eventos-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/eventos/eventos-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: EventosPageRoutingModule */

  /***/
  function srcAppPagesEventosEventosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventosPageRoutingModule", function () {
      return EventosPageRoutingModule;
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


    var _eventos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./eventos.page */
    "./src/app/pages/eventos/eventos.page.ts");

    var routes = [{
      path: '',
      component: _eventos_page__WEBPACK_IMPORTED_MODULE_3__["EventosPage"]
    }];

    var EventosPageRoutingModule = function EventosPageRoutingModule() {
      _classCallCheck(this, EventosPageRoutingModule);
    };

    EventosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/eventos/eventos.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/eventos/eventos.module.ts ***!
    \*************************************************/

  /*! exports provided: EventosPageModule */

  /***/
  function srcAppPagesEventosEventosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventosPageModule", function () {
      return EventosPageModule;
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


    var _eventos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./eventos-routing.module */
    "./src/app/pages/eventos/eventos-routing.module.ts");
    /* harmony import */


    var _eventos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./eventos.page */
    "./src/app/pages/eventos/eventos.page.ts");

    var EventosPageModule = function EventosPageModule() {
      _classCallCheck(this, EventosPageModule);
    };

    EventosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _eventos_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventosPageRoutingModule"]],
      declarations: [_eventos_page__WEBPACK_IMPORTED_MODULE_6__["EventosPage"]]
    })], EventosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/eventos/eventos.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/eventos/eventos.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEventosEventosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#titulo {\n  color: #0066CC; }\n\n.ion-text-justify {\n  text-align: justify; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRvcy9DOlxcVXNlcnNcXEVWQVxcRGVza3RvcFxcSU9OSUNcXFByb3llY3RvLU1vdmlsXFxFeHBsb3JpbmdBcHAvc3JjXFxhcHBcXHBhZ2VzXFxldmVudG9zXFxldmVudG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50b3MvZXZlbnRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0dWxve1xyXG4gICAgY29sb3I6ICMwMDY2Q0M7XHJcbiAgfVxyXG4gIFxyXG4uaW9uLXRleHQtanVzdGlmeXtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/eventos/eventos.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/eventos/eventos.page.ts ***!
    \***********************************************/

  /*! exports provided: EventosPage */

  /***/
  function srcAppPagesEventosEventosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventosPage", function () {
      return EventosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EventosPage = /*#__PURE__*/function () {
      function EventosPage() {
        _classCallCheck(this, EventosPage);
      }

      _createClass(EventosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EventosPage;
    }();

    EventosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-eventos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./eventos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/eventos/eventos.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./eventos.page.scss */
      "./src/app/pages/eventos/eventos.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EventosPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-eventos-eventos-module-es5.js.map