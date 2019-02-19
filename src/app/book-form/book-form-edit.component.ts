import { Component, Input } from '@angular/core';
import { BooksService } from '../books.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-book',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.less']
})

export class BookFormEditComponent {

  book = this.booksService.editingBook;

  saveBook() {
    if (this.book.name.length > 5) {
      this.booksService.editBook(this.book).subscribe();
    } else {
      this.snackBar.open('The name is too short', 'Ok', {
        duration: 3000
      });
    }
  }
  constructor(private booksService: BooksService, private snackBar: MatSnackBar) {}
}
