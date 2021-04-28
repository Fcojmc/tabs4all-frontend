import { Component, OnInit } from '@angular/core';
import { Band } from '../../interfaces/band.interface';
import { BandsService } from '../../services/bands.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.css']
})
export class BandViewComponent implements OnInit {

  band!: Band;
  
  constructor(private bandsService: BandsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
          switchMap( ({ id }) => this.bandsService.getBandById(id) )
      )
      .subscribe( band => {
        this.band = band;
      } 
    ); 

  }

}
