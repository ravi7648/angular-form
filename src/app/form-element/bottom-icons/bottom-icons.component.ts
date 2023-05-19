import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-icons',
  templateUrl: './bottom-icons.component.html',
  styleUrls: ['./bottom-icons.component.css']
})
export class BottomIconsComponent implements OnInit{
  @Input() isChecked !: any;
  @Input() buttonsRequired !: Array<string>;
  @Output() isCheckedChange = new EventEmitter<any>();

  multipleAnswer !: boolean;
  longAnswer !: boolean;
  required !: boolean;

  ngOnInit(): void {
    this.multipleAnswer = this.buttonsRequired.includes('MultipleAnswer');   
    this.longAnswer = this.buttonsRequired.includes('LongAnswer');
    this.required = this.buttonsRequired.includes('Required');   
  }

  checkSelected(event: any)
  {
    this.isChecked = event.checked;
    this.isCheckedChange.emit(this.isChecked)
  }

  checkChoiceType(event: any)
  {
    if (event.checked)
      this.isCheckedChange.emit('square');
    else
      this.isCheckedChange.emit('circle');
  }

}
