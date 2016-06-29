import { Injectable } from 'angular2/core'
import { Http } from 'angular2/http'
@Injectable()
export class Categories {
    constructor( private http: Http){}

    getCategories( url: string ){
        return this.http.get( url, function( response ) {
            console.log(response);
        } );
    }

    createCategories( url: string, data: Object ){
        return this.http.post( url, data, function( respose ) {
            console.log(respose);
        } );
    }
}

