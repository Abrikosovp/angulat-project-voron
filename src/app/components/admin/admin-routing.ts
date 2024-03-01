import { Routes } from '@angular/router';
import { AdminDashboardComponent } from '@admin/components/admin-dashboard';


export const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent, children: [
      { path: 'home', loadComponent: () => import('./components/home/home.component').then(page => page.HomeComponent) },
      { path: 'about', loadComponent: () => import('./components/about/about.component').then(page => page.AboutComponent) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];
