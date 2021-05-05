import { Component, OnInit } from '@angular/core';
import { BandsService } from '../../services/bands.service';
import { Band } from '../../../interfaces/band.interface';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  bands!: Band[];

  isAdmin!: boolean;

  searchTerm!: string;

  bandsFilter!: Band[];

  constructor(private bandsService: BandsService,

              private authService:  AuthService) { }

  ngOnInit(): void {
    this.bandsService.getBands()
      .subscribe(res => {
        this.bands = res.data.bands;
        this.bandsFilter = [...this.bands];
      });
    
    this.authService.isAdmin()
      .subscribe( 
        res => this.isAdmin = true,
        error => this.isAdmin = false
      );
  }

  search(term: string) {
    term = term.replace(/\b\w/g, l => l.toUpperCase());
    this.bands = this.bandsFilter.filter(band => band.name.includes(term));
  }

}

