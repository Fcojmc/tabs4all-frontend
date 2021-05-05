import { Component, OnInit } from '@angular/core';
import { Tab } from '../../../interfaces/tab.interface';
import { TabsService } from '../../services/tabs.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/auth/services/user.service';


@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit {

  isFavourite!: boolean;

  tab!: Tab;
  
  isAuthor: boolean = false;

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
      } 
    );

    this.userService.getUserInfo()
      .subscribe(res => {
        if (res.id === this.tab.user_id) {
          this.isAuthor = true;
        }
      }
    );

    this.userService.getFavouriteTabs()
      .subscribe(res => {
        let favouriteTabs = res.data.map((tab: Tab) => tab.id);
        if (favouriteTabs.includes(this.tab.id)) {
          this.isFavourite = true;
        } else {
          this.isFavourite = false;
        }
      });
  }


  setFavorite() {
    let message: string;

    if(this.isFavourite) {
      this.userService.unsetFavouriteTab(this.tab.id)
        .subscribe( res => message = res.message);
    }

    if(!this.isFavourite) {
      this.userService.setFavouriteTab(this.tab.id)
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
