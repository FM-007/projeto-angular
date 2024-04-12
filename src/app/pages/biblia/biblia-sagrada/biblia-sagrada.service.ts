import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BibliaSagradaComponent } from './biblia-sagrada.component';
import { BooksDTO } from '../dto/booksDto';

@Injectable({
  providedIn: 'root'
})
export class BibliaSagradaService {

  private readonly baseURL: string = "https://www.abibliadigital.com.br/api";

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<BooksDTO[]>(`${this.baseURL}/books`);
  }
}
