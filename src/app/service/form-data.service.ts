import { Injectable } from '@angular/core';

interface Form {
  title: String;
  elements: FormElement[];
}

interface FormElement {
  id: Number;
  question: String;
  type: String;
  required: Boolean;
  longAnswer: Boolean;
  choices: String[];
  multipleAnswer: Boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  constructor() { }
  form: Form = {
    title: 'Untitled Form',
    elements: []
  };

  key: string = 'formData';

  public setFormTitle(title: string) {
    this.form.title = title;
  }

  public getFormTitle() {
    return JSON.parse("" + localStorage.getItem(this.key)).title;
  }

  public insertElement(element: FormElement) {
    this.form.elements.push(element);
  }

  public getElements() {
    return this.form.elements;
  }

  public saveData() {
    localStorage.setItem(this.key, JSON.stringify(this.form));
  }

  public getFormElements() {
    return JSON.parse("" + localStorage.getItem(this.key)).elements;
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
