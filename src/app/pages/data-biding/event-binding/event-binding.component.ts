import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['../data-biding.component.scss', '../../../app.component.scss']
})
export class EventBindingComponent implements OnInit {

  nome: string = "Felipe Moreira";

  position: { x: number, y: number } = { x: 0, y: 0 };

  constructor() { }

  ngOnInit(): void {
  }

  public mouseMoveTest(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  public alertInfo(valor: MouseEvent) {
    alert(`Deu Bom ${this.nome} !!!`);
    console.log(valor);
  }
}
