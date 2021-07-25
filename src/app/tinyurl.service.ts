import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { CustomTinyUrlResponse } from './model/tinyurl';

@Injectable({
  providedIn: 'root'
})
export class TinyurlService {
  baseUrl: string = "http://localhost:8084/api/v1/"
  constructor(private httpClient: HttpClient) { }

  getAllGeneratedUrl(): Observable<CustomTinyUrlResponse[]>{
    return this.httpClient.get<CustomTinyUrlResponse[]>( this.baseUrl+ "/getAll")
    .pipe(tap(val=>{
        console.log(val);
    }));
  }

  createUrl(url: string):Observable<CustomTinyUrlResponse>{
    return this.httpClient.post<CustomTinyUrlResponse>(this.baseUrl+ "/create", url);
  }
}
