import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class Categories {
  response: Array<Object>;
  constructor( private http: Http){}

  getCategories( url: string ){
    return this.http.get( url )
      .map( ( res ) => res.json() );
  }

  createCategories( url: string, data: Object ){
    return this.http.post( url, data )
      .subscribe( function ( response ) {
        console.log( response.json() );
      });
  }

  deleteCategories( url: string, id: string  ){
    return this.http.delete( url+id )
      .subscribe( function ( response ) {
        console.log( response.json() );
      });
  }

  updateCategories( url: string, data: any  ){
    return this.http.put( url, data )
      .subscribe( function ( response ) {
        console.log( response.json() );
      });
  }
}

