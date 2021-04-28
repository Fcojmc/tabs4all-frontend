import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Band } from '../../interfaces/band.interface';
import { BandsService } from '../../services/bands.service';


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
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.bandsService.getBandById(id) )
    )
    .subscribe( band => {
      this.band = band;
      console.log(band)
    } );
    console.log(this.band)
  }

  getImage(event: any) {
    this.imageName = event.target.files[0].name;
    this.imageFile = event.target.files[0]
  }

  updateBand() {
    if (this.imageFile) {
      this.bandData.append('image', this.imageFile);
    }
    this.bandData.append('json', JSON.stringify(this.band));
    this.bandsService.updateBand(this.bandData)
      .subscribe( res => console.log(res));
  }

  deleteBand() {
    this.bandsService.deleteBand(this.band.id!)
      .subscribe( res => {
        console.log(res)
        this.router.navigate(['/bands/list']);
      }, error => console.log(error));
  }
}
