import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template: `
  //   <app-menu></app-menu>
  //   <router-outlet></router-outlet>
  // `,
})
export class AppComponent implements OnInit {

  constructor() { }

  // Sempre execulta ao carregar a pagina.
  ngOnInit(): void { }
}
