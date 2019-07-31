import { NgbTableBodyRowDirective } from './ngb-table-body-row.directive';
import { Component, OnInit, ContentChild, TemplateRef, ContentChildren, QueryList, Input } from '@angular/core';
import { NgbTableHeaderDirective } from 'projects/ngb-table/src/lib/ngb-table-header.directive';
import { NgbTableFooterDirective } from 'projects/ngb-table/src/lib/ngb-table-footer.directive';
import { NgbTableFooterRowDirective } from 'projects/ngb-table/src/lib/ngb-table-footer-row.directive';
import { NgbTableHeadDirective } from 'projects/ngb-table/src/lib/ngb-table-head.directive';

type Row = object;

@Component({
  selector: 'ngb-table',
  templateUrl: './ngb-table.component.html',
  styles: []
})
export class NgbTableComponent implements OnInit {

  @Input() rows: Row[];

  // templates:
  @ContentChild(NgbTableHeaderDirective, { static: false, read: TemplateRef }) headerTemplate: NgbTableHeaderDirective;
  @ContentChild(NgbTableHeadDirective, { static: false, read: TemplateRef }) headTemplate: NgbTableHeadDirective;
  @ContentChild(NgbTableBodyRowDirective, { static: false, read: TemplateRef }) bodyRowTemplate: NgbTableBodyRowDirective;
  @ContentChild(NgbTableFooterDirective, { static: false, read: TemplateRef }) footerTemplate: NgbTableFooterDirective;
  @ContentChildren(NgbTableFooterRowDirective, { descendants: false }) footerRowTemplates: QueryList<NgbTableFooterRowDirective>;

  constructor() { }

  ngOnInit() {
  }

}
