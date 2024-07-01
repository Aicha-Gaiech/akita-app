import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { OneTodoComponent } from './components/one-todo/one-todo.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    OneTodoComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
