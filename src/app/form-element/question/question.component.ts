import { Component, Input } from '@angular/core';
import { AnchorDirective } from '../../directive/anchor.directive';import { FormDataService } from 'src/app/service/form-data.service';
;
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  constructor(private formDataStore : FormDataService) { }

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

  updateElementQuestion(questionText: string, questionNumber: number) {
    this.formDataStore.getElements()[questionNumber-1].question = questionText;
  }
}
