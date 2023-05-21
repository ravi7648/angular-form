import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() questionNumber !: number;
  dialogQuestion : string = "Would you like to delete this element?";
  dialogTitle : string = "Delete Element";
}
