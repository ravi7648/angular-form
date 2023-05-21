import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AnchorDirective } from 'src/app/anchor.directive';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TextComponent {
  isLongAnswer = false;
  buttonsRequired = ['Required', 'LongAnswer'];
  elementType = 'Text';
  question = '';

  @Input() questionNumber !: number;
  @Input() formTarget !: AnchorDirective;
}
