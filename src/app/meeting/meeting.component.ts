import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.eventForm = this.formBuilder.group({
      lastName: ['', [Validators.required, Validators.pattern(/^[^\s-'`][a-zA-Z\s-'`]+$/)]],
      firstName: ['', [Validators.required, Validators.pattern(/^[^\s-'`][a-zA-Z\s-'`]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      description: ['', [Validators.required, Validators.maxLength(250)]],
      // meetingIdentifier: ['', [Validators.required, Validators.pattern(/^[A-Z0-9]{8}$/)]]
    }, {
      validator: this.passwordMatchValidator // Custom validator for password match
    });
  }


  ngOnInit(): void {

  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  onSubmit() {
    if (this.eventForm.valid) {
      // Process form submission here
      console.log('Form submitted:', this.eventForm.value);
      // You can send the form data to your server or perform further actions
    } else {
      // Mark invalid fields for user feedback
      this.eventForm.markAllAsTouched();
    }
  }

}
