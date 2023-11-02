import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formSubmitted = false;

  loginForm = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]+$/), // Allow letters and numbers, may contain capital letters
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8), // Minimum of 8 characters
    ]),

  });


  loginUser() {
    this.formSubmitted = true; // Set the flag to true when the form is submitted

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

}
