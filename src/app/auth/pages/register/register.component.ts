import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { FormErrors } from '../../../interfaces/form-errors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: boolean = false;

  errors!: FormErrors;

  errorName!: string;

  errorEmail!: string;

  errorPwd!: string;

  registerForm!: FormGroup;

  newUser!: User;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      password_confirmation: [null, Validators.required]
    });
  }


  register() {
    if (!this.registerForm.valid){
      return;
    }

    this.newUser = this.registerForm.value;

    this.authService.register(this.newUser)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/auth/login']);
        },
        error => {
          if (error.error.data) {
            this.errors = error.error.data;
          }

          if (this.errors.name) {
            this.errorName = this.errors.name[0];
          }

          if (this.errors.email) {
            this.errorEmail = this.errors.email[0];
          }

          if (this.errors.password) {
            this.errorPwd = this.errors.password[0];
          }
        
          this.error = true;
        }
      );
  }
}
