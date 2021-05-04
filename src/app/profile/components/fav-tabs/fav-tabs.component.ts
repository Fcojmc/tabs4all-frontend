import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../auth/services/user.service';
import { Tab } from '../../../interfaces/tab.interface';

@Component({
  selector: 'app-fav-tabs',
  templateUrl: './fav-tabs.component.html',
  styleUrls: ['./fav-tabs.component.css']
})
export class FavTabsComponent implements OnInit {

  tabs!: Tab[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getFavouriteTabs()
      .subscribe(res => this.tabs = res.data);
      
  }

}
