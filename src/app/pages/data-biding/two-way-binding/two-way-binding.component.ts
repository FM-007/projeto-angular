import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['../data-biding.component.scss', '../../../app.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  public nome: string = "Felipe Moreira";

  constructor() { }

  ngOnInit(): void {
  }

}
