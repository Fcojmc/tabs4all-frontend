import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../../interfaces/login.interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: boolean = false;

  errorMsg!: string;
  
  loginForm!: FormGroup;

  loginUser!: Login;

  validatorError: boolean = false;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { 
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }


  login() {
    if (!this.loginForm.valid){
      return;
    }

    this.loginUser = this.loginForm.value;

    this.authService.login(this.loginUser)
      .subscribe(
        res => {
          setTimeout(() => {
            window.location.reload();
          }, 200 );
          this.router.navigate(['/profile']);
        },
        error => {
          if (error.error.errors) {
            this.loginError = false;
            this.validatorError = true;
            this.errorMsg = error.error.errors[0].msg;
          } else {
            this.loginError = true;
            this.errorMsg = error.error.message;
          }             
    });
  }
}
