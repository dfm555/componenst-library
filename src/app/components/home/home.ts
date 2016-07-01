import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Categories} from '../../services/Categories'
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'home',
  pipes: [],
  providers: [ Categories ],
  directives: [ ROUTER_DIRECTIVES ],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {

  dataCategories: Observable<any>;
  constructor( private categories: Categories ) {}

  ngOnInit() {
    // let data = {
    //   name: 'Base'
    // }

    this.categories.getCategories( 'http://localhost:8081/categories/' )
      .subscribe( res => {
        this.dataCategories = res;
      } );

    //this.categories.createCategories( 'http://localhost:8081/categories/', data );
  }

}
