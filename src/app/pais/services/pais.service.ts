import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _API_URL:string = 'https://restcountries.com/v3.1'

  get params(){
    return new HttpParams().set('fields','name,capital,flags,population,cca2,cca3,ccn3,translations')
  }

  constructor(private http:HttpClient) { }

  buscarPais(termino:string): Observable<Country[]>{
    const URL = `${this._API_URL}/name/${termino}?fields=`
    return this.http.get<Country[]>(URL, {params:this.params});
  }

  buscarPorCapital(termino:string): Observable<Country[]>{
    const URL = `${this._API_URL}/capital/${termino}`
    return this.http.get<Country[]>(URL,{params: this.params});
  }

  buscarPorRegion(termino:string): Observable<Country[]>{
    const URL = `${this._API_URL}/region/${termino}`
    return this.http.get<Country[]>(URL,{params: this.params});
  }

  getPaisPorCodigo = (id: string): Observable<Country[]> => {
    const URL = `${this._API_URL}/alpha/${id}`
    return this.http.get<Country[]>(URL);
  }
}
