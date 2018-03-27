webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Configuration = /** @class */ (function () {
    function Configuration() {
        this.Server = 'http://localhost:52543/';
        this.ApiUrl = 'api/';
        this.ServerWithApiUrl = this.Server + this.ApiUrl;
    }
    Configuration = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], Configuration);
    return Configuration;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_app_component__ = __webpack_require__("./src/app/component/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_nav_menu_nav_menu_component__ = __webpack_require__("./src/app/component/nav-menu/nav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_to_do_list_to_do_list_component__ = __webpack_require__("./src/app/component/to-do-list/to-do-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_profile_profile_component__ = __webpack_require__("./src/app/component/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_settings_settings_component__ = __webpack_require__("./src/app/component/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_products_add_product_component__ = __webpack_require__("./src/app/component/products/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_products_update_product_component__ = __webpack_require__("./src/app/component/products/update-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_to_do_list_service__ = __webpack_require__("./src/app/services/to-do-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__component_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_nav_menu_nav_menu_component__["a" /* NavMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_to_do_list_to_do_list_component__["a" /* ToDoListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__component_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_products_add_product_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_16__component_products_update_product_component__["a" /* UpdateProductComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["b" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__app_constants__["a" /* Configuration */],
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_layout__["d" /* MediaMatcher */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* appRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_17__services_to_do_list_service__["a" /* ToDoListService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__component_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_to_do_list_to_do_list_component__ = __webpack_require__("./src/app/component/to-do-list/to-do-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_profile_profile_component__ = __webpack_require__("./src/app/component/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_settings_settings_component__ = __webpack_require__("./src/app/component/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_products_add_product_component__ = __webpack_require__("./src/app/component/products/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_products_update_product_component__ = __webpack_require__("./src/app/component/products/update-product.component.ts");






var appRoutes = [
    { path: '', redirectTo: 'to-do-list', pathMatch: 'full' },
    { path: 'to-do-list', component: __WEBPACK_IMPORTED_MODULE_1__component_to_do_list_to_do_list_component__["a" /* ToDoListComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__component_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_3__component_settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'add-product', component: __WEBPACK_IMPORTED_MODULE_4__component_products_add_product_component__["a" /* AddProductComponent */] },
    { path: 'update-product', component: __WEBPACK_IMPORTED_MODULE_5__component_products_update_product_component__["a" /* UpdateProductComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/component/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"mat-app-background basic-container\">\n    <nav-menu></nav-menu>\n</div>"

/***/ }),

/***/ "./src/app/component/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/component/app.component.html"),
            styles: [__webpack_require__("./src/app/component/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/component/nav-menu/nav-menu.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n  }\r\n  \r\n  footer {\r\n    background-color: #000;\r\n    text-align: center;\r\n    color: #fff;\r\n    font-size: 11px;\r\n    height: 20px;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n  .example-toolbar{\r\n    background:#000;\r\n    height: 36px;;\r\n  }\r\n  \r\n  .linkItem{\r\n    color: #000;\r\n    border-bottom: 1px solid rgba(255,255,255,.25);\r\n    }\r\n  \r\n  .matNavList{\r\n      padding-top: 0px;\r\n    }\r\n  \r\n  .mat-expansion-panel-spacing{\r\n      margin: 1px 0px;\r\n    }\r\n  \r\n  .mat-expansion-panel-header-title{\r\n      color: black !important;\r\n    }\r\n  "

/***/ }),

/***/ "./src/app/component/nav-menu/nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\r\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\r\n    <button mat-icon-button (click)=\"snav.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <h1 class=\"example-app-name\">Store Manager</h1>\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n    <mat-sidenav #snav style=\"background-color: #000;\" [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n      <mat-nav-list class=\"matNavList\">\r\n        <!-- <a mat-list-item class=\"linkItem\" *ngFor=\"let nav of menuItems\" [routerLink]=\"nav.pageSource\">{{nav.menuName}}</a> -->\r\n        \r\n        <mat-accordion>\r\n          <mat-expansion-panel *ngFor=\"let menu of menuItems\" [disabled]=\"false\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                {{ menu.mainMenuName }}\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <a mat-list-item class=\"linkItem\" *ngFor=\"let nav of menu.navMenuContent\" [routerLink]=\"nav.pageSource\">{{nav.menuName}}</a>\r\n          </mat-expansion-panel>\r\n\r\n      <!-- <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Products\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <a mat-list-item class=\"linkItem\" *ngFor=\"let nav of menuItems\" [routerLink]=\"nav.pageSource\">{{nav.menuName}}</a>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Sales\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <a mat-list-item class=\"linkItem\" *ngFor=\"let nav of menuItems\" [routerLink]=\"nav.pageSource\">{{nav.menuName}}</a>\r\n        </mat-expansion-panel> -->\r\n\r\n      </mat-accordion>\r\n\r\n\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content style=\"background:#D3D8E8;\">\r\n      <router-outlet></router-outlet>\r\n\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n  <footer>&copy; Notetech 2018</footer>\r\n</div>\r\n\r\n<!-- <div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div> -->\r\n\r\n\r\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n          Use of this source code is governed by an MIT-style license that\r\n          can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/component/nav-menu/nav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_nav_menu_model__ = __webpack_require__("./src/app/models/nav-menu.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(changeDetectorRef, media) {
        this.menuItems = [];
        this.fillerNav = Array(50).fill(0).map(function (_, i) { return "Nav Item " + (i + 1); });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var navMenuContents = [];
        navMenuContents.push(new __WEBPACK_IMPORTED_MODULE_2__models_nav_menu_model__["b" /* NavMenuContent */](1, 'Add Product', '', 'add-product'));
        navMenuContents.push(new __WEBPACK_IMPORTED_MODULE_2__models_nav_menu_model__["b" /* NavMenuContent */](1, 'Update Product', '', 'update-product'));
        navMenuContents.push(new __WEBPACK_IMPORTED_MODULE_2__models_nav_menu_model__["b" /* NavMenuContent */](3, 'Settings', '', 'settings'));
        this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_2__models_nav_menu_model__["a" /* NavMenu */]('Products', navMenuContents));
        navMenuContents = [];
        navMenuContents.push(new __WEBPACK_IMPORTED_MODULE_2__models_nav_menu_model__["b" /* NavMenuContent */](1, 'Sell product', '', 'sell-product'));
        navMenuContents.push(new __WEBPACK_IMPORTED_MODULE_2__models_nav_menu_model__["b" /* NavMenuContent */](1, 'Return Product', '', 'return-product'));
        navMenuContents.push(new __WEBPACK_IMPORTED_MODULE_2__models_nav_menu_model__["b" /* NavMenuContent */](3, 'Follow Up', '', 'follow-up'));
        this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_2__models_nav_menu_model__["a" /* NavMenu */]('Sales', navMenuContents));
        // // this.menuItems.push(new NavMenu(1,'Profile','','profile'));
        // // this.menuItems.push(new NavMenu(2,'To-Do-List','','to-do-list'));
    };
    NavMenuComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    NavMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'nav-menu',
            template: __webpack_require__("./src/app/component/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__("./src/app/component/nav-menu/nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_0__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/component/products/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center;\">\r\n    <h1>\r\n        {{ title }}\r\n    </h1>\r\n</div>\r\n      "

/***/ }),

/***/ "./src/app/component/products/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddProductComponent = /** @class */ (function () {
    function AddProductComponent() {
        this.title = 'Add Product';
    }
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'add-product',
            template: __webpack_require__("./src/app/component/products/add-product.component.html")
        })
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/component/products/update-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center;\">\r\n    <h1>\r\n        {{ title }}\r\n    </h1>\r\n</div>\r\n      "

/***/ }),

/***/ "./src/app/component/products/update-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UpdateProductComponent = /** @class */ (function () {
    function UpdateProductComponent() {
        this.title = 'Update Product';
    }
    UpdateProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'update-product',
            template: __webpack_require__("./src/app/component/products/update-product.component.html")
        })
    ], UpdateProductComponent);
    return UpdateProductComponent;
}());



/***/ }),

/***/ "./src/app/component/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center;\">\r\n        <h1>\r\n            {{ title }}\r\n        </h1>\r\n    </div>\r\n          "

/***/ }),

/***/ "./src/app/component/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.title = 'Profile';
    }
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'profile',
            template: __webpack_require__("./src/app/component/profile/profile.component.html")
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/component/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center;\">\r\n        <h1>\r\n            {{ title }}\r\n        </h1>\r\n    </div>\r\n          "

/***/ }),

/***/ "./src/app/component/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.title = 'Settings';
    }
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'settings',
            template: __webpack_require__("./src/app/component/settings/settings.component.html")
        })
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/component/to-do-list/to-do-list.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin: 0;\r\n  min-width: 250px;\r\n}\r\n\r\n/* Include the padding and border in an element's total width and height */\r\n\r\n* {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n/* Remove margins and padding from the list */\r\n\r\nmat-list {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* Style the list items */\r\n\r\nmat-list mat-list-item {\r\n  cursor: pointer;\r\n  position: relative;\r\n  padding-left: 40px;\r\n  list-style-type: none;\r\n  background: #eee;\r\n  font-size: 18px;\r\n  -webkit-transition: 0.2s;\r\n  transition: 0.2s;\r\n  /* make the list items unselectable */\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n/* Set all odd list items to a different color (zebra-stripes) */\r\n\r\nmat-list mat-list-item:nth-child(odd) {\r\n  background: #f9f9f9;\r\n}\r\n\r\n/* Darker background-color on hover */\r\n\r\nmat-list mat-list-item:hover {\r\n  background: #ddd;\r\n}\r\n\r\n/* When clicked on, add a background color and strike out text */\r\n\r\nmat-list mat-list-item.checked {\r\n  background: #888;\r\n  color: #fff;\r\n  text-decoration: line-through;\r\n}\r\n\r\n/* Add a \"checked\" mark when clicked on */\r\n\r\nmat-list mat-list-item.checked::before {\r\n  content: '';\r\n  position: absolute;\r\n  border-color: #fff;\r\n  border-style: solid;\r\n  border-width: 0 2px 2px 0;\r\n  top: 10px;\r\n  left: 16px;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  height: 15px;\r\n  width: 7px;\r\n}\r\n\r\n/* Style the close button */\r\n\r\n.close {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  padding: 12px 16px 12px 16px;\r\n}\r\n\r\n.close:hover {\r\n  background-color: #f44336;\r\n  color: white;\r\n}\r\n\r\n/* Style the header */\r\n\r\n.header {\r\n  /* background-color: #f44336; */\r\n  padding: 30px 40px;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n/* Clear floats after the header */\r\n\r\n.header:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/* Style the input */\r\n\r\ninput {\r\n  border: none;\r\n  width: 75%;\r\n  padding: 10px;\r\n  float: left;\r\n  font-size: 16px;\r\n}\r\n\r\n/* Style the \"Add\" button */\r\n\r\n.addBtn {\r\n  padding: 1px;\r\n  margin-left: 10px;\r\n  width: 20%;\r\n  background-color:  #0074d9;\r\n  border-color: #dedede;\r\n  color: #fff;\r\n  float: left;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n\r\n/* .addBtn:hover {\r\n  background-color: #3b5998;\r\n} */\r\n\r\n.pageHeader {\r\n  margin: 5px;\r\n  color: #000;\r\n  text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/component/to-do-list/to-do-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myDIV\" class=\"header\">\r\n  <h2 class=\"pageHeader\">My To Do List</h2>\r\n  <input type=\"text\" id=\"myInput\" [(ngModel)]='toDoListText' placeholder=\"Title...\">\r\n  <button mat-button class=\"addBtn\" (click)=\"newElement()\">Add</button>\r\n</div>\r\n\r\n<mat-list>\r\n  <mat-list-item *ngFor=\"let item of listItems; let i = index\" [class.checked]=\"item.isChecked\" (click)=\"itemClick(item)\">\r\n    {{ i + 1 }}.{{ item.text }}\r\n    <span class=\"close\" (click)=\"itemDelete(item)\">\r\n      &#215;\r\n    </span>\r\n  </mat-list-item>\r\n</mat-list>"

/***/ }),

/***/ "./src/app/component/to-do-list/to-do-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_to_do_list_model__ = __webpack_require__("./src/app/models/to-do-list.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_to_do_list_service__ = __webpack_require__("./src/app/services/to-do-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToDoListComponent = /** @class */ (function () {
    function ToDoListComponent(toDoListSvc) {
        this.toDoListSvc = toDoListSvc;
        this.title = 'To-Do-List';
        this.toDoListText = "";
    }
    ToDoListComponent.prototype.ngOnInit = function () {
        this.getInitialData();
    };
    ToDoListComponent.prototype.getInitialData = function () {
        var _this = this;
        this.toDoListSvc.getToDoLists().subscribe(function (res) {
            if (res && res.length) {
                _this.listItems = res.map(function (data) {
                    var _tl = new __WEBPACK_IMPORTED_MODULE_1__models_to_do_list_model__["a" /* ToDoList */]();
                    _tl.fillFromJson(data);
                    return _tl;
                });
            }
        }, function (error) {
            console.error(error);
        }, function () { });
    };
    ToDoListComponent.prototype.itemClick = function (item) {
        item.isChecked = !item.isChecked;
    };
    ToDoListComponent.prototype.itemDelete = function (item) {
        alert("Are you sure, You want to delete the item " + item.text + "?");
    };
    // Create a new list item when clicking on the "Add" buttonng serve --o
    ToDoListComponent.prototype.newElement = function () {
        if (this.toDoListText === '') {
            alert("You must write something!");
        }
        else {
            var newItem = new __WEBPACK_IMPORTED_MODULE_1__models_to_do_list_model__["a" /* ToDoList */]();
            newItem.text = this.toDoListText;
            newItem.isChecked = false;
            this.listItems.push(newItem);
            this.toDoListText = "";
        }
    };
    ToDoListComponent.prototype.ngOnDestroy = function () {
    };
    ToDoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'to-do-list',
            template: __webpack_require__("./src/app/component/to-do-list/to-do-list.component.html"),
            styles: [__webpack_require__("./src/app/component/to-do-list/to-do-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_to_do_list_service__["a" /* ToDoListService */]])
    ], ToDoListComponent);
    return ToDoListComponent;
}());



/***/ }),

/***/ "./src/app/models/nav-menu.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavMenuContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
var NavMenuContent = /** @class */ (function () {
    function NavMenuContent(menuId, menuName, icon, pageSource) {
        this.menuId = menuId;
        this.menuName = menuName;
        this.icon = icon;
        this.pageSource = pageSource;
    }
    return NavMenuContent;
}());

var NavMenu = /** @class */ (function () {
    function NavMenu(mainMenuName, navMenuContent) {
        this.mainMenuName = mainMenuName;
        this.navMenuContent = navMenuContent;
    }
    return NavMenu;
}());



/***/ }),

/***/ "./src/app/models/to-do-list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoList; });
var ToDoList = /** @class */ (function () {
    function ToDoList() {
    }
    ToDoList.prototype.fillFromJson = function (json) {
        for (var j in json)
            this[j] = json[j];
    };
    return ToDoList;
}());



/***/ }),

/***/ "./src/app/services/to-do-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToDoListService = /** @class */ (function () {
    function ToDoListService(httpClient, _configuration) {
        this.httpClient = httpClient;
        this._configuration = _configuration;
        this.actionUrl = _configuration.ServerWithApiUrl;
    }
    ToDoListService.prototype.getToDoLists = function () {
        return this.httpClient.get(this.actionUrl + 'ToDoList').pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* map */])(function (data) {
            var res = data.json();
            return res || [];
        }));
        // let dataArray = [{ id: 1, text: 'Hit the gym', isChecked: false }, { id: 2, text: 'Pay bills', isChecked: true },
        // { id: 3, text: 'Meet George', isChecked: false }, { id: 4, text: 'Buy eggs', isChecked: false },
        // { id: 5, text: 'Read a book', isChecked: false }, { id: 6, text: 'Organize office', isChecked: false }];
        // return Observable.create(observer => {
        //     observer.next(dataArray);
        //     observer.complete();
        // });
    };
    ToDoListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* Configuration */]])
    ], ToDoListService);
    return ToDoListService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map