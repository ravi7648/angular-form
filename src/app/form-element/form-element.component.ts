import { Component, ViewChild, ViewContainerRef } from '@angular/core';
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

  inc() { this.totalCount++; }
  dec() {
    if (this.totalCount > 0)
      this.totalCount--;
  }

  @ViewChild(AnchorDirective) anchor !: AnchorDirective;

  addElement()
  {
    console.log(this.anchor);
    
  }
}
