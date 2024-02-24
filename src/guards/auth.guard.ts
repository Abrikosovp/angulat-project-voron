import {CanActivateFn, CanDeactivateFn, Router} from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from "../app/services/auth.service";

export const authActivateGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['login'])
    return false;
  }

  return true;
};

export const authDeactivateGuard: CanDeactivateFn<any> = () => {

  if (confirm("Вы уверенны ?")) {
    localStorage.removeItem('token')
    return true;
  }

  return false;
};
