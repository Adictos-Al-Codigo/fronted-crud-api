import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  login(form:any){
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/login',form);
  }
}
