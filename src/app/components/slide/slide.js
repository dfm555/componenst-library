"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Slide = (function () {
    function Slide(carousel) {
        this.carousel = carousel;
        this.addClass = true;
    }
    Slide.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    Slide.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    __decorate([
        core_1.Input()
    ], Slide.prototype, "index", void 0);
    __decorate([
        core_1.Input()
    ], Slide.prototype, "direction", void 0);
    __decorate([
        core_1.HostBinding('class.active'),
        core_1.Input()
    ], Slide.prototype, "active", void 0);
    __decorate([
        core_1.HostBinding('class.item'),
        core_1.HostBinding('class.carousel-item')
    ], Slide.prototype, "addClass", void 0);
    Slide = __decorate([
        core_1.Component({
            selector: 'slide',
            styleUrls: ['./slide.css'],
            templateUrl: './slide.html',
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], Slide);
    return Slide;
}());
exports.Slide = Slide;
