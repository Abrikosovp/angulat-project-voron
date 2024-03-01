import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginType } from '@app/components/login';

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

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout() {
    this.router.navigate(['login']);
  }

  login(loginInfo: LoginType): Observable<string | boolean> {

    if (loginInfo.login === 'admin') {
      this.setToken('dsadsdasd')
      return of(true);
    }
    throw new Error('Ошибка логина')

  }
}
