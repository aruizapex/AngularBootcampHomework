import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-material-button-and-modal',
  templateUrl: './material-button-and-modal.component.html',
  styleUrl: './material-button-and-modal.component.scss'
})
export class MaterialButtonAndModalComponent {
  constructor(public dialog: MatDialog) {}
  name: string = '';

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('----', result)
      this.name = result
    });
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
