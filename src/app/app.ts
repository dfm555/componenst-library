import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Navigation } from './components/nav/nav';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES, Navigation ],
  templateUrl: './app.html',
})
export class App {
  constructor() {}

}
