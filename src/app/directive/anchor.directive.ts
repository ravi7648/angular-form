import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[formBody]'
})
export class AnchorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
