import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsService } from '../../services/tabs.service';
import { Tab } from '../../../interfaces/tab.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newTab!: Tab;

  createForm!: FormGroup;
  
  error: boolean = false;

  errorName!: string;


  constructor(private formBuilder: FormBuilder,
              private tabsService: TabsService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: [null, Validators.required],
      content: [null, Validators.required],
      url_yt: null
    });
  }

  createTab(){
    this.newTab = this.createForm.value;
    console.log(this.newTab)
    this.tabsService.createTab(this.newTab)
      .subscribe(res => {
        this.error = false;
        this.showSnackBar('Tab created!');
      },
      error => {
        this.error = true;
      });
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2500
    });
  }
}
