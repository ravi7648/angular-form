import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css']
})
export class FormHeaderComponent {
  @Input() formTitle !: string;
  actionName = 'Save';
  actionMessage = 'Form saved successfully';
  actionStatus = 'OK';
  snackbarDuration = 2;
}
