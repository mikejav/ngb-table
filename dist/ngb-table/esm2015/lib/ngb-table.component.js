/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, TemplateRef, ContentChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { NgbTableHeaderDirective } from './children-selectors/ngb-table-header.directive';
import { NgbTableSelectActionsHeaderDirective } from './children-selectors/ngb-table-select-actions-header.directive';
import { NgbTableHeadDirective } from './children-selectors/ngb-table-head.directive';
import { NgbTableBodyRowDirective } from './children-selectors/ngb-table-body-row.directive';
import { NgbTableFooterRowDirective } from './children-selectors/ngb-table-footer-row.directive';
import { NgbTableFooterDirective } from './children-selectors/ngb-table-footer.directive';
export class NgbTableComponent {
    constructor() {
        this.rowIdColumnName = 'id';
        this.selectable = false;
        this.selectedRowsIds = [];
        this.selectedRowsIdsChange = new EventEmitter();
        this.rowTracker = (/**
         * @param {?} index
         * @param {?} row
         * @return {?}
         */
        (index, row) => {
            /** @type {?} */
            const rowId = row[this.rowIdColumnName];
            return rowId + this.rows.length;
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /*
       * Row selection specific methods:
       */
    /**
     * @param {?} row
     * @return {?}
     */
    isRowSelected(row) {
        /** @type {?} */
        const rowId = row[this.rowIdColumnName];
        return this.selectedRowsIds.indexOf(rowId) > -1;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    selectRow(row) {
        /** @type {?} */
        const rowId = row[this.rowIdColumnName];
        /** @type {?} */
        const newSelectedRows = [...this.selectedRowsIds, rowId];
        this.selectedRowsIdsChange.emit(newSelectedRows);
    }
    /**
     * @return {?}
     */
    selectAllRows() {
        /** @type {?} */
        const newSelectedRows = [];
        this.rows.forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => {
            /** @type {?} */
            const rowId = row[this.rowIdColumnName];
            newSelectedRows.push(rowId);
        }));
        this.selectedRowsIdsChange.emit(newSelectedRows);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    unselectRow(row) {
        /** @type {?} */
        const rowId = row[this.rowIdColumnName];
        /** @type {?} */
        const indexOfRowId = this.selectedRowsIds.indexOf(rowId);
        /** @type {?} */
        const newSelectedRows = [...this.selectedRowsIds];
        newSelectedRows.splice(indexOfRowId, 1);
        this.selectedRowsIdsChange.emit(newSelectedRows);
    }
    /**
     * @return {?}
     */
    unselectAllRows() {
        this.selectedRowsIdsChange.emit([]);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    toggleRowSelection(row) {
        if (this.isRowSelected(row)) {
            this.unselectRow(row);
        }
        else {
            this.selectRow(row);
        }
    }
    /**
     * @return {?}
     */
    toggleSelectAllRows() {
        if (this.areAllRowsSelected) {
            this.unselectAllRows();
        }
        else {
            this.selectAllRows();
        }
    }
    /**
     * @return {?}
     */
    get areAllRowsSelected() {
        /** @type {?} */
        let selectedRowsCount = 0;
        this.rows.forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => {
            /** @type {?} */
            const rowId = row[this.rowIdColumnName];
            if (this.selectedRowsIds.indexOf(rowId) > -1) {
                selectedRowsCount++;
            }
        }));
        return selectedRowsCount === this.rows.length && this.rows.length;
    }
}
NgbTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngb-table',
                template: "<div\n  class=\"card ngbTableRoot\"\n  [ngClass]=\"{'border-primary': selectedRowsIds.length }\"\n>\n  <div\n    class=\"card-header\"\n    [ngClass]=\"{'bg-primary text-light': selectedRowsIds.length && selectActionsHeaderTemplate}\"\n    *ngIf=\"headerTemplate\"\n  >\n    <ng-container *ngIf=\"selectedRowsIds.length && selectActionsHeaderTemplate; else noRowsSelected\">\n      <ng-container *ngTemplateOutlet=\"selectActionsHeaderTemplate\"></ng-container>\n    </ng-container>\n    <ng-template #noRowsSelected>\n      <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n    </ng-template>\n  </div>\n\n  <table class=\"table m-0\">\n\n    <thead>\n      <tr>\n        <th class=\"w-01 align-top\" *ngIf=\"selectable\">\n          <ngb-checkbox [checked]=\"areAllRowsSelected\" [disabled]=\"!rows.length\" (checkChange)=\"toggleSelectAllRows()\"></ngb-checkbox>\n        </th>\n        <ng-container *ngTemplateOutlet=\"headTemplate\"></ng-container>\n      </tr>\n    </thead>\n\n    <tbody>\n      <ng-container *ngIf=\"rows.length\">\n        <ng-container *ngFor=\"let row of rows; trackBy: rowTracker\">\n          <tr [ngClass]=\"{'table-primary': isRowSelected(row)}\">\n            <td class=\"align-middle\" *ngIf=\"selectable\">\n              <ngb-checkbox [checked]=\"isRowSelected(row)\" (checkChange)=\"toggleRowSelection(row)\"></ngb-checkbox>\n            </td>\n            <ng-container *ngTemplateOutlet=\"bodyRowTemplate; context: { $implicit: row }\"></ng-container>\n          </tr>\n        </ng-container>\n        <ng-container *ngFor=\"let footerRowTemplate of footerRowTemplates\">\n          <tr>\n            <td *ngIf=\"selectable\"></td><!-- empty table cell to fill no checkbox space -->\n            <ng-container *ngTemplateOutlet=\"footerRowTemplate.templateRef\"></ng-container>\n          </tr>\n        </ng-container>\n      </ng-container>\n    </tbody>\n  \n  </table>\n\n  <div class=\"card-footer\" *ngIf=\"footerTemplate\">\n    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n  </div>\n\n</div>\n",
                styles: [".w-01{width:1%}"]
            }] }
];
/** @nocollapse */
NgbTableComponent.ctorParameters = () => [];
NgbTableComponent.propDecorators = {
    rows: [{ type: Input }],
    rowIdColumnName: [{ type: Input }],
    selectable: [{ type: Input }],
    selectedRowsIds: [{ type: Input }],
    selectedRowsIdsChange: [{ type: Output }],
    headerTemplate: [{ type: ContentChild, args: [NgbTableHeaderDirective, { static: false, read: TemplateRef },] }],
    selectActionsHeaderTemplate: [{ type: ContentChild, args: [NgbTableSelectActionsHeaderDirective, { static: false, read: TemplateRef },] }],
    headTemplate: [{ type: ContentChild, args: [NgbTableHeadDirective, { static: false, read: TemplateRef },] }],
    bodyRowTemplate: [{ type: ContentChild, args: [NgbTableBodyRowDirective, { static: false, read: TemplateRef },] }],
    footerRowTemplates: [{ type: ContentChildren, args: [NgbTableFooterRowDirective, { descendants: false },] }],
    footerTemplate: [{ type: ContentChild, args: [NgbTableFooterDirective, { static: false, read: TemplateRef },] }]
};
if (false) {
    /** @type {?} */
    NgbTableComponent.prototype.rows;
    /** @type {?} */
    NgbTableComponent.prototype.rowIdColumnName;
    /** @type {?} */
    NgbTableComponent.prototype.selectable;
    /** @type {?} */
    NgbTableComponent.prototype.selectedRowsIds;
    /** @type {?} */
    NgbTableComponent.prototype.selectedRowsIdsChange;
    /** @type {?} */
    NgbTableComponent.prototype.headerTemplate;
    /** @type {?} */
    NgbTableComponent.prototype.selectActionsHeaderTemplate;
    /** @type {?} */
    NgbTableComponent.prototype.headTemplate;
    /** @type {?} */
    NgbTableComponent.prototype.bodyRowTemplate;
    /** @type {?} */
    NgbTableComponent.prototype.footerRowTemplates;
    /** @type {?} */
    NgbTableComponent.prototype.footerTemplate;
    /** @type {?} */
    NgbTableComponent.prototype.rowTracker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nYi10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ2ItdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0SSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN0SCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQVUxRixNQUFNLE9BQU8saUJBQWlCO0lBOEI1QjtRQTNCUyxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG9CQUFlLEdBQXdCLEVBQUUsQ0FBQztRQUN6QywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQTZCMUUsZUFBVTs7Ozs7UUFBRyxDQUFDLEtBQVUsRUFBRSxHQUFRLEVBQUUsRUFBRTs7a0JBQzlCLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUV2QyxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxDQUFDLEVBQUE7SUFUZSxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7Ozs7OztJQVlELGFBQWEsQ0FBQyxHQUFR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RUFBRSxXQUFXLEVBQUU7MENBRzFFLFlBQVksU0FBQyxvQ0FBb0MsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTsyQkFHdkYsWUFBWSxTQUFDLHFCQUFxQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzhCQUd4RSxZQUFZLFNBQUMsd0JBQXdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7aUNBRzNFLGVBQWUsU0FBQywwQkFBMEIsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7NkJBR2xFLFlBQVksU0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7OztJQXpCM0UsaUNBQXFCOztJQUNyQiw0Q0FBZ0M7O0lBQ2hDLHVDQUE0Qjs7SUFDNUIsNENBQW1EOztJQUNuRCxrREFBMEU7O0lBTTFFLDJDQUN3Qzs7SUFFeEMsd0RBQ2tFOztJQUVsRSx5Q0FDb0M7O0lBRXBDLDRDQUMwQzs7SUFFMUMsK0NBQzBEOztJQUUxRCwyQ0FDd0M7O0lBT3hDLHVDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdiVGFibGVIZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtaGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZVNlbGVjdEFjdGlvbnNIZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtc2VsZWN0LWFjdGlvbnMtaGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZUhlYWREaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtaGVhZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVCb2R5Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWJvZHktcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZUZvb3RlclJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1mb290ZXItcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZUZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1mb290ZXIuZGlyZWN0aXZlJztcblxuXG50eXBlIFJvdyA9IG9iamVjdDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdiLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nYi10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nYi10YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nYlRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSByb3dzOiBSb3dbXTtcbiAgQElucHV0KCkgcm93SWRDb2x1bW5OYW1lID0gJ2lkJztcbiAgQElucHV0KCkgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RlZFJvd3NJZHM6IChzdHJpbmcgfCBudW1iZXIpW10gPSBbXTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkUm93c0lkc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8KHN0cmluZyB8IG51bWJlcilbXT4oKTtcblxuICAvKlxuICAgKiBDbGllbnQgZGVmaW5lZCB0ZW1wbGF0ZXM6XG4gICAqL1xuXG4gIEBDb250ZW50Q2hpbGQoTmdiVGFibGVIZWFkZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaGVhZGVyVGVtcGxhdGU6IE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlO1xuXG4gIEBDb250ZW50Q2hpbGQoTmdiVGFibGVTZWxlY3RBY3Rpb25zSGVhZGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHNlbGVjdEFjdGlvbnNIZWFkZXJUZW1wbGF0ZTogTmdiVGFibGVTZWxlY3RBY3Rpb25zSGVhZGVyRGlyZWN0aXZlO1xuXG4gIEBDb250ZW50Q2hpbGQoTmdiVGFibGVIZWFkRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGhlYWRUZW1wbGF0ZTogTmdiVGFibGVIZWFkRGlyZWN0aXZlO1xuXG4gIEBDb250ZW50Q2hpbGQoTmdiVGFibGVCb2R5Um93RGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGJvZHlSb3dUZW1wbGF0ZTogTmdiVGFibGVCb2R5Um93RGlyZWN0aXZlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmdiVGFibGVGb290ZXJSb3dEaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gIGZvb3RlclJvd1RlbXBsYXRlczogUXVlcnlMaXN0PE5nYlRhYmxlRm9vdGVyUm93RGlyZWN0aXZlPjtcblxuICBAQ29udGVudENoaWxkKE5nYlRhYmxlRm9vdGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGZvb3RlclRlbXBsYXRlOiBOZ2JUYWJsZUZvb3RlckRpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcm93VHJhY2tlciA9IChpbmRleDogYW55LCByb3c6IFJvdykgPT4ge1xuICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcblxuICAgIHJldHVybiByb3dJZCArIHRoaXMucm93cy5sZW5ndGg7XG4gIH1cblxuICAvKlxuICAgKiBSb3cgc2VsZWN0aW9uIHNwZWNpZmljIG1ldGhvZHM6XG4gICAqL1xuXG4gIGlzUm93U2VsZWN0ZWQocm93OiBSb3cpIHtcbiAgICBjb25zdCByb3dJZCA9IHJvd1t0aGlzLnJvd0lkQ29sdW1uTmFtZV07XG5cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJvd3NJZHMuaW5kZXhPZihyb3dJZCkgPiAtMTtcbiAgfVxuXG4gIHNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcbiAgICBjb25zdCBuZXdTZWxlY3RlZFJvd3MgPSBbLi4udGhpcy5zZWxlY3RlZFJvd3NJZHMsIHJvd0lkXTtcblxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzSWRzQ2hhbmdlLmVtaXQobmV3U2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIHNlbGVjdEFsbFJvd3MoKSB7XG4gICAgY29uc3QgbmV3U2VsZWN0ZWRSb3dzID0gW107XG4gICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcblxuICAgICAgbmV3U2VsZWN0ZWRSb3dzLnB1c2gocm93SWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3RlZFJvd3NJZHNDaGFuZ2UuZW1pdChuZXdTZWxlY3RlZFJvd3MpO1xuICB9XG5cbiAgdW5zZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICBjb25zdCByb3dJZCA9IHJvd1t0aGlzLnJvd0lkQ29sdW1uTmFtZV07XG4gICAgY29uc3QgaW5kZXhPZlJvd0lkID0gdGhpcy5zZWxlY3RlZFJvd3NJZHMuaW5kZXhPZihyb3dJZCk7XG4gICAgY29uc3QgbmV3U2VsZWN0ZWRSb3dzID0gWy4uLnRoaXMuc2VsZWN0ZWRSb3dzSWRzXTtcbiAgICBuZXdTZWxlY3RlZFJvd3Muc3BsaWNlKGluZGV4T2ZSb3dJZCwgMSk7XG5cbiAgICB0aGlzLnNlbGVjdGVkUm93c0lkc0NoYW5nZS5lbWl0KG5ld1NlbGVjdGVkUm93cyk7XG4gIH1cblxuICB1bnNlbGVjdEFsbFJvd3MoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFJvd3NJZHNDaGFuZ2UuZW1pdChbXSk7XG4gIH1cblxuICB0b2dnbGVSb3dTZWxlY3Rpb24ocm93OiBSb3cpIHtcbiAgICBpZiAodGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgIHRoaXMudW5zZWxlY3RSb3cocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RSb3cocm93KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVTZWxlY3RBbGxSb3dzKCkge1xuICAgIGlmICh0aGlzLmFyZUFsbFJvd3NTZWxlY3RlZCkge1xuICAgICAgdGhpcy51bnNlbGVjdEFsbFJvd3MoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RBbGxSb3dzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFyZUFsbFJvd3NTZWxlY3RlZCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRSb3dzQ291bnQgPSAwO1xuICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCByb3dJZCA9IHJvd1t0aGlzLnJvd0lkQ29sdW1uTmFtZV07XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFJvd3NJZHMuaW5kZXhPZihyb3dJZCkgPiAtMSkge1xuICAgICAgICBzZWxlY3RlZFJvd3NDb3VudCsrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkUm93c0NvdW50ID09PSB0aGlzLnJvd3MubGVuZ3RoICYmIHRoaXMucm93cy5sZW5ndGg7XG4gIH1cbn1cbiJdfQ==