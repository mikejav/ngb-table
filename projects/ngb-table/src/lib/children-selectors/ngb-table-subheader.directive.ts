import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngbTableSubheader]'
})
export class NgbTableSubheaderDirective {

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }
}
