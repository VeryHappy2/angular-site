import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    UserItemComponent,
    UsersListComponent,
    MainComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersListComponent
  ],
  providers:[
    DataService
  ]
})
export class RequestsModule { }
