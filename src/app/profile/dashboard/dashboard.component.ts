import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userInfo!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this.userService.getUserInfo()
      .subscribe( res => {
        this.userInfo = res;
      });
  }
}
