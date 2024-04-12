import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['../data-biding.component.scss', '../../../app.component.scss']
})
export class InterpolationComponent implements OnInit {

  public nome: string = "Felipe Moreira";
  public idade: number = 33;
  public isIdade: string = "falso";

  validaIdade(): string {
    if (this.idade > 30) {
      this.isIdade = "verdadeiro";
    }

    return this.isIdade;
  }

  htmlCode: string = `
    <h1 class="titulo">Interpolation</h1>
    <app-cor-fundo color="#f7a580" title="Interpolation">
        <p>{{ nome }} tem {{ idade }} anos.</p>
        <p>{{ nome }} tem mais de 30 anos ?</p>
        <p>{{ validaIdade() }}</p>
    </app-cor-fundo>
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
