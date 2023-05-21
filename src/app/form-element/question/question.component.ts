import { Component, Input } from '@angular/core';
import { AnchorDirective } from 'src/app/anchor.directive';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  dialogQuestion: string = "Would you like to delete this element?";
  dialogTitle: string = "Delete Element";
  question: string = "";
  showClipboard: boolean = true;
  snackbarDuration = 2;
  actionMessage = "Copied the question!";
  actionStatus = "OK";

  @Input() questionNumber !: number;
  @Input() elementType !: string;
  @Input() formTarget !: AnchorDirective;
  @Input() questionText !: string;
}
