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
var index_1 = require('./services/content/index');
var CreativeComponent = (function () {
    function CreativeComponent(content) {
        this.content = content;
        this.songs = [];
        this.stories = [];
        this.selectedContent = { id: "" };
    }
    CreativeComponent.prototype.onSelect = function (item, center) {
        this.selectedContent = item;
    };
    CreativeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.content.getData("songs").subscribe(function (res) { return _this.songs = res.map(function (s) { return { name: s.name, words: s.words.replace(/\n/g, "<br />"), intro: s.intro }; }); });
        this.content.getData("stories").subscribe(function (res) { return _this.stories = res.map(function (s) { return { name: s.name, words: s.words.replace(/\n/g, "<br />") }; }); });
    };
    CreativeComponent = __decorate([
        core_1.Component({
            selector: 'creative',
            providers: [index_1.Content],
            template: "\n  <section class=\"page creative\">\n    <aside>\n      <div>\u05E9\u05D9\u05E8\u05D9\u05DD</div>\n      <ul class=\"content-list\">\n        <li *ngFor=\"let song of songs\" (click)=\"onSelect(song)\" [class.selected]=\"song.id===selectedContent.id\">\n          <a>{{song.name}}</a>\n        </li>\n      </ul>\n      <div>\u05E1\u05D9\u05E4\u05D5\u05E8\u05D9\u05DD</div>\n      <ul class=\"content-list\">\n        <li *ngFor=\"let story of stories\" (click)=\"onSelect(story)\" [class.selected]=\"story.id===selectedContent.id\">\n          <a>{{story.name}}</a>\n        </li>\n      </ul>\n    </aside>\n    <div *ngIf='selectedContent.id!==\"\"'>\n      <div class=\"song-intro\">{{selectedContent.intro}}</div>\n      <div class=\"song-title\" [class.center]=\"selectedContent.type==='song'\">{{selectedContent.name}}</div>\n      <div class=\"song-words\" [class.center]=\"selectedContent.type==='song'\" [innerHTML]=\"selectedContent.words\"></div>\n      <br />\n      <div class=\"content-end\">*************************</div>\n    </div>\n  </section>\n  ",
        }), 
        __metadata('design:paramtypes', [index_1.Content])
    ], CreativeComponent);
    return CreativeComponent;
}());
exports.CreativeComponent = CreativeComponent;
//# sourceMappingURL=creative.component.js.map