import { Component } from '@angular/core';
import { FormDataService } from '../service/form-data.service';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent {
  constructor(private formDataStore : FormDataService) { }

  formElements = this.formDataStore.getData();
}
