import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../interfaces/login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() isLogged = new EventEmitter();

  error: boolean = false;

  errorMsg: string = '';

  loginForm!: FormGroup;

  loginUser!: Login;

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
          this.isLogged.emit(true);
          this.router.navigate(['/profile']);
        },
        error => {
          console.log(error)
          this.error = true;
          this.errorMsg = error.error.message;
    });
  }
}
