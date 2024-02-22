import { Component } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private authServices: AuthService
  ) {}

  logout() {
    this.authServices.logout();
  }

}
