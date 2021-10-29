import { Injectable } from '@angular/core';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  ajoutUser(user: User) {
    let users = JSON.parse(localStorage.getItem('usersStorge') || '[]');
    users.push(user);
    localStorage.setItem('usersStorge', JSON.stringify(users));
  }

  verifEmail(email: string) {
    const users = JSON.parse(localStorage.getItem('usersStorge') || '[]');
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email) {
        return true;
      }
    }
    return false;
  }

  identifier(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem('usersStorge') || '[]');
    for (var i = 0; i < users.length; i++) {
      if (users[i].email == email && users[i].password == password) {
        return users[i];
      }
    }
    return null;
  }
  getuser() {
    return JSON.parse(localStorage.getItem('userConecter') || 'null');
  }
  setuser(user: User) {
    localStorage.setItem('userConecter', JSON.stringify(user));
  }
  logout() {
    localStorage.removeItem('userConecter');
  }
  constructor() {}
}
