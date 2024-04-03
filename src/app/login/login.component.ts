import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, this.forbiddenNameValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  forbiddenNameValidator(control: AbstractControl) {
    if (control.value === 'carlos') {
      return { forbiddenName: true };
    }
    return null;
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Login successful');
    } else {
      console.log('Form is invalid');
    }
  }
}
