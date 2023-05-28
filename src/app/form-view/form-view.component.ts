import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AnchorDirective } from '../directive/anchor.directive';
import { FormDataService } from '../service/form-data.service';
import { NetworkWifiTwoTone } from '@mui/icons-material';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent {
  constructor(private formDataStore: FormDataService) { }

  @Input() formTitle !: string;
  @Input() formTarget !: AnchorDirective;
  @Output() formTitleChange = new EventEmitter<string>();
  @Output() targetFormChange = new EventEmitter<AnchorDirective>();


  @ViewChild('title') eleRef!: ElementRef;
  @ViewChild(AnchorDirective) targetForm !: AnchorDirective;

  changeTitle() {
    let newFormTitle = this.eleRef.nativeElement.innerText
    this.formDataStore.setFormTitle(newFormTitle);
    this.formTitleChange.emit(newFormTitle)

  }

  assignFormTarget(value: AnchorDirective) {
    this.targetFormChange.emit(value);
  }
}
