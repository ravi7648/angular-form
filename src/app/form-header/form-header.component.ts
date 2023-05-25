import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogComponent, CustomDialogComponent } from '../form-ui-material/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormDataService } from '../service/form-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css']
})
export class FormHeaderComponent {
  constructor(public dialog: MatDialog, private formDataStore : FormDataService) { }
  actionName = 'Save';
  actionMessage = 'Form saved successfully';
  actionStatus = 'OK';
  snackbarDuration = 2;

  @Input() formTitle !: string;
  @Input() draggable: boolean = false;

  @Output() draggableChange = new EventEmitter<boolean>();

  saveForm() {
    this.formDataStore.saveData();
  }

  toggleDraggable(draggable: boolean) {
    this.draggableChange.emit(draggable);
    if (draggable)
      DialogComponent.prototype.openDialog('0ms', '0ms', this.dialog, 'Drag & Drop ', 'Please drag and drop the elements to the form', ['Ok']);
  }
}
