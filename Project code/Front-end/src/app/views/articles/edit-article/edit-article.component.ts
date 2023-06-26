import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  ngOnInit(): void {
    const currentUrl = window.location.href;
    const idRegex = /\/(\d+)$/; // Matches a sequence of digits at the end of the URL path
    const match = currentUrl.match(idRegex);
    const id = match ? parseInt(match[1]) : null;

    if (id !== null) {
      this.getArticle(id);
    } else {
      // Handle the case when id is null
      // For example, display an error message or perform alternative actions
    }
  }
  constructor(private ServiceA: ArticleService) {}
articleToUpdate :Article={
  ref: 0,
  pAcha: 0,
  pVente: 0,
  qte: 0,
  src: '',
  name: '',
  description: '',
  articleImages: undefined
}
  getArticle(id: number) {
    this.ServiceA.getArticle(id).subscribe((res) => {
      this.articleToUpdate=res
    });
  }
  updateArticle(id:number){
    this.ServiceA.updateArticle(id,this.articleToUpdate).subscribe()
    alert("article updated")
    window.location.href="/#/articles"
  }
}
