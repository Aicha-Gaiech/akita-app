import { Store, StoreConfig } from "@datorama/akita";
import { TodoState, createInitialState } from "./todo.state";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodoStore extends Store<TodoState> {
    constructor() {
        super(createInitialState());
    }
}