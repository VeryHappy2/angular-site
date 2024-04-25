import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MainComponent } from './components/main/main.component';
import { UserCreateComponent } from './components/user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'users-list',
    component: UsersListComponent,
  },
  {
    path: 'users-list/:id',
    component: UserItemComponent
  },
  {
    path: 'create-user',
    component: UserCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
