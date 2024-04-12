import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Data Binding',
        icon: 'pi pi-pw pi-code',
        items: [
          { label: 'Interpolation', routerLink: 'interpolation', icon: 'pi pi-fw pi-plus' },
          { label: 'Property Binding', routerLink: 'property-binding', icon: 'pi pi-fw pi-plus' },
          { label: 'Event Binding', routerLink: 'event-binding', icon: 'pi pi-fw pi-plus' },
          { label: 'Two-Way Binding', routerLink: 'two-way-binding', icon: 'pi pi-fw pi-plus' },
        ]
      },
      {
        label: 'Diretivas',
        icon: 'pi pi-fw pi-arrow-up-right',
        items: [
          {
            label: "Diretivas Estruturais",
            icon: 'pi pi-fw pi-plus',
            items: [
              { label: 'Diretivas Estruturais - ngIf', routerLink: 'diretivas-estruturais-ngIf' },
              { label: 'Diretivas Estruturais - ngFor', routerLink: 'diretivas-estruturais-ngFor' },
              { label: 'Diretivas Estruturais - ngSwitch', routerLink: 'diretivas-estruturais-ngSwitch' },
            ]
          },
          {
            label: "Diretivas de Atributos",
            icon: 'pi pi-fw pi-plus',
            items: [
              { label: 'Diretivas de Atributos - ngClass', routerLink: 'diretivas-atributos-ngClass' },
              { label: 'Diretivas de Atributos - ngFor', routerLink: 'diretivas-estruturais-ngFor' },
              { label: 'Diretivas de Atributos - ngSwitch', routerLink: 'diretivas-estruturais-ngSwitch' },
            ]
          },
        ]
      },
      {
        label: 'Projetos Angular',
        icon: 'pi pi-fw pi-folder',
        items: [
          {
            label: 'Projeto Biblia',
            icon: 'pi pi-fw pi-book',
            items: [
              { label: 'Biblia Sagrada', routerLink: 'biblia' }
            ]
          },
          {
            label: "Projetos Curso Angular",
            icon: 'pi pi-fw pi-folder',
            items: [
              { label: 'Projeto To-Do List', routerLink: 'todo-list' }
            ]
          },
        ]
      }
    ]
  }
}
