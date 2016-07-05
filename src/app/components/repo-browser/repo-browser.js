"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var github_1 = require('../../services/github');
var RepoBrowser = (function () {
    function RepoBrowser(router, github) {
        this.router = router;
        this.github = github;
    }
    RepoBrowser.prototype.searchForOrg = function (orgName) {
        var _this = this;
        this.github.getOrg(orgName)
            .subscribe(function (_a) {
            var name = _a.name;
            console.log(name);
            _this.router.navigate(['/github', orgName]);
        });
    };
    RepoBrowser = __decorate([
        core_1.Component({
            selector: 'repo-browser',
            pipes: [],
            providers: [github_1.Github],
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: './repo-browser.html',
            styleUrls: ['./repo-browser.css']
        })
    ], RepoBrowser);
    return RepoBrowser;
}());
exports.RepoBrowser = RepoBrowser;
