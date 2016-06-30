import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class Categories {
  constructor( private http: Http){}

  getCategories( url: string ){
    return this.http.get( url)
      .subscribe( function ( response ) {
      console.log(response);
    });
  }

  createCategories( url: string, data: Object ){
    return this.http.post( url, data )
      .subscribe(function ( response ) {
        console.log(response);
      });
  }
}

