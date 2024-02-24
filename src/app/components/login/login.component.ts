import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgIf } from "@angular/common";

export type LoginType = {
  login: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  get login() {
    return this.form.get('login');
  }

  get password() {
    return this.form.get('password');
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && control.touched;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'login': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/g)
      ]),
    })

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin'])
    }
  }

  submit() {
    this.authService.login(this.form.value)
      .subscribe({
        next: () => this.router.navigate(['admin']),
        error: () => alert("Error login")
      })
  }

}
