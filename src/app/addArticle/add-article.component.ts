import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Articles } from '../models/articles';
import { ArticlesService } from '../service/articles.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
})
export class AddArticleComponent implements OnInit {
  i: number;
  article: Articles;
  articleForm: FormGroup;
  add() {
    const articleForme = this.articleForm.value;
    if (this.articleForm.valid) {
      if (this.i) {
        this.services.modifier(this.i, articleForme);
        this.router.navigate(['']);
      } else {
        this.services.add(articleForme);
        this.router.navigate(['']);
      }
    } else {
      this.toastr.error('entre invalid', 'error');
    }
  }

  constructor(
    private services: ArticlesService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.i = this.route.snapshot.params['id'];
    this.article = new Articles();
    if (this.i) {
      this.article = this.services.getOneArticle(this.i);
    }
    this.articleForm = new FormGroup({
      titre: new FormControl(this.article.titre, [Validators.required]),
      description: new FormControl(this.article.description, [
        Validators.required,
      ]),
    });
  }
}
