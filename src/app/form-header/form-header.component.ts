import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css']
})
export class FormHeaderComponent {
  actionName = 'Save';
  actionMessage = 'Form saved successfully';
  actionStatus = 'OK';
  snackbarDuration = 2;
  
  @Input() formTitle !: string;
  @Input() draggable : boolean = false;

  @Output() draggableChange = new EventEmitter<boolean>();

  toggleDraggable(draggable: boolean)
  {
    this.draggableChange.emit(draggable);
  }
}
