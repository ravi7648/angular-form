import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { TextComponent } from './text/text.component';
import { ChoiceComponent } from './choice/choice.component';
import { DateComponent } from './date/date.component';
import { EmailComponent } from './email/email.component';
import { RatingComponent } from './rating/rating.component';
import { AnchorDirective } from '../anchor.directive';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FormElementComponent implements OnChanges{

  constructor() { }
  
  inputs = ['Text', 'Choice', 'Email', 'Date', 'Rating']
  totalCount: number = 0;
  selected = 'Text';
  customStyle: string = '';
  
  @Input() draggable : boolean = false;
  @Input() formTarget !: AnchorDirective;
  @Input() questionNumber !: number;

  ngOnChanges() { 
    if (this.draggable)
      this.customStyle = `box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;`;
    else
      this.customStyle = '';
  }

  inc() { this.totalCount++; }
  dec() {
    if (this.totalCount > 0)
      this.totalCount--;
  }

  addBulkElements(component: string, count: number) {
    for (let i in [...Array(count)]) {
      this.addElement(component, false)
    }
  }

  addElement(component: string, draggable: boolean) {
    if (draggable) return;
    this.questionNumber++;
    const viewContainerRef = this.formTarget.viewContainerRef;
    switch (component) {
      case 'Text': const textRef = viewContainerRef.createComponent(TextComponent);
        textRef.instance.questionNumber = this.questionNumber;
        textRef.instance.formTarget = this.formTarget;
        break;
      case 'Choice': const choiceRef = viewContainerRef.createComponent(ChoiceComponent);
        choiceRef.instance.questionNumber = this.questionNumber;
        choiceRef.instance.formTarget = this.formTarget;
        break
      case 'Email': const emailRef = viewContainerRef.createComponent(EmailComponent);
        emailRef.instance.questionNumber = this.questionNumber;
        emailRef.instance.formTarget = this.formTarget;
        break
      case 'Date': const dateRef = viewContainerRef.createComponent(DateComponent);
        dateRef.instance.questionNumber = this.questionNumber;
        dateRef.instance.formTarget = this.formTarget;
        break
      case 'Rating': const ratingRef = viewContainerRef.createComponent(RatingComponent);
        ratingRef.instance.questionNumber = this.questionNumber;
        ratingRef.instance.formTarget = this.formTarget;
        break
    }
  }

  onDragEnded(event: any) {
    let currentDropArea = document.elementFromPoint(event.dropPoint.y, event.dropPoint.x);
    let droppableArea = document.getElementById('form-container');
    if (droppableArea == currentDropArea?.closest('#form-container')) {
      this.addElement(event.source.element.nativeElement.innerText, false);
    }
    event.source.reset();
  }

  clearForm() {
    const viewContainerRef = this.formTarget.viewContainerRef;
    this.questionNumber = 0;
    viewContainerRef.clear();
  }
}
