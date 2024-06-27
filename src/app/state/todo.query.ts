import { Query } from "@datorama/akita";
import { TodoState } from "./todo.state";
import { TodoStore } from "./todo.store";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TodoQuery extends Query<TodoState> {
    constructor(override store: TodoStore) {
        super(store);
    }

    getTodos() {
        return this.select(state => state.todos);
    }
}