import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBidingComponent } from './pages/data-biding/data-biding.component';
import { CorFundoComponent } from './components/cor-fundo/cor-fundo.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { DiretivasEstruturaisNgIfComponent } from './pages/diretivas/estruturais/diretivas-estruturais-ngif/diretivas-estruturais-ngif.component';
import { DiretivasEstruturaisNgForComponent } from './pages/diretivas/estruturais/diretivas-estruturais-ng-for/diretivas-estruturais-ng-for.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InterpolationComponent } from './pages/data-biding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './pages/data-biding/property-binding/property-binding.component';
import { EventBindingComponent } from './pages/data-biding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './pages/data-biding/two-way-binding/two-way-binding.component';
import { ButtonModule } from 'primeng/button';
import { DiretivasEstruturaisNgSwitchComponent } from './pages/diretivas/estruturais/diretivas-estruturais-ng-switch/diretivas-estruturais-ng-switch.component';
import { DiretivasAtributosNgClassComponent } from './pages/diretivas/atributos/diretivas-atributos-ng-class/diretivas-atributos-ng-class.component';
import { BibliaSagradaComponent } from './pages/biblia/biblia-sagrada/biblia-sagrada.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HomeModule } from './pages/todo-list/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    CorFundoComponent,
    MenuComponent,
    ContentComponent,
    DiretivasEstruturaisNgIfComponent,
    DiretivasEstruturaisNgForComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    DiretivasEstruturaisNgSwitchComponent,
    DiretivasAtributosNgClassComponent,
    BibliaSagradaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PanelMenuModule,
    ButtonModule,
    HttpClientModule,
    CarouselModule,
    CardModule,
    FieldsetModule,
    ProgressSpinnerModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
