import { Component, Input } from '@angular/core';
import { AnchorDirective } from 'src/app/directive/anchor.directive';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  buttonsRequired = ['Required']
  elementType = 'Upload'
  question = '';

  @Input() questionNumber !: number;
  @Input() formTarget !: AnchorDirective;
}
