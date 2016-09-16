webpackHotUpdate(2,{

/***/ 452:
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
	var title_1 = __webpack_require__(454);
	var x_large_1 = __webpack_require__(450);
	var accordion_component_1 = __webpack_require__(284);
	var accordion_group_component_1 = __webpack_require__(459);
	// Import NgFor directive
	var common_1 = __webpack_require__(30);
	var HomeComponent = (function () {
	    // TypeScript public modifiers
	    function HomeComponent(title) {
	        this.title = title;
	        // Set our default values
	        this.localState = { value: '' };
	        this.isOpen = false;
	        this.groups = [
	            {
	                heading: 'Dynamic 1',
	                content: 'I am dynamic!'
	            },
	            {
	                heading: 'Dynamic 2',
	                content: 'Dynamic as well'
	            }
	        ];
	    }
	    HomeComponent.prototype.removeDynamic = function () {
	        this.groups.pop();
	    };
	    HomeComponent.prototype.ngOnInit = function () {
	        console.log('hello `Home` component');
	        // this.title.getData().subscribe(data => this.data = data);
	    };
	    HomeComponent.prototype.submitState = function (value) {
	        console.log('submitState', value);
	        this.appState.set('value', value);
	        this.localState.value = '';
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            // The selector is what angular internally uses
	            // for `document.querySelectorAll(selector)` in our index.html
	            // where, in this case, selector is the string 'home'
	            selector: 'home',
	            // We need to tell Angular's Dependency Injection which providers are in our app.
	            providers: [
	                title_1.Title
	            ],
	            // We need to tell Angular's compiler which directives are in our template.
	            // Doing so will allow Angular to attach our behavior to an element
	            directives: [
	                x_large_1.XLarge,
	                accordion_component_1.Accordion,
	                accordion_group_component_1.AccordionGroup,
	                common_1.NgFor
	            ],
	            // We need to tell Angular's compiler which custom pipes are in our template.
	            pipes: [],
	            // Our list of styles in our component. We may add more to compose many styles together
	            styles: [__webpack_require__(789)],
	            // Every Angular template is first compiled by the browser before Angular runs it's compiler
	            template: __webpack_require__(467)
	        }), 
	        __metadata('design:paramtypes', [title_1.Title])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;
	

/***/ }

})
//# sourceMappingURL=main.map