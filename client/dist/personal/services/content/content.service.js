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
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var Content = (function () {
    function Content(http) {
        this.http = http;
        this.value = 'בשבילי';
    }
    Content.prototype.getData = function (key) {
        var data = {
            aboutPersonal: "<p><i>\u05DE\u05EA\u05D7\u05D9\u05DC\u05D4 \u05EA\u05D4\u05DC\u05D9\u05DA? <a href=\"/assets/files/welcome.pdf\" target=\"_new\">\u05D4\u05D5\u05E8\u05D9\u05D3\u05D9 \u05DB\u05D0\u05DF</a> \u05D0\u05EA \u05D4\u05E2\u05E8\u05DB\u05D4 \u05DC\u05E4\u05EA\u05D9\u05D7\u05EA \u05EA\u05D4\u05DC\u05D9\u05DA. \u05DE\u05DC\u05D0\u05D9 \u05D0\u05EA \u05D4\u05E2\u05E8\u05DB\u05D4 \u05D5\u05E9\u05DC\u05D7\u05D9 \u05D0\u05DC\u05D9 \u05D1\u05DE\u05D9\u05D9\u05DC.</i></p>\n<p>\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D5\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D1\u05D3\u05E8\u05DA \u05DC\u05D4\u05E8\u05D9\u05D5\u05DF \u05D0\u05D9\u05E0\u05D4 \u05D1\u05D2\u05D3\u05E8 \u05DE\u05D5\u05EA\u05E8\u05D5\u05EA.\n<br />\n\u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D0\u05D9\u05E9\u05D9 \u05D9\u05D5\u05E6\u05E8 \u05E2\u05D5\u05D2\u05DF \u05D1\u05DE\u05E6\u05D9\u05D0\u05D5\u05EA \u05D4\u05DE\u05D8\u05DC\u05D8\u05DC\u05EA \u05E9\u05DC \u05D4\u05D4\u05DE\u05EA\u05E0\u05D4 \u05DC\u05D9\u05DC\u05D3.\n<br />\n\u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05DC\u05D0 \u05D1\u05D0 \u05D1\u05DE\u05E7\u05D5\u05DD \u05D8\u05D9\u05E4\u05D5\u05DC \u05E4\u05D9\u05D6\u05D9 \u05D5\u05DC\u05D0 \u05DE\u05E4\u05E8\u05D9\u05E2 \u05DC\u05D5. \u05D0\u05D3\u05E8\u05D1\u05D4, \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D1\u05D0 \u05DC\u05EA\u05EA \u05D1\u05D4\u05D9\u05E8\u05D5\u05EA, \u05D7\u05D9\u05D6\u05D5\u05E7 \u05D4\u05D0\u05DE\u05D5\u05E0\u05D4 \u05E9\u05DC\u05DA \u05D1\u05D2\u05D5\u05E3 \u05E9\u05DC\u05DA \u05D5\u05D1\u05DB\u05D5\u05D7\u05D5\u05EA \u05D4\u05D8\u05DE\u05D5\u05E0\u05D9\u05DD \u05D1\u05DA \u05DC\u05E6\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D4\u05D0\u05EA\u05D2\u05E8 \u05D4\u05D6\u05D4.</p>\n\n<h4>\u05DE\u05D4 \u05D4\u05E7\u05E9\u05E8 \u05D1\u05D9\u05DF \u05D4\u05EA\u05E4\u05EA\u05D7\u05D5\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA \u05DC\u05D1\u05D9\u05DF \u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05D4\u05E8\u05D9\u05D5\u05DF?!</h4>\n<p>\u05D6\u05D5 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05D4\u05E9\u05D0\u05DC\u05D4 \u05E9\u05D0\u05E0\u05D9 \u05E9\u05D0\u05DC\u05EA\u05D9 \u05D0\u05EA \u05E2\u05E6\u05DE\u05D9 \u05DB\u05E9\u05D2\u05D9\u05DC\u05D9\u05EA\u05D9 \u05D0\u05EA \u05D4\u05E7\u05E9\u05E8 \u05DC\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4! \u05DE\u05E1\u05EA\u05D1\u05E8 \u05E9\u05D9\u05E9 \u05E7\u05E9\u05E8. \u05D5\u05DE\u05E1\u05EA\u05D1\u05E8 \u05E9\u05D6\u05D4 \u05E2\u05D1\u05D3 \u05D2\u05DD \u05E2\u05DC\u05D9 \u05D5\u05D2\u05DD \u05E2\u05DC \u05E0\u05E9\u05D9\u05DD \u05E8\u05D1\u05D5\u05EA \u05E9\u05DC\u05D9\u05D5\u05D5\u05D9\u05EA\u05D9 \u05D5\u05D6\u05DB\u05D5 \u05DC\u05D4\u05E8\u05D5\u05EA \u05D5\u05DC\u05DC\u05D3\u05EA.</p>\n\n<h4>\u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3?</h4>\n<p>\u05D1\u05DB\u05DC \u05D4\u05EA\u05D7\u05D5\u05DE\u05D9\u05DD, \u05D5\u05D1\u05D9\u05D9\u05D7\u05D5\u05D3 \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA, \u05D4\u05D2\u05D5\u05E3 \u05D5\u05D4\u05E0\u05E4\u05E9 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D1\u05D9\u05D7\u05D3. \u05DB\u05DC \u05DE\u05D4 \u05E9\u05E7\u05D5\u05E8\u05D4 \u05E2\u05DD \u05D4\u05D2\u05D5\u05E3 \u05DE\u05E9\u05E4\u05D9\u05E2 \u05E2\u05DC \u05D4\u05E0\u05E4\u05E9\n\u05D5\u05DC\u05D4\u05D9\u05E4\u05DA. \u05DC\u05E8\u05D5\u05D1, \u05DB\u05D0\u05E9\u05E8 \u05D4\u05D6\u05DE\u05DF \u05E2\u05D5\u05D1\u05E8 \u05D4\u05E0\u05D9\u05E1\u05D9\u05D5\u05E0\u05D5\u05EA \u05DC\u05D4\u05E8\u05D5\u05EA \u05DB\u05D5\u05E9\u05DC\u05D9\u05DD \u05D1\u05D6\u05D4 \u05D0\u05D7\u05E8 \u05D6\u05D4, \u05D4\u05E8\u05D2\u05E9\u05D5\u05EA \u05E9\u05DE\u05DE\u05DC\u05D0\u05D9\u05DD \u05D0\u05D5\u05EA\u05DA, \u05DE\u05E9\u05E4\u05D9\u05E2\u05D9\u05DD\n\u05DE\u05D9\u05D3\u05D9\u05EA \u05E2\u05DC \u05D4\u05E0\u05E4\u05E9 \u05E9\u05DC\u05DA. \u05D4\u05D9\u05D0 \u05E0\u05D1\u05D4\u05DC\u05EA \u05D5\u05DE\u05EA\u05DB\u05D5\u05D5\u05E6\u05EA \u05D5\u05D0\u05D6 \u05D2\u05DD \u05D4\u05DE\u05E7\u05D5\u05DD \u05DC\u05EA\u05E7\u05D5\u05D5\u05D4, \u05D0\u05D5\u05E4\u05D8\u05D9\u05DE\u05D9\u05D5\u05EA, \u05D0\u05DE\u05D5\u05E0\u05D4 \u05D5\u05E9\u05DE\u05D7\u05D4 \u05E0\u05D5\u05EA\u05E8 \u05E7\u05D8\u05DF\n\u05D5\u05DE\u05DB\u05D5\u05D5\u05E5.\n</p>\n<p>\u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D4\u05EA\u05E4\u05EA\u05D7\u05D5\u05EA \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA \u05D1\u05D0 \u05DC\u05E4\u05EA\u05D5\u05D7, \u05DC\u05E4\u05E8\u05D5\u05E5 \u05D5\u05DC\u05D4\u05E8\u05D7\u05D9\u05D1 \u05DE\u05D4 \u05E9\u05E6\u05E8\u05D9\u05DA. \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05E0\u05D5\u05D2\u05E2 \u05D1\u05D0\u05D5\u05EA\u05D5 \u05DE\u05E7\u05D5\u05DD \u05E4\u05E0\u05D9\u05DE\u05D9 \u05E9\u05DC\n\u05D4\u05E0\u05E4\u05E9, \u05D9\u05D5\u05E6\u05E8 \u05E2\u05D1\u05D5\u05E8\u05D4 \u05DE\u05E8\u05D7\u05D1 \u05DC\u05D4\u05E9\u05DE\u05D9\u05E2 \u05E8\u05D2\u05E9\u05D5\u05EA, \u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05D5\u05DC\u05D1\u05D8\u05D0 \u05DE\u05D4 \u05E9\u05D4\u05D9\u05D0 \u05D7\u05D5\u05D5\u05D4. \u05DB\u05DC \u05D6\u05D4 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4 \u05DC\u05D7\u05D6\u05D5\u05E8 \u05DC\u05D7\u05D9\u05D5\u05EA\n\u05D4\u05D0\u05DE\u05EA\u05D9\u05EA \u05E9\u05DC\u05D4, \u05DC\u05D9\u05DB\u05D5\u05DC\u05EA \u05D6\u05E8\u05D9\u05DE\u05D4 \u05D5\u05E9\u05D7\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E4\u05DC\u05D0\u05D9\u05DD \u05DE\u05D0\u05D9\u05DF \u05DB\u05DE\u05D5\u05EA\u05DD.</p>\n<p>\u05D0\u05D6 \u05D4\u05D9\u05D0 \u05DE\u05E9\u05E4\u05D9\u05E2\u05D4 \u05E2\u05DC \u05D4\u05D2\u05D5\u05E3 \u05E9\u05D2\u05DD \u05D7\u05D5\u05D6\u05E8 \u05DC\u05D7\u05D9\u05D5\u05EA, \u05E9\u05D7\u05E8\u05D5\u05E8 \u05D5\u05D6\u05E8\u05D9\u05DE\u05D4.</p>\n<p><span class=\"highlight\">\u05E4\u05EA\u05D0\u05D5\u05DD</span> \u05E8\u05D5\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E6\u05D9\u05D0\u05D5\u05EA \u05D0\u05D7\u05E8\u05EA</p>\n<p><span class=\"highlight\">\u05E4\u05EA\u05D0\u05D5\u05DD</span> \u05D4\u05D4\u05E8\u05D9\u05D5\u05DF \u05DB\u05D1\u05E8 \u05DC\u05D0 \u05E0\u05E8\u05D0\u05D4 \u05DB\u05DC \u05DB\u05DA \u05E8\u05D7\u05D5\u05E7</p>\n<p><span class=\"highlight\">\u05E4\u05EA\u05D0\u05D5\u05DD</span> \u05D4\u05D4\u05E8\u05D9\u05D5\u05DF \u05DB\u05D1\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05E4\u05E1 \u05D0\u05EA \u05DB\u05DC \u05D4\u05DE\u05E7\u05D5\u05DD \u05D1\u05DE\u05DB\u05DC\u05D5\u05DC \u05D4\u05D7\u05D9\u05D9\u05DD \u05E9\u05DC\u05DA</p>\n<p><span class=\"highlight\">\u05E4\u05EA\u05D0\u05D5\u05DD \u05D9\u05E9 \u05D7\u05D9\u05D9\u05DD!</span></p>\n\n<h4>\u05DE\u05D9 \u05DE\u05D2\u05D9\u05E2\u05D4 \u05D0\u05DC\u05D9 \u05DC\u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05DB\u05D9\u05D5\u05D5\u05DF?</h4>\n<p>\u05DB\u05DC \u05D0\u05D9\u05E9\u05D4 \u05E9\u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05D1\u05D9\u05D0 \u05D7\u05D9\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD \u05DC\u05E2\u05D5\u05DC\u05DD \u05D5\u05D7\u05D5\u05D5\u05D4 \u05EA\u05E7\u05D9\u05E2\u05D5\u05EA \u05D1\u05DE\u05E7\u05D5\u05DD \u05D4\u05D6\u05D4.\n<br />\n\u05D5\u05DB\u05DE\u05D5 \u05DB\u05DF, \u05D0\u05D9\u05E9\u05D4 \u05E9\u05DE\u05D7\u05E4\u05E9\u05EA\n\u05D6\u05D5\u05D2\u05D9\u05D5\u05EA \u05D5\u05DE\u05E8\u05D2\u05D9\u05E9\u05D4 \u05E9\u05D4\u05E9\u05E2\u05D5\u05DF \u05D4\u05D1\u05D9\u05D5\u05DC\u05D5\u05D2\u05D9 \u05E9\u05DC\u05D4 \u05DB\u05D1\u05E8 \u05D1\u05E9\u05DC\u05D1 \u05DE\u05EA\u05E7\u05D3\u05DD...</p>\n\n<h4>\u05DE\u05D4 \u05DE\u05D8\u05E8\u05EA \u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05D4\u05DB\u05D9\u05D5\u05D5\u05DF?</h4>\n<p>\u05E0\u05D6\u05D4\u05D4 \u05D0\u05EA \u05D4\u05DE\u05E7\u05D5\u05DD \u05D4\u05D7\u05D6\u05E7 \u05E9\u05DC\u05DA \u05DE\u05DE\u05E0\u05D5 \u05D0\u05EA \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05E2\u05DC\u05D5\u05EA \u05D5\u05DC\u05E6\u05DE\u05D5\u05D7\n<br />\n\u05E0\u05E7\u05D1\u05DC \u05D1\u05D4\u05D9\u05E8\u05D5\u05EA \u05DC\u05D2\u05D1\u05D9 \u05D4\u05D3\u05E8\u05DA \u05E9\u05DC\u05DA \u05DC\u05E6\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D4\u05D0\u05EA\u05D2\u05E8\u05D9\u05DD \u05D4\u05E2\u05D5\u05DE\u05D3\u05D9\u05DD \u05DC\u05E4\u05EA\u05D7\u05DA \u05DB\u05E8\u05D2\u05E2\n<br />\n\u05E0\u05D0\u05E4\u05E9\u05E8 \u05E6\u05DE\u05D9\u05D7\u05D4 \u05D5\u05D4\u05EA\u05D7\u05D3\u05E9\u05D5\u05EA \u05D1\u05EA\u05D7\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05D1\u05D7\u05D9\u05D9\u05DA\n<br />\n\u05E0\u05E7\u05E9\u05D9\u05D1 \u05E4\u05E0\u05D9\u05DE\u05D4 \u05DC\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA \u05E9\u05DC\u05DA \u05D5\u05DB\u05DF \u05DC\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05D4\u05D7\u05D5\u05E1\u05DE\u05D5\u05EA\n<br />\n\u05E0\u05DE\u05D9\u05E8 \u05D0\u05EA \u05D0\u05D5\u05EA\u05DF \u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05E4\u05D5\u05E8\u05D9\u05D5\u05EA \u05E9\u05D1\u05DA \u05D2\u05DD \u05DC\u05EA\u05D7\u05D5\u05DD \u05D4\u05E4\u05D5\u05E8\u05D9\u05D5\u05EA\n<br />\n\u05E0\u05D7\u05D5\u05D5\u05D4 \u05D0\u05EA \u05D4\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05D1\u05EA\u05D5\u05D3\u05E2\u05D4 \u05E9\u05DC\u05DA \u05D5\u05D1\u05DE\u05E6\u05D9\u05D0\u05D5\u05EA \u05D7\u05D9\u05D9\u05DA.</p>\n\n<h4>\u05DB\u05D9\u05E6\u05D3 \u05DE\u05EA\u05E0\u05D4\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA?</h4>\n<p>\u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05DE\u05EA\u05E0\u05D4\u05DC \u05D1\u05D1\u05D9\u05EA\u05D9 \u05E9\u05D1\u05D4\u05D5\u05D3 \u05D4\u05E9\u05E8\u05D5\u05DF \u05D0\u05D5 \u05D3\u05E8\u05DA \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF, \u05D1\u05E9\u05EA\u05D9 \u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA:\n<ol>\n<li>\u05EA\u05D4\u05DC\u05D9\u05DA \u05DE\u05DC\u05D0 \u05D1\u05D9\u05DF 10-15 \u05E9\u05D9\u05D7\u05D5\u05EA</li>\n<li>\u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05EA 1-3 \u05E9\u05D9\u05D7\u05D5\u05EA</li>\n</ol>\n\u05DC\u05D1\u05E8\u05E8 \u05DE\u05D4 \u05E0\u05DB\u05D5\u05DF \u05DC\u05DA, <a href=\"/contact\">\u05E6\u05E8\u05D9 \u05E7\u05E9\u05E8</a> \u05D5\u05D0\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DA \u05D1\u05D4\u05E7\u05D3\u05DD.</p>\n\n<p><span class=\"highlight start\">\u05DC\u05EA\u05D4\u05DC\u05D9\u05DA \u05D7\u05DE\u05D9\u05E9\u05D4 \u05E9\u05DC\u05D1\u05D9\u05DD<span \u05DB\u05D0\u05E9\u05E8 \u05DB\u05DC \u05E9\u05DC\u05D1 \u05DE\u05DB\u05D9\u05DF \u05D0\u05D5\u05EA\u05DA \u05DC\u05E9\u05DC\u05D1 \u05D4\u05D1\u05D0.</p>\n\n<p><span class=\"highlight\">\u05D4\u05E9\u05DC\u05D1 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF</span> -  \u05E2\u05D5\u05DC\u05D9\u05DD \u05E2\u05DC \u05D3\u05E8\u05DA \u05D4\u05DE\u05DC\u05DA (\u05D4\u05DE\u05DC\u05DB\u05D4!)\n\u05E8\u05D0\u05E9\u05D9\u05EA, \"\u05D4\u05E6\u05DC\u05D7\u05D4 \u05E4\u05D5\u05E8\u05D9\u05D9\u05D4\"- \u05E0\u05D2\u05DC\u05D4 \u05DE\u05D4\u05D5 \u05D2\u05D5\u05E8\u05DD \u05D4\u05D4\u05E6\u05DC\u05D7\u05D4 \u05E9\u05DC\u05DA \u05D1\u05D7\u05D9\u05D9\u05DD.\n\u05E9\u05E0\u05D9\u05EA, \u05E0\u05D6\u05D4\u05D4 \u05D0\u05EA \u05D4\u05D7\u05DC\u05D5\u05DD \u05D4\u05E4\u05E0\u05D9\u05DE\u05D9 \u05E9\u05DC\u05DA.\n\u05D5\u05D0\u05D6 - \u05E0\u05EA\u05D1\u05D5\u05E0\u05DF \u05D9\u05D7\u05D3 \u05D1\u05DE\u05E4\u05D4 \u05D4\u05E4\u05D5\u05E8\u05D9\u05D9\u05D4 \u05E9\u05DC\u05DA, \u05D0\u05EA \u05D4\u05DE\u05D8\u05E8\u05D5\u05EA \u05E9\u05E2\u05D5\u05DE\u05D3\u05D5\u05EA \u05DC\u05E4\u05EA\u05D7\u05DA, \u05E0\u05D6\u05D4\u05D4 \u05D0\u05EA \u05D4\u05D4\u05EA\u05E4\u05EA\u05D7\u05D5\u05EA \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA \u05E9\u05DC\u05DA\n\u05D1\u05EA\u05D5\u05DA \u05D4\u05D0\u05EA\u05D2\u05E8 \u05D4\u05D6\u05D4.\n<br />\n\u05D1\u05E1\u05D5\u05E3 \u05D4\u05E9\u05DC\u05D1 \u05D4\u05D6\u05D4 - \u05D0\u05EA \u05DB\u05D1\u05E8 \u05EA\u05E6\u05D0\u05D9 \u05E2\u05DD \u05D1\u05D4\u05D9\u05E8\u05D5\u05EA \u05DC\u05D2\u05D1\u05D9 \u05EA\u05DB\u05E0\u05D9\u05EA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D4\u05D9\u05D9\u05D7\u05D5\u05D3\u05D9\u05EA \u05DC\u05DA.\n(\u05D4\u05E9\u05DC\u05D1 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05D4\u05DE\u05DC\u05D0 \u2013 3 \u05E4\u05D2\u05D9\u05E9\u05D5\u05EA)</p>\n\n<p><span class=\"highlight\">\u05D4\u05E9\u05DC\u05D1 \u05D4\u05E9\u05E0\u05D9</span> - \u05EA\u05D7\u05D9\u05DC\u05EA \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D1\u05D9\u05DF \u05D2\u05D5\u05E3 \u05DC\u05E0\u05E4\u05E9\n\u05D1\u05E9\u05DC\u05D1 \u05D4\u05D6\u05D4 \u05EA\u05D6\u05D4\u05D9 \u05D5\u05EA\u05EA\u05D7\u05D9\u05DC\u05D9 \u05DC\u05E2\u05D1\u05D5\u05D3 \u05E2\u05DD \u05D4\u05D2\u05D5\u05E3 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E9\u05E0\u05DB\u05D5\u05E0\u05D4 \u05DC\u05DA. \u05D1\u05DE\u05E7\u05D1\u05D9\u05DC, \u05E0\u05D6\u05D4\u05D4 \u05D0\u05EA \u05D4\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05D4\u05D7\u05D5\u05E1\u05DE\u05D5\u05EA\n\u05D4\u05E2\u05D5\u05DE\u05D3\u05D5\u05EA \u05DE\u05D0\u05D7\u05D5\u05E8\u05D9 \u05D4\u05E7\u05D5\u05E9\u05D9, \u05E0\u05E7\u05E9\u05D9\u05D1 \u05D5\u05E0\u05DE\u05D9\u05E8 \u05D0\u05D5\u05EA\u05DF \u05D1\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05E4\u05D5\u05E8\u05D9\u05D5\u05EA.</p>\n\n<p><span class=\"highlight\">\u05D4\u05E9\u05DC\u05D1 \u05D4\u05E9\u05DC\u05D9\u05E9\u05D9</span> - \u05DC\u05D4\u05E1\u05EA\u05DB\u05DC \u05E2\u05DC \u05D4\u05D3\u05D1\u05E8\u05D9\u05DD \u05D0\u05D7\u05E8\u05EA\n\u05D1\u05E9\u05DC\u05D1 \u05D4\u05D6\u05D4 \u05DB\u05D1\u05E8 \u05EA\u05EA\u05D7\u05D9\u05DC\u05D9 \u05DC\u05D7\u05D9\u05D5\u05EA \u05D1\u05EA\u05D5\u05DA \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9 \u05E9\u05E0\u05E8\u05E7\u05DD. \u05D0\u05EA \u05EA\u05E6\u05DC\u05D9\u05D7\u05D9 \u05DC\u05E8\u05D0\u05D5\u05EA \u05E2\u05DC \u05DE\u05D4 \u05D9\u05E9 \u05DC\u05DA \u05DC\u05D4\u05D5\u05D3\u05D5\u05EA \u05D5\u05D0\u05EA \u05D4\u05D9\u05D9\u05D7\u05D5\u05D3\u05D9 \u05D1\u05DA\n\u05E9\u05D0\u05D9\u05DF \u05DC\u05D0\u05E3 \u05D0\u05D7\u05EA \u05D0\u05D7\u05E8\u05EA.</p>\n\n<p><span class=\"highlight\">\u05D4\u05E9\u05DC\u05D1 \u05D4\u05E8\u05D1\u05D9\u05E2\u05D9</span> - \u05DC\u05D4\u05D9\u05D5\u05EA \u05E4\u05EA\u05D5\u05D7\u05D4 \u05DC\u05E7\u05D1\u05DC\n\u05D1\u05E9\u05DC\u05D1 \u05D4\u05D6\u05D4 \u05EA\u05E6\u05DC\u05D9\u05D7\u05D9 \u05DC\u05D1\u05D8\u05D0 \u05D4\u05D7\u05D5\u05E6\u05D4 \u05D5\u05DC\u05D9\u05D9\u05E9\u05DD \u05D1\u05E6\u05E2\u05D3\u05D9\u05DD \u05E7\u05D8\u05E0\u05D9\u05DD \u05DE\u05D4 \u05E9\u05DB\u05D1\u05E8 \u05E8\u05D0\u05D9\u05EA.\n\u05D1\u05E0\u05D5\u05E1\u05E3, \u05D1\u05E9\u05DC\u05D1 \u05D4\u05D6\u05D4 \u05EA\u05E8\u05D0\u05D9 \u05E2\u05D5\u05D3 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05DC\u05D8\u05D5\u05D1\u05D4 \u05D1\u05D7\u05D9\u05D9\u05DA</p>\n\n<p><span class=\"highlight\">\u05D4\u05E9\u05DC\u05D1 \u05D7\u05DE\u05D9\u05E9\u05D9</span> - \u05E1\u05D9\u05DB\u05D5\u05DD \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA</p>\n\n<hr />\n\n<p><span class=\"highlight\">\u05D2\u05DD \u05D0\u05DD \u05D4\u05D3\u05E8\u05DA \u05DC\u05D4\u05D9\u05E8\u05D9\u05D5\u05DF \u05E8\u05E6\u05D5\u05E4\u05EA \u05D0\u05EA\u05D2\u05E8\u05D9\u05DD, \u05D0\u05EA \u05E8\u05D5\u05E6\u05D4 \u05DC\u05E6\u05E2\u05D5\u05D3 \u05D1\u05E9\u05D1\u05D9\u05DC \u05E9\u05DC \u05E9\u05DE\u05D7\u05D4, \u05E8\u05D5\u05D2\u05E2 \u05D5\u05E9\u05DC\u05DE\u05D5\u05EA \u05E2\u05DD \u05E2\u05E6\u05DE\u05DA.</span></p>\n\n<!--<h1>\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E9\u05DC\u05D9.. </h1>-->\n\n<p><span class=\"highlight start\">\u05D0\u05E0\u05D9 \u05DE\u05D0\u05DE\u05D9\u05E0\u05D4</span> \u05E9\u05DC\u05DB\u05DC \u05D0\u05D9\u05E9\u05D4 \u05D9\u05E9 \u05D0\u05EA \u05D4\u05E9\u05D1\u05D9\u05DC \u05E9\u05DC\u05D4 \u05DC\u05D4\u05D2\u05E9\u05DE\u05D4 \u05D5\u05DC\u05D4\u05E6\u05DC\u05D7\u05D4 \u05D4\u05E4\u05D5\u05E8\u05D9\u05D9\u05D4 \u05E9\u05DC\u05D4.</p>\n<p>\u05D1\u05DB\u05DC \u05D0\u05D9\u05E9\u05D4 \u05E8\u05E6\u05D5\u05DF \u05D4\u05D7\u05D9\u05D9\u05DD \u05DE\u05E4\u05E2\u05DD \u05D9\u05D7\u05D3 \u05E2\u05DD \u05DB\u05DC \u05DB\u05D5\u05D7\u05D5\u05EA\u05D9\u05D4.</p>\n<p>\u05DC\u05E4\u05E2\u05DE\u05D9\u05DD, \u05E9\u05D9\u05E0\u05D5\u05D9 \u05E7\u05D8\u05DF \u05D1\u05EA\u05D5\u05D3\u05E2\u05D4 \u05D5\u05D1\u05D4\u05D9\u05E8\u05D5\u05EA \u05D1\u05DE\u05E7\u05D5\u05DD \u05E9\u05E0\u05E8\u05D0\u05D4 \u05EA\u05E7\u05D5\u05E2</p>\n\u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05D9\u05E6\u05D5\u05E8 \u05D6\u05E8\u05D9\u05DE\u05D4 \u05D2\u05D3\u05D5\u05DC\u05D4 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05DE\u05D9\u05DE\u05D5\u05E9 \u05D4\u05E8\u05E6\u05D5\u05DF \u05D4\u05E4\u05D5\u05E8\u05D4.\n<p>\u05D4\u05E8\u05E2\u05D9\u05D5\u05DF \u05D1\u05DE\u05D9\u05DC\u05D4 \"\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9\" \u05D1\u05D0 \u05DE\u05EA\u05D5\u05DA \u05DE\u05D0\u05DE\u05E8 \u05D7\u05D6\"\u05DC \u05D1\u05E1\u05E0\u05D4\u05D3\u05E8\u05D9\u05DF:</p>\n<p>\"\u05E6\u05E8\u05D9\u05DA \u05DB\u05DC \u05D0\u05D3\u05DD \u05DC\u05D5\u05DE\u05E8, \u05DB\u05DC \u05D4\u05E2\u05D5\u05DC\u05DD \u05DC\u05D0 \u05E0\u05D1\u05E8\u05D0 \u05D0\u05DC\u05D0 <b>\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9</b>\"</p>\n<p><span class=\"highlight start\">\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9</span> - \u05E6\u05D5\u05E2\u05D3\u05EA \u05D1\u05E9\u05D1\u05D9\u05DC \u05E9\u05DC\u05D9. \u05D4\u05D0\u05EA\u05D2\u05E8\u05D9\u05DD \u05D5\u05D4\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05E9\u05DC\u05D9 \u05DE\u05D3\u05D5\u05D9\u05E7\u05D9\u05DD \u05DC\u05E9\u05D1\u05D9\u05DC \u05D6\u05D4 \u05E9\u05DC \u05D7\u05D9\u05D9.</p>\n<p><span class=\"highlight start\">\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9</span> - \u05DE\u05D2\u05E9\u05D9\u05DE\u05D4 \u05D0\u05EA \u05E8\u05E6\u05D5\u05E0\u05D5\u05EA\u05D9\u05D9 \u05D4\u05DB\u05DE\u05D5\u05E1\u05D9\u05DD \u05D1\u05E9\u05D1\u05D9\u05DC\u05D9, \u05E2\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D3\u05D9 \u05DC\u05DE\u05DC\u05D0 \u05D0\u05EA \u05EA\u05E4\u05E7\u05D9\u05D3\u05D9 \u05DB\u05E8\u05D0\u05D5\u05D9.</p>\n<p><span class=\"highlight start\">\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9</span> - \u05D4\u05DE\u05D9\u05DC\u05D4 \u05E2\u05D5\u05DC\u05DD \u05DE\u05D6\u05DB\u05D9\u05E8\u05D4 \u05D4\u05E2\u05DC\u05DD. \u05D4\u05D4\u05E2\u05DC\u05DD \u05D5\u05D4\u05D7\u05D5\u05E1\u05E8 \u05D1\u05D7\u05D9\u05D9 \u05DE\u05D3\u05D5\u05D9\u05E7 \u05DC\u05D9 \u05D5\u05D0\u05E3 \u05E0\u05D1\u05E8\u05D0 \u05D1\u05E9\u05D1\u05D9\u05DC\u05D9.</p>\n<p><span class=\"highlight\">\u05D1\u05DB\u05DC \u05D0\u05D3\u05DD \u05D9\u05E9 \u05E8\u05E6\u05D5\u05DF \u05E2\u05D6 \u05DC\u05D7\u05D9\u05D9\u05DD. \u05D0\u05E6\u05DC \u05D0\u05D9\u05E9\u05D4 \u05D4\u05E8\u05E6\u05D5\u05DF \u05D4\u05D6\u05D4 \u05D0\u05E3 \u05D2\u05D3\u05D5\u05DC \u05D9\u05D5\u05EA\u05E8 \u05DE\u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05D1\u05EA\u05D5\u05DB\u05D4 \u05E7\u05D9\u05D9\u05DE\u05EA \u05D4\u05D9\u05DB\u05D5\u05DC\u05EA \u05DC\u05D9\u05E6\u05D5\u05E8\n\u05D7\u05D9\u05D9\u05DD. \u05DB\u05D0\u05E9\u05E8 \u05D0\u05D9\u05E9\u05D4 \u05D7\u05D5\u05D5\u05D4 \u05D0\u05EA \u05D4\u05E7\u05D5\u05E9\u05D9 \u05DC\u05D4\u05D1\u05D9\u05D0 \u05D7\u05D9\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD \u05DC\u05E2\u05D5\u05DC\u05DD \u05D1\u05D3\u05E8\u05DA \u05D4\u05E8\u05D2\u05D9\u05DC\u05D4 \u05D5\u05D4\u05D8\u05D1\u05E2\u05D9\u05EA, \u05D4\u05D9\u05D0 \u05D7\u05D5\u05D5\u05D4\n\u05EA\u05D7\u05D5\u05E9\u05EA \u05D7\u05D9\u05E1\u05E8\u05D5\u05DF \u05E2\u05DE\u05D5\u05E7\u05D4.  \u05D4\u05D7\u05D9\u05E1\u05E8\u05D5\u05DF \u05D4\u05D6\u05D4 \u05D4\u05D5\u05D0 \u05D4\u05D6\u05D3\u05DE\u05E0\u05D5\u05EA \u05DC\u05E6\u05DE\u05D9\u05D7\u05D4 \u05D7\u05D3\u05E9\u05D4 \u05D5\u05D2\u05D9\u05DC\u05D5\u05D9 \u05D7\u05D3\u05E9 \u05D1\u05DE\u05E1\u05E2 \u05D7\u05D9\u05D9\u05D4 \u05D3\u05E8\u05DA\n\u05D4\u05DE\u05D5\u05DB\u05E0\u05D5\u05EA \u05DC\u05D4\u05EA\u05D1\u05D5\u05E0\u05DF \u05D5\u05DC\u05E6\u05D0\u05EA \u05D0\u05DC \u05D4\u05DE\u05E1\u05E2 \u05D4\u05D0\u05D9\u05E9\u05D9 \u2013 \u05E0\u05E9\u05D9 \u05E9\u05DC \u05E2\u05E6\u05DE\u05D4...</span></p>\n<p>\u05D4\u05E6\u05DC\u05D7\u05D4 \u05D1\u05D4\u05D2\u05E9\u05DE\u05EA \u05DE\u05D8\u05E8\u05D5\u05EA \u05D5\u05D1\u05D7\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC\u05DC \u05D0\u05D9\u05E0\u05D4 \u05D1\u05D4\u05DB\u05E8\u05D7 \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05DE\u05D0\u05DE\u05E5, \u05D0\u05DC\u05D0 \u05E9\u05DC \u05D4\u05D3\u05D1\u05E8 \u05D4\u05E0\u05DB\u05D5\u05DF \u05D1\u05DE\u05E7\u05D5\u05DD\n\u05D4\u05E0\u05DB\u05D5\u05DF.  \u05DB\u05D0\u05E9\u05E8 \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E2\u05D5\u05E9\u05D9\u05DD \u05D0\u05EA \u05D4\u05D4\u05EA\u05DB\u05D5\u05D5\u05E0\u05D5\u05EA \u05D4\u05E8\u05D0\u05D5\u05D9\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05D9 \u05E9\u05D0\u05E0\u05D7\u05E0\u05D5 \u05D1\u05D0\u05DE\u05EA, \u05D4\u05E6\u05DC\u05D7\u05D4 \u05D4\u05D9\u05D0 \u05EA\u05D5\u05E6\u05D0\u05D4\n\u05D8\u05D1\u05E2\u05D9\u05EA. \u05DE\u05EA\u05D5\u05DA \u05D4\u05EA\u05D1\u05D5\u05E0\u05E0\u05D5\u05EA \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA \u05D9\u05D4\u05D5\u05D3\u05D9\u05EA \u05E4\u05EA\u05D7\u05D9 \u05D0\u05EA \u05D4\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA \u05D5\u05D4\u05D9\u05DB\u05D5\u05DC\u05D5\u05EA \u05E9\u05D1\u05EA\u05D5\u05DB\u05DA, \u05D0\u05EA \u05DE\u05D9 \u05E9\u05D0\u05EA \u05DB\u05D0\u05D3\u05DD,\n\u05D5\u05EA\u05E6\u05DC\u05D9\u05D7\u05D9.</p>\n\n<p>\u05DC\u05D1\u05E8\u05E8 \u05D0\u05D9\u05D6\u05D4 \u05EA\u05D4\u05DC\u05D9\u05DA \u05E0\u05DB\u05D5\u05DF \u05DC\u05DA, <a href=\"/contact\">\u05E6\u05E8\u05D9 \u05E7\u05E9\u05E8</a> \u05D5\u05D0\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DA \u05D1\u05D4\u05E7\u05D3\u05DD!</p>\n\n  "
        };
        return Observable_1.Observable.of(key ? data[key] : data);
    };
    Content = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Content);
    return Content;
}());
exports.Content = Content;
//# sourceMappingURL=content.service.js.map