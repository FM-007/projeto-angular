import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais-ngif.component.html',
  styleUrls: ['../../diretivas-estruturais.component.scss', '../../../../app.component.scss']
})
export class DiretivasEstruturaisNgIfComponent implements OnInit {

  condition: boolean = true;
  conditionClick: boolean = true;

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if (this.condition) {
        this.condition = false;

      } else {
        this.condition = true;
      }
    }, 2000)
  }

  onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;

    } else {
      this.conditionClick = true;
    }
  }
}
