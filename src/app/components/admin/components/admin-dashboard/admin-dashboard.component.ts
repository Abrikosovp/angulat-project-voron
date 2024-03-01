import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@admin/components/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
