import { OnInit, QueryList, EventEmitter } from '@angular/core';
import { NgbTableHeaderDirective } from './children-selectors/ngb-table-header.directive';
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
    selectedRowsIds: string[] | number[];
    selectedRowsIdsChange: EventEmitter<(string | number)[]>;
    headerTemplate: NgbTableHeaderDirective;
    selectActionsHeaderTemplate: NgbTableSelectActionsHeaderDirective;
    headTemplate: NgbTableHeadDirective;
    bodyRowTemplate: NgbTableBodyRowDirective;
    footerRowTemplates: QueryList<NgbTableFooterRowDirective>;
    footerTemplate: NgbTableFooterDirective;
    constructor();
    ngOnInit(): void;
    rowTracker: (index: any, row: object) => any;
    isRowSelected(row: Row): boolean;
    selectRow(row: Row): void;
    selectAllRows(): void;
    unselectRow(row: Row): void;
    unselectAllRows(): void;
    toggleRowSelection(row: Row): void;
    toggleSelectAllRows(): void;
    readonly areAllRowsSelected: number;
}
export {};
