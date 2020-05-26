(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sitios-turisticos-sitios-turisticos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sitios-turisticos/sitios-turisticos.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sitios-turisticos/sitios-turisticos.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>sitiosTuristicos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/sitios-turisticos/sitios-turisticos-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/sitios-turisticos/sitios-turisticos-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SitiosTuristicosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitiosTuristicosPageRoutingModule", function() { return SitiosTuristicosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sitios_turisticos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sitios-turisticos.page */ "./src/app/pages/sitios-turisticos/sitios-turisticos.page.ts");




const routes = [
    {
        path: '',
        component: _sitios_turisticos_page__WEBPACK_IMPORTED_MODULE_3__["SitiosTuristicosPage"]
    }
];
let SitiosTuristicosPageRoutingModule = class SitiosTuristicosPageRoutingModule {
};
SitiosTuristicosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SitiosTuristicosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/sitios-turisticos/sitios-turisticos.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/sitios-turisticos/sitios-turisticos.module.ts ***!
  \*********************************************************************/
/*! exports provided: SitiosTuristicosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitiosTuristicosPageModule", function() { return SitiosTuristicosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sitios_turisticos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sitios-turisticos-routing.module */ "./src/app/pages/sitios-turisticos/sitios-turisticos-routing.module.ts");
/* harmony import */ var _sitios_turisticos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sitios-turisticos.page */ "./src/app/pages/sitios-turisticos/sitios-turisticos.page.ts");







let SitiosTuristicosPageModule = class SitiosTuristicosPageModule {
};
SitiosTuristicosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sitios_turisticos_routing_module__WEBPACK_IMPORTED_MODULE_5__["SitiosTuristicosPageRoutingModule"]
        ],
        declarations: [_sitios_turisticos_page__WEBPACK_IMPORTED_MODULE_6__["SitiosTuristicosPage"]]
    })
], SitiosTuristicosPageModule);



/***/ }),

/***/ "./src/app/pages/sitios-turisticos/sitios-turisticos.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/sitios-turisticos/sitios-turisticos.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpdGlvcy10dXJpc3RpY29zL3NpdGlvcy10dXJpc3RpY29zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/sitios-turisticos/sitios-turisticos.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/sitios-turisticos/sitios-turisticos.page.ts ***!
  \*******************************************************************/
/*! exports provided: SitiosTuristicosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitiosTuristicosPage", function() { return SitiosTuristicosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SitiosTuristicosPage = class SitiosTuristicosPage {
    constructor() { }
    ngOnInit() {
    }
};
SitiosTuristicosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sitios-turisticos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sitios-turisticos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sitios-turisticos/sitios-turisticos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sitios-turisticos.page.scss */ "./src/app/pages/sitios-turisticos/sitios-turisticos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SitiosTuristicosPage);



/***/ })

}]);
//# sourceMappingURL=pages-sitios-turisticos-sitios-turisticos-module-es2015.js.map