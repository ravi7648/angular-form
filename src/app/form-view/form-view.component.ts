import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent{
  @Input() formTitle !: string;
  @Output() formTitleChange = new EventEmitter<string>();

  @ViewChild('title') eleRef!: ElementRef;

  printelements()
  {
    this.formTitleChange.emit(this.eleRef.nativeElement.innerText)
  }
}
