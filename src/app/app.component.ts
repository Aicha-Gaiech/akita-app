import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { TodoQuery } from './state/todo.query';
import { Observable } from 'rxjs';
import { Todo } from './state/todo.model';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos$!: Observable<Todo[]>;

  constructor(private todoQuery: TodoQuery, public auth: AuthService) { }

  ngOnInit(): void {
    this.todos$ = this.todoQuery.getTodos();
  }



}
