import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../../../interfaces/tab.interface';

@Component({
  selector: 'app-fav-tabs',
  templateUrl: './fav-tabs.component.html',
  styleUrls: ['./fav-tabs.component.css']
})
export class FavTabsComponent implements OnInit {

  @Input() tabs!: Tab[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
