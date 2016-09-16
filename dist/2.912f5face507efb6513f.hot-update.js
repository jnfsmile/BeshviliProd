webpackHotUpdate(2,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	//# Providers provided by Angular
	var platform_browser_dynamic_1 = __webpack_require__(410);
	//## Platform and Environment
	//
	//** our providers/directives/pipes **
	var browser_1 = __webpack_require__(463);
	var environment_1 = __webpack_require__(466);
	var app_routes_1 = __webpack_require__(447);
	//## App Component
	//
	//** our top level component that holds all of our components **
	var app_1 = __webpack_require__(456);
	// Bootstrap our Angular app with a top level component `App` and inject
	// our Services and Providers into Angular's dependency injection
	function main(initialHmrState) {
	    var platform = platform_browser_dynamic_1.platformBrowserDynamic();
	    return platform.bootstrapModule(app_1.AppModule, browser_1.PROVIDERS.concat(environment_1.ENV_PROVIDERS, browser_1.DIRECTIVES, browser_1.PIPES, app_1.APP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS))
	        .catch(function (err) { return console.error(err); });
	}
	exports.main = main;
	//## Vendors
	//
	// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
	// You can also import them in vendors to ensure that they are bundled in one file
	// Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
	//## Hot Module Reload
	//
	// experimental version
	if (false) {
	    // activate hot module reload
	    var ngHmr = require('angular2-hmr');
	    ngHmr.hotModuleReplacement(main, module);
	}
	else {
	    // bootstrap when documetn is ready
	    document.addEventListener('DOMContentLoaded', function () { return main(); });
	}
	

/***/ }
])
//# sourceMappingURL=main.map