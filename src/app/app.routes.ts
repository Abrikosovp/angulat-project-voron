import { Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import {authActivateGuard, authDeactivateGuard} from "../guards/auth.guard";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin',
    canActivate: [authActivateGuard],
    canDeactivate: [authDeactivateGuard],
    loadChildren: () => import('./components/admin/admin.module').then(v => v.AdminModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
