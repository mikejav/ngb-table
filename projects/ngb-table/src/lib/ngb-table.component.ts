import {
  Component, OnInit, ContentChild, TemplateRef, ContentChildren, QueryList, Input, Output, EventEmitter, Predicate
} from '@angular/core';
import { NgbTableHeaderDirective } from './children-selectors/ngb-table-header.directive';
import { NgbTableSubheaderDirective } from './children-selectors/ngb-table-subheader.directive';
import { NgbTableSelectActionsHeaderDirective } from './children-selectors/ngb-table-select-actions-header.directive';
import { NgbTableHeadDirective } from './children-selectors/ngb-table-head.directive';
import { NgbTableBodyRowDirective } from './children-selectors/ngb-table-body-row.directive';
import { NgbTableFooterRowDirective } from './children-selectors/ngb-table-footer-row.directive';
import { NgbTableFooterDirective } from './children-selectors/ngb-table-footer.directive';


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
  @Input() canSelectRowPredicate: Predicate<Row>;
  @Input() selectedRowsIds: (string | number)[] = [];
  @Output() selectedRowsIdsChange = new EventEmitter<(string | number)[]>();

  /*
   * Client defined templates:
   */

  @ContentChild(NgbTableHeaderDirective, { static: false, read: TemplateRef })
  headerTemplate: NgbTableHeaderDirective;

  @ContentChildren(NgbTableSubheaderDirective, { descendants: false })
  subheaderTemplates: QueryList<NgbTableSubheaderDirective>;

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

  private selectAllSelectableRows() {
    const newSelectedRows = [];
    this.rows.forEach(row => {
      const rowId = row[this.rowIdColumnName];

      if (this.canSelectRowPredicate(row)) {
        newSelectedRows.push(rowId);
      }
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
    if (this.areAllSelectableRowsSelected) {
      this.unselectAllRows();
    } else {
      this.selectAllSelectableRows();
    }
  }

  get areAllSelectableRowsSelected() {
    let selectedRowsCount = 0;
    this.rows.forEach(row => {
      const rowId = row[this.rowIdColumnName];
      if (this.selectedRowsIds.indexOf(rowId) > -1) {
        selectedRowsCount++;
      }
    });
    const selectableRows = this.rows.filter(this.canSelectRowPredicate);

    return selectedRowsCount === selectableRows.length && this.rows.length;
  }
}
