import { OnInit, QueryList, EventEmitter, Predicate } from '@angular/core';
import { NgbTableHeaderDirective } from './children-selectors/ngb-table-header.directive';
import { NgbTableSubheaderDirective } from './children-selectors/ngb-table-subheader.directive';
import { NgbTableSelectActionsHeaderDirective } from './children-selectors/ngb-table-select-actions-header.directive';
import { NgbTableHeadDirective } from './children-selectors/ngb-table-head.directive';
import { NgbTableBodyRowDirective } from './children-selectors/ngb-table-body-row.directive';
import { NgbTableFooterRowDirective } from './children-selectors/ngb-table-footer-row.directive';
import { NgbTableFooterDirective } from './children-selectors/ngb-table-footer.directive';
declare type Row = object;
export declare class NgbTableComponent implements OnInit {
    rows: Row[];
    rowIdColumnName: string;
    selectable: boolean;
    selectedRowsIds: (string | number)[];
    selectedRowsIdsChange: EventEmitter<(string | number)[]>;
    headerTemplate: NgbTableHeaderDirective;
    subheaderTemplates: QueryList<NgbTableSubheaderDirective>;
    selectActionsHeaderTemplate: NgbTableSelectActionsHeaderDirective;
    headTemplate: NgbTableHeadDirective;
    bodyRowTemplate: NgbTableBodyRowDirective;
    footerRowTemplates: QueryList<NgbTableFooterRowDirective>;
    footerTemplate: NgbTableFooterDirective;
    canSelectRowPredicate: Predicate<Row>;
    constructor();
    ngOnInit(): void;
    rowTracker: (index: any, row: object) => any;
    isRowSelected(row: Row): boolean;
    selectRow(row: Row): void;
    private selectAllSelectableRows;
    unselectRow(row: Row): void;
    unselectAllRows(): void;
    toggleRowSelection(row: Row): void;
    toggleSelectAllRows(): void;
    readonly areAllSelectableRowsSelected: number;
}
export {};
