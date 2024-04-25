import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../../services/crud.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss'
})
export class UserCreateComponent {
  public userGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required),
  })
  public newUser?: Observable<CreatedUser>;
  
  private currentUser?: NewUser
  constructor(private crudService: CrudService){}

  createUser() {
    this.currentUser = {
      name: this.userGroup.value.name!,
      job: this.userGroup.value.job ? this.userGroup.value.job : 'Default Job'
    };
    this.newUser = this.crudService.post<NewUser, CreatedUser>('https://reqres.in/api/users', this.currentUser)
  }
}

class NewUser{
  name!: string
  job?: string
}

export class CreatedUser {
  name?: string
  job?: string
  id!: string
  createdAt!: string
}
