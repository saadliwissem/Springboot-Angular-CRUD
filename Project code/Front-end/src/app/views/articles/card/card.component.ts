import { Component, OnInit,Input } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input()a!: Article ;
  ngOnInit(): void {
    
  }
  constructor(private ServiceA : ArticleService){

  }
  //delete 
  deleteArticle(id: number, name: string): void {
    let reponse = confirm('are you sure you want to delete the article ' + name);
    if (reponse) {
      this.ServiceA.deleteArticle(id).subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload();
        },
        error: (e) => console.error(e),
      });
    }
  }
  redirect(id:number){
    window.location.href=`/#/articles/edit/${id}`
  }
}
