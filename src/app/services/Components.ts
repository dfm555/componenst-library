import { Injectable } from '@angular/core'
import { Categories } from './Categories'

@Injectable()
export class Components{

  constructor( private categories: Categories ) {}

  createComponent( idCategory: string, nameCategory: string, data: Object ){

    let doc = {
      name: nameCategory,
      component: data
    };


    return this.categories.updateCategories( 'http://localhost:8081/categories/'+idCategory, doc )

  }
}
