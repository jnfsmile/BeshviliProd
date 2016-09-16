webpackHotUpdate(2,{

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	// ```
	// app.ts
	// (c) 2016 David Newman
	// blackshuriken@hotmail.com
	// app.ts may be freely distributed under the MIT license
	// ```
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
	// *src/app/app.ts*
	// This file contains the main class as well as the necessary
	// decorators for creating the primary `app` `component`
	/*
	 * Angular 2 decorators and services
	 */
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(123);
	// Import NgFor directive
	var common_1 = __webpack_require__(30);
	// Import Todo component
	var todo_component_1 = __webpack_require__(460);
	/*
	 * App Component
	 * Top Level Component
	 */
	var AppComponent = (function () {
	    // Pass in our application `state`
	    // Alternative to using `redux`
	    function AppComponent() {
	        this.siteLogo = 'assets/images/site-logo.png';
	        this.name = 'בשבילי';
	        this.url = 'http://localhost:8080/';
	    }
	    // Fire off upon initialization
	    AppComponent.prototype.ngOnInit = function () {
	        //console.log('Initial App State', this.appState.state);
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            providers: [],
	            directives: [todo_component_1.Todo,
	                common_1.NgFor,
	                router_1.ROUTER_DIRECTIVES],
	            encapsulation: core_1.ViewEncapsulation.None,
	            pipes: [],
	            // Load our main `Sass` file into our `app` `component`
	            styleUrls: [__webpack_require__(788).toString()],
	            template: "\n  <header>\n\n    <nav class=\"navbar navbar-default\" role=\"navigation\">\n\n        <!-- navbar-header -->\n        <div class=\"navbar-header\">\n\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" routerLink=\"/home\" title=\"\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9 - \u05D0\u05D9\u05DE\u05D5\u05DF \u05D5\u05D4\u05D3\u05E8\u05DB\u05D4\">\n            <img [src]=\"siteLogo\" alt=\"\u05DC\u05D5\u05D2\u05D5\" />\n            \u05D1\u05E9\u05D1\u05D9\u05DC\u05D9\n            <br/>\n            <span class=\"hidden-xs hidden-sm\">\u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05D5\u05D4\u05D3\u05E8\u05DB\u05D4 \u05DE\u05D5\u05DC \u05D0\u05EA\u05D2\u05E8\u05D9 \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA</span>\n          </a>\n\n          <!--span class=\"navbar-brand\">\n            <a class=\"clearfix\" routerLink=\"/home\">\n              <img [src]=\"siteLogo\" class=\"hidden-xs\" />\n              <div>\n                <h1>\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9</h1>\n                <h2 class=\"hidden-xs hidden-sm\">\u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05D5\u05D4\u05D3\u05E8\u05DB\u05D4 \u05DE\u05D5\u05DC \u05D0\u05EA\u05D2\u05E8\u05D9 \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA</h2>\n              </div>\n            </a>\n          </span!-->\n\n        </div><!-- /navbar-header -->\n\n        <!-- navbar -->\n        <div class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li><a routerLink=\"/home\" routerLinkActive=\"active\">\u05E8\u05D0\u05E9\u05D9</a></li>\n            <li><a routerLink=\"/personal\" routerLinkActive=\"active\">\u05EA\u05D4\u05DC\u05D9\u05DA \u05D0\u05D9\u05E9\u05D9</a></li>\n            <li><a routerLink=\"/workshop\" routerLinkActive=\"active\">\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA</a></li>\n            <li><a routerLink=\"/lecture\" routerLinkActive=\"active\">\u05D4\u05E8\u05E6\u05D0\u05D5\u05EA</a></li>\n            <li><a routerLink=\"/blog\" routerLinkActive=\"active\">\u05D1\u05DC\u05D5\u05D2</a></li>\n            <li><a routerLink=\"/about\" routerLinkActive=\"active\">\u05D0\u05D5\u05D3\u05D5\u05EA</a></li>\n            <li><a routerLink=\"/contact\" routerLinkActive=\"active\">\u05E6\u05E8\u05D9 \u05E7\u05E9\u05E8</a></li>\n          </ul>\n\n        </div><!-- /navbar -->\n\n    </nav>\n  </header>\n      <router-outlet></router-outlet>\n\n\n      <footer>\n\n      </footer>\n\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	/*
	 * For help or questions please contact us at @datatype_void on twitter
	 * or our chat on Slack at http://www.davidniciforovic.com/wp-login.php?action=slack-invitation
	 */
	

/***/ }

})
//# sourceMappingURL=main.map