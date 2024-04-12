import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataBidingComponent } from 'src/app/pages/data-biding/data-biding.component';
import { DiretivasEstruturaisNgIfComponent } from 'src/app/pages/diretivas/estruturais/diretivas-estruturais-ngif/diretivas-estruturais-ngif.component';

@Component({
  selector: 'app-content',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('childComponent', { static: true }) childComponent!: any;

  selectedComponent: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const path = params['path'];

      switch (path) {
        case 'data-binding':
          this.selectedComponent = DataBidingComponent;
          break;
        case 'direitvas':
          this.selectedComponent = DiretivasEstruturaisNgIfComponent;
          break;
      }
    });
    console.log(this.selectedComponent)
  }
}

