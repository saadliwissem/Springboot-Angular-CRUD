import { Component, OnInit } from '@angular/core';
import {Article} from "../../models/article.model"
import {ArticleService} from "../../services/article.service"
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit{
  title = 'Manager';
  Articles: Article[] = [];
  constructor(private ServiceA : ArticleService){

  }
  ngOnInit() {
    this.reviewClients()
  }
  reviewClients(){
    console.log("yeah nigga!")
    this.ServiceA.getArticles().subscribe({
      next: (data)=>{
        this.Articles=data;
       // console.log(data);
      },
      error:(e)=>console.log(e)
    });
  }

}
