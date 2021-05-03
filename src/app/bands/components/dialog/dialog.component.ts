import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Band } from '../../../interfaces/band.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Band) { }

  ngOnInit(): void {
  }

  delete() {
    this.dialogRef.close(true);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
