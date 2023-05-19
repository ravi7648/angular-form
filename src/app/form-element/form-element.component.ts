import { Component, Input, ViewEncapsulation } from '@angular/core';
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

export class FormElementComponent {
  inputs = ['Text', 'Choice', 'Email', 'Date', 'Rating']
  totalCount: number = 0;
  selected = 'Text';

  @Input() formTarget !: AnchorDirective;

  inc() { this.totalCount++; }
  dec() {
    if (this.totalCount > 0)
      this.totalCount--;
  }

  addBulkElements(component: string, count: number)
  {
    component = component.toLowerCase();
    for (let i in [...Array(count)])
    {
      this.addElement(component)
    }
  }

  addElement(component: string)
  {
    const viewContainerRef = this.formTarget.viewContainerRef;
    switch(component)
    {
      case 'Text': viewContainerRef.createComponent(TextComponent);
      break;
      case 'Choice': viewContainerRef.createComponent(ChoiceComponent);
      break
      case 'Email': viewContainerRef.createComponent(EmailComponent);
      break
      case 'Date': viewContainerRef.createComponent(DateComponent);
      break
      case 'Rating': viewContainerRef.createComponent(RatingComponent);
      break
    }
  }

  clearForm()
  {
    const viewContainerRef = this.formTarget.viewContainerRef;
    viewContainerRef.clear();
  }
}
