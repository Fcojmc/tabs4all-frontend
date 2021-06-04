import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { UserService } from 'src/app/auth/services/user.service';
import { Band } from '../../../interfaces/band.interface';
import { Tab } from '../../../interfaces/tab.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() info = new EventEmitter();

  userInfo!: User;

  favBands!: Band[];

  favTabs!: Tab[];

  myTabs!: Tab[];

  optionSelected: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.userService.getUserInfo()
      .subscribe( res => {
        this.userInfo = res.data;
        this.favBands = this.userInfo.favouriteBands;
        this.favTabs = this.userInfo.favouriteTabs;
        this.myTabs = this.userInfo.tabs;
      });
  }

  loadInfo(infoType: any[]) {
    this.info.emit(infoType);
  }
}
