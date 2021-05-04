import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../auth/services/user.service';
import { Tab } from '../../../interfaces/tab.interface';

@Component({
  selector: 'app-my-tabs',
  templateUrl: './my-tabs.component.html',
  styleUrls: ['./my-tabs.component.css']
})
export class MyTabsComponent implements OnInit {

  tabs!: Tab[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserTabs()
      .subscribe(res => this.tabs = res.data);
  }

}
