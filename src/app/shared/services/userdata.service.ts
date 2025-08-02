import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private router: Router) {}
  fio: string = 'Неавторизован';
  right: number = 3; // 0 - неавторизован 1 - авторизован 2 - moder 3 - admin
  logout() {
    this.fio = 'Неавторизован';
    // this.right = 0;
    this.router.navigate(["login"]);
  }
}
