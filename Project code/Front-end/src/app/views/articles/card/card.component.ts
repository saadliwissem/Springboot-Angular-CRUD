import { Component, OnInit,Input } from '@angular/core';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input()a!: Article ;
  ngOnInit(): void {
    
  }
}
