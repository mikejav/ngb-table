/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChild, TemplateRef, ContentChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { NgbTableHeaderDirective } from './children-selectors/ngb-table-header.directive';
import { NgbTableSubheaderDirective } from './children-selectors/ngb-table-subheader.directive';
import { NgbTableSelectActionsHeaderDirective } from './children-selectors/ngb-table-select-actions-header.directive';
import { NgbTableHeadDirective } from './children-selectors/ngb-table-head.directive';
import { NgbTableBodyRowDirective } from './children-selectors/ngb-table-body-row.directive';
import { NgbTableFooterRowDirective } from './children-selectors/ngb-table-footer-row.directive';
import { NgbTableFooterDirective } from './children-selectors/ngb-table-footer.directive';
var NgbTableComponent = /** @class */ (function () {
    function NgbTableComponent() {
        var _this = this;
        this.rowIdColumnName = 'id';
        this.selectable = false;
        this.selectedRowsIds = [];
        this.selectedRowsIdsChange = new EventEmitter();
        this.rowTracker = (/**
         * @param {?} index
         * @param {?} row
         * @return {?}
         */
        function (index, row) {
            /** @type {?} */
            var rowId = row[_this.rowIdColumnName];
            return rowId + _this.rows.length;
        });
    }
    /**
     * @return {?}
     */
    NgbTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /*
     * Row selection specific methods:
     */
    /*
       * Row selection specific methods:
       */
    /**
     * @param {?} row
     * @return {?}
     */
    NgbTableComponent.prototype.isRowSelected = /*
       * Row selection specific methods:
       */
    /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var rowId = row[this.rowIdColumnName];
        return this.selectedRowsIds.indexOf(rowId) > -1;
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NgbTableComponent.prototype.selectRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var rowId = row[this.rowIdColumnName];
        /** @type {?} */
        var newSelectedRows = tslib_1.__spread(this.selectedRowsIds, [rowId]);
        this.selectedRowsIdsChange.emit(newSelectedRows);
    };
    /**
     * @return {?}
     */
    NgbTableComponent.prototype.selectAllRows = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var newSelectedRows = [];
        this.rows.forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            /** @type {?} */
            var rowId = row[_this.rowIdColumnName];
            newSelectedRows.push(rowId);
        }));
        this.selectedRowsIdsChange.emit(newSelectedRows);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NgbTableComponent.prototype.unselectRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var rowId = row[this.rowIdColumnName];
        /** @type {?} */
        var indexOfRowId = this.selectedRowsIds.indexOf(rowId);
        /** @type {?} */
        var newSelectedRows = tslib_1.__spread(this.selectedRowsIds);
        newSelectedRows.splice(indexOfRowId, 1);
        this.selectedRowsIdsChange.emit(newSelectedRows);
    };
    /**
     * @return {?}
     */
    NgbTableComponent.prototype.unselectAllRows = /**
     * @return {?}
     */
    function () {
        this.selectedRowsIdsChange.emit([]);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NgbTableComponent.prototype.toggleRowSelection = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        if (this.isRowSelected(row)) {
            this.unselectRow(row);
        }
        else {
            this.selectRow(row);
        }
    };
    /**
     * @return {?}
     */
    NgbTableComponent.prototype.toggleSelectAllRows = /**
     * @return {?}
     */
    function () {
        if (this.areAllRowsSelected) {
            this.unselectAllRows();
        }
        else {
            this.selectAllRows();
        }
    };
    Object.defineProperty(NgbTableComponent.prototype, "areAllRowsSelected", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var selectedRowsCount = 0;
            this.rows.forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                /** @type {?} */
                var rowId = row[_this.rowIdColumnName];
                if (_this.selectedRowsIds.indexOf(rowId) > -1) {
                    selectedRowsCount++;
                }
            }));
            return selectedRowsCount === this.rows.length && this.rows.length;
        },
        enumerable: true,
        configurable: true
    });
    NgbTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngb-table',
                    template: "<div class=\"card ngbTableRoot\" [ngClass]=\"{'border-primary': selectedRowsIds.length }\">\n  <div class=\"card-header\" [ngClass]=\"{'bg-primary text-light': selectedRowsIds.length && selectActionsHeaderTemplate}\"\n    *ngIf=\"headerTemplate\">\n    <ng-container *ngIf=\"selectedRowsIds.length && selectActionsHeaderTemplate; else noRowsSelected\">\n      <ng-container *ngTemplateOutlet=\"selectActionsHeaderTemplate\"></ng-container>\n    </ng-container>\n    <ng-template #noRowsSelected>\n      <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n    </ng-template>\n  </div>\n\n  <ng-container *ngFor=\"let subHeaderTemplate of subheaderTemplates\">\n    <div class=\"card-header\">\n      <ng-container *ngTemplateOutlet=\"subHeaderTemplate.templateRef\"></ng-container>\n    </div>\n  </ng-container>\n\n  <table class=\"table table-responsive m-0\">\n\n    <thead>\n      <tr>\n        <th class=\"w-01 align-top\" *ngIf=\"selectable\">\n          <ngb-checkbox [checked]=\"areAllRowsSelected\" [disabled]=\"!rows.length\" (checkChange)=\"toggleSelectAllRows()\">\n          </ngb-checkbox>\n        </th>\n        <ng-container *ngTemplateOutlet=\"headTemplate\"></ng-container>\n      </tr>\n    </thead>\n\n    <tbody>\n      <ng-container *ngIf=\"rows.length\">\n        <ng-container *ngFor=\"let row of rows; trackBy: rowTracker\">\n          <tr [ngClass]=\"{'table-primary': isRowSelected(row)}\">\n            <td class=\"align-middle\" *ngIf=\"selectable\">\n              <ngb-checkbox [checked]=\"isRowSelected(row)\" (checkChange)=\"toggleRowSelection(row)\"></ngb-checkbox>\n            </td>\n            <ng-container *ngTemplateOutlet=\"bodyRowTemplate; context: { $implicit: row }\"></ng-container>\n          </tr>\n        </ng-container>\n        <ng-container *ngFor=\"let footerRowTemplate of footerRowTemplates\">\n          <tr>\n            <td *ngIf=\"selectable\"></td><!-- empty table cell to fill no checkbox space -->\n            <ng-container *ngTemplateOutlet=\"footerRowTemplate.templateRef\"></ng-container>\n          </tr>\n        </ng-container>\n      </ng-container>\n    </tbody>\n\n  </table>\n\n  <div class=\"card-footer\" *ngIf=\"footerTemplate\">\n    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n  </div>\n\n</div>",
                    styles: [".w-01{width:1%}"]
                }] }
    ];
    /** @nocollapse */
    NgbTableComponent.ctorParameters = function () { return []; };
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
    return NgbTableComponent;
}());
export { NgbTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nYi10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ2ItdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBVSxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQ3RHLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBSzFGO0lBc0NFO1FBQUEsaUJBQWlCO1FBOUJSLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsb0JBQWUsR0FBd0IsRUFBRSxDQUFDO1FBQ3pDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBZ0MxRSxlQUFVOzs7OztRQUFHLFVBQUMsS0FBVSxFQUFFLEdBQVE7O2dCQUMxQixLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUM7WUFFdkMsT0FBTyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQyxFQUFBO0lBVGUsQ0FBQzs7OztJQUVqQixvQ0FBUTs7O0lB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QUUxQzs7Ozs7dUJBR0UsS0FBSztrQ0FDTCxLQUFLOzZCQUNMLEtBQUs7a0NBQ0wsS0FBSzt3Q0FDTCxNQUFNO2lDQU1OLFlBQVksU0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtxQ0FHMUUsZUFBZSxTQUFDLDBCQUEwQixFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTs4Q0FHbEUsWUFBWSxTQUFDLG9DQUFvQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOytCQUd2RixZQUFZLFNBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7a0NBR3hFLFlBQVksU0FBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtxQ0FHM0UsZUFBZSxTQUFDLDBCQUEwQixFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtpQ0FHbEUsWUFBWSxTQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOztJQWtGN0Usd0JBQUM7Q0FBQSxBQXJIRCxJQXFIQztTQWhIWSxpQkFBaUI7OztJQUU1QixpQ0FBcUI7O0lBQ3JCLDRDQUFnQzs7SUFDaEMsdUNBQTRCOztJQUM1Qiw0Q0FBbUQ7O0lBQ25ELGtEQUEwRTs7SUFNMUUsMkNBQ3dDOztJQUV4QywrQ0FDMEQ7O0lBRTFELHdEQUNrRTs7SUFFbEUseUNBQ29DOztJQUVwQyw0Q0FDMEM7O0lBRTFDLCtDQUMwRDs7SUFFMUQsMkNBQ3dDOztJQU94Qyx1Q0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ2JUYWJsZUhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nYlRhYmxlU3ViaGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLXN1YmhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVTZWxlY3RBY3Rpb25zSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLXNlbGVjdC1hY3Rpb25zLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVIZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWhlYWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nYlRhYmxlQm9keVJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1ib2R5LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVGb290ZXJSb3dEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtZm9vdGVyLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtZm9vdGVyLmRpcmVjdGl2ZSc7XG5cblxudHlwZSBSb3cgPSBvYmplY3Q7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nYi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ2ItdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ2ItdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ2JUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcm93czogUm93W107XG4gIEBJbnB1dCgpIHJvd0lkQ29sdW1uTmFtZSA9ICdpZCc7XG4gIEBJbnB1dCgpIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0ZWRSb3dzSWRzOiAoc3RyaW5nIHwgbnVtYmVyKVtdID0gW107XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFJvd3NJZHNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPChzdHJpbmcgfCBudW1iZXIpW10+KCk7XG5cbiAgLypcbiAgICogQ2xpZW50IGRlZmluZWQgdGVtcGxhdGVzOlxuICAgKi9cblxuICBAQ29udGVudENoaWxkKE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGhlYWRlclRlbXBsYXRlOiBOZ2JUYWJsZUhlYWRlckRpcmVjdGl2ZTtcblxuICBAQ29udGVudENoaWxkcmVuKE5nYlRhYmxlU3ViaGVhZGVyRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBzdWJoZWFkZXJUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOZ2JUYWJsZVN1YmhlYWRlckRpcmVjdGl2ZT47XG5cbiAgQENvbnRlbnRDaGlsZChOZ2JUYWJsZVNlbGVjdEFjdGlvbnNIZWFkZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgc2VsZWN0QWN0aW9uc0hlYWRlclRlbXBsYXRlOiBOZ2JUYWJsZVNlbGVjdEFjdGlvbnNIZWFkZXJEaXJlY3RpdmU7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2JUYWJsZUhlYWREaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaGVhZFRlbXBsYXRlOiBOZ2JUYWJsZUhlYWREaXJlY3RpdmU7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2JUYWJsZUJvZHlSb3dEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgYm9keVJvd1RlbXBsYXRlOiBOZ2JUYWJsZUJvZHlSb3dEaXJlY3RpdmU7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOZ2JUYWJsZUZvb3RlclJvd0RpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogZmFsc2UgfSlcbiAgZm9vdGVyUm93VGVtcGxhdGVzOiBRdWVyeUxpc3Q8TmdiVGFibGVGb290ZXJSb3dEaXJlY3RpdmU+O1xuXG4gIEBDb250ZW50Q2hpbGQoTmdiVGFibGVGb290ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgZm9vdGVyVGVtcGxhdGU6IE5nYlRhYmxlRm9vdGVyRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICByb3dUcmFja2VyID0gKGluZGV4OiBhbnksIHJvdzogUm93KSA9PiB7XG4gICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuXG4gICAgcmV0dXJuIHJvd0lkICsgdGhpcy5yb3dzLmxlbmd0aDtcbiAgfVxuXG4gIC8qXG4gICAqIFJvdyBzZWxlY3Rpb24gc3BlY2lmaWMgbWV0aG9kczpcbiAgICovXG5cbiAgaXNSb3dTZWxlY3RlZChyb3c6IFJvdykge1xuICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcblxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93c0lkcy5pbmRleE9mKHJvd0lkKSA+IC0xO1xuICB9XG5cbiAgc2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkUm93cyA9IFsuLi50aGlzLnNlbGVjdGVkUm93c0lkcywgcm93SWRdO1xuXG4gICAgdGhpcy5zZWxlY3RlZFJvd3NJZHNDaGFuZ2UuZW1pdChuZXdTZWxlY3RlZFJvd3MpO1xuICB9XG5cbiAgc2VsZWN0QWxsUm93cygpIHtcbiAgICBjb25zdCBuZXdTZWxlY3RlZFJvd3MgPSBbXTtcbiAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuXG4gICAgICBuZXdTZWxlY3RlZFJvd3MucHVzaChyb3dJZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlbGVjdGVkUm93c0lkc0NoYW5nZS5lbWl0KG5ld1NlbGVjdGVkUm93cyk7XG4gIH1cblxuICB1bnNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcbiAgICBjb25zdCBpbmRleE9mUm93SWQgPSB0aGlzLnNlbGVjdGVkUm93c0lkcy5pbmRleE9mKHJvd0lkKTtcbiAgICBjb25zdCBuZXdTZWxlY3RlZFJvd3MgPSBbLi4udGhpcy5zZWxlY3RlZFJvd3NJZHNdO1xuICAgIG5ld1NlbGVjdGVkUm93cy5zcGxpY2UoaW5kZXhPZlJvd0lkLCAxKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzSWRzQ2hhbmdlLmVtaXQobmV3U2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIHVuc2VsZWN0QWxsUm93cygpIHtcbiAgICB0aGlzLnNlbGVjdGVkUm93c0lkc0NoYW5nZS5lbWl0KFtdKTtcbiAgfVxuXG4gIHRvZ2dsZVJvd1NlbGVjdGlvbihyb3c6IFJvdykge1xuICAgIGlmICh0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgdGhpcy51bnNlbGVjdFJvdyhyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdFJvdyhyb3cpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdEFsbFJvd3MoKSB7XG4gICAgaWYgKHRoaXMuYXJlQWxsUm93c1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnVuc2VsZWN0QWxsUm93cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbFJvd3MoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYXJlQWxsUm93c1NlbGVjdGVkKCkge1xuICAgIGxldCBzZWxlY3RlZFJvd3NDb3VudCA9IDA7XG4gICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkUm93c0lkcy5pbmRleE9mKHJvd0lkKSA+IC0xKSB7XG4gICAgICAgIHNlbGVjdGVkUm93c0NvdW50Kys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRSb3dzQ291bnQgPT09IHRoaXMucm93cy5sZW5ndGggJiYgdGhpcy5yb3dzLmxlbmd0aDtcbiAgfVxufVxuIl19