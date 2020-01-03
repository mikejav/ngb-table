/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, TemplateRef, ContentChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { NgbTableHeaderDirective } from './children-selectors/ngb-table-header.directive';
import { NgbTableSubheaderDirective } from './children-selectors/ngb-table-subheader.directive';
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
        this.canSelectRowPredicate = (/**
         * @return {?}
         */
        () => true);
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
     * @private
     * @return {?}
     */
    selectAllSelectableRows() {
        /** @type {?} */
        const newSelectedRows = [];
        this.rows.forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => {
            /** @type {?} */
            const rowId = row[this.rowIdColumnName];
            if (this.canSelectRowPredicate(row)) {
                newSelectedRows.push(rowId);
            }
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
        if (this.areAllSelectableRowsSelected) {
            this.unselectAllRows();
        }
        else {
            this.selectAllSelectableRows();
        }
    }
    /**
     * @return {?}
     */
    get areAllSelectableRowsSelected() {
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
        /** @type {?} */
        const selectableRows = this.rows.filter(this.canSelectRowPredicate);
        return selectedRowsCount === selectableRows.length && selectableRows.length;
    }
}
NgbTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngb-table',
                template: "<div class=\"card ngbTableRoot\" [ngClass]=\"{'border-primary': selectedRowsIds.length }\">\n  <div class=\"card-header\" [ngClass]=\"{'bg-primary text-light': selectedRowsIds.length && selectActionsHeaderTemplate}\"\n    *ngIf=\"headerTemplate\">\n    <ng-container *ngIf=\"selectedRowsIds.length && selectActionsHeaderTemplate; else noRowsSelected\">\n      <ng-container *ngTemplateOutlet=\"selectActionsHeaderTemplate\"></ng-container>\n    </ng-container>\n    <ng-template #noRowsSelected>\n      <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n    </ng-template>\n  </div>\n\n  <ng-container *ngFor=\"let subHeaderTemplate of subheaderTemplates\">\n    <div class=\"card-header\">\n      <ng-container *ngTemplateOutlet=\"subHeaderTemplate.templateRef\"></ng-container>\n    </div>\n  </ng-container>\n\n  <div class=\"table-responsive\">\n    <table class=\"table m-0\">\n\n      <thead>\n        <tr>\n          <th class=\"w-01 align-top\" *ngIf=\"selectable\">\n            <ngb-checkbox [checked]=\"areAllSelectableRowsSelected\" [disabled]=\"!rows.length\" (checkChange)=\"toggleSelectAllRows()\">\n            </ngb-checkbox>\n          </th>\n          <ng-container *ngTemplateOutlet=\"headTemplate\"></ng-container>\n        </tr>\n      </thead>\n\n      <tbody>\n        <ng-container *ngIf=\"rows.length\">\n          <ng-container *ngFor=\"let row of rows; trackBy: rowTracker\">\n            <tr [ngClass]=\"{'table-primary': isRowSelected(row)}\">\n              <td class=\"align-middle\" *ngIf=\"selectable\">\n                <ngb-checkbox\n                  [disabled]=\"!canSelectRowPredicate(row)\"\n                  [checked]=\"isRowSelected(row)\"\n                  (checkChange)=\"toggleRowSelection(row)\"\n                ></ngb-checkbox>\n              </td>\n              <ng-container *ngTemplateOutlet=\"bodyRowTemplate; context: { $implicit: row }\"></ng-container>\n            </tr>\n          </ng-container>\n          <ng-container *ngFor=\"let footerRowTemplate of footerRowTemplates\">\n            <tr>\n              <td *ngIf=\"selectable\"></td><!-- empty table cell to fill no checkbox space -->\n              <ng-container *ngTemplateOutlet=\"footerRowTemplate.templateRef\"></ng-container>\n            </tr>\n          </ng-container>\n        </ng-container>\n      </tbody>\n\n    </table>\n  </div>\n\n  <div class=\"card-footer\" *ngIf=\"footerTemplate\">\n    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n  </div>\n\n</div>",
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
    footerTemplate: [{ type: ContentChild, args: [NgbTableFooterDirective, { static: false, read: TemplateRef },] }],
    canSelectRowPredicate: [{ type: Input }]
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
    NgbTableComponent.prototype.canSelectRowPredicate;
    /** @type {?} */
    NgbTableComponent.prototype.rowTracker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nYi10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ2ItdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDdEcsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDMUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDaEcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDdEgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFVMUYsTUFBTSxPQUFPLGlCQUFpQjtJQW1DNUI7UUFoQ1Msb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUF3QixFQUFFLENBQUM7UUFDekMsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUEyQmpFLDBCQUFxQjs7O1FBQW1CLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQztRQU81RCxlQUFVOzs7OztRQUFHLENBQUMsS0FBVSxFQUFFLEdBQVEsRUFBRSxFQUFFOztrQkFDOUIsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRXZDLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJ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QyxNQUFNLENBQUM7SUFDOUUsQ0FBQzs7O1lBekhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsNitFQUF5Qzs7YUFFMUM7Ozs7O21CQUdFLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7b0NBQ0wsTUFBTTs2QkFNTixZQUFZLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7aUNBRzFFLGVBQWUsU0FBQywwQkFBMEIsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7MENBR2xFLFlBQVksU0FBQyxvQ0FBb0MsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTsyQkFHdkYsWUFBWSxTQUFDLHFCQUFxQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzhCQUd4RSxZQUFZLFNBQUMsd0JBQXdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7aUNBRzNFLGVBQWUsU0FBQywwQkFBMEIsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7NkJBR2xFLFlBQVksU0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtvQ0FHMUUsS0FBSzs7OztJQS9CTixpQ0FBcUI7O0lBQ3JCLDRDQUFnQzs7SUFDaEMsdUNBQTRCOztJQUM1Qiw0Q0FBbUQ7O0lBQ25ELGtEQUEwRTs7SUFNMUUsMkNBQ3dDOztJQUV4QywrQ0FDMEQ7O0lBRTFELHdEQUNrRTs7SUFFbEUseUNBQ29DOztJQUVwQyw0Q0FDMEM7O0lBRTFDLCtDQUMwRDs7SUFFMUQsMkNBQ3dDOztJQUV4QyxrREFBNEQ7O0lBTzVELHVDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFByZWRpY2F0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVTdWJoZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtc3ViaGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZVNlbGVjdEFjdGlvbnNIZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtc2VsZWN0LWFjdGlvbnMtaGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZUhlYWREaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtaGVhZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVCb2R5Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWJvZHktcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZUZvb3RlclJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1mb290ZXItcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZUZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1mb290ZXIuZGlyZWN0aXZlJztcblxuXG50eXBlIFJvdyA9IG9iamVjdDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdiLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nYi10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nYi10YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nYlRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSByb3dzOiBSb3dbXTtcbiAgQElucHV0KCkgcm93SWRDb2x1bW5OYW1lID0gJ2lkJztcbiAgQElucHV0KCkgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RlZFJvd3NJZHM6IChzdHJpbmcgfCBudW1iZXIpW10gPSBbXTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkUm93c0lkc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8KHN0cmluZyB8IG51bWJlcilbXT4oKTtcblxuICAvKlxuICAgKiBDbGllbnQgZGVmaW5lZCB0ZW1wbGF0ZXM6XG4gICAqL1xuXG4gIEBDb250ZW50Q2hpbGQoTmdiVGFibGVIZWFkZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaGVhZGVyVGVtcGxhdGU6IE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmdiVGFibGVTdWJoZWFkZXJEaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gIHN1YmhlYWRlclRlbXBsYXRlczogUXVlcnlMaXN0PE5nYlRhYmxlU3ViaGVhZGVyRGlyZWN0aXZlPjtcblxuICBAQ29udGVudENoaWxkKE5nYlRhYmxlU2VsZWN0QWN0aW9uc0hlYWRlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBzZWxlY3RBY3Rpb25zSGVhZGVyVGVtcGxhdGU6IE5nYlRhYmxlU2VsZWN0QWN0aW9uc0hlYWRlckRpcmVjdGl2ZTtcblxuICBAQ29udGVudENoaWxkKE5nYlRhYmxlSGVhZERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBoZWFkVGVtcGxhdGU6IE5nYlRhYmxlSGVhZERpcmVjdGl2ZTtcblxuICBAQ29udGVudENoaWxkKE5nYlRhYmxlQm9keVJvd0RpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBib2R5Um93VGVtcGxhdGU6IE5nYlRhYmxlQm9keVJvd0RpcmVjdGl2ZTtcblxuICBAQ29udGVudENoaWxkcmVuKE5nYlRhYmxlRm9vdGVyUm93RGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBmb290ZXJSb3dUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOZ2JUYWJsZUZvb3RlclJvd0RpcmVjdGl2ZT47XG5cbiAgQENvbnRlbnRDaGlsZChOZ2JUYWJsZUZvb3RlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBmb290ZXJUZW1wbGF0ZTogTmdiVGFibGVGb290ZXJEaXJlY3RpdmU7XG5cbiAgQElucHV0KCkgY2FuU2VsZWN0Um93UHJlZGljYXRlOiBQcmVkaWNhdGU8Um93PiA9ICgpID0+IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHJvd1RyYWNrZXIgPSAoaW5kZXg6IGFueSwgcm93OiBSb3cpID0+IHtcbiAgICBjb25zdCByb3dJZCA9IHJvd1t0aGlzLnJvd0lkQ29sdW1uTmFtZV07XG5cbiAgICByZXR1cm4gcm93SWQgKyB0aGlzLnJvd3MubGVuZ3RoO1xuICB9XG5cbiAgLypcbiAgICogUm93IHNlbGVjdGlvbiBzcGVjaWZpYyBtZXRob2RzOlxuICAgKi9cblxuICBpc1Jvd1NlbGVjdGVkKHJvdzogUm93KSB7XG4gICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3dzSWRzLmluZGV4T2Yocm93SWQpID4gLTE7XG4gIH1cblxuICBzZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICBjb25zdCByb3dJZCA9IHJvd1t0aGlzLnJvd0lkQ29sdW1uTmFtZV07XG4gICAgY29uc3QgbmV3U2VsZWN0ZWRSb3dzID0gWy4uLnRoaXMuc2VsZWN0ZWRSb3dzSWRzLCByb3dJZF07XG5cbiAgICB0aGlzLnNlbGVjdGVkUm93c0lkc0NoYW5nZS5lbWl0KG5ld1NlbGVjdGVkUm93cyk7XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdEFsbFNlbGVjdGFibGVSb3dzKCkge1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkUm93cyA9IFtdO1xuICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCByb3dJZCA9IHJvd1t0aGlzLnJvd0lkQ29sdW1uTmFtZV07XG5cbiAgICAgIGlmICh0aGlzLmNhblNlbGVjdFJvd1ByZWRpY2F0ZShyb3cpKSB7XG4gICAgICAgIG5ld1NlbGVjdGVkUm93cy5wdXNoKHJvd0lkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzSWRzQ2hhbmdlLmVtaXQobmV3U2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIHVuc2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuICAgIGNvbnN0IGluZGV4T2ZSb3dJZCA9IHRoaXMuc2VsZWN0ZWRSb3dzSWRzLmluZGV4T2Yocm93SWQpO1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkUm93cyA9IFsuLi50aGlzLnNlbGVjdGVkUm93c0lkc107XG4gICAgbmV3U2VsZWN0ZWRSb3dzLnNwbGljZShpbmRleE9mUm93SWQsIDEpO1xuXG4gICAgdGhpcy5zZWxlY3RlZFJvd3NJZHNDaGFuZ2UuZW1pdChuZXdTZWxlY3RlZFJvd3MpO1xuICB9XG5cbiAgdW5zZWxlY3RBbGxSb3dzKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dzSWRzQ2hhbmdlLmVtaXQoW10pO1xuICB9XG5cbiAgdG9nZ2xlUm93U2VsZWN0aW9uKHJvdzogUm93KSB7XG4gICAgaWYgKHRoaXMuaXNSb3dTZWxlY3RlZChyb3cpKSB7XG4gICAgICB0aGlzLnVuc2VsZWN0Um93KHJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0Um93KHJvdyk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlU2VsZWN0QWxsUm93cygpIHtcbiAgICBpZiAodGhpcy5hcmVBbGxTZWxlY3RhYmxlUm93c1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnVuc2VsZWN0QWxsUm93cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbFNlbGVjdGFibGVSb3dzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFyZUFsbFNlbGVjdGFibGVSb3dzU2VsZWN0ZWQoKSB7XG4gICAgbGV0IHNlbGVjdGVkUm93c0NvdW50ID0gMDtcbiAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRSb3dzSWRzLmluZGV4T2Yocm93SWQpID4gLTEpIHtcbiAgICAgICAgc2VsZWN0ZWRSb3dzQ291bnQrKztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBzZWxlY3RhYmxlUm93cyA9IHRoaXMucm93cy5maWx0ZXIodGhpcy5jYW5TZWxlY3RSb3dQcmVkaWNhdGUpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkUm93c0NvdW50ID09PSBzZWxlY3RhYmxlUm93cy5sZW5ndGggJiYgc2VsZWN0YWJsZVJvd3MubGVuZ3RoO1xuICB9XG59XG4iXX0=