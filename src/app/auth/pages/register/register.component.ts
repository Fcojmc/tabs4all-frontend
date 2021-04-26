import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }


  register() {
    /* this.authService.register(this.newUser)
      .subscribe(res => console.log(res)); */

    this.router.navigate(['/auth/login']);
  }
}
