import { Component, Input, OnInit } from '@angular/core';
import { Band } from '../../../interfaces/band.interface';
import { Tab } from '../../../interfaces/tab.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() favBand!: Band;
  @Input() favTab!: Tab;
  @Input() userTab!: Tab;

  constructor() { }

  ngOnInit(): void {
  }

}
