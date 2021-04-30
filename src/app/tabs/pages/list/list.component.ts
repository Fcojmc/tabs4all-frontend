import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/tab.interface';
import { TabsService } from '../../services/tabs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tabs!: Tab[];

  constructor(private tabsService: TabsService) { }

  ngOnInit(): void {
    this.tabsService.getTabs().subscribe(res => this.tabs = res.data);
  }

}
