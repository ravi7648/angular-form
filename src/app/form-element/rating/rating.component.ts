import { Component, Input } from '@angular/core';
import { AnchorDirective } from '../../directive/anchor.directive';;

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  selected = 0;
  ratingScale = [...Array(11).keys()];
  buttonsRequired = ['Required'];
  elementType = 'Rating';
  question = '';

  @Input() questionNumber !: number;
  @Input() formTarget !: AnchorDirective;
}
