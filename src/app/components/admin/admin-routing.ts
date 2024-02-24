import { Routes } from '@angular/router';
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  { path: "", component: AdminDashboardComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];
