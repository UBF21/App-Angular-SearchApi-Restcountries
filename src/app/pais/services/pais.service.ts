import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private API_URL: string = "https://restcountries.com/v3.1/";

  get httpParams():HttpParams{
    return new HttpParams().set('fields','flags,name,capital,population,altSpellings');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string) :Observable<Pais[]>{

    const url = `${this.API_URL}name/${termino}`;
    return this.http.get<Pais[]>(url,{params:this.httpParams});
  }

  buscarCapital(capital:string):Observable<Pais[]>{
    
    const url = `${this.API_URL}capital/${capital}`;
    return this.http.get<Pais[]>(url,{params:this.httpParams});
  }

  getPaisByCode(codigo:string): Observable<Pais[]>{

    const url = `${this.API_URL}alpha/${codigo}`;
    return this.http.get<Pais[]>(url);
  }

  buscarRegion(region:string):Observable<Pais[]>{
    let url:string = `${this.API_URL}region/${region}`;
    return this.http.get<Pais[]>(url, {params:this.httpParams});
  }
}
