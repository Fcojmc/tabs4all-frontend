import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tab } from '../../../interfaces/tab.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Tab) { }

  ngOnInit(): void {
  }

  delete() {
  this.dialogRef.close(true);
  }

  closeDialog() {
  this.dialogRef.close();
  }
}
