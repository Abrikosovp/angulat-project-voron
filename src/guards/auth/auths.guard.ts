import { CanActivateFn, CanDeactivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../app/services/auth/auth.service';

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

  if (confirm('Вы уверены ?')) {
    localStorage.removeItem('')
    return true;
  }

  return false;
};
