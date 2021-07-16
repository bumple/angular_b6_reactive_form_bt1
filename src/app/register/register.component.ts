import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {FormGroup, FormControl, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide: boolean | undefined;
  genders = ["Male","Female"];
  formRegisterUser!: FormGroup;


  registerForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    country: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl(),
  })


  constructor(private fb: FormBuilder) {
    this.formRegisterUser = this.fb.group({
      email: [],
      password: [],
      confirmPassword: [],
      country: [],
      age: [],
      gender: [],
      phone: [],
    })
  }

  ngOnInit(): void {
  }

  submit(){
    let data = this.registerForm.value;
    console.log(data);
  }

}
