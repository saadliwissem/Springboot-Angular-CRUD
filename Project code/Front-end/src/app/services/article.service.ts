import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

   //url:
 readonly ApiUri="http://localhost:8080"
 readonly ClientsEndPoint="/articles"
 
  constructor(private httpC : HttpClient) {

   }
   getArticles() :Observable<Article[]>{
    const url =`${this.ApiUri+this.ClientsEndPoint}`;
    return this.httpC
    .get<Article[]>(url)
   }
}
