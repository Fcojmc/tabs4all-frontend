import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tab } from 'src/app/interfaces/tab.interface';
import { TabsService } from '../../services/tabs.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  tab!: Tab;

  
  constructor(private activatedRoute: ActivatedRoute,
              private tabsService: TabsService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
          switchMap( ({ id }) => this.tabsService.getTabById(id) )
      )
      .subscribe( res => {
        this.tab = res.data;
      } 
    );
  }


  updateTab() {
    this.tabsService.updateTab(this.tab)
      .subscribe(res => console.log(res));
  }

  deleteTab() {
    this.tabsService.deleteTab(this.tab.id!)
      .subscribe(res => console.log(res));
  }
}
