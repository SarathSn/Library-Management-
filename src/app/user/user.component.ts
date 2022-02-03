import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book, User } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  public onAddUser(addForm: NgForm): void{

    this.bookService.addUser(addForm.value).subscribe(
      (response: User) => {
       // this.getBooks();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
  }
}
