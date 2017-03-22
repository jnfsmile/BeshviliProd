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
var http_1 = require('@angular/http');
var blog_post_1 = require('../../blog-post');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var Content = (function () {
    function Content(http) {
        this.http = http;
        this.value = 'בשבילי';
    }
    Content.prototype.getData = function (key) {
        var data = [];
        data.push(new blog_post_1.BlogPost({
            id: "0",
            title: "איך תדעי אם רופא הפוריות שלך טוב לך או לא?",
            author: "גלית פרידמן",
            authorEmail: "galit@be-shvili.co.il",
            lastChange: "2017-03-21",
            body: "<p>\n\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05E8\u05D1 \u05E9\u05E0\u05D9\u05DD, \u05E9\u05DD \u05D8\u05D5\u05D1, \u05D0\u05D5 \u05DE\u05E8\u05E4\u05D0\u05D4 \u05E0\u05D7\u05E9\u05D1\u05EA\n<br />\n\u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0 \u05EA\u05DE\u05D9\u05D3 \u05DE\u05E1\u05E4\u05D9\u05E7\u05D9\u05DD.\n<br />\n\u05D0\u05EA \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05D0\u05E6\u05DC \u05E8\u05D5\u05E4\u05D0 \u05E4\u05E8\u05D8\u05D9 \u05D1\u05E2\u05DC \u05E9\u05DD \u05D5\u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D4\u05E8\u05D2\u05D9\u05E9 \u05E9\u05DE\u05E9\u05D4\u05D5 \u05D7\u05E1\u05E8 \u05DC\u05DA \u05E9\u05DD\n<br />\n\u05D5\u05D0\u05EA \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05D0\u05E6\u05DC \u05E8\u05D5\u05E4\u05D0 \u05E4\u05D5\u05E8\u05D9\u05D5\u05EA \u05DC\u05D0 \u05DE\u05D5\u05DB\u05E8 \u05D5\u05DC\u05D0 \u05E4\u05E8\u05D8\u05D9 \u05D5\u05DC\u05D4\u05E8\u05D2\u05D9\u05E9 \u05E9\u05D4\u05D5\u05D0 \u05D4\u05E9\u05DC\u05D9\u05D7 \u05E9\u05DC\u05DA.\n</p>\n\n<p>\n\u05D4\u05DE\u05D3\u05D3 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05DC\u05E8\u05D5\u05E4\u05D0 \u05E4\u05D5\u05E8\u05D9\u05D5\u05EA \u05D4\u05D8\u05D5\u05D1 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E2\u05D1\u05D5\u05E8\u05DA \u05D4\u05D5\u05D0:\n<br />\n\u05D0\u05EA.\n<br />\n\u05D4\u05D0\u05DD \u05D9\u05E9 \u05DC\u05DA \u05D5\u05D5\u05D3\u05D0\u05D5\u05EA \u05E9\u05D0\u05EA \u05E0\u05DE\u05E6\u05D0\u05EA \u05D1\u05D9\u05D3\u05D9\u05D9\u05DD \u05D8\u05D5\u05D1\u05D5\u05EA?\n<br />\n\u05D4\u05D0\u05DD \u05DB\u05E9\u05D0\u05EA \u05DE\u05E7\u05D1\u05DC\u05EA \u05DE\u05E8\u05E9\u05DD \u05D0\u05D5 \u05E4\u05E8\u05D5\u05D8\u05D5\u05E7\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D9\u05E0\u05D5\u05D9 \u05D1\u05DE\u05D9\u05E0\u05D5\u05E0\u05D9\u05DD\n<br />\n\u05D4\u05D0\u05DD \u05D0\u05EA \u05D1\u05D8\u05D5\u05D7\u05D4 \u05E9\u05D6\u05D4 \u05D4\u05E0\u05DB\u05D5\u05DF \u05D1\u05E9\u05D1\u05D9\u05DC\u05DA \u05E2\u05DB\u05E9\u05D9\u05D5?\n</p>\n\n<p>\n\u05D6\u05D4 \u05D4\u05DE\u05D3\u05D3 \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9.\n</p>\n\n<p>\n\u05DC\u05D0 \u05D9\u05E2\u05D6\u05D5\u05E8 \u05DB\u05DE\u05D4 \u05D4\u05E6\u05DC\u05D7\u05D5\u05EA \u05D4\u05D9\u05D5 \u05DC\u05D5 \u05E2\u05DD \u05DE\u05D8\u05D5\u05E4\u05DC\u05D5\u05EA \u05D0\u05D7\u05E8\u05D5\u05EA\n<br />\n\u05D4\u05D3\u05D1\u05E8 \u05D4\u05D7\u05E9\u05D5\u05D1 \u05D4\u05D5\u05D0 \u05DB\u05DE\u05D4 \u05D0\u05EA \u05DE\u05E8\u05D2\u05D9\u05E9\u05D4 \u05E9\u05D0\u05EA \u05D4\u05D4\u05E6\u05DC\u05D7\u05D4 \u05D4\u05D1\u05D0\u05D4.\n<br />\n\u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05DE\u05D3\u05D3 \u05D0\u05EA \u05D4\u05D6\u05D4\n<br />\n\u05E2\u05DC\u05D9\u05DA \u05DC\u05E9\u05D0\u05D5\u05DC \u05D0\u05EA \u05E2\u05E6\u05DE\u05DA \u05DB\u05DE\u05D4 \u05E9\u05D0\u05DC\u05D5\u05EA \u05E4\u05E9\u05D5\u05D8\u05D5\u05EA:\n<br />\n<ol>\n<li>\u05D4\u05D0\u05DD \u05D8\u05D5\u05D1 \u05DC\u05D9 \u05DB\u05E9\u05D0\u05E0\u05D9 \u05DE\u05D2\u05D9\u05E2\u05D4 \u05DC\u05EA\u05D5\u05E8 \u05D0\u05E6\u05DC \u05D4\u05E8\u05D5\u05E4\u05D0 \u05E9\u05DC\u05D9?\n</li>\n<li>\u05E2\u05D3 \u05DB\u05DE\u05D4 \u05D0\u05E0\u05D9 \u05DE\u05E8\u05D2\u05D9\u05E9\u05D4 \u05E9\u05D9\u05E9 \u05DC\u05D9 \u05D2\u05D1 \u05E8\u05E4\u05D5\u05D0\u05D9 \u05D7\u05D6\u05E7 \u05DE\u05DE\u05E0\u05D5?\n</li>\n<li>\u05D1\u05D0\u05D9\u05D6\u05D5 \u05DE\u05D9\u05D3\u05D4 \u05D0\u05E0\u05D9 \u05E1\u05D5\u05DE\u05DB\u05EA \u05E2\u05DC \u05E9\u05D9\u05E7\u05D5\u05DC \u05D4\u05D3\u05E2\u05EA \u05D4\u05E8\u05E4\u05D5\u05D0\u05D9 \u05E9\u05DC\u05D5?\n</li>\n</ol>\n\u05D0\u05DD \u05DE\u05E6\u05D9\u05E7\u05D5\u05EA \u05DC\u05DA \u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05D8\u05D5\u05E8\u05D3\u05E0\u05D9\u05D5\u05EA \u05E2\u05DC \u05DC\u05E2\u05D1\u05D5\u05E8 \u05DC\u05E8\u05D5\u05E4\u05D0 \u05D0\u05D7\u05E8 :\n<br />\n<ol>\n<li>\u05E7\u05D5\u05D3\u05DD \u05DB\u05DC, \u05EA\u05D3\u05E2\u05D9 \u05E9\u05D0\u05DC\u05D5 \u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05E0\u05D5\u05E8\u05DE\u05D0\u05DC\u05D9\u05D5\u05EA \u05D2\u05DD \u05D0\u05DD \u05D4\u05E8\u05D5\u05E4\u05D0 \u05E9\u05DC\u05DA \u05D4\u05D5\u05D0 \u05D4\u05D8\u05D5\u05D1 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E2\u05D1\u05D5\u05E8\u05DA\n</li>\n<li>\u05EA\u05E9\u05D0\u05DC\u05D9 \u05D0\u05EA \u05E2\u05E6\u05DE\u05DA \u05DE\u05D4 \u05DE\u05E4\u05E8\u05D9\u05E2 \u05DC\u05DA \u05D0\u05E6\u05DC\u05D5?\n</li>\n<li>\u05EA\u05D6\u05D4\u05D9 \u05E2\u05D3 \u05DB\u05DE\u05D4 \u05D4\u05D5\u05D0 \u05DE\u05E8\u05D9\u05DD \u05D0\u05EA \u05E8\u05D5\u05D7\u05DA \u05D5\u05E2\u05D3 \u05DB\u05DE\u05D4 \u05D4\u05D5\u05D0 \u05DE\u05D5\u05E8\u05D9\u05D3 \u05D0\u05D5\u05EA\u05D4.\n</li>\n<li>\u05E0\u05E1\u05D9 \u05DC\u05D7\u05E9\u05D5\u05D1 \u05E2\u05DC \u05D0\u05DC\u05D8\u05E8\u05E0\u05D8\u05D9\u05D1\u05D4 \u05DE\u05E6\u05D9\u05D0\u05D5\u05EA\u05D9\u05EA \u05D5\u05E0\u05E1\u05D9 \u05DC\u05D4\u05E8\u05D2\u05D9\u05E9 \u05E2\u05D3 \u05DB\u05DE\u05D4 \u05E0\u05D5\u05D7 \u05DC\u05DA \u05D0\u05D9\u05EA\u05D4.\n</li>\n</ol>\n</p>\n\n<p>\n\u05D5\u05D9\u05E9 \u05DE\u05E9\u05D4\u05D5 \u05E0\u05D5\u05E1\u05E3, \u05D5\u05D4\u05D5\u05D0 \u05D1\u05E2\u05E6\u05DD \u05DC\u05D1 \u05D4\u05E2\u05E0\u05D9\u05D9\u05DF, \u05E9\u05DC\u05D0 \u05D4\u05D6\u05DB\u05E8\u05E0\u05D5 \u05E2\u05D3 \u05E2\u05DB\u05E9\u05D9\u05D5.\n<br />\n\u05D1\u05DB\u05DC \u05D4\u05DE\u05E1\u05E2 \u05D0\u05DC \u05D4\u05D4\u05E8\u05D9\u05D5\u05DF \u05D5\u05D4\u05DC\u05D9\u05D3\u05D4, \u05D4\u05E8\u05D5\u05E4\u05D0 \u05EA\u05D5\u05E4\u05E1 \u05DE\u05E7\u05D5\u05DD \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9.\n<br />\n\u05D5\u05DC\u05DA \u05D9\u05E9 \u05D0\u05EA \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D9\u05E6\u05D5\u05E8 \u05D1\u05EA\u05D5\u05DB\u05DA \u05D0\u05EA \u05D4\u05EA\u05D7\u05D5\u05E9\u05D4 \u05D4\u05D1\u05D8\u05D5\u05D7\u05D4 \u05DC\u05D4 \u05D0\u05EA \u05D6\u05E7\u05D5\u05E7\u05D4 \u05DE\u05D0\u05D3.\n<br />\n\u05D2\u05DD \u05D0\u05DD \u05D4\u05E8\u05D5\u05E4\u05D0 \u05DE\u05D6\u05DB\u05D9\u05E8 \u05DC\u05DA \u05D0\u05EA \u05DB\u05DC \u05D4\u05E1\u05D8\u05D8\u05D9\u05E1\u05D8\u05D9\u05E7\u05D5\u05EA \u05D4\u05DE\u05E4\u05D7\u05D9\u05D3\u05D5\u05EA, \u05DE\u05E8\u05D9\u05DD \u05D9\u05D3\u05D9\u05D9\u05DD \u05DE\u05E8\u05D0\u05E9,\n<br />\n\u05DC\u05D0 \u05E0\u05D5\u05EA\u05DF \u05D4\u05E8\u05D1\u05D4 \u05E1\u05D9\u05DB\u05D5\u05D9\u05D9\u05DD \u05D0\u05D5 \u05E0\u05DB\u05E0\u05E1 \u05DC\u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05E0\u05D7\u05D4 \u05DB\u05D1\u05D3\u05D4 \u05E9\u05DC: \"\u05D8\u05D5\u05D1, \u05D1\u05D5\u05D0\u05D9 \u05E0\u05E0\u05E1\u05D4 \u05D5\u05E0\u05E8\u05D0\u05D4 \u05DE\u05D4 \u05D9\u05D4\u05D9\u05D4\"\n<br />\n\u05DB\u05D0\u05D9\u05DC\u05D5 \u05D7\u05D5\u05D3\u05E9-\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD \u05D0\u05E6\u05DC\u05DA \u05D6\u05D4 \u05E9\u05D5\u05DD \u05D3\u05D1\u05E8...\n</p>\n\n<p>\n\u05E2\u05DC \u05D9\u05E6\u05D9\u05E8\u05EA \u05D4\u05D1\u05D9\u05D8\u05D7\u05D5\u05DF \u05E9\u05DC\u05DA \u05E2\u05DD \u05E2\u05E6\u05DE\u05DA \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D4\u05DE\u05D5\u05DF \u05D1\u05E1\u05D3\u05E0\u05D4 \u05D4\u05E7\u05D1\u05D5\u05E6\u05EA\u05D9\u05EA, \u05D2\u05DD \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D0\u05D9\u05E9\u05D9\n<br />\n\u05D5\u05D2\u05DD \u05D1\u05E1\u05E4\u05E8 \"\u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05D1\u05EA\u05D5\u05DB\u05DA\" \u05D0\u05E0\u05D9 \u05DE\u05D3\u05D1\u05E8\u05EA \u05E2\u05DC \u05D6\u05D4 \u05DC\u05D0 \u05DE\u05E2\u05D8.\n<br />\n\u05D6\u05D5 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05E9\u05E0\u05D9\u05EA\u05E0\u05EA \u05DC\u05DA \u05D0\u05D9\u05E9\u05D9\u05EA \u05E2\u05DD \u05E7\u05D5\u05D3 \u05D4\u05E1\u05D5\u05D3\u05D9 \u05E9\u05DC\u05DA \u05DC\u05E2\u05E6\u05DE\u05DA.\n<br />\n\u05D4\u05D1\u05E2\u05D9\u05D4 \u05D4\u05D9\u05D0 \u05E9\u05DC\u05E4\u05E2\u05DE\u05D9\u05DD \u05DE\u05E8\u05D5\u05D1 \u05E9\u05D6\u05D4 \u05E7\u05D5\u05D3 \u05E1\u05D5\u05D3\u05D9 \u05D2\u05DD \u05D0\u05EA \u05DC\u05D0 \u05EA\u05DE\u05D9\u05D3 \u05D9\u05D5\u05D3\u05E2\u05EA \u05D0\u05D5\u05EA\u05D5 \u05D5\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05DC\u05DE\u05D5\u05D3 \u05DE\u05D4\u05D5..\n<br />\n\u05D5\u05D3\u05E8\u05DB\u05D5 \u05DC\u05D4\u05D1\u05D9\u05DF \u05DE\u05D4 \u05DE\u05D7\u05D6\u05E7 \u05D0\u05D5\u05EA\u05DA \u05DE\u05D1\u05E4\u05E0\u05D9\u05DD \u05D5\u05DE\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05EA\u05EA \u05DC\u05DA \u05EA\u05D7\u05D5\u05E9\u05D4,\n<br />\n\u05D5\u05D0\u05D5\u05DC\u05D9 \u05DB\u05DE\u05E2\u05D8 \u05D9\u05D3\u05D9\u05E2\u05D4, \u05D5\u05E9\u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05DC\u05DA, \u05D5\u05D2\u05DD \u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05D1\u05EA\u05D5\u05DB\u05DA, \u05D6\u05D4 \u05DC\u05D0 \u05D4\u05E4\u05E7\u05E8\u05D5\u05EA.\n<br />\n\u05E9\u05DE\u05D4 \u05E9\u05E7\u05D5\u05E8\u05D4 (\u05D0\u05D5 \u05DC\u05D0 \u05E7\u05D5\u05E8\u05D4) \u05D0\u05EA\u05DA \u05D4\u05D5\u05D0 \u05DE\u05DB\u05D5\u05D5\u05DF \u05D5\u05DE\u05D3\u05D5\u05D9\u05E7 \u05DC\u05DA. \u05D5\u05DC\u05DB\u05DC \u05D4\u05D1\u05DC\u05D0\u05D2\u05DF \u05D4\u05D6\u05D4\n<br />\n\u05D9\u05E9 \u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05D4\u05D5\u05DC\u05DA \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DC\u05DE\u05E7\u05D5\u05DD \u05DE\u05E1\u05D5\u05D9\u05DD \u05D5\u05D0\u05E4\u05D9\u05DC\u05D5 \u05D8\u05D5\u05D1.\n</p>\n\n<p>\n\u05D5\u05DC\u05DB\u05DF, \u05D2\u05DD \u05DB\u05E9\u05E8\u05D5\u05E4\u05D0 \u05E4\u05D5\u05E8\u05D9\u05D5\u05EA \u05D0\u05DE\u05E8 \u05DC\u05D9 (\u05D0\u05D9\u05E0\u05E1\u05E4\u05D5\u05E8 \u05E4\u05E2\u05DE\u05D9\u05DD..) \u05DC\u05D0 \u05DE\u05EA\u05E7\u05D3\u05DD \u05D0\u05E6\u05DC\u05DA \u05DB\u05DC\u05D5\u05DD,\n<br />\n\u05D0\u05D9\u05DF \u05EA\u05D6\u05D5\u05D6\u05D4, \u05D4\u05D2\u05D5\u05E3 \u05DC\u05D0 \u05DE\u05D2\u05D9\u05D1 \u05D5\u05E2\u05D5\u05D3 \u05DB\u05DC \u05DE\u05D9\u05E0\u05D9 '\u05DE\u05D7\u05DE\u05D0\u05D5\u05EA' \u05DB\u05D0\u05DC\u05D4,\n<br />\n\u05D1\u05D4\u05EA\u05D7\u05DC\u05D4 \u05D4\u05D0\u05DE\u05D9\u05E8\u05D5\u05EA \u05D4\u05D0\u05DC\u05D4 \u05D4\u05D9\u05D5 \u05DE\u05D2\u05D9\u05E2\u05D5\u05EA \u05DC\u05DE\u05E7\u05D5\u05DD \u05DE\u05D0\u05D3 \u05D0\u05D9\u05E9\u05D9, \u05E8\u05D2\u05D9\u05E9 \u05D5\u05E4\u05D2\u05D9\u05E2.\n<br />\n\u05D0\u05D1\u05DC \u05E2\u05DD \u05D4\u05D6\u05DE\u05DF, \u05DB\u05E9\u05D2\u05D9\u05DC\u05D9\u05EA\u05D9 \u05D0\u05EA \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05D8\u05D7\u05D5\u05DF \u05E9\u05DC\u05D9 \u05D1\u05EA\u05D5\u05DB\u05D9\n<br />\n\u05D4\u05D0\u05DE\u05D9\u05E8\u05D5\u05EA (\u05D2\u05DD \u05D0\u05DD \u05E0\u05DB\u05D5\u05E0\u05D5\u05EA/\u05E8\u05E4\u05D5\u05D0\u05D9\u05D5\u05EA/\u05D8\u05DB\u05E0\u05D9\u05D5\u05EA) \u05E8\u05E7 \u05E2\u05D1\u05E8\u05D5 \u05DC\u05D9\u05D3\u05D9.\n</p>\n\n<p>\n\u05D6\u05DB\u05E8\u05D9, \u05D4\u05E1\u05D9\u05DB\u05D5\u05D9\u05D9\u05DD \u05DC\u05D4\u05E6\u05DC\u05D7\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05E2\u05D5\u05DC\u05D9\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9 \u05E2\u05DD\n<br />\n\u05EA\u05D7\u05D5\u05E9\u05EA \u05D4\u05D1\u05D9\u05D8\u05D7\u05D5\u05DF \u05D1\u05E8\u05D5\u05E4\u05D0 (\u05D5\u05D1\u05E2\u05E6\u05DD \u05D1\u05DB\u05DC \u05DE\u05D9 \u05E9\u05DE\u05E2\u05D5\u05E8\u05D1)\n<br />\n\u05E9\u05D4\u05D5\u05D0 \u05D4\u05E9\u05DC\u05D9\u05D7 \u05D4\u05E0\u05DB\u05D5\u05DF \u05DC\u05DA \u05D5\u05E2\u05DC\u05D9\u05D5 \u05D0\u05EA \u05E1\u05D5\u05DE\u05DB\u05EA.\n</p>\n\n<p>\n\u05D0\u05D6 \u05D0\u05DD \u05DE\u05E6\u05D3 \u05D0\u05D7\u05D3 \u05D0\u05EA \u05DC\u05D0 \u05DE\u05E2\u05D1\u05D9\u05E8\u05D4 \u05D8\u05D9\u05E4\u05D5\u05DC \u05E9\u05DC\u05DD \u05D1\u05D7\u05E9\u05E9\u05D5\u05EA \u05D5\u05D3\u05D0\u05D2\u05D5\u05EA \u05DB\u05DE\u05D5:\n<br />\n\"\u05DE\u05D9 \u05D0\u05DE\u05E8 \u05E9\u05DB\u05DB\u05D4 \u05E0\u05DB\u05D5\u05DF \u05DC\u05E2\u05E9\u05D5\u05EA? \u05DE\u05D9 \u05D0\u05DE\u05E8 \u05E9\u05D4\u05D5\u05D0 \u05E9\u05D5\u05DC\u05D7 \u05D0\u05D5\u05EA\u05D9 \u05DC\u05D8\u05D9\u05E4\u05D5\u05DC \u05D4\u05E0\u05DB\u05D5\u05DF \u05DC\u05D9?!\"\n<br />\n\u05D5\u05DE\u05E6\u05D3 \u05E9\u05E0\u05D9,\n<br />\n\u05D0\u05EA \u05DE\u05E6\u05DC\u05D9\u05D7\u05D4 \u05DC\u05D4\u05E8\u05D2\u05D9\u05E9 \u05D1\u05EA\u05D5\u05DB\u05DA \u05D0\u05DD \u05D4\u05D8\u05D9\u05E4\u05D5\u05DC \u05D4\u05D6\u05D4 \u05E0\u05DB\u05D5\u05DF \u05DC\u05DA \u05D0\u05D5 \u05DC\u05D0\n<br />\n\u05D5\u05D0\u05EA \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D6\u05D4\u05D5\u05EA \u05D5\u05DC\u05D4\u05E8\u05D2\u05D9\u05E9 \u05DE\u05D4 \u05E0\u05DB\u05D5\u05DF \u05DC\u05DA \u05D5\u05DC\u05D2\u05D5\u05E3 \u05E9\u05DC\u05DA\n<br />\n\u05D0\u05EA \u05D1\u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05E0\u05DB\u05D5\u05DF!\n</p>\n\n<p>\n\u05E9\u05E0\u05E6\u05DC\u05D9\u05D7 \u05DC\u05E7\u05D1\u05DC \u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05D2\u05DD \u05DE\u05D1\u05E4\u05E0\u05D9\u05DD,\n<br />\n\u05E9\u05DC\u05DB\u05DF \u05D1\u05D0\u05D4\u05D1\u05D4,\n<br />\n\u05D2\u05DC\u05D9\u05EA.\n</p>"
        }));
        return Observable_1.Observable.of(key ? data.filter(function (item) { return item.id == key; })[0] : data[0]);
    };
    Content = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Content);
    return Content;
}());
exports.Content = Content;
//# sourceMappingURL=content.service.js.map