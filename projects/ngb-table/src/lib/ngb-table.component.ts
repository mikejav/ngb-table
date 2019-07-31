import { Component, OnInit, ContentChild, TemplateRef, ContentChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() rowIdColumnName = 'id';
  @Input() selectable = false;
  @Input() selectedRowsIds: string[] | number[];
  @Output() selectedRowsIdsChange = new EventEmitter<(string | number)[]>();

  // client defined templates:
  @ContentChild(NgbTableHeaderDirective, { static: false, read: TemplateRef }) headerTemplate: NgbTableHeaderDirective;
  @ContentChild(NgbTableHeadDirective, { static: false, read: TemplateRef }) headTemplate: NgbTableHeadDirective;
  @ContentChild(NgbTableBodyRowDirective, { static: false, read: TemplateRef }) bodyRowTemplate: NgbTableBodyRowDirective;
  @ContentChildren(NgbTableFooterRowDirective, { descendants: false }) footerRowTemplates: QueryList<NgbTableFooterRowDirective>;
  @ContentChild(NgbTableFooterDirective, { static: false, read: TemplateRef }) footerTemplate: NgbTableFooterDirective;

  constructor() { }

  ngOnInit() {
  }

  isRowSelected(row: Row) {
    const rowId = row[this.rowIdColumnName];

    return this.selectedRowsIds.indexOf(rowId) > -1;
  }

  selectRow(row: Row) {
    const rowId = row[this.rowIdColumnName];
    const newSelectedRows = [...this.selectedRowsIds, rowId];

    this.selectedRowsIdsChange.emit(newSelectedRows);
  }

  unselectRow(row: Row) {
    const rowId = row[this.rowIdColumnName];
    const indexOfRowId = this.selectedRowsIds.indexOf(rowId);
    this.selectedRowsIds.splice(indexOfRowId, 1);
    const newSelectedRows = [...this.selectedRowsIds];

    this.selectedRowsIdsChange.emit(newSelectedRows);
  }

  toggleRowSelection(row: Row) {
    if (this.isRowSelected(row)) {
      this.unselectRow(row);
    } else {
      this.selectRow(row);
    }
  }
}
