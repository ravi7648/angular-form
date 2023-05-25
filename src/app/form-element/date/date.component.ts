import { Component, Input } from '@angular/core';
import { AnchorDirective } from '../../directive/anchor.directive';;

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  buttonsRequired = ['Required']
  elementType = 'Date'
  question = '';
  @Input() questionNumber !: number;
  @Input() formTarget !: AnchorDirective;
}
