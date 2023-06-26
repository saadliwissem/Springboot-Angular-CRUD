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
        this.filtredArticles=data;
       // console.log(data);
      },
      error:(e)=>console.log(e)
    });
  }
  
//search 
  searchAttribute: string = '';
  searchValue: string = '';
  filtredArticles:Article[] = this.filterArticles();
 
  filterArticles(): Article[] {
    
    let articles= this.Articles.filter((article) => {
      const attributeValue = article[this.searchAttribute];
      if (typeof attributeValue === 'string') {
        return attributeValue
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      }
      if (typeof attributeValue === 'number') {
        return attributeValue
          .toString()
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      }
      return false;
    });
    this.filtredArticles=articles
    return articles
  }

}
