import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})
export class BooktableComponent implements OnInit {
  public books: Book[] = [];
  
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
   this.getBooks();
  }

  public getBooks():void{
    this.bookService.getBook().subscribe(
      (response : Book[]) => {
        this.books = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }

    );
  }
  public searchBook(key:string): void{
    const results: Book[]=[];
    
    for (const book of this.books) {
      if (book.bookName.toLowerCase().indexOf(key.toLowerCase()) !== -1)
      {
        results.push(book);
      }
    }
    this.books = results;
    if (results.length === 0 || !key) {
      this.getBooks();
    }
  }
}
