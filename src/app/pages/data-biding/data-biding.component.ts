import { Component, Input, OnInit } from '@angular/core';
// import { CorFundoComponent } from '../cor-fundo/cor-fundo.component';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  // template: `
  //   <app-cor-fundo></app-cor-fundo>
  // `,
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Felipe Moreira";
  public idade: number = 33;
  public isIdade: string = "falso";

  validaIdade(): string {
    if (this.idade > 30) {
      this.isIdade = "verdadeiro";
    }

    return this.isIdade;
  }

  position: { x: number, y: number } = { x: 0, y: 0 }

  public checkedDisabled: boolean = false;
  imgSrc: string = "https://blog.ebaconline.com.br/blog/wp-content/uploads/2023/11/image6-1.png";
  imgTitle: string = "Imagem cachorro"

  constructor() { }

  ngOnInit(): void {
  }

  public alertInfo(valor: MouseEvent) {
    alert(`Deu Bom ${this.nome} !!!`);
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
