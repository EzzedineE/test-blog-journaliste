import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      Validators.required,
    ]),
    password: new FormControl('', [Validators.required]),
  });

  register() {
    if (this.userForm.valid) {
      if (this.services.verifEmail(this.userForm.value.email)) {
        alert('E-mail Existant');
      } else {
        this.services.ajoutUser(this.userForm.value);
        this.router.navigate(['login']);
      }
    }
  }

  constructor(private services: UserService, private router: Router) {}

  ngOnInit(): void {}
}
