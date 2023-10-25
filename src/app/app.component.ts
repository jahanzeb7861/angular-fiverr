import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { MeetingComponent } from './meeting/meeting.component';
import { AbComponent } from './ab/ab.component';
import {FormGroup , FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp';


  comp:any;
  detectComp(comp:any){
    console.log(comp)
    if(comp === "home"){
      this.comp = HomeComponent;
    }
    if(comp === "messages"){
      this.comp = MessagesComponent;
    }
    if(comp === "documentation"){
      this.comp = DocumentationComponent;
    }
    if(comp === "meeting"){
      this.comp = MeetingComponent;
    }
    if(comp === "ab"){
      this.comp = AbComponent;
    }
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


