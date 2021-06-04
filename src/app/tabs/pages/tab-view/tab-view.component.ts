import { Component, OnInit } from '@angular/core';
import { Tab } from '../../../interfaces/tab.interface';
import { TabsService } from '../../services/tabs.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/auth/services/user.service';
import { User } from 'src/app/interfaces/user.interface';


@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit {

  isFavourite: boolean = false;
  
  isAuthor: boolean = false;

  tab!: Tab;
  
  user!: User;

  constructor(private tabsService: TabsService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
          switchMap( ({ id }) => this.tabsService.getTabById(id) )
      )
      .subscribe( res => {
        this.tab = res.data;
        this.userService.getUserInfo()
          .subscribe(res => {
            this.user = res.data;
            let userTabs = this.user.tabs.map((tab: Tab) => tab.uuid);
            let favouriteTabs = this.user.favouriteTabs.map((tab: Tab) => tab.uuid);
            if(userTabs.includes(this.tab.uuid)) {
              this.isAuthor = true;
            } 
            if (favouriteTabs.includes(this.tab.uuid)) {
              this.isFavourite = true;
            } 
          });
      } 
    );
  }


  setFavorite() {
    let message: string;

    if(this.isFavourite) {
      this.userService.unsetFavouriteTab(this.tab.uuid, this.user.uuid)
        .subscribe( res => message = res.message);
    }

    if(!this.isFavourite) {
      this.userService.setFavouriteTab(this.tab.uuid, this.user.uuid)
      .subscribe( res => message = res.message); 
    }

    setTimeout(() => { 
      this.isFavourite = !this.isFavourite;
      this.showSnackBar(message);
    }, 300);
  } 

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2500
    });
  }
}
