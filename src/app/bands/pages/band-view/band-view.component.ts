import { Component, OnInit } from '@angular/core';
import { Band } from '../../../interfaces/band.interface';
import { BandsService } from '../../services/bands.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.css']
})
export class BandViewComponent implements OnInit {

  favorite: boolean = true;

  band!: Band;
  
  isAdmin!: boolean;


  constructor(private bandsService: BandsService,
              private authService: AuthService,
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
    
     this.authService.isAdmin()
      .subscribe( 
        res => this.isAdmin = true,
        error => this.isAdmin = false
      ); 
  }

  setFavorite() {
    setTimeout(() => { 
      this.favorite = !this.favorite
    }, 300);
  } 
}
