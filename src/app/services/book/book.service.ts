import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor(private http: HttpClient) {
   
  }

  getBooks(): Observable<any>{
    return this.http.get(environment.apiUrl + "books")
  }

  deleteBook(id: number): Observable<any>{
    return this.http.delete(environment.apiUrl + `books/${id}`)
  }

  addBook(book :Book): Observable<any>{
    return this.http.post(environment.apiUrl + "books" ,book)
  }

}
