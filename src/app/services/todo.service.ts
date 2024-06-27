import { Injectable } from '@angular/core';
import { TodoStore } from '../state/todo.store';
import { Todo } from '../state/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private todoStore: TodoStore) { }

  updateTodo(todo: Todo) {
    this.todoStore.update(state => ({
      todos: [...state.todos, todo]
    }));
  }

}
