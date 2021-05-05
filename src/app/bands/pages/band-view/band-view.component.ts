import { Component, OnInit } from '@angular/core';
import { Band } from '../../../interfaces/band.interface';
import { BandsService } from '../../services/bands.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../auth/services/user.service';
import { Song } from '../../../interfaces/song.interface';


@Component({
  selector: 'app-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.css']
})
export class BandViewComponent implements OnInit {

  isFavourite!: boolean;
  
  band!: Band;
  
  songs!: Song[];

  isAdmin!: boolean;
  
  isLogged!: boolean;

  color: string = '';

  pageSlice!: any[];

  constructor(private bandsService: BandsService,
              private authService: AuthService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
          switchMap( ({ id }) => this.bandsService.getSongsByBandId(id) )
      )
      .subscribe( res => {
        this.band = res.data[0];
        this.songs = this.band.songs!;
        this.pageSlice = this.songs.slice(0, 10);
      } 
    ); 

    this.isLogged = false;

    if (this.authService.getToken()) {
      this.isLogged = true;
    }

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
            this.color="primary"
          } else {
            this.isFavourite = false;
            this.color = '';
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
      this.isFavourite = !this.isFavourite;
      
      if (this.color === '') {
        this.color = 'primary';
      } else {
        this.color = '';
      }
    
      this.showSnackBar(message);
    }, 300);
  } 

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000
    });
  }

  goToSongster(song: Song) {
    window.open(song.url);
  }

  onPageChange(event: any) {
    const startIndex: number = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.songs.length) {
      endIndex = this.songs.length;
    }
    this.pageSlice = this.songs.slice(startIndex, endIndex);
  }
}
