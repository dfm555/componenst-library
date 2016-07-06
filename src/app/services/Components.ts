import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Categories } from './Categories'
import 'rxjs/add/operator/map';

@Injectable()
export class Components{

  constructor( private categories: Categories ) {}

  createComponent( idCategory: string, data: Object ){

    this.categories.updateCategories( '', data )

  }
}
