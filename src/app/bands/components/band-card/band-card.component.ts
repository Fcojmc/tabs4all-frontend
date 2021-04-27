import { Component, Input, OnInit } from '@angular/core';
import { Band } from '../../interfaces/band.interface';

@Component({
  selector: 'app-band-card',
  templateUrl: './band-card.component.html',
  styleUrls: ['./band-card.component.css']
})
export class BandCardComponent implements OnInit {

  @Input() band!: Band;

  constructor() { }

  ngOnInit(): void {
  }

}
