"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Categories_1 = require('../../services/Categories');
var Components_1 = require('../../services/Components');
var Home = (function () {
    function Home(categories, myComponent) {
        this.categories = categories;
        this.myComponent = myComponent;
    }
    Home.prototype.ngOnInit = function () {
        var _this = this;
        this.categories.getCategories('http://localhost:8081/categories/')
            .subscribe(function (res) {
            _this.dataCategories = res;
        });
    };
    Home.prototype.addComponent = function (event, idCategory, nameCategory) {
        event.preventDefault();
        var data = [{
                name: 'Colors',
                description: 'A simple description',
                markup: '<div class="Colors">' +
                    '<span class="red">Color</span>' +
                    '</div>',
                styles: '.red{background-color: red;height: 40px;width: 40px;}'
            }];
        this.myComponent.createComponent(idCategory, nameCategory, data)
            .subscribe(function (res) {
        });
    };
    Home.prototype.myStyles = function (value) {
        return value;
    };
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            pipes: [],
            providers: [Categories_1.Categories, Components_1.Components],
            directives: [router_1.ROUTER_DIRECTIVES],
            styleUrls: ['./home.css'],
            templateUrl: './home.html'
        })
    ], Home);
    return Home;
}());
exports.Home = Home;
