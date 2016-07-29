import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Carousel } from '../../components/carousel/carousel'
import { Slide } from '../../components/slide/slide'
import { Search } from '../../components/search/search'


@Component({
  selector: 'home',
  pipes: [ ],
  providers: [ ],
  directives: [ ROUTER_DIRECTIVES, Carousel, Slide, CORE_DIRECTIVES, FORM_DIRECTIVES, Search ],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {
  //The time to show the next photo
  private NextPhotoInterval:number = 5000;
  //Looping or not
  private noLoopSlides:boolean = false;
  //transition
  private noTransition:boolean = true;
  //Photos
  private slides:Array<any> = [];

  constructor( ) {
    this.addNewsSlide();
  }

  private addNewsSlide(){
    this.slides.push(
      {image:'https://www.incibo.com/media/revslider/1-slide.jpg',text:'Slide 1', alt: 'Slide 1'},
      {image:'http://blog.startuptalky.com/content/uploads/2015/10/Screen-Shot-2015-09-26-at-5.37.32-pm-1.png',text:'Slide 2', alt: 'Slide 2'},
      {image:'http://www.macerata.confartigianato.it/wp-content/uploads/2016/04/Slider_home_07.jpg',text:'Slide 3', alt: 'Slide 3'}
    );
  }

  private removeLastSlide() {
    this.slides.pop();
  }
}
