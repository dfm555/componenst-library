import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Categories} from '../../services/Categories'

@Component({
  selector: 'home',
  pipes: [],
  providers: [ Categories ],
  directives: [ ROUTER_DIRECTIVES ],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {
  constructor( private categories: Categories ) {}

  ngOnInit() {
    let data = {
      name: 'Base'
    }
    console.log( this.categories.getCategories( 'http://localhost:8081/categories/' ) );
    //this.categories.createCategories( 'http://localhost:8081/categories/', data );
  }

}
