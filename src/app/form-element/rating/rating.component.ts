import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  selected = 0
  ratingScale =  [...Array(11).keys()]
  buttonsRequired = ['Required']
  @Input() questionNumber !: number;
}
