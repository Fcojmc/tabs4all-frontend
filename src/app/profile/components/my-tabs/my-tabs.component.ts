import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../../interfaces/tab.interface';

@Component({
  selector: 'app-my-tabs',
  templateUrl: './my-tabs.component.html',
  styleUrls: ['./my-tabs.component.css']
})
export class MyTabsComponent implements OnInit {

  @Input() tabs!: Tab[];


  constructor() { }

  ngOnInit(): void {

  }

}
