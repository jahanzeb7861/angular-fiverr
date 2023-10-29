import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meetingformtwo',
  templateUrl: './meetingformtwo.component.html',
  styleUrls: ['./meetingformtwo.component.css']
})
export class MeetingFormTwoComponent implements OnInit {

  accessEventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.accessEventForm = this.formBuilder.group({
      lastName: ['', [Validators.required, Validators.pattern(/^[^\s-'`][a-zA-Z\s-'`]+$/)]],
      firstName: ['', [Validators.required, Validators.pattern(/^[^\s-'`][a-zA-Z\s-'`]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      meetingIdentifier: ['', [Validators.required, Validators.pattern(/^[A-Z0-9]{8}$/)]]
    });
  }


  ngOnInit(): void {

  }

  onSubmit() {
    if (this.accessEventForm.valid) {
      // Process form submission here
      console.log('Form submitted:', this.accessEventForm.value);
      // You can send the form data to your server or perform further actions
    } else {
      // Mark invalid fields for user feedback
      this.accessEventForm.markAllAsTouched();
    }
  }
}
