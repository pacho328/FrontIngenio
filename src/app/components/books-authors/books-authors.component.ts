import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book/book.service';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-books-authors',
  templateUrl: './books-authors.component.html',
  styleUrls: ['./books-authors.component.css']
})
export class BooksAuthorsComponent implements OnInit {
  bookslist: any[] = [{
    title: "example",
    description: "example",
    pageCount: 100,
    excerpt: "hola",
    publishDate: "01/01/20"
  },
  {
    title: "example2",
    description: "example2",
    pageCount: 100,
    excerpt: "hola2",
    publishDate: "01/01/22"
  }
];

  form: FormGroup;

  constructor(private fb: FormBuilder,public dialogo: MatDialog,private toastr: ToastrService, private _book: BookService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['',[Validators.required,Validators.min(3),Validators.max(16)]],
      pageCount: ['',Validators.required],
      excerpt: ['',Validators.required],
      publishDate: ['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    this._book.getBooks().subscribe(books =>{
      this.bookslist = books;
    },err => console.log(err));
  }

  deletebook(id: number){
    this._book.deleteBook(id).subscribe( book =>{
      console.log(book)
      this.toastr.error("deleted book","deleted")
      this.getBooks()
    },err=>console.log(err))
  }

  addBook(){
    console.log(new Date())

    const book: Book = {
      id: this.generateIdrandom(),
      title: this.form.get('title')?.value,
      description: this.form.get('description')?.value,
      pageCount: this.form.get('pageCount')?.value,
      excerpt: this.form.get('excerpt')?.value,
      publishDate: this.form.get('publishDate')?.value,
    }
    this._book.addBook(book).subscribe(book=>{console.log(book);
    },err=>console.log(err))
    this.form.reset()
  }

  mostrarDialogo(index: number): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Deseas Eliminar?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.deletebook(index)
        }
      });
  }

  generateIdrandom(): number{
    return Math.floor(Math.random()*9000) + 1000
  }

  exportexcel(): void
  {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, "Excel.xlsx");

  }
}
