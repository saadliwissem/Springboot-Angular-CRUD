import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

   //url:
 readonly ApiUri="http://localhost:8080"
 readonly ArticleEndPoint="/articles"
 
 private  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })}

 
  constructor(private httpC : HttpClient) {

   }
   getArticles() :Observable<Article[]>{
    const url =`${this.ApiUri+this.ArticleEndPoint}`;
    return this.httpC
    .get<Article[]>(url)
   }
   getArticle(id:number) :Observable<Article>{
    const url =`${this.ApiUri+"/article/"+id}`;
    return this.httpC
    .get<Article>(url)
   }
   addArticle(article:FormData):Observable<Article>{
    const url = `${this.ApiUri+this.ArticleEndPoint}`;
    
    return this.httpC.post<Article>(url, article, this.httpOptions);

  }
  //delete article
  deleteArticle(id: number): Observable<any> {
    return this.httpC.delete(`${this.ApiUri+"/article"}/${id}`);
  }
  //update 
  updateArticle(id:number,article:Article) :Observable<Article>{
    const url =`${this.ApiUri+"/article/"+id}`;
    return this.httpC
    .put<Article>(url,article,this.httpOptions)
   }
}
