import { Component, OnInit } from '@angular/core';
import { Login } from '../../interfaces/login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: Login = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  login() {
    this.authService.login(this.loginUser)
      .subscribe(res => console.log(res));
  }
}
