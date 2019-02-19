import { Component, Input } from '@angular/core';
import { BooksService} from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})

export class BookComponent {
  @Input() book;

  constructor(private booksService: BooksService) {}

  editBook(selectedBook) {
    this.booksService.editingBook = selectedBook;
  }

  toggleFavorite() {
    this.book.favorite = !this.book.favorite;
    this.booksService.editBook(this.book).subscribe();
  }
}
