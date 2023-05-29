import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../service/form-data.service';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent implements OnInit {
  constructor(private formDataStore: FormDataService) { }

  preview = true;
  formElements !: any;
  formTitle: any;
  selected = 0;
  ratingScale = [...Array(11).keys()];

  ngOnInit(): void {
    this.formElements = this.formDataStore.getFormElements();
    this.formTitle = this.formDataStore.getFormTitle();
  }
}
