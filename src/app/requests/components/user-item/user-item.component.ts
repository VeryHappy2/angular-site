import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../users-list/users-list.component';
import { DataService } from '../../services/data.service';
import { window } from 'rxjs';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent implements OnInit{
  public user?: User;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p: Params) => {
      let id = +p['id'];
      this.user = this.dataService.getUser(id)
    });
  }

  goBack(): void {
    this.router.navigate([`requests/users-list`])
  }
}

