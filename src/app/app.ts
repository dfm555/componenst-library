import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderGroup } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES, HeaderGroup, Footer ],
  templateUrl: './app.html',
})
export class App {
  constructor() {}

}
