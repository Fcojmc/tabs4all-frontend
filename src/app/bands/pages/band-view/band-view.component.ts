import { Component, OnInit } from '@angular/core';
import { Band } from '../../../interfaces/band.interface';
import { BandsService } from '../../services/bands.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../auth/services/user.service';


@Component({
  selector: 'app-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.css']
})
export class BandViewComponent implements OnInit {

  isFavourite!: boolean;
  
  band!: Band;
  
  isAdmin!: boolean;
  
  constructor(private bandsService: BandsService,
              private authService: AuthService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar) { }

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

    this.userService.getFavouriteBands()
      .subscribe(
        res => {
          let favouritesBands = res.data.map((band: Band) => band.id);
          if (favouritesBands.includes(this.band.id)) {
            this.isFavourite = true;
          } else {
            this.isFavourite = false;
          }
        }
      );
  }

  setFavorite() {
    let message: string;
    
    if(this.isFavourite){
      this.userService.unsetFavouriteBand(this.band.id)
        .subscribe( res => message = res.message);
    }

    if(!this.isFavourite) {
      this.userService.setFavouriteBand(this.band.id)
      .subscribe( res => message = res.message); 
    }

    setTimeout(() => { 
      this.isFavourite = !this.isFavourite
      this.showSnackBar(message);
    }, 300);
  } 

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000
    });
  }
}
