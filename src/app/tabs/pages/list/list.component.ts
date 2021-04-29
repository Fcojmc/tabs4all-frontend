import { Component, OnInit } from '@angular/core';
import { TabsService } from '../../services/tabs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private tabsService: TabsService) { }

  ngOnInit(): void {
    this.tabsService.getTabs().subscribe(res => console.log(res))
  }

}
