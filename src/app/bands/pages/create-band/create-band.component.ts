import { Component, OnInit } from '@angular/core';
import { Band } from '../../interfaces/band.interface';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BandsService } from '../../services/bands.service';
import { BandErrorResponse } from '../../interfaces/response';

@Component({
  selector: 'app-create-band',
  templateUrl: './create-band.component.html',
  styleUrls: ['./create-band.component.css']
})
export class CreateBandComponent implements OnInit {

  newBand!: Band;

  image: string = '';

  imageFile!: File;

  bandData: FormData = new FormData();

  error: boolean = false;

  errors!: BandErrorResponse;  

  errorName!: string;

  createForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private bandService: BandsService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: [null, Validators.required],
      url_yt: null,
      image: null
    });
  }

  getImage(event: any) {
    this.image = event.target.files[0].name;
    this.imageFile = event.target.files[0];
  }

  createBand() {

    if(!this.createForm.valid){
      return;
    }

    this.newBand = this.createForm.value;
    this.bandData.append('image', this.imageFile);
    this.bandData.append('json', JSON.stringify(this.newBand));

    this.bandService.create(this.bandData)
      .subscribe( res => {
        
      },
      error => {
        this.error = true;
        
        if (error.error.data) {
          this.errors = error.error.data;
        }

        if (this.errors.name) {
          this.errorName = this.errors.name[0];
        }
    });
  }
}
