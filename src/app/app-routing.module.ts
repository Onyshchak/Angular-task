import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {BookFormNewComponent} from './book-form/book-form-new.component';
import {BookFormEditComponent} from './book-form/book-form-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-book', component: BookFormNewComponent},
  {path: 'edit-book', component: BookFormEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
