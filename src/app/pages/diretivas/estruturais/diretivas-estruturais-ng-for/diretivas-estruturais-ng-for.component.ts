import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais-ng-for',
  templateUrl: './diretivas-estruturais-ng-for.component.html',
  styleUrls: ['../../diretivas-estruturais.component.scss', '../../../../app.component.scss']
})
export class DiretivasEstruturaisNgForComponent implements OnInit {

  list: Array<{ nome: string, idade: number }> = [
    { nome: "Felipe", idade: 33 },
    { nome: "Gabriel", idade: 9 },
    { nome: "Lívia", idade: 7 },
    { nome: "Fabio Lucca", idade: 6 },
  ]

  listDoc: Array<{ nome: string, idade: number }> = [
    { nome: "Felipe", idade: 33 },
    { nome: "Gabriel", idade: 9 },
    { nome: "Lívia", idade: 7 },
    { nome: "Fabio Lucca", idade: 6 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClickAddList() {
    this.list.push({ nome: "Gustavo", idade: 13});
  }

  onClickAddListDoc() {
    this.listDoc.push({ nome: "Gustavo", idade: 13});
  }

  onClickEventList(event: number) {
    console.log(event)
  }

}
