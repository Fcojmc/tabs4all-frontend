import { Component, OnInit } from '@angular/core';
import { Tab } from '../../../interfaces/tab.interface';
import { TabsService } from '../../services/tabs.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/auth/services/user.service';


@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit {

  favorite: boolean = false;

  tab!: Tab;
  
  isAuthor: boolean = false;

  constructor(private tabsService: TabsService,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
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
      },
        err => console.log(err)
      );
  }


  setFavorite() {
    let message: string;

    if(this.favorite){
      message = `You like ${this.tab.name} as favorite!`;
    }

    if(!this.favorite) {
      message = `You don't like ${this.tab.name} anymore`;
    }

    setTimeout(() => { 
      this.favorite = !this.favorite
      this.showSnackBar(message);
    }, 300);
  } 

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2500
    });
  }
}
