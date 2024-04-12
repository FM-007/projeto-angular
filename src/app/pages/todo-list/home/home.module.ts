import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtomDeleteAllComponent } from './components/todo-buttom-delete-all/todo-buttom-delete-all.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { FormsModule } from '@angular/forms';

// Pages
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtomDeleteAllComponent,
    TodoListComponent,
    HomeComponent,
    TodoInputAddItensComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
