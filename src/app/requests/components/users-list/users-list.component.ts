import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from '../../../services/crud.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  public users$?: Observable<ListUsers>

  private _url: string = "https://reqres.in"
  
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _crudService: CrudService,
    private _dataService: DataService){}
  
  getUsers(){
    this.users$ = this._crudService.get<ListUsers>(`${this._url}/api/users?page=2`)
  }  

  redirectTo(data: User){
    this._dataService.saveUser(data)
    this._router.navigate([`${data.id.toString()}`], { relativeTo: this._route });
  }

}

export class ListUsers {
  page?: number
  per_page?: number
  total?: number
  total_pages?: number
  data?: User[]
}

export class User {
  id!: number
  email?: string
  first_name?: string
  last_name?: string
  avatar?: string
}