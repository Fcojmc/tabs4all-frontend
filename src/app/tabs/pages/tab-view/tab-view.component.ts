import { Component, OnInit } from '@angular/core';
import { Tab } from '../../../interfaces/tab.interface';
import { TabsService } from '../../services/tabs.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit {

  favorite: boolean = true;

  tab!: Tab;
  
  isAuthor: boolean = false;

  constructor(private tabsService: TabsService,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
          switchMap( ({ id }) => this.tabsService.getTabById(id) )
      )
      .subscribe( res => {
        this.tab = res.data;
      } 
    );

    this.authService.getUserInfo()
      .subscribe(res => {
        if (res.id === this.tab.user_id) {
          this.isAuthor = true;
        }
      },
        err => console.log(err)
      );
  }


  setFavorite() {
    setTimeout(() => { 
      this.favorite = !this.favorite
    }, 300);
  } 
}
