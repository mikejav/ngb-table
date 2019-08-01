import { NgbTableSelectActionsHeaderDirective } from './children-selectors/ngb-table-select-actions-header.directive';
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
  styleUrls: ['./ngb-table.component.scss']
})
export class NgbTableComponent implements OnInit {

  @Input() rows: Row[];
  @Input() rowIdColumnName = 'id';
  @Input() selectable = false;
  @Input() selectedRowsIds: string[] | number[];
  @Output() selectedRowsIdsChange = new EventEmitter<(string | number)[]>();

  /*
   * Client defined templates:
   */

  @ContentChild(NgbTableHeaderDirective, { static: false, read: TemplateRef })
  headerTemplate: NgbTableHeaderDirective;

  @ContentChild(NgbTableSelectActionsHeaderDirective, { static: false, read: TemplateRef })
  selectActionsHeaderTemplate: NgbTableSelectActionsHeaderDirective;

  @ContentChild(NgbTableHeadDirective, { static: false, read: TemplateRef })
  headTemplate: NgbTableHeadDirective;

  @ContentChild(NgbTableBodyRowDirective, { static: false, read: TemplateRef })
  bodyRowTemplate: NgbTableBodyRowDirective;

  @ContentChildren(NgbTableFooterRowDirective, { descendants: false })
  footerRowTemplates: QueryList<NgbTableFooterRowDirective>;

  @ContentChild(NgbTableFooterDirective, { static: false, read: TemplateRef })
  footerTemplate: NgbTableFooterDirective;

  constructor() { }

  ngOnInit() {
  }

  rowTracker = (index: any, row: Row) => {
    const rowId = row[this.rowIdColumnName];

    return rowId + this.rows.length;
  }

  /*
   * Row selection specific methods:
   */

  isRowSelected(row: Row) {
    const rowId = row[this.rowIdColumnName];

    return this.selectedRowsIds.indexOf(rowId) > -1;
  }

  selectRow(row: Row) {
    const rowId = row[this.rowIdColumnName];
    const newSelectedRows = [...this.selectedRowsIds, rowId];

    this.selectedRowsIdsChange.emit(newSelectedRows);
  }

  selectAllRows() {
    const newSelectedRows = [];
    this.rows.forEach(row => {
      const rowId = row[this.rowIdColumnName];

      newSelectedRows.push(rowId);
    });

    this.selectedRowsIdsChange.emit(newSelectedRows);
  }

  unselectRow(row: Row) {
    const rowId = row[this.rowIdColumnName];
    const indexOfRowId = this.selectedRowsIds.indexOf(rowId);
    const newSelectedRows = [...this.selectedRowsIds];
    newSelectedRows.splice(indexOfRowId, 1);

    this.selectedRowsIdsChange.emit(newSelectedRows);
  }

  unselectAllRows() {
    this.selectedRowsIdsChange.emit([]);
  }

  toggleRowSelection(row: Row) {
    if (this.isRowSelected(row)) {
      this.unselectRow(row);
    } else {
      this.selectRow(row);
    }
  }

  toggleSelectAllRows() {
    if (this.areAllRowsSelected) {
      this.unselectAllRows();
    } else {
      this.selectAllRows();
    }
  }

  get areAllRowsSelected() {
    let selectedRowsCount = 0;
    this.rows.forEach(row => {
      const rowId = row[this.rowIdColumnName];
      if (this.selectedRowsIds.indexOf(rowId) > -1) {
        selectedRowsCount++;
      }
    });

    return selectedRowsCount === this.rows.length && this.rows.length;
  }
}
