import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-band-edit',
  templateUrl: './band-edit.component.html',
  styleUrls: ['./band-edit.component.css']
})
export class BandEditComponent implements OnInit {

  image: string = "../../../../assets/images/no-image.png";

  constructor() { }

  ngOnInit(): void {
  }

  getImage(event: any) {
    console.log(event.target.files[0]);
  }
}
