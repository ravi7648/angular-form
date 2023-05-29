import { Component, ElementRef, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { FormDataService } from 'src/app/service/form-data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  constructor(public dialog: MatDialog) { }

  @Input() dialogQuestion !: string;
  @Input() dialogTitle !: string;

  dialogButtons: Array<string> = ['No', 'Ok'];
  deleteRef !: MatIcon;

  sendRef(deleteRef: MatIcon)
  {
    this.deleteRef = deleteRef;
  }

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
    customDialog.componentInstance.deleteRef = this.deleteRef;
  }
}

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
})
export class CustomDialogComponent {
  constructor(public dialogRef: MatDialogRef<CustomDialogComponent>, private formDataStore: FormDataService) { }

  @Input() dialogQuestion !: string;
  @Input() dialogTitle !: string
  @Input() dialogButtons !: Array<string>;
  @Input() deleteRef !: MatIcon;

  deleteElement() {
    const targetRef = this.deleteRef._elementRef.nativeElement.closest('.form-box')
    let formElementBox = Array.prototype.slice.call(document.getElementsByClassName('form-box'))
    this.formDataStore.getElements().splice(formElementBox.indexOf(targetRef), 1)
    targetRef.remove();
  }
}