import { Injectable } from '@angular/core';
import { TodoStore } from '../state/todo.store';
import { Todo } from '../state/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private todoStore: TodoStore) { }
  //ajout d'un todo
  addTodo(todo: Todo) {
    this.todoStore.update(state => ({
      todos: [...state.todos, todo]
    }));
  }
  //cette methode sera utilisé pour faire update d'un todo spésfique 
  updateTodo(todo: Todo) {
    this.todoStore.update(state => ({
      todos: state.todos.map(t => t.id === todo.id ? todo : t)
    }));
  }
  //pour faire l'update de tood si le todo est checked 
  toggleCompleted(todo: Todo) {
    this.updateTodo({
      ...todo,
      completed: !todo.completed
    });
  }

}
