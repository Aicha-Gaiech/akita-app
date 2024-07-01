import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/state/todo.model';
import { TodoQuery } from 'src/app/state/todo.query';

@Component({
  selector: 'app-one-todo',
  templateUrl: './one-todo.component.html',
  styleUrls: ['./one-todo.component.css']
})
export class OneTodoComponent implements OnInit {
  todo$!: Observable<Todo | undefined>;

  constructor(private todoQuery: TodoQuery, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.todo$ = this.todoQuery.getTodoOne(Number(id));
    }
  }
  goBack() {
    this.router.navigate(['/']);
  }
}