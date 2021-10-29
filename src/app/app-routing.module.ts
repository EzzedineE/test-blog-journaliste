import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './addArticle/add-article.component';
import { GuardGuard } from './gardes/guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'modifier/:id',
    component: AddArticleComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'addArticle',
    component: AddArticleComponent,
    canActivate: [GuardGuard],
  },
  { path: '', component: HomeComponent, canActivate: [GuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
