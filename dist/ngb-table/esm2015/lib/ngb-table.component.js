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
import { NgbTableSubheaderDirective } from 'projects/ngb-table/src/lib/children-selectors/ngb-table-subheader.directive';
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
                template: "<div class=\"card ngbTableRoot\" [ngClass]=\"{'border-primary': selectedRowsIds.length }\">\n  <div class=\"card-header\" [ngClass]=\"{'bg-primary text-light': selectedRowsIds.length && selectActionsHeaderTemplate}\"\n    *ngIf=\"headerTemplate\">\n    <ng-container *ngIf=\"selectedRowsIds.length && selectActionsHeaderTemplate; else noRowsSelected\">\n      <ng-container *ngTemplateOutlet=\"selectActionsHeaderTemplate\"></ng-container>\n    </ng-container>\n    <ng-template #noRowsSelected>\n      <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n    </ng-template>\n  </div>\n\n  <ng-container *ngFor=\"let subHeaderTemplate of subheaderTemplates\">\n    <div class=\"card-header\">\n      <ng-container *ngTemplateOutlet=\"subHeaderTemplate.templateRef\"></ng-container>\n    </div>\n  </ng-container>\n\n  <table class=\"table table-responsive m-0\">\n\n    <thead>\n      <tr>\n        <th class=\"w-01 align-top\" *ngIf=\"selectable\">\n          <ngb-checkbox [checked]=\"areAllRowsSelected\" [disabled]=\"!rows.length\" (checkChange)=\"toggleSelectAllRows()\">\n          </ngb-checkbox>\n        </th>\n        <ng-container *ngTemplateOutlet=\"headTemplate\"></ng-container>\n      </tr>\n    </thead>\n\n    <tbody>\n      <ng-container *ngIf=\"rows.length\">\n        <ng-container *ngFor=\"let row of rows; trackBy: rowTracker\">\n          <tr [ngClass]=\"{'table-primary': isRowSelected(row)}\">\n            <td class=\"align-middle\" *ngIf=\"selectable\">\n              <ngb-checkbox [checked]=\"isRowSelected(row)\" (checkChange)=\"toggleRowSelection(row)\"></ngb-checkbox>\n            </td>\n            <ng-container *ngTemplateOutlet=\"bodyRowTemplate; context: { $implicit: row }\"></ng-container>\n          </tr>\n        </ng-container>\n        <ng-container *ngFor=\"let footerRowTemplate of footerRowTemplates\">\n          <tr>\n            <td *ngIf=\"selectable\"></td><!-- empty table cell to fill no checkbox space -->\n            <ng-container *ngTemplateOutlet=\"footerRowTemplate.templateRef\"></ng-container>\n          </tr>\n        </ng-container>\n      </ng-container>\n    </tbody>\n\n  </table>\n\n  <div class=\"card-footer\" *ngIf=\"footerTemplate\">\n    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n  </div>\n\n</div>",
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
    subheaderTemplates: [{ type: ContentChildren, args: [NgbTableSubheaderDirective, { descendants: false },] }],
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
    NgbTableComponent.prototype.subheaderTemplates;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nYi10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ2ItdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDdEcsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDMUYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDdEgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDMUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFVekgsTUFBTSxPQUFPLGlCQUFpQjtJQWlDNUI7UUE5QlMsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUF3QixFQUFFLENBQUM7UUFDekMsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFnQzFFLGVBQVU7Ozs7O1FBQUcsQ0FBQyxLQUFVLEVBQUUsR0FBUSxFQUFFLEVBQUU7O2tCQUM5QixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFdkMsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQyxFQUFBO0lBVGUsQ0FBQzs7OztJ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QUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2lDQUcxRSxlQUFlLFNBQUMsMEJBQTBCLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFOzBDQUdsRSxZQUFZLFNBQUMsb0NBQW9DLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7MkJBR3ZGLFlBQVksU0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs4QkFHeEUsWUFBWSxTQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2lDQUczRSxlQUFlLFNBQUMsMEJBQTBCLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFOzZCQUdsRSxZQUFZLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Ozs7SUE1QjNFLGlDQUFxQjs7SUFDckIsNENBQWdDOztJQUNoQyx1Q0FBNEI7O0lBQzVCLDRDQUFtRDs7SUFDbkQsa0RBQTBFOztJQU0xRSwyQ0FDd0M7O0lBRXhDLCtDQUMwRDs7SUFFMUQsd0RBQ2tFOztJQUVsRSx5Q0FDb0M7O0lBRXBDLDRDQUMwQzs7SUFFMUMsK0NBQzBEOztJQUUxRCwyQ0FDd0M7O0lBT3hDLHVDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVTZWxlY3RBY3Rpb25zSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLXNlbGVjdC1hY3Rpb25zLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVIZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWhlYWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nYlRhYmxlQm9keVJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1ib2R5LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVGb290ZXJSb3dEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtZm9vdGVyLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtZm9vdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZVN1YmhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJ3Byb2plY3RzL25nYi10YWJsZS9zcmMvbGliL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtc3ViaGVhZGVyLmRpcmVjdGl2ZSc7XG5cblxudHlwZSBSb3cgPSBvYmplY3Q7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nYi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ2ItdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ2ItdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ2JUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcm93czogUm93W107XG4gIEBJbnB1dCgpIHJvd0lkQ29sdW1uTmFtZSA9ICdpZCc7XG4gIEBJbnB1dCgpIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0ZWRSb3dzSWRzOiAoc3RyaW5nIHwgbnVtYmVyKVtdID0gW107XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFJvd3NJZHNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPChzdHJpbmcgfCBudW1iZXIpW10+KCk7XG5cbiAgLypcbiAgICogQ2xpZW50IGRlZmluZWQgdGVtcGxhdGVzOlxuICAgKi9cblxuICBAQ29udGVudENoaWxkKE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGhlYWRlclRlbXBsYXRlOiBOZ2JUYWJsZUhlYWRlckRpcmVjdGl2ZTtcblxuICBAQ29udGVudENoaWxkcmVuKE5nYlRhYmxlU3ViaGVhZGVyRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBzdWJoZWFkZXJUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOZ2JUYWJsZVN1YmhlYWRlckRpcmVjdGl2ZT47XG5cbiAgQENvbnRlbnRDaGlsZChOZ2JUYWJsZVNlbGVjdEFjdGlvbnNIZWFkZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgc2VsZWN0QWN0aW9uc0hlYWRlclRlbXBsYXRlOiBOZ2JUYWJsZVNlbGVjdEFjdGlvbnNIZWFkZXJEaXJlY3RpdmU7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2JUYWJsZUhlYWREaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaGVhZFRlbXBsYXRlOiBOZ2JUYWJsZUhlYWREaXJlY3RpdmU7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2JUYWJsZUJvZHlSb3dEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgYm9keVJvd1RlbXBsYXRlOiBOZ2JUYWJsZUJvZHlSb3dEaXJlY3RpdmU7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOZ2JUYWJsZUZvb3RlclJvd0RpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogZmFsc2UgfSlcbiAgZm9vdGVyUm93VGVtcGxhdGVzOiBRdWVyeUxpc3Q8TmdiVGFibGVGb290ZXJSb3dEaXJlY3RpdmU+O1xuXG4gIEBDb250ZW50Q2hpbGQoTmdiVGFibGVGb290ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgZm9vdGVyVGVtcGxhdGU6IE5nYlRhYmxlRm9vdGVyRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICByb3dUcmFja2VyID0gKGluZGV4OiBhbnksIHJvdzogUm93KSA9PiB7XG4gICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuXG4gICAgcmV0dXJuIHJvd0lkICsgdGhpcy5yb3dzLmxlbmd0aDtcbiAgfVxuXG4gIC8qXG4gICAqIFJvdyBzZWxlY3Rpb24gc3BlY2lmaWMgbWV0aG9kczpcbiAgICovXG5cbiAgaXNSb3dTZWxlY3RlZChyb3c6IFJvdykge1xuICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcblxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93c0lkcy5pbmRleE9mKHJvd0lkKSA+IC0xO1xuICB9XG5cbiAgc2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkUm93cyA9IFsuLi50aGlzLnNlbGVjdGVkUm93c0lkcywgcm93SWRdO1xuXG4gICAgdGhpcy5zZWxlY3RlZFJvd3NJZHNDaGFuZ2UuZW1pdChuZXdTZWxlY3RlZFJvd3MpO1xuICB9XG5cbiAgc2VsZWN0QWxsUm93cygpIHtcbiAgICBjb25zdCBuZXdTZWxlY3RlZFJvd3MgPSBbXTtcbiAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuXG4gICAgICBuZXdTZWxlY3RlZFJvd3MucHVzaChyb3dJZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlbGVjdGVkUm93c0lkc0NoYW5nZS5lbWl0KG5ld1NlbGVjdGVkUm93cyk7XG4gIH1cblxuICB1bnNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcbiAgICBjb25zdCBpbmRleE9mUm93SWQgPSB0aGlzLnNlbGVjdGVkUm93c0lkcy5pbmRleE9mKHJvd0lkKTtcbiAgICBjb25zdCBuZXdTZWxlY3RlZFJvd3MgPSBbLi4udGhpcy5zZWxlY3RlZFJvd3NJZHNdO1xuICAgIG5ld1NlbGVjdGVkUm93cy5zcGxpY2UoaW5kZXhPZlJvd0lkLCAxKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzSWRzQ2hhbmdlLmVtaXQobmV3U2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIHVuc2VsZWN0QWxsUm93cygpIHtcbiAgICB0aGlzLnNlbGVjdGVkUm93c0lkc0NoYW5nZS5lbWl0KFtdKTtcbiAgfVxuXG4gIHRvZ2dsZVJvd1NlbGVjdGlvbihyb3c6IFJvdykge1xuICAgIGlmICh0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgdGhpcy51bnNlbGVjdFJvdyhyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdFJvdyhyb3cpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdEFsbFJvd3MoKSB7XG4gICAgaWYgKHRoaXMuYXJlQWxsUm93c1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnVuc2VsZWN0QWxsUm93cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbFJvd3MoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYXJlQWxsUm93c1NlbGVjdGVkKCkge1xuICAgIGxldCBzZWxlY3RlZFJvd3NDb3VudCA9IDA7XG4gICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkUm93c0lkcy5pbmRleE9mKHJvd0lkKSA+IC0xKSB7XG4gICAgICAgIHNlbGVjdGVkUm93c0NvdW50Kys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRSb3dzQ291bnQgPT09IHRoaXMucm93cy5sZW5ndGggJiYgdGhpcy5yb3dzLmxlbmd0aDtcbiAgfVxufVxuIl19