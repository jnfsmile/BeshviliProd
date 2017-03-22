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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var index_1 = require('./services/content/index');
var index_2 = require('../tags/index');
var BlogComponent = (function () {
    function BlogComponent(route, router, content, tags) {
        this.route = route;
        this.router = router;
        this.content = content;
        this.tags = tags;
        this.blogContent = "";
        this.body = "";
        this.title = "";
        this.author = "";
        this.lastChange = "";
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return Observable_1.Observable.of(params['id']); })
            .subscribe(function (id) {
            _this.content.getData(id).subscribe(function (res) {
                console.log(res);
                if (!res)
                    return;
                _this.body = res.body;
                _this.title = res.title;
                _this.author = res.author;
                _this.lastChange = res.lastChange;
                _this.tags.getData().subscribe(function () { });
            });
        });
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'blog',
            providers: [index_1.Content, index_2.TagService],
            template: "\n      <section class=\"page blog\">\n        <article>\n          <header>\n            <h3>\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9 - \u05D4\u05D1\u05DC\u05D5\u05D2</h3>\n            <h4>{{title}}</h4>\n            <div></div>\n            <time pubdate [attr.datetime]=\"lastChange\"></time>\n          </header>\n          <div [innerHTML]=\"body\"></div>\n        </article>\n      </section>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, index_1.Content, index_2.TagService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map