import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book, User } from './book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public getBook(): Observable<Book[]>{

    return this.http.get<Book[]>(`${this.apiServerUrl}/Book/all`);
  }

  public getBookByName(bookName:String): Observable<Book[]>{

    return this.http.get<Book[]>(`${this.apiServerUrl}/Book/find/${bookName}`);
  }

  public addBook(book:Book): Observable<Book>{
    console.log("error")
    return this.http.post<Book>(`${this.apiServerUrl}/Book/add`,book);
  }

  public addUser(user:User): Observable<User>{
    console.log("error")
    return this.http.post<User>(`${this.apiServerUrl}/Book/addUser`,user);
  }
}
