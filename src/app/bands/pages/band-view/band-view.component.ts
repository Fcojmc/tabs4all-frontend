import { Component, OnInit } from '@angular/core';
import { Band } from '../../../interfaces/band.interface';
import { BandsService } from '../../services/bands.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../auth/services/user.service';
import { Song } from '../../../interfaces/song.interface';
import { User } from 'src/app/interfaces/user.interface';


@Component({
  selector: 'app-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.css']
})
export class BandViewComponent implements OnInit {

  isFavourite!: boolean;
  
  band!: Band;
  
  user!: User;

  songs!: Song[];

  isAdmin: boolean = false;
  
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
          switchMap( ({ id }) => this.bandsService.getBandById(id) )
      )
      .subscribe( res => {
        this.band = res.data;
        this.songs = this.band.songs!;
        this.pageSlice = this.songs.slice(0, 10);
        this.userDataCheck();
      } 
    ); 


  }

  setFavorite() {
    let message: string;
    
    if(this.isFavourite){
      this.userService.unsetFavouriteBand(this.band.uuid, this.user.uuid)
        .subscribe( res => message = res.message);
    }

    if(!this.isFavourite) {
      this.userService.setFavouriteBand(this.band.uuid, this.user.uuid)
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

  userDataCheck() {
    this.userService.getUserInfo()
          .subscribe(
            res => {
              this.user = res.data;
              this.isLogged = true;
              let favouritesBands = this.user.favouriteBands.map((band: Band) => band.uuid);
              if (this.user.is_admin) {
                this.isAdmin = true;
              } 
              if (favouritesBands.includes(this.band.uuid)) {
                this.isFavourite = true;
                this.color="primary"
              } else {
                this.isFavourite = false;
                this.color = '';
              } 
            }
          );
  }
}
