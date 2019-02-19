import { Component, Input } from '@angular/core';
import { BooksService } from '../books.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-book',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.less']
})

export class BookFormNewComponent {

  book = {
    favorite: false,
    name: ''
  };

  saveBook() {
    if (this.book.name.length > 5) {
      this.booksService.addBook(this.book).subscribe();
    } else {
      this.snackBar.open('The name is too short', 'Ok', {
        duration: 3000
      });
    }
  }
  constructor(private booksService: BooksService, private snackBar: MatSnackBar) {}
}
