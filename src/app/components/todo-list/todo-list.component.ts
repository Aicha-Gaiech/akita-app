import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/state/todo.model';
import { TodoQuery } from 'src/app/state/todo.query';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos$!: Observable<Todo[]>;

  constructor(private todoQuery: TodoQuery, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todoQuery.getTodos();
  }
  toggleCompleted(todo: Todo) {
    this.todoService.toggleCompleted(todo);
  }

}
