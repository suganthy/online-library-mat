import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-middlecomponent',
  templateUrl: './middlecomponent.component.html',
  styleUrls: ['./middlecomponent.component.css']
})
export class MiddlecomponentComponent {

  userForm: any;
  
  constructor(private formBuilder: FormBuilder) {
      
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'profile': ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }

}
