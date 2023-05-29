import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormDataService } from 'src/app/service/form-data.service';

@Component({
  selector: 'app-bottom-icons',
  templateUrl: './bottom-icons.component.html',
  styleUrls: ['./bottom-icons.component.css']
})
export class BottomIconsComponent implements OnInit {
  constructor(private formDataStore: FormDataService) { }

  @Input() isChecked !: any;
  @Input() buttonsRequired !: Array<string>;
  @Input() questionNumber !: Number;
  @Output() isCheckedChange = new EventEmitter<any>();

  multipleAnswer !: boolean;
  longAnswer !: boolean;
  required !: boolean;

  ngOnInit(): void {
    this.multipleAnswer = this.buttonsRequired.includes('MultipleAnswer');
    this.longAnswer = this.buttonsRequired.includes('LongAnswer');
    this.required = this.buttonsRequired.includes('Required');
  }

  checkSelected(event: any) {
    this.isChecked = event.checked;
    this.isCheckedChange.emit(this.isChecked)
  }

  checkChoiceType(event: any) {
    if (event.checked)
      this.isCheckedChange.emit('square');
    else
      this.isCheckedChange.emit('circle');
  }

  updateFormToggle(questionNumber: any, toggler: string, event: any) {
    if (toggler == 'required') {
      if (event.checked)
        this.formDataStore.getElements()[questionNumber - 1].required = true;
      else
        this.formDataStore.getElements()[questionNumber - 1].required = false;
    }
    else if (toggler == 'multipleAnswer') {
      if (event.checked)
        this.formDataStore.getElements()[questionNumber - 1].multipleAnswer = true;
      else
        this.formDataStore.getElements()[questionNumber - 1].multipleAnswer = false;
    }
    else if (toggler == 'longAnswer') {
      if (event.checked)
        this.formDataStore.getElements()[questionNumber - 1].longAnswer = true;
      else
        this.formDataStore.getElements()[questionNumber - 1].longAnswer = false;
    }
  }

}
