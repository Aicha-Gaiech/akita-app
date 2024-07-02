import { Query } from "@datorama/akita";
import { TodoState } from "./todo.state";
import { TodoStore } from "./todo.store";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Todo } from "./todo.model";

@Injectable({ providedIn: 'root' })
export class TodoQuery extends Query<TodoState> {
    constructor(override store: TodoStore) {
        super(store);
    }
//methode qui retourne toute les todos
    getTodos() {
        return this.select(state => state.todos);
    }
//methode qui retourne un todo spécifique suivant l'id
    getTodoOne(id: number): Observable<Todo | undefined> {
        return this.select(state => state.todos).pipe(
            map(todos => todos.find(todo => todo.id === id)))
    }
}