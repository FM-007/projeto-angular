import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBidingComponent } from './pages/data-biding/data-biding.component';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBidingComponent },
  { path: 'diretivas', component: DiretivasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
