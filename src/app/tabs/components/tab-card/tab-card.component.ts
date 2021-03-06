import { Component, Input, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/tab.interface';

@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html',
  styleUrls: ['./tab-card.component.css']
})
export class TabCardComponent implements OnInit {

  @Input() tab!: Tab;

  constructor() { }

  ngOnInit(): void {
  }

}
