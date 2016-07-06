import {Component} from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'navigation',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: './nav.html',
  styleUrls: [ './nav.css' ]
})

export class Navigation{
  constructor() {}
}

