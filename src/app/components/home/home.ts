import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Categories } from '../../services/Categories'
import { Components } from '../../services/Components'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  pipes: [],
  providers: [ Categories, Components ],
  directives: [ ROUTER_DIRECTIVES ],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {

  dataCategories: Observable<any>;

  constructor( private categories: Categories, private myComponent: Components ) {}

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

  addComponent( event: any, idCategory: string, nameCategory: string ){
    event.preventDefault();
    let data = [{
      name: 'Colors',
      description: 'A simple description',
      markup: '<div class="Colors">' +
              '<span class="red">Color</span>' +
              '</div>',
      styles: '.red{background-color: red;height: 40px;width: 40px;}'
    }];

    this.myComponent.createComponent( idCategory, nameCategory, data )
      .subscribe( res => {

      } );
  }

  myStyles ( value: string){
    return value;
  }

}
