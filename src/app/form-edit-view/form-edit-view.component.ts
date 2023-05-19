import { Component } from '@angular/core';
import { AnchorDirective } from '../anchor.directive';

@Component({
  selector: 'app-form-edit-view',
  templateUrl: './form-edit-view.component.html',
  styleUrls: ['./form-edit-view.component.css']
})
export class FormEditViewComponent {
  showElement = false;
  sideIcon = "menu";
  formTitle = "Untitled form";
  formTarget !: AnchorDirective;
  anchored = false;

  showFormElement()
  {    
    if (this.sideIcon=='menu')
    {
      this.showElement = true
      this.sideIcon = "close"
    }
    else
    {
      this.showElement = false
      this.sideIcon = "menu"
    }
  }

  setFormTarget(target: AnchorDirective)
  {
    this.formTarget = target
    this.anchored = true;
    this.showFormElement()
  }
}
