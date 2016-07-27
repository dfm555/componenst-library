import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'home',
  pipes: [ ],
  providers: [ ],
  directives: [ ROUTER_DIRECTIVES ],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {

  constructor( ) {}

  ngOnInit() {

  }
}
