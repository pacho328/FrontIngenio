import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksAuthorsComponent } from './components/books-authors/books-authors.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { AuthGuard } from './services/auth/auth.guard.service'


const routes: Routes = [
  {path:'login', component: HomePageComponent},
  {path:'books', component: BooksAuthorsComponent, canActivate: [AuthGuard]},
  //{path:'books', component: BooksAuthorsComponent},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
