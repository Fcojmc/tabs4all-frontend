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

  constructor(private bandsService: BandsService,
              private authService:  AuthService) { }

  ngOnInit(): void {
    this.bandsService.getBands()
      .subscribe(res => {
        console.log(res)
        this.bands = res.data.bands.data;
      });
    
    this.authService.isAdmin()
      .subscribe( 
        res => this.isAdmin = true,
        error => this.isAdmin = false
      );
  }

}

