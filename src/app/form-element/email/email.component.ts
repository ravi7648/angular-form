import { Component, Input } from '@angular/core';
import { AnchorDirective } from '../../directive/anchor.directive';;

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  buttonsRequired = ['Required']
  elementType = 'Email'
  question = '';

  @Input() questionNumber !: number;
  @Input() formTarget !: AnchorDirective;
}
