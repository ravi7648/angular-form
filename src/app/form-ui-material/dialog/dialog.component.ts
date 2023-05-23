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

  dialogButtons: Array<string> = ['No', 'Ok'];

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, dialog: MatDialog = this.dialog, dialogTitle: string = this.dialogTitle, dialogQuestion: string = this.dialogQuestion, buttons: Array<string> = this.dialogButtons): void {
    const customDialog = dialog.open(CustomDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      panelClass: 'purple-dialog'
    });

    customDialog.componentInstance.dialogQuestion = dialogQuestion;
    customDialog.componentInstance.dialogTitle = dialogTitle;
    customDialog.componentInstance.dialogButtons = buttons
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
  @Input() dialogButtons !: Array<string>;
}