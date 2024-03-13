import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataBidingComponent } from 'src/app/pages/data-biding/data-biding.component';
import { DiretivasComponent } from 'src/app/pages/diretivas/diretivas.component';

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
          this.selectedComponent = DiretivasComponent;
          break;
      }
    });
    console.log(this.selectedComponent)
  }
}

