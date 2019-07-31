import { Component, OnInit, ContentChild, TemplateRef, ContentChildren, QueryList, Input } from '@angular/core';

import { NgbTableHeaderDirective } from 'projects/ngb-table/src/lib/children-selectors/ngb-table-header.directive';
import { NgbTableHeadDirective } from 'projects/ngb-table/src/lib/children-selectors/ngb-table-head.directive';
import { NgbTableBodyRowDirective } from 'projects/ngb-table/src/lib/children-selectors/ngb-table-body-row.directive';
import { NgbTableFooterRowDirective } from 'projects/ngb-table/src/lib/children-selectors/ngb-table-footer-row.directive';
import { NgbTableFooterDirective } from 'projects/ngb-table/src/lib/children-selectors/ngb-table-footer.directive';

type Row = object;

@Component({
  selector: 'ngb-table',
  templateUrl: './ngb-table.component.html',
})
export class NgbTableComponent implements OnInit {

  @Input() rows: Row[];

  // client defined templates:
  @ContentChild(NgbTableHeaderDirective, { static: false, read: TemplateRef }) headerTemplate: NgbTableHeaderDirective;
  @ContentChild(NgbTableHeadDirective, { static: false, read: TemplateRef }) headTemplate: NgbTableHeadDirective;
  @ContentChild(NgbTableBodyRowDirective, { static: false, read: TemplateRef }) bodyRowTemplate: NgbTableBodyRowDirective;
  @ContentChildren(NgbTableFooterRowDirective, { descendants: false }) footerRowTemplates: QueryList<NgbTableFooterRowDirective>;
  @ContentChild(NgbTableFooterDirective, { static: false, read: TemplateRef }) footerTemplate: NgbTableFooterDirective;

  constructor() { }

  ngOnInit() {
  }

}
