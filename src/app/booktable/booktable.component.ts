import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book, BookDetails } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})
export class BooktableComponent implements OnInit {
  public books: Book[] = [];
  public details:BookDetails[]=[];
  
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

  public bookDetail(bookid:number):void{
   // console.log(JSON.stringify(BookDetails[]));
    this.bookService.bookDetails(bookid).subscribe(
          (response : BookDetails[]) =>{
        this.details=response;
        console.log("hhhhhhhhhhh")
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
      console.log("howwwwwww");
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
    if (mode === 'View') {
      button.setAttribute('data-target', '#addissueModal');
    }
    container!.appendChild(button);
    
    button.click();
  }
}
