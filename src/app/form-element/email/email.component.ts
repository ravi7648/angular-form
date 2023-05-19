import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  buttonsRequired = ['Required']
  @Input() questionNumber !: number;
}
