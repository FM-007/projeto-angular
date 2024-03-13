import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  itensMenu: { titulo: string, rota: string }[] = [
    {
      titulo: 'Data Binding',
      rota: 'data-binding'
    },
    {
      titulo: 'Diretivas',
      rota: 'diretivas'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
