import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../../application/dto/observer.dto';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  private _apiUrl:string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient) { }

  get httpParams() {
    return new HttpParams()
    .set( 'fields', 'name;capital;population;flag;alpha2Code' );
  }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this._apiUrl }/name/${ termino }`

    return this.http.get<Country[]>( url, {params: this.httpParams } );
  }


}
