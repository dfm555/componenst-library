import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Categories } from '../../services/Categories'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'home',
  pipes: [],
  providers: [ Categories ],
  directives: [ ROUTER_DIRECTIVES ],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {

  dataCategories: Observable<any>

  constructor( private categories: Categories ) {}

  ngOnInit() {
    // let data = {
    //   name: 'Test'
    // }

    this.categories.getCategories( 'http://localhost:8081/categories/' )
      .subscribe( res => {
        this.dataCategories = res;
      } );
    //this.categories.createCategories( 'http://localhost:8081/categories/', data );
  }

}
