import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/state/todo.model';
import { TodoQuery } from 'src/app/state/todo.query';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos$!: Observable<Todo[]>;

  constructor(private todoQuery: TodoQuery) { }

  ngOnInit(): void {
    this.todos$ = this.todoQuery.getTodos();
  }

}
