import { Component, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TextComponent {
  isLongAnswer = false;
  buttonsRequired = ['Required', 'LongAnswer']
  @Input() questionNumber !: number;
}
