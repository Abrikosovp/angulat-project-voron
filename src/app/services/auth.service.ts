import { Injectable } from '@angular/core';
import { LoginType } from "../components/login/login.component";
import { Router } from "@angular/router";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  setToken(name: string): void {
    localStorage.setItem('token', name)
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  isLogIn(): boolean {
    return this.getToken() !== null;
  }

  logout() {
    this.router.navigate(['login']);
  }

  login(loginInfo: LoginType): Observable<string | boolean> {

    if (loginInfo.login === 'admin' && loginInfo.password === 'admin') {
      this.setToken("dsadsdasd")
      return of(true);
    }
    throw new Error("Ошибка логина")

  }
}
