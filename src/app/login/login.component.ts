import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    user:new FormControl(''),
    password:new FormControl(''),
  })


  loginUser(){
    console.log(this.loginForm.value)
  }

}