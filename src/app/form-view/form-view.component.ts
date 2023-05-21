import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AnchorDirective } from '../anchor.directive';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent {
  @Input() formTitle !: string;
  @Input() formTarget !: AnchorDirective;
  @Output() formTitleChange = new EventEmitter<string>();
  @Output() targetFormChange = new EventEmitter<AnchorDirective>();


  @ViewChild('title') eleRef!: ElementRef;
  @ViewChild(AnchorDirective) targetForm !: AnchorDirective;

  changeTitle() {
    this.formTitleChange.emit(this.eleRef.nativeElement.innerText)
  }

  assignFormTarget(value: AnchorDirective) {
    this.targetFormChange.emit(value);
  }
}
