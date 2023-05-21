import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  constructor(public dialog: MatDialog) { }

  @Input() dialogQuestion !: string;
  @Input() dialogTitle !: string;

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const customDialog = this.dialog.open(CustomDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      panelClass: 'purple-dialog'
    });

    customDialog.componentInstance.dialogQuestion = this.dialogQuestion;
    customDialog.componentInstance.dialogTitle = this.dialogTitle;
  }
}

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
})
export class CustomDialogComponent {
  constructor(public dialogRef: MatDialogRef<CustomDialogComponent>) { }

  @Input() dialogQuestion !: string;
  @Input() dialogTitle !: string
}