import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpServiceService {
  
  apiUrl: string = "https://newsapi.org/v2/top-headlines?";

  constructor(private _http: HttpClient, private _err: ErrorService) { }

  get(api: string): Observable<any> {
    return this._http.get(this.apiUrl + api);
  }
  getNewsByCategory(category: string, apiKey: string): Observable<any> {
    const api = `country=tr&category=${category}&apiKey=${apiKey}`;
    return this._http.get(api);
  }
}