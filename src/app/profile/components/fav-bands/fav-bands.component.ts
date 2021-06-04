import { Component, Input, OnInit } from '@angular/core';
import { Band } from '../../../interfaces/band.interface';

@Component({
  selector: 'app-fav-bands',
  templateUrl: './fav-bands.component.html',
  styleUrls: ['./fav-bands.component.css']
})
export class FavBandsComponent implements OnInit {

  @Input() bands!: Band[];

  constructor() { }

  ngOnInit(): void {

  }

}
