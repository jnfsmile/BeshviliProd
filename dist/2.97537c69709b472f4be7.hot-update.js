webpackHotUpdate(2,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	//# Providers provided by Angular
	var platform_browser_dynamic_1 = __webpack_require__(410);
	//## App Component
	//
	//** our top level component that holds all of our components **
	var app_1 = __webpack_require__(456);
	// Bootstrap our Angular app with a top level component `App` and inject
	// our Services and Providers into Angular's dependency injection
	function main(initialHmrState) {
	    var platform = platform_browser_dynamic_1.platformBrowserDynamic();
	    platform.bootstrapModule(app_1.AppModule)
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
	

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	// App
	__export(__webpack_require__(790));
	__export(__webpack_require__(446));
	__export(__webpack_require__(127));
	var app_service_2 = __webpack_require__(127);
	// Application wide providers
	exports.APP_PROVIDERS = [
	    app_service_2.AppState
	];
	// Import all of the files necessary for our `recipes` component
	//import {RecipeService} from './recipes/recipe.service';
	//import {recipes} from './recipes/recipes.reducer';
	//import {selectedRecipe} from './recipes/selected-recipe.reducer';
	//# Application Redux Stores
	//
	//** Redux stores for use with our Angular 2 app **
	//export const APP_STORES = [
	// These are the primary consumers of our app store
	//RecipeService,
	// Inititialize app store available to entire app
	// and pass in our reducers.
	// Notice that we are passing in an object that matches the
	// `AppStore` interface
	//provideStore({ recipes, selectedRecipe })
	//];
	

/***/ }

})
//# sourceMappingURL=main.map