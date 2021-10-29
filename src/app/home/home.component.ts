import { Component, OnInit } from '@angular/core';
import { Articles } from '../models/articles';
import { ArticlesService } from '../service/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles: Articles[];
  rechercher: string = '';

  delete(i: number) {
    if (confirm('voulez vous supprimer')) {
      this.articles.splice(i, 1);
      localStorage.setItem('articleStorge', JSON.stringify(this.articles));
    }
  }

  constructor(private service: ArticlesService) {}

  ngOnInit(): void {
    this.articles = this.service.getArticle();
  }
}
