import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private _httpClient: HttpClient) { }

  get<TResponse>(url: string): Observable<TResponse>{
    return this._httpClient.get<TResponse>(url)
  }

  post<TRequest, TResponse>(url: string, data: TRequest): Observable<TResponse>{
    return this._httpClient.post<TResponse>(url, data)
  }

  delete<T>(url: string): Observable<HttpResponse<T>>{
    return this._httpClient.delete<T>(url, {observe: `response`})
  }
}
