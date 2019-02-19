import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) {}

  editingBook = {
    favorite: false,
    name: ''
  };

  getBooks() {
    return this.http.get('http://localhost:3000/results');
  }

  addBook(book) {
    return this.http.post('http://localhost:3000/results', book);
  }

  editBook(book) {
    return this.http.put(`http://localhost:3000/results/${book.id}`, book);
  }
}
