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
import { NgbTableSubheaderDirective } from 'projects/ngb-table/src/lib/children-selectors/ngb-table-subheader.directive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nYi10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ2ItdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBVSxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQ3RHLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBS3pIO0lBc0NFO1FBQUEsaUJBQWlCO1FBOUJSLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsb0JBQWUsR0FBd0IsRUFBRSxDQUFDO1FBQ3pDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBZ0MxRSxlQUFVOzs7OztRQUFHLFVBQUMsS0FBVSxFQUFFLEdBQVE7O2dCQUMxQixLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUM7WUFFdkMsT0FBTyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQyxFQUFBO0lBVGUsQ0FBQzs7OztJQUVqQixvQ0FBUTs7O0lB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QUUxQzs7Ozs7dUJBR0UsS0FBSztrQ0FDTCxLQUFLOzZCQUNMLEtBQUs7a0NBQ0wsS0FBSzt3Q0FDTCxNQUFNO2lDQU1OLFlBQVksU0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtxQ0FHMUUsZUFBZSxTQUFDLDBCQUEwQixFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTs4Q0FHbEUsWUFBWSxTQUFDLG9DQUFvQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOytCQUd2RixZQUFZLFNBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7a0NBR3hFLFlBQVksU0FBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtxQ0FHM0UsZUFBZSxTQUFDLDBCQUEwQixFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtpQ0FHbEUsWUFBWSxTQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOztJQWtGN0Usd0JBQUM7Q0FBQSxBQXJIRCxJQXFIQztTQWhIWSxpQkFBaUI7OztJQUU1QixpQ0FBcUI7O0lBQ3JCLDRDQUFnQzs7SUFDaEMsdUNBQTRCOztJQUM1Qiw0Q0FBbUQ7O0lBQ25ELGtEQUEwRTs7SUFNMUUsMkNBQ3dDOztJQUV4QywrQ0FDMEQ7O0lBRTFELHdEQUNrRTs7SUFFbEUseUNBQ29DOztJQUVwQyw0Q0FDMEM7O0lBRTFDLCtDQUMwRDs7SUFFMUQsMkNBQ3dDOztJQU94Qyx1Q0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ2JUYWJsZUhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nYlRhYmxlU2VsZWN0QWN0aW9uc0hlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1zZWxlY3QtYWN0aW9ucy1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nYlRhYmxlSGVhZERpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1oZWFkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZUJvZHlSb3dEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtYm9keS1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nYlRhYmxlRm9vdGVyUm93RGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWZvb3Rlci1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nYlRhYmxlRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWZvb3Rlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVTdWJoZWFkZXJEaXJlY3RpdmUgfSBmcm9tICdwcm9qZWN0cy9uZ2ItdGFibGUvc3JjL2xpYi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLXN1YmhlYWRlci5kaXJlY3RpdmUnO1xuXG5cbnR5cGUgUm93ID0gb2JqZWN0O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2ItdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmdiLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmdiLXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdiVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHJvd3M6IFJvd1tdO1xuICBASW5wdXQoKSByb3dJZENvbHVtbk5hbWUgPSAnaWQnO1xuICBASW5wdXQoKSBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlbGVjdGVkUm93c0lkczogKHN0cmluZyB8IG51bWJlcilbXSA9IFtdO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRSb3dzSWRzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwoc3RyaW5nIHwgbnVtYmVyKVtdPigpO1xuXG4gIC8qXG4gICAqIENsaWVudCBkZWZpbmVkIHRlbXBsYXRlczpcbiAgICovXG5cbiAgQENvbnRlbnRDaGlsZChOZ2JUYWJsZUhlYWRlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBoZWFkZXJUZW1wbGF0ZTogTmdiVGFibGVIZWFkZXJEaXJlY3RpdmU7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOZ2JUYWJsZVN1YmhlYWRlckRpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogZmFsc2UgfSlcbiAgc3ViaGVhZGVyVGVtcGxhdGVzOiBRdWVyeUxpc3Q8TmdiVGFibGVTdWJoZWFkZXJEaXJlY3RpdmU+O1xuXG4gIEBDb250ZW50Q2hpbGQoTmdiVGFibGVTZWxlY3RBY3Rpb25zSGVhZGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHNlbGVjdEFjdGlvbnNIZWFkZXJUZW1wbGF0ZTogTmdiVGFibGVTZWxlY3RBY3Rpb25zSGVhZGVyRGlyZWN0aXZlO1xuXG4gIEBDb250ZW50Q2hpbGQoTmdiVGFibGVIZWFkRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGhlYWRUZW1wbGF0ZTogTmdiVGFibGVIZWFkRGlyZWN0aXZlO1xuXG4gIEBDb250ZW50Q2hpbGQoTmdiVGFibGVCb2R5Um93RGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGJvZHlSb3dUZW1wbGF0ZTogTmdiVGFibGVCb2R5Um93RGlyZWN0aXZlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmdiVGFibGVGb290ZXJSb3dEaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gIGZvb3RlclJvd1RlbXBsYXRlczogUXVlcnlMaXN0PE5nYlRhYmxlRm9vdGVyUm93RGlyZWN0aXZlPjtcblxuICBAQ29udGVudENoaWxkKE5nYlRhYmxlRm9vdGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGZvb3RlclRlbXBsYXRlOiBOZ2JUYWJsZUZvb3RlckRpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcm93VHJhY2tlciA9IChpbmRleDogYW55LCByb3c6IFJvdykgPT4ge1xuICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcblxuICAgIHJldHVybiByb3dJZCArIHRoaXMucm93cy5sZW5ndGg7XG4gIH1cblxuICAvKlxuICAgKiBSb3cgc2VsZWN0aW9uIHNwZWNpZmljIG1ldGhvZHM6XG4gICAqL1xuXG4gIGlzUm93U2VsZWN0ZWQocm93OiBSb3cpIHtcbiAgICBjb25zdCByb3dJZCA9IHJvd1t0aGlzLnJvd0lkQ29sdW1uTmFtZV07XG5cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJvd3NJZHMuaW5kZXhPZihyb3dJZCkgPiAtMTtcbiAgfVxuXG4gIHNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcbiAgICBjb25zdCBuZXdTZWxlY3RlZFJvd3MgPSBbLi4udGhpcy5zZWxlY3RlZFJvd3NJZHMsIHJvd0lkXTtcblxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzSWRzQ2hhbmdlLmVtaXQobmV3U2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIHNlbGVjdEFsbFJvd3MoKSB7XG4gICAgY29uc3QgbmV3U2VsZWN0ZWRSb3dzID0gW107XG4gICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGNvbnN0IHJvd0lkID0gcm93W3RoaXMucm93SWRDb2x1bW5OYW1lXTtcblxuICAgICAgbmV3U2VsZWN0ZWRSb3dzLnB1c2gocm93SWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3RlZFJvd3NJZHNDaGFuZ2UuZW1pdChuZXdTZWxlY3RlZFJvd3MpO1xuICB9XG5cbiAgdW5zZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICBjb25zdCByb3dJZCA9IHJvd1t0aGlzLnJvd0lkQ29sdW1uTmFtZV07XG4gICAgY29uc3QgaW5kZXhPZlJvd0lkID0gdGhpcy5zZWxlY3RlZFJvd3NJZHMuaW5kZXhPZihyb3dJZCk7XG4gICAgY29uc3QgbmV3U2VsZWN0ZWRSb3dzID0gWy4uLnRoaXMuc2VsZWN0ZWRSb3dzSWRzXTtcbiAgICBuZXdTZWxlY3RlZFJvd3Muc3BsaWNlKGluZGV4T2ZSb3dJZCwgMSk7XG5cbiAgICB0aGlzLnNlbGVjdGVkUm93c0lkc0NoYW5nZS5lbWl0KG5ld1NlbGVjdGVkUm93cyk7XG4gIH1cblxuICB1bnNlbGVjdEFsbFJvd3MoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFJvd3NJZHNDaGFuZ2UuZW1pdChbXSk7XG4gIH1cblxuICB0b2dnbGVSb3dTZWxlY3Rpb24ocm93OiBSb3cpIHtcbiAgICBpZiAodGhpcy5pc1Jvd1NlbGVjdGVkKHJvdykpIHtcbiAgICAgIHRoaXMudW5zZWxlY3RSb3cocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RSb3cocm93KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVTZWxlY3RBbGxSb3dzKCkge1xuICAgIGlmICh0aGlzLmFyZUFsbFJvd3NTZWxlY3RlZCkge1xuICAgICAgdGhpcy51bnNlbGVjdEFsbFJvd3MoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RBbGxSb3dzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFyZUFsbFJvd3NTZWxlY3RlZCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRSb3dzQ291bnQgPSAwO1xuICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCByb3dJZCA9IHJvd1t0aGlzLnJvd0lkQ29sdW1uTmFtZV07XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFJvd3NJZHMuaW5kZXhPZihyb3dJZCkgPiAtMSkge1xuICAgICAgICBzZWxlY3RlZFJvd3NDb3VudCsrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkUm93c0NvdW50ID09PSB0aGlzLnJvd3MubGVuZ3RoICYmIHRoaXMucm93cy5sZW5ndGg7XG4gIH1cbn1cbiJdfQ==