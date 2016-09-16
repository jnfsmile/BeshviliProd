webpackHotUpdate(2,{

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var platform_browser_1 = __webpack_require__(118);
	var forms_1 = __webpack_require__(702);
	//## Platform and Environment
	//
	//** our providers/directives/pipes **
	var browser_1 = __webpack_require__(463);
	var environment_1 = __webpack_require__(466);
	var app_routes_1 = __webpack_require__(447);
	//## App Component
	//
	//** our top level component that holds all of our components **
	//import {APP_PROVIDERS} from './index';
	var app_component_1 = __webpack_require__(446);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
	            declarations: [app_component_1.AppComponent],
	            bootstrap: [app_component_1.AppComponent],
	            providers: browser_1.PROVIDERS.concat(environment_1.ENV_PROVIDERS, browser_1.DIRECTIVES, browser_1.PIPES, app_routes_1.APP_ROUTER_PROVIDERS)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;
	

/***/ }

})
//# sourceMappingURL=main.map