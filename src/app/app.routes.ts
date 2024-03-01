import { Routes } from '@angular/router';
import { LoginComponent } from '@app/components/login';
import { NotFoundComponent } from '@app/components/not-found';
import { authActivateGuard, authDeactivateGuard } from '@guards/auth'


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    canActivate: [authActivateGuard],
    canDeactivate: [authDeactivateGuard],
    loadChildren: () => import('./components/admin/admin-routing').then(v => v.routes)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
