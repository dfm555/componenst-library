import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class Categories {
  response: any;
  constructor( private http: Http){}

  getCategories( url: string ){
    //noinspection TypeScriptUnresolvedFunction
    this.http.get( url )
      .map( data => data.json() )
      .subscribe( data => this.response = data );
    //   .subscribe( function ( response ) {
    //   //console.log( response.json() );
    // })
      //.map( res => res.json() )
      // .subscribe( function( res ) {
      //   //console.log( res );
      //   this.response = res;
      // }  );

    return this.getData;
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

  private getData(): any{
    return this.response;
  }


  
  
}

