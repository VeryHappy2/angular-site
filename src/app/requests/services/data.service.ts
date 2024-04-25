import { Injectable } from '@angular/core';
import { User } from '../components/users-list/users-list.component';

@Injectable()
export class DataService {
  private users: User[] = [];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User | undefined {
   return this.users.find(user => user.id === id);
  }

  saveUser(user: User): void {
    this.users.push(user);
  }
}
