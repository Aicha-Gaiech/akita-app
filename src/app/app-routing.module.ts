import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneTodoComponent } from './components/one-todo/one-todo.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'todo/:id', component: OneTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
