import { Component, OnInit } from '@angular/core';
import { BibliaSagradaService } from './biblia-sagrada.service';
import { Abbreviation, BooksDTO } from '../dto/booksDto';

@Component({
  selector: 'app-biblia-sagrada',
  templateUrl: './biblia-sagrada.component.html',
  styleUrls: ['./biblia-sagrada.component.scss', '../../../app.component.scss']
})
export class BibliaSagradaComponent implements OnInit {

  book: BooksDTO = new BooksDTO;

  abbrev: Abbreviation = {
    pt: this.book?.abbrev?.pt,
    en: this.book?.abbrev?.en
  };

  booksBiblia: BooksDTO[] = [
    {
      abbrev: this.abbrev,
      author: this.book.author,
      chapters: this.book.chapters,
      group: this.book.group,
      name: this.book.name,
      testament: this.book.testament
    }
  ];

  constructor(private bibliaService: BibliaSagradaService) { }

  ngOnInit(): void {
    this.bibliaService.getBooks().subscribe(data => {
      this.booksBiblia = data
      console.log(this.booksBiblia)

      if (!this.booksBiblia || this.booksBiblia.length === 0) {
        console.error('booksBiblia is empty!');
      }
      
    });
  }
}
