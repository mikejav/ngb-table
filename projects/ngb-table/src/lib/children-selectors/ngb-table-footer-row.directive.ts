import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngbTableFooterRow]'
})
export class NgbTableFooterRowDirective {

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }
}
