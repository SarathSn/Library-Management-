import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Book } from './book';
import { BookService } from './book.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public books: Book[] = [];
  title: any;
 

  constructor(private bookService: BookService ) { }

  ngOnInit()
  {
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
  
   // document.querySelector('form')!.reset();
  

  public onAddBook(addForm: NgForm): void {
   var frm= document.getElementById('add-employee-form')!.click();
  
    this.bookService.addBook(addForm.value).subscribe(
      (response: Book) => {
        this.getBooks();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
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

  public onOpenModal(book: Book, mode: string): void {
    const container= document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addBookModal');
    }
    container!.appendChild(button);
    
    button.click();
  }
}
