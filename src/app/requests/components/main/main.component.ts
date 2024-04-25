import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  private _url: string = 'https://reqres.in/';
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _crudService: CrudService){}
  
  getUsers(){
    this._router.navigate(['/requests/users-list']);
  }  

  postUser(){
    this._router.navigate(['/requests/create-user']);
  }  

  deleteUser(){
    this._crudService.delete<any>(`${this._url}/api/users/2`);
  }
}
