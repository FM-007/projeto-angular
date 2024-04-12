import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBidingComponent } from './pages/data-biding/data-biding.component';
import { DiretivasEstruturaisNgIfComponent } from './pages/diretivas/estruturais/diretivas-estruturais-ngif/diretivas-estruturais-ngif.component';
import { DiretivasEstruturaisNgForComponent } from './pages/diretivas/estruturais/diretivas-estruturais-ng-for/diretivas-estruturais-ng-for.component';
import { InterpolationComponent } from './pages/data-biding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './pages/data-biding/property-binding/property-binding.component';
import { EventBindingComponent } from './pages/data-biding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './pages/data-biding/two-way-binding/two-way-binding.component';
import { DiretivasEstruturaisNgSwitchComponent } from './pages/diretivas/estruturais/diretivas-estruturais-ng-switch/diretivas-estruturais-ng-switch.component';
import { DiretivasAtributosNgClassComponent } from './pages/diretivas/atributos/diretivas-atributos-ng-class/diretivas-atributos-ng-class.component';
import { BibliaSagradaComponent } from './pages/biblia/biblia-sagrada/biblia-sagrada.component';
import { HomeComponent } from './pages/todo-list/home/pages/home/home.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBidingComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'diretivas-estruturais-ngIf', component: DiretivasEstruturaisNgIfComponent },
  { path: 'diretivas-estruturais-ngFor', component: DiretivasEstruturaisNgForComponent },
  { path: 'diretivas-estruturais-ngSwitch', component: DiretivasEstruturaisNgSwitchComponent },
  { path: 'diretivas-atributos-ngClass', component: DiretivasAtributosNgClassComponent },
  { path: 'biblia', component: BibliaSagradaComponent },
  { path: 'todo-list', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
