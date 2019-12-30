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
        this.canSelectRowPredicate = (/**
         * @return {?}
         */
        function () { return true; });
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
     * @private
     * @return {?}
     */
    NgbTableComponent.prototype.selectAllSelectableRows = /**
     * @private
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
            if (_this.canSelectRowPredicate(row)) {
                newSelectedRows.push(rowId);
            }
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
        if (this.areAllSelectableRowsSelected) {
            this.unselectAllRows();
        }
        else {
            this.selectAllSelectableRows();
        }
    };
    Object.defineProperty(NgbTableComponent.prototype, "areAllSelectableRowsSelected", {
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
            /** @type {?} */
            var selectableRows = this.rows.filter(this.canSelectRowPredicate);
            return selectedRowsCount === selectableRows.length && selectableRows.length;
        },
        enumerable: true,
        configurable: true
    });
    NgbTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngb-table',
                    template: "<div class=\"card table-responsive ngbTableRoot\" [ngClass]=\"{'border-primary': selectedRowsIds.length }\">\n  <div class=\"card-header\" [ngClass]=\"{'bg-primary text-light': selectedRowsIds.length && selectActionsHeaderTemplate}\"\n    *ngIf=\"headerTemplate\">\n    <ng-container *ngIf=\"selectedRowsIds.length && selectActionsHeaderTemplate; else noRowsSelected\">\n      <ng-container *ngTemplateOutlet=\"selectActionsHeaderTemplate\"></ng-container>\n    </ng-container>\n    <ng-template #noRowsSelected>\n      <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n    </ng-template>\n  </div>\n\n  <ng-container *ngFor=\"let subHeaderTemplate of subheaderTemplates\">\n    <div class=\"card-header\">\n      <ng-container *ngTemplateOutlet=\"subHeaderTemplate.templateRef\"></ng-container>\n    </div>\n  </ng-container>\n\n  <table class=\"table m-0\">\n\n    <thead>\n      <tr>\n        <th class=\"w-01 align-top\" *ngIf=\"selectable\">\n          <ngb-checkbox [checked]=\"areAllSelectableRowsSelected\" [disabled]=\"!rows.length\" (checkChange)=\"toggleSelectAllRows()\">\n          </ngb-checkbox>\n        </th>\n        <ng-container *ngTemplateOutlet=\"headTemplate\"></ng-container>\n      </tr>\n    </thead>\n\n    <tbody>\n      <ng-container *ngIf=\"rows.length\">\n        <ng-container *ngFor=\"let row of rows; trackBy: rowTracker\">\n          <tr [ngClass]=\"{'table-primary': isRowSelected(row)}\">\n            <td class=\"align-middle\" *ngIf=\"selectable\">\n              <ngb-checkbox\n                [disabled]=\"!canSelectRowPredicate(row)\"\n                [checked]=\"isRowSelected(row)\"\n                (checkChange)=\"toggleRowSelection(row)\"\n              ></ngb-checkbox>\n            </td>\n            <ng-container *ngTemplateOutlet=\"bodyRowTemplate; context: { $implicit: row }\"></ng-container>\n          </tr>\n        </ng-container>\n        <ng-container *ngFor=\"let footerRowTemplate of footerRowTemplates\">\n          <tr>\n            <td *ngIf=\"selectable\"></td><!-- empty table cell to fill no checkbox space -->\n            <ng-container *ngTemplateOutlet=\"footerRowTemplate.templateRef\"></ng-container>\n          </tr>\n        </ng-container>\n      </ng-container>\n    </tbody>\n\n  </table>\n\n  <div class=\"card-footer\" *ngIf=\"footerTemplate\">\n    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n  </div>\n\n</div>",
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
        footerTemplate: [{ type: ContentChild, args: [NgbTableFooterDirective, { static: false, read: TemplateRef },] }],
        canSelectRowPredicate: [{ type: Input }]
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
    NgbTableComponent.prototype.canSelectRowPredicate;
    /** @type {?} */
    NgbTableComponent.prototype.rowTracker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nYi10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ2ItdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBVSxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQ3RHLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBSzFGO0lBd0NFO1FBQUEsaUJBQWlCO1FBaENSLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsb0JBQWUsR0FBd0IsRUFBRSxDQUFDO1FBQ3pDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBMkJqRSwwQkFBcUI7OztRQUFtQixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztRQU81RCxlQUFVOzs7OztRQUFHLFVBQUMsS0FBVSxFQUFFLEdBQVE7O2dCQUMxQixLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUM7WUFFdkMsT0FBTyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFN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QUUxQywrQ0FDMEQ7O0lBRTFELDJDQUN3Qzs7SUFFeEMsa0RBQTREOztJQU81RCx1Q0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBQcmVkaWNhdGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZUhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nYlRhYmxlU3ViaGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLXN1YmhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVTZWxlY3RBY3Rpb25zSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLXNlbGVjdC1hY3Rpb25zLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVIZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWhlYWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nYlRhYmxlQm9keVJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1ib2R5LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVGb290ZXJSb3dEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtZm9vdGVyLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtZm9vdGVyLmRpcmVjdGl2ZSc7XG5cblxudHlwZSBSb3cgPSBvYmplY3Q7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nYi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ2ItdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ2ItdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ2JUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcm93czogUm93W107XG4gIEBJbnB1dCgpIHJvd0lkQ29sdW1uTmFtZSA9ICdpZCc7XG4gIEBJbnB1dCgpIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0ZWRSb3dzSWRzOiAoc3RyaW5nIHwgbnVtYmVyKVtdID0gW107XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFJvd3NJZHNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPChzdHJpbmcgfCBudW1iZXIpW10+KCk7XG5cbiAgLypcbiAgICogQ2xpZW50IGRlZmluZWQgdGVtcGxhdGVzOlxuICAgKi9cblxuICBAQ29udGVudENoaWxkKE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGhlYWRlclRlbXBsYXRlOiBOZ2JUYWJsZUhlYWRlckRpcmVjdGl2ZTtcblxuICBAQ29udGVudENoaWxkcmVuKE5nYlRhYmxlU3ViaGVhZGVyRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBzdWJoZWFkZXJUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOZ2JUYWJsZVN1YmhlYWRlckRpcmVjdGl2ZT47XG5cbiAgQENvbnRlbnRDaGlsZChOZ2JUYWJsZVNlbGVjdEFjdGlvbnNIZWFkZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgc2VsZWN0QWN0aW9uc0hlYWRlclRlbXBsYXRlOiBOZ2JUYWJsZVNlbGVjdEFjdGlvbnNIZWFkZXJEaXJlY3RpdmU7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2JUYWJsZUhlYWREaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaGVhZFRlbXBsYXRlOiBOZ2JUYWJsZUhlYWREaXJlY3RpdmU7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2JUYWJsZUJvZHlSb3dEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgYm9keVJvd1RlbXBsYXRlOiBOZ2JUYWJsZUJvZHlSb3dEaXJlY3RpdmU7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOZ2JUYWJsZUZvb3RlclJvd0RpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogZmFsc2UgfSlcbiAgZm9vdGVyUm93VGVtcGxhdGVzOiBRdWVyeUxpc3Q8TmdiVGFibGVGb290ZXJSb3dEaXJlY3RpdmU+O1xuXG4gIEBDb250ZW50Q2hpbGQoTmdiVGFibGVGb290ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgZm9vdGVyVGVtcGxhdGU6IE5nYlRhYmxlRm9vdGVyRGlyZWN0aXZlO1xuXG4gIEBJbnB1dCgpIGNhblNlbGVjdFJvd1ByZWRpY2F0ZTogUHJlZGljYXRlPFJvdz4gPSAoKSA9PiB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICByb3dUcmFja2VyID0gKGluZGV4OiBhbnksIHJvdzogUm93KSA9PiB7XG4gICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuXG4gICAgcmV0dXJuIHJvd0lkICsgdGhpcy5yb3dzLmxlbmd0aDtcbiAgfVxuXG4gIC8qXG4gICAqIFJvdyBzZWxlY3Rpb24gc3BlY2lmaWMgbWV0aG9kczpcbiAgICovXG5cbiAgaXNSb3dTZWxlY3RlZChyb3c6IFJvdykge1xuICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcblxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93c0lkcy5pbmRleE9mKHJvd0lkKSA+IC0xO1xuICB9XG5cbiAgc2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkUm93cyA9IFsuLi50aGlzLnNlbGVjdGVkUm93c0lkcywgcm93SWRdO1xuXG4gICAgdGhpcy5zZWxlY3RlZFJvd3NJZHNDaGFuZ2UuZW1pdChuZXdTZWxlY3RlZFJvd3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RBbGxTZWxlY3RhYmxlUm93cygpIHtcbiAgICBjb25zdCBuZXdTZWxlY3RlZFJvd3MgPSBbXTtcbiAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuXG4gICAgICBpZiAodGhpcy5jYW5TZWxlY3RSb3dQcmVkaWNhdGUocm93KSkge1xuICAgICAgICBuZXdTZWxlY3RlZFJvd3MucHVzaChyb3dJZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlbGVjdGVkUm93c0lkc0NoYW5nZS5lbWl0KG5ld1NlbGVjdGVkUm93cyk7XG4gIH1cblxuICB1bnNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcbiAgICBjb25zdCBpbmRleE9mUm93SWQgPSB0aGlzLnNlbGVjdGVkUm93c0lkcy5pbmRleE9mKHJvd0lkKTtcbiAgICBjb25zdCBuZXdTZWxlY3RlZFJvd3MgPSBbLi4udGhpcy5zZWxlY3RlZFJvd3NJZHNdO1xuICAgIG5ld1NlbGVjdGVkUm93cy5zcGxpY2UoaW5kZXhPZlJvd0lkLCAxKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzSWRzQ2hhbmdlLmVtaXQobmV3U2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIHVuc2VsZWN0QWxsUm93cygpIHtcbiAgICB0aGlzLnNlbGVjdGVkUm93c0lkc0NoYW5nZS5lbWl0KFtdKTtcbiAgfVxuXG4gIHRvZ2dsZVJvd1NlbGVjdGlvbihyb3c6IFJvdykge1xuICAgIGlmICh0aGlzLmlzUm93U2VsZWN0ZWQocm93KSkge1xuICAgICAgdGhpcy51bnNlbGVjdFJvdyhyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdFJvdyhyb3cpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdEFsbFJvd3MoKSB7XG4gICAgaWYgKHRoaXMuYXJlQWxsU2VsZWN0YWJsZVJvd3NTZWxlY3RlZCkge1xuICAgICAgdGhpcy51bnNlbGVjdEFsbFJvd3MoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RBbGxTZWxlY3RhYmxlUm93cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhcmVBbGxTZWxlY3RhYmxlUm93c1NlbGVjdGVkKCkge1xuICAgIGxldCBzZWxlY3RlZFJvd3NDb3VudCA9IDA7XG4gICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkUm93c0lkcy5pbmRleE9mKHJvd0lkKSA+IC0xKSB7XG4gICAgICAgIHNlbGVjdGVkUm93c0NvdW50Kys7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgc2VsZWN0YWJsZVJvd3MgPSB0aGlzLnJvd3MuZmlsdGVyKHRoaXMuY2FuU2VsZWN0Um93UHJlZGljYXRlKTtcblxuICAgIHJldHVybiBzZWxlY3RlZFJvd3NDb3VudCA9PT0gc2VsZWN0YWJsZVJvd3MubGVuZ3RoICYmIHNlbGVjdGFibGVSb3dzLmxlbmd0aDtcbiAgfVxufVxuIl19