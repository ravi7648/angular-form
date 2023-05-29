import { Component, Input, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { AnchorDirective } from '../../directive/anchor.directive'; import { FormDataService } from 'src/app/service/form-data.service';
;

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  constructor(private formDataStore: FormDataService) { }

  totalOptions = 2;
  options = [...Array(this.totalOptions).keys()];
  buttonsRequired = ['Required', 'MultipleAnswer'];
  clicked = false;
  choiceType = 'circle';
  elementType = 'Choice';
  question = '';
  choice = ''

  @Input() questionNumber !: number;
  @Input() formTarget !: AnchorDirective;

  @ViewChild('choiceBoxRef', { read: ViewContainerRef, static: true }) vRef !: ViewContainerRef;
  @ViewChild('choiceOtherContainerRef', { read: ViewContainerRef, static: true }) otherRef !: ViewContainerRef;

  @ViewChild('choiceRef', { read: TemplateRef, static: true }) choiceRef !: TemplateRef<any>;
  @ViewChild('choiceOtherRef', { read: TemplateRef, static: true }) choiceOtherRef !: TemplateRef<any>;

  addChoice(type: string) {
    const choiceRef = (type == "otherOption") ? this.otherRef.createEmbeddedView(this.choiceOtherRef) : this.vRef.createEmbeddedView(this.choiceRef);
    choiceRef.rootNodes[0].querySelector('input').addEventListener('blur', () => this.updateChoiceToForm(choiceRef.rootNodes[0].querySelector('input')));
    
    if (!this.clicked) this.clicked = (type == "otherOption");
  }

  addChoiceToForm(type: string) {
    this.totalOptions++;
    type == "otherOption" ? this.formDataStore.getElements()[this.questionNumber - 1].choices.push("other Option") : this.formDataStore.getElements()[this.questionNumber - 1].choices.push("Custom Option inserted");
  }

  updateChoiceToForm(choiceRef: any)
  {    
    let choicePosition = parseInt((choiceRef.id).split('-').slice(-1));
    let choiceText = choiceRef.value;
    this.formDataStore.getElements()[this.questionNumber - 1].choices[choicePosition-1] = choiceText;
  }
}
