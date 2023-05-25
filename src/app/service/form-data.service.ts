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
}

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  constructor() {}
  form: Form = {
    title: 'Untitled Form',
    elements: []
  };
  
  key: string = 'formData';

  public setTitle(title: string) {
    this.form.title = title;
  }

  public getTitle() {
    return this.form.title
  }

  public setElements(element: FormElement) {
    this.form.elements.push(element);
  }

  public getElements() {
    return this.form.elements;
  }

  public saveData() {
    localStorage.setItem(this.key, JSON.stringify(this.form));
  }

  public getData() {
    return localStorage.getItem(this.key);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
