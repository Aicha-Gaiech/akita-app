import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  constructor(private todoService: TodoService) { }

  add(title: string) {
    const id = Math.random();
    this.todoService.addTodo({
      id,
      title,
      completed: false
    });
  }
}
