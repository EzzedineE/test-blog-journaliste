import { Injectable } from '@angular/core';
import { Articles } from '../models/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  add(article: Articles) {
    let articles = JSON.parse(localStorage.getItem('articleStorge') || '[]');
    articles.push(article);
    localStorage.setItem('articleStorge', JSON.stringify(articles));
  }
  getArticle() {
    return JSON.parse(localStorage.getItem('articleStorge') || 'null');
  }
  getOneArticle(i: number) {
    const articles = JSON.parse(localStorage.getItem('articleStorge') || '[]');
    return articles[i];
  }
  modifier(i: number, articles: Articles) {
    const article = JSON.parse(localStorage.getItem('articleStorge') || '[]');
    article.splice(i, 1, articles);
    localStorage.setItem('articleStorge', JSON.stringify(article));
  }
  constructor() {}
}
