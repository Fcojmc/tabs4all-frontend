import { Component, OnInit } from '@angular/core';
import { BandsService } from '../../services/bands.service';
import { Band } from '../../interfaces/band.interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  bands!: Band[];

  constructor(private bandsService: BandsService) { }

  ngOnInit(): void {
    this.bandsService.getBands()
      .subscribe(res => {
        console.log(res)
        this.bands = res.data.bands;
      })
  }

}

