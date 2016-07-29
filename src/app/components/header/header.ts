import { Component } from "@angular/core"
import { Navigation } from "../../components/nav/nav"

@Component({
  selector: 'headerGroup',
  pipes: [],
  providers: [],
  directives: [ Navigation ],
  templateUrl: './header.html',
  styleUrls: [ './header.css' ]
})

export class HeaderGroup{
  constructor() {}
}