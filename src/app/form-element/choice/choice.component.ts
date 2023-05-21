import { Component, Input, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { AnchorDirective } from 'src/app/anchor.directive';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  totalOptions = 2;
  options = [...Array(this.totalOptions).keys()];
  buttonsRequired = ['Required', 'MultipleAnswer'];
  clicked = false;
  choiceType = 'circle';
  elementType = 'Choice';
  question = '';

  @Input() questionNumber !: number;
  @Input() formTarget !: AnchorDirective;

  @ViewChild('choiceBoxRef', { read: ViewContainerRef, static: true }) vRef !: ViewContainerRef;
  @ViewChild('choiceOtherContainerRef', { read: ViewContainerRef, static: true }) otherRef !: ViewContainerRef;

  @ViewChild('choiceRef', { read: TemplateRef, static: true }) choiceRef !: TemplateRef<any>;
  @ViewChild('choiceOtherRef', { read: TemplateRef, static: true }) choiceOtherRef !: TemplateRef<any>;

  addChoice(type: string) {
    type == "otherOption" ? this.otherRef.createEmbeddedView(this.choiceOtherRef) : this.vRef.createEmbeddedView(this.choiceRef)
    if (!this.clicked) this.clicked = (type == "otherOption");
  }
}
