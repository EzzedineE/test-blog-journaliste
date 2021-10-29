import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  conectedUser = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });
  identifier() {
    const login = this.services.identifier(
      this.conectedUser.value.email,
      this.conectedUser.value.password
    );
    if (login != null) {
      this.services.setuser(login);
      this.router.navigate(['']);
    } else {
      this.toastr.error('verrifier votre email ou votre mot de passe', 'error');
    }
  }

  constructor(
    private services: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
}
