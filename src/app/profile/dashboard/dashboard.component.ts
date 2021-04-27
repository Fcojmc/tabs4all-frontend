import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userInfo!: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this.authService.getUserInfo()
      .subscribe( res => {
        this.userInfo = res;
      });
  }
}
