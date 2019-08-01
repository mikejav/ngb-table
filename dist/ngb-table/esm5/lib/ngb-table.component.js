/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChild, TemplateRef, ContentChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { NgbTableHeaderDirective } from './children-selectors/ngb-table-header.directive';
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
                    template: "<div\n  class=\"card ngbTableRoot\"\n  [ngClass]=\"{'border-primary': selectedRowsIds.length }\"\n>\n  <div\n    class=\"card-header\"\n    [ngClass]=\"{'bg-primary text-light': selectedRowsIds.length && selectActionsHeaderTemplate}\"\n    *ngIf=\"headerTemplate\"\n  >\n    <ng-container *ngIf=\"selectedRowsIds.length && selectActionsHeaderTemplate; else noRowsSelected\">\n      <ng-container *ngTemplateOutlet=\"selectActionsHeaderTemplate\"></ng-container>\n    </ng-container>\n    <ng-template #noRowsSelected>\n      <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n    </ng-template>\n  </div>\n\n  <table class=\"table m-0\">\n\n    <thead>\n      <tr>\n        <th class=\"w-01 align-top\" *ngIf=\"selectable\">\n          <ngb-checkbox [checked]=\"areAllRowsSelected\" [disabled]=\"!rows.length\" (checkChange)=\"toggleSelectAllRows()\"></ngb-checkbox>\n        </th>\n        <ng-container *ngTemplateOutlet=\"headTemplate\"></ng-container>\n      </tr>\n    </thead>\n\n    <tbody>\n      <ng-container *ngIf=\"rows.length\">\n        <ng-container *ngFor=\"let row of rows; trackBy: rowTracker\">\n          <tr [ngClass]=\"{'table-primary': isRowSelected(row)}\">\n            <td class=\"align-middle\" *ngIf=\"selectable\">\n              <ngb-checkbox [checked]=\"isRowSelected(row)\" (checkChange)=\"toggleRowSelection(row)\"></ngb-checkbox>\n            </td>\n            <ng-container *ngTemplateOutlet=\"bodyRowTemplate; context: { $implicit: row }\"></ng-container>\n          </tr>\n        </ng-container>\n        <ng-container *ngFor=\"let footerRowTemplate of footerRowTemplates\">\n          <tr>\n            <td *ngIf=\"selectable\"></td><!-- empty table cell to fill no checkbox space -->\n            <ng-container *ngTemplateOutlet=\"footerRowTemplate.templateRef\"></ng-container>\n          </tr>\n        </ng-container>\n      </ng-container>\n    </tbody>\n  \n  </table>\n\n  <div class=\"card-footer\" *ngIf=\"footerTemplate\">\n    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n  </div>\n\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nYi10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ2ItdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEksT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDMUYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDdEgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFLMUY7SUFtQ0U7UUFBQSxpQkFBaUI7UUEzQlIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUF3QixFQUFFLENBQUM7UUFDekMsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUE2QjFFLGVBQVU7Ozs7O1FBQUcsVUFBQyxLQUFVLEVBQUUsR0FBUTs7Z0JBQzFCLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQztZQUV2QyxPQUFPLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxDQUFDLEVBQUE7SUFUZSxDQUFDOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtJQUNBLENBQUM7SUFRRDs7T0FFRzs7Ozs7Ozs7SUFFSCx5Q0FBYTs7Ozs7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TCxLQUFLO3dDQUNMLE1BQU07aUNBTU4sWUFBWSxTQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzhDQUcxRSxZQUFZLFNBQUMsb0NBQW9DLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7K0JBR3ZGLFlBQVksU0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtrQ0FHeEUsWUFBWSxTQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3FDQUczRSxlQUFlLFNBQUMsMEJBQTBCLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO2lDQUdsRSxZQUFZLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O0lBa0Y3RSx3QkFBQztDQUFBLEFBbEhELElBa0hDO1NBN0dZLGlCQUFpQjs7O0lBRTVCLGlDQUFxQjs7SUFDckIsNENBQWdDOztJQUNoQyx1Q0FBNEI7O0lBQzVCLDRDQUFtRDs7SUFDbkQsa0RBQTBFOztJQU0xRSwyQ0FDd0M7O0lBRXhDLHdEQUNrRTs7SUFFbEUseUNBQ29DOztJQUVwQyw0Q0FDMEM7O0lBRTFDLCtDQUMwRDs7SUFFMUQsMkNBQ3dDOztJQU94Qyx1Q0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVTZWxlY3RBY3Rpb25zSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLXNlbGVjdC1hY3Rpb25zLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVIZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWhlYWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nYlRhYmxlQm9keVJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1ib2R5LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVGb290ZXJSb3dEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtZm9vdGVyLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtZm9vdGVyLmRpcmVjdGl2ZSc7XG5cblxudHlwZSBSb3cgPSBvYmplY3Q7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nYi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ2ItdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ2ItdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ2JUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcm93czogUm93W107XG4gIEBJbnB1dCgpIHJvd0lkQ29sdW1uTmFtZSA9ICdpZCc7XG4gIEBJbnB1dCgpIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0ZWRSb3dzSWRzOiAoc3RyaW5nIHwgbnVtYmVyKVtdID0gW107XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFJvd3NJZHNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPChzdHJpbmcgfCBudW1iZXIpW10+KCk7XG5cbiAgLypcbiAgICogQ2xpZW50IGRlZmluZWQgdGVtcGxhdGVzOlxuICAgKi9cblxuICBAQ29udGVudENoaWxkKE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGhlYWRlclRlbXBsYXRlOiBOZ2JUYWJsZUhlYWRlckRpcmVjdGl2ZTtcblxuICBAQ29udGVudENoaWxkKE5nYlRhYmxlU2VsZWN0QWN0aW9uc0hlYWRlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBzZWxlY3RBY3Rpb25zSGVhZGVyVGVtcGxhdGU6IE5nYlRhYmxlU2VsZWN0QWN0aW9uc0hlYWRlckRpcmVjdGl2ZTtcblxuICBAQ29udGVudENoaWxkKE5nYlRhYmxlSGVhZERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBoZWFkVGVtcGxhdGU6IE5nYlRhYmxlSGVhZERpcmVjdGl2ZTtcblxuICBAQ29udGVudENoaWxkKE5nYlRhYmxlQm9keVJvd0RpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBib2R5Um93VGVtcGxhdGU6IE5nYlRhYmxlQm9keVJvd0RpcmVjdGl2ZTtcblxuICBAQ29udGVudENoaWxkcmVuKE5nYlRhYmxlRm9vdGVyUm93RGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBmb290ZXJSb3dUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOZ2JUYWJsZUZvb3RlclJvd0RpcmVjdGl2ZT47XG5cbiAgQENvbnRlbnRDaGlsZChOZ2JUYWJsZUZvb3RlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBmb290ZXJUZW1wbGF0ZTogTmdiVGFibGVGb290ZXJEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHJvd1RyYWNrZXIgPSAoaW5kZXg6IGFueSwgcm93OiBSb3cpID0+IHtcbiAgICBjb25zdCByb3dJZCA9IHJvd1t0aGlzLnJvd0lkQ29sdW1uTmFtZV07XG5cbiAgICByZXR1cm4gcm93SWQgKyB0aGlzLnJvd3MubGVuZ3RoO1xuICB9XG5cbiAgLypcbiAgICogUm93IHNlbGVjdGlvbiBzcGVjaWZpYyBtZXRob2RzOlxuICAgKi9cblxuICBpc1Jvd1NlbGVjdGVkKHJvdzogUm93KSB7XG4gICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3dzSWRzLmluZGV4T2Yocm93SWQpID4gLTE7XG4gIH1cblxuICBzZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICBjb25zdCByb3dJZCA9IHJvd1t0aGlzLnJvd0lkQ29sdW1uTmFtZV07XG4gICAgY29uc3QgbmV3U2VsZWN0ZWRSb3dzID0gWy4uLnRoaXMuc2VsZWN0ZWRSb3dzSWRzLCByb3dJZF07XG5cbiAgICB0aGlzLnNlbGVjdGVkUm93c0lkc0NoYW5nZS5lbWl0KG5ld1NlbGVjdGVkUm93cyk7XG4gIH1cblxuICBzZWxlY3RBbGxSb3dzKCkge1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkUm93cyA9IFtdO1xuICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCByb3dJZCA9IHJvd1t0aGlzLnJvd0lkQ29sdW1uTmFtZV07XG5cbiAgICAgIG5ld1NlbGVjdGVkUm93cy5wdXNoKHJvd0lkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzSWRzQ2hhbmdlLmVtaXQobmV3U2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIHVuc2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuICAgIGNvbnN0IGluZGV4T2ZSb3dJZCA9IHRoaXMuc2VsZWN0ZWRSb3dzSWRzLmluZGV4T2Yocm93SWQpO1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkUm93cyA9IFsuLi50aGlzLnNlbGVjdGVkUm93c0lkc107XG4gICAgbmV3U2VsZWN0ZWRSb3dzLnNwbGljZShpbmRleE9mUm93SWQsIDEpO1xuXG4gICAgdGhpcy5zZWxlY3RlZFJvd3NJZHNDaGFuZ2UuZW1pdChuZXdTZWxlY3RlZFJvd3MpO1xuICB9XG5cbiAgdW5zZWxlY3RBbGxSb3dzKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dzSWRzQ2hhbmdlLmVtaXQoW10pO1xuICB9XG5cbiAgdG9nZ2xlUm93U2VsZWN0aW9uKHJvdzogUm93KSB7XG4gICAgaWYgKHRoaXMuaXNSb3dTZWxlY3RlZChyb3cpKSB7XG4gICAgICB0aGlzLnVuc2VsZWN0Um93KHJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0Um93KHJvdyk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlU2VsZWN0QWxsUm93cygpIHtcbiAgICBpZiAodGhpcy5hcmVBbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMudW5zZWxlY3RBbGxSb3dzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsUm93cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhcmVBbGxSb3dzU2VsZWN0ZWQoKSB7XG4gICAgbGV0IHNlbGVjdGVkUm93c0NvdW50ID0gMDtcbiAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgY29uc3Qgcm93SWQgPSByb3dbdGhpcy5yb3dJZENvbHVtbk5hbWVdO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRSb3dzSWRzLmluZGV4T2Yocm93SWQpID4gLTEpIHtcbiAgICAgICAgc2VsZWN0ZWRSb3dzQ291bnQrKztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzZWxlY3RlZFJvd3NDb3VudCA9PT0gdGhpcy5yb3dzLmxlbmd0aCAmJiB0aGlzLnJvd3MubGVuZ3RoO1xuICB9XG59XG4iXX0=