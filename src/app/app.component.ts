import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { TodoQuery } from './state/todo.query';
import { Observable } from 'rxjs';
import { Todo } from './state/todo.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos$!: Observable<Todo[]>;

  constructor(private todoQuery: TodoQuery, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todoQuery.getTodos();
  }



}
