import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Band } from '../../../interfaces/band.interface';
import { BandsService } from '../../services/bands.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';


@Component({
  selector: 'app-band-edit',
  templateUrl: './band-edit.component.html',
  styleUrls: ['./band-edit.component.css']
})
export class BandEditComponent implements OnInit {

  band!: Band;

  imageName!: string;

  imageFile!: File;
  
  bandData: FormData = new FormData();

  constructor(private activatedRoute: ActivatedRoute,
              private bandsService: BandsService,
              private router: Router,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

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

  getImage(event: any) {
    this.imageName = event.target.files[0].name;
    this.imageFile = event.target.files[0];
  }

  updateBand() {
    if (this.imageFile) {
      this.bandData.append('image', this.imageFile);
    }
    this.bandData.append('json', JSON.stringify(this.band));
    this.bandsService.updateBand(this.bandData)
      .subscribe( res => {
        this.showSnackBar('Band updated');
        setTimeout(() => {
          window.location.reload();
        }, 1100);
      }
    );
  }

  deleteBand() {
    const dialog =  this.dialog.open( DialogComponent, {
      width: '350px',
      data: this.band
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.bandsService.deleteBand(this.band.id!)
            .subscribe( res => {
              this.router.navigate(['/bands/list']);
            }, error => console.log(error));
        }
      }
    );
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1000
    });
  }
}

