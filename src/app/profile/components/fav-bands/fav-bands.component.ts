import { Component, OnInit } from '@angular/core';
import { Band } from '../../../interfaces/band.interface';
import { UserService } from '../../../auth/services/user.service';

@Component({
  selector: 'app-fav-bands',
  templateUrl: './fav-bands.component.html',
  styleUrls: ['./fav-bands.component.css']
})
export class FavBandsComponent implements OnInit {

  bands!: Band[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getFavouriteBands()
      .subscribe(res => this.bands = res.data);
  }

}
