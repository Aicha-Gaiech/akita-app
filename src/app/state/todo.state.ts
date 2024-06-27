import { Todo } from "./todo.model";

export interface TodoState {
    todos: Todo[];
}

export function createInitialState(): TodoState {
    return {
        todos: []
    };
}
