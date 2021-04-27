import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: boolean = false;

  errorMsg!: string;

  errorPwd!: string;

  registerForm!: FormGroup;

  newUser!: User;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group([
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required, Validators.minLength(6)],
      password_confirmation: [null, Validators.required, Validators.minLength(6)]
    ]);
  }


  register() {
    if (!this.registerForm.valid){
      return;
    }

    this.newUser = this.registerForm.value;

    if (this.newUser.password_confirmation != this.newUser.password) {
      this.errorPwd = 'Password must be identical';
    }

    
  }
}
