import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Navigation } from './components/nav/nav';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES, Navigation, Footer ],
  templateUrl: './app.html',
})
export class App {
  constructor() {}

}
