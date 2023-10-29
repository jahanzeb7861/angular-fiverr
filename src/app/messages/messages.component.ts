import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messageForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      lastName: ['', [Validators.required, Validators.pattern(/^[^\s-'`][a-zA-Z\s-'`]+$/)]],
      firstName: ['', [Validators.required, Validators.pattern(/^[^\s-'`][a-zA-Z\s-'`]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.maxLength(250)]],
    });
  }


  ngOnInit(): void {
  }

  onSubmit() {
    if (this.messageForm.valid) {
      // Process form submission here
      console.log('Form submitted:', this.messageForm.value);
      // You can send the form data to your server or perform further actions

      // Set the flag to display the thank you message
      this.formSubmitted = true;
    } else {
      // Mark invalid fields for user feedback
      this.messageForm.markAllAsTouched();
    }
  }
}
