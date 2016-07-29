import { Component, Input, OnInit, OnDestroy, HostBinding, ViewEncapsulation } from '@angular/core';
import { Carousel, Direction } from '../../components/carousel/carousel'

@Component( {
  selector:    'slide',
  styleUrls:   [ './slide.css' ],
  templateUrl: './slide.html',
  encapsulation: ViewEncapsulation.None
} )

export class Slide implements OnInit, OnDestroy {
  @Input() public index:number;
  @Input() public direction:Direction;

  @HostBinding( 'class.active' )
  @Input() public active:boolean;

  @HostBinding( 'class.item' )
  @HostBinding( 'class.carousel-item' )
  private addClass:boolean = true;

  constructor( private carousel:Carousel ) {
  }

  public ngOnInit() {
    this.carousel.addSlide( this );
  }

  public ngOnDestroy() {
    this.carousel.removeSlide( this );
  }
}