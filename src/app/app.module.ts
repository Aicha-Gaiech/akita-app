import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { OneTodoComponent } from './components/one-todo/one-todo.component';
import { MainComponent } from './components/main/main.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from 'src/environment/environment';


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
    AppRoutingModule,
  ],
  providers: [
    provideAuth0({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
