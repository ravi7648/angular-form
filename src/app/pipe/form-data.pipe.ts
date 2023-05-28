import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formData'
})
export class FormDataPipe implements PipeTransform {

  transform(value: any, key: string): string {
    //TODO: Still need to use
    return value
  }

}
