import { Component, OnInit } from '@angular/core';
import { Band } from '../../interfaces/band.interface';
import { BandsService } from '../../services/bands.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-band-view',
  templateUrl: './band-view.component.html',
  styleUrls: ['./band-view.component.css']
})
export class BandViewComponent implements OnInit {

  band!: Band;
  safeUrl!: SafeResourceUrl;
  
  constructor(private bandsService: BandsService,
              private activatedRoute: ActivatedRoute,
              private _sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
          switchMap( ({ id }) => this.bandsService.getBandById(id) )
      )
      .subscribe( band => {
        this.band = band;
        this.band.url_yt = this.band.url_yt.substr(32, (this.band.url_yt.length - 32));
        this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.band.url_yt}`);
      } 
    ); 

  }

}
