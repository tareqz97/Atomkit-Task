import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(private http: HttpClient) { }
  getaArticles(){
    return this.http.get("http://newsapi.org/v2/everything?domains=wsj.com&apiKey=05bbd6f6aebe40479fb0425df0055714")
  }
}
