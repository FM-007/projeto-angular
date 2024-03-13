import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cor-fundo',
  templateUrl: './cor-fundo.component.html',
  styleUrls: ['./cor-fundo.component.scss']
})
export class CorFundoComponent implements OnInit {

  @Input() color: string = "#f00";
  @Input() title!: string;
 
  constructor() { }

  ngOnInit(): void {
  }

}
