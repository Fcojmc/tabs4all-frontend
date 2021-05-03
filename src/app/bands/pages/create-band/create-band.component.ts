import { Component, OnInit } from '@angular/core';
import { Band } from '../../../interfaces/band.interface';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BandsService } from '../../services/bands.service';
import { FormErrors } from '../../../interfaces/form-errors.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  errors!: FormErrors;  

  errorName!: string;

  createForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private bandService: BandsService,
              private snackBar: MatSnackBar) { }

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
        this.error = false;
        this.showSnackBar('Band created!');
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


  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2500
    });
  }
}
