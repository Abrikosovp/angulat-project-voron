import { CanActivateFn, CanDeactivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@services/auth';

export const authActivateGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['login'])
    return false;
  }

  return true;
};

export const authDeactivateGuard: CanDeactivateFn<unknown> = () => {

  const authService = inject(AuthService);

  if (authService.isLoggedIn() && confirm('Вы уверены ?')) {
    localStorage.removeItem('token')
    return true;
  }

  return false;
};
