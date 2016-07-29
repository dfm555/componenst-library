"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var carousel_1 = require('../../components/carousel/carousel');
var slide_1 = require('../../components/slide/slide');
var search_1 = require('../../components/search/search');
var Home = (function () {
    function Home() {
        this.NextPhotoInterval = 5000;
        this.noLoopSlides = false;
        this.noTransition = true;
        this.slides = [];
        this.addNewsSlide();
    }
    Home.prototype.addNewsSlide = function () {
        this.slides.push({ image: 'https://www.incibo.com/media/revslider/1-slide.jpg', text: 'Slide 1', alt: 'Slide 1' }, { image: 'http://blog.startuptalky.com/content/uploads/2015/10/Screen-Shot-2015-09-26-at-5.37.32-pm-1.png', text: 'Slide 2', alt: 'Slide 2' }, { image: 'http://www.macerata.confartigianato.it/wp-content/uploads/2016/04/Slider_home_07.jpg', text: 'Slide 3', alt: 'Slide 3' });
    };
    Home.prototype.removeLastSlide = function () {
        this.slides.pop();
    };
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            pipes: [],
            providers: [],
            directives: [router_1.ROUTER_DIRECTIVES, carousel_1.Carousel, slide_1.Slide, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, search_1.Search],
            styleUrls: ['./home.css'],
            templateUrl: './home.html'
        })
    ], Home);
    return Home;
}());
exports.Home = Home;
