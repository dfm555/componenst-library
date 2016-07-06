import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class Categories {
  response: Array<Object>;
  constructor( private http: Http ){}

  getCategories( url: string ){
    return this.http.get( url )
      .map( ( res ) => res.json() );
  }

  createCategories( url: string, data: Object ){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.post( url, data )
      .map( res => res.json() );
  }

  deleteCategories( url: string, id: string  ){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.delete( url+id )
      .map( res => res.json() );
  }

  updateCategories( url: string, data: any  ){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.put( url, data )
      .map( res => res.json() );
  }
}
