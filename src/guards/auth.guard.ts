import {CanActivateFn, CanDeactivateFn, Router} from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from "../app/services/auth.service";

export const authActivateGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLogIn()) {
    router.navigate(['login'])
    return false;
  }

  return true;
};

export const authDeactivateGuard: CanDeactivateFn<any> = (route, state) => {

  if (confirm("Вы уверенны ?")) {
    localStorage.removeItem('token')
    return true;
  }

  return false;
};
