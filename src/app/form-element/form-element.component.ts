import { Component, Input } from '@angular/core';
import { TextComponent } from './text/text.component';
import { ChoiceComponent } from './choice/choice.component';
import { DateComponent } from './date/date.component';
import { EmailComponent } from './email/email.component';
import { RatingComponent } from './rating/rating.component';
import { AnchorDirective } from '../anchor.directive';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
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
    console.log(this.formTarget.viewContainerRef);
    const viewContainerRef = this.formTarget.viewContainerRef;
    // const componentRef = viewContainerRef.createComponent(TextComponent);
    // viewContainerRef.clear();
    switch(component)
    {
      case 'text': viewContainerRef.createComponent(TextComponent);
      break;
      case 'choice': viewContainerRef.createComponent(ChoiceComponent);
      break
      case 'email': viewContainerRef.createComponent(EmailComponent);
      break
      case 'date': viewContainerRef.createComponent(DateComponent);
      break
      case 'rating': viewContainerRef.createComponent(RatingComponent);
      break
    }
  }
}
