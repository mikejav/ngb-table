import { Directive, TemplateRef, EventEmitter, Component, Input, Output, ContentChild, ContentChildren, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgbTableHeaderDirective {
    constructor() { }
}
NgbTableHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngbTableHeader]'
            },] }
];
/** @nocollapse */
NgbTableHeaderDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgbTableSelectActionsHeaderDirective {
    constructor() { }
}
NgbTableSelectActionsHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngbTableSelectActionsHeader]'
            },] }
];
/** @nocollapse */
NgbTableSelectActionsHeaderDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgbTableHeadDirective {
    constructor() { }
}
NgbTableHeadDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngbTableHead]'
            },] }
];
/** @nocollapse */
NgbTableHeadDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgbTableBodyRowDirective {
    constructor() { }
}
NgbTableBodyRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngbTableBodyRow]'
            },] }
];
/** @nocollapse */
NgbTableBodyRowDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgbTableFooterRowDirective {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbTableFooterRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngbTableFooterRow]'
            },] }
];
/** @nocollapse */
NgbTableFooterRowDirective.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgbTableFooterDirective {
    constructor() { }
}
NgbTableFooterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngbTableFooter]'
            },] }
];
/** @nocollapse */
NgbTableFooterDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgbTableComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxComponent {
    constructor() {
        this.disabled = false;
        this.checkChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    toggleChecked() {
        this.checkChange.emit(!this.checked);
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngb-checkbox',
                template: "<div\n  class=\"checkbox\"\n  [ngClass]=\"{\n    'checked': checked,\n    'disabled': disabled\n  }\"\n  (click)=\"disabled ? null : toggleChecked()\"\n></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".checkbox{position:relative;width:22px;height:22px;border:2px solid var(--secondary);opacity:.7;border-radius:3px}.checkbox:after{position:absolute;top:3px;left:6px;content:\"\";width:6px;height:11px;border-bottom:2px solid var(--white);border-right:2px solid var(--white);-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:.3s;transition:.3s}.checkbox:hover:not(.disabled){opacity:1;cursor:pointer}.checkbox.checked{border-color:var(--primary);background:var(--primary);opacity:1}.checkbox.disabled{opacity:.5}"]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    checkChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgbTableModule {
}
NgbTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgbTableComponent,
                    NgbTableHeaderDirective,
                    NgbTableSelectActionsHeaderDirective,
                    NgbTableHeadDirective,
                    NgbTableBodyRowDirective,
                    NgbTableFooterDirective,
                    NgbTableFooterRowDirective,
                    CheckboxComponent,
                ],
                imports: [
                    CommonModule,
                ],
                exports: [
                    NgbTableComponent,
                    NgbTableHeaderDirective,
                    NgbTableSelectActionsHeaderDirective,
                    NgbTableHeadDirective,
                    NgbTableBodyRowDirective,
                    NgbTableFooterDirective,
                    NgbTableFooterRowDirective,
                ]
            },] }
];

export { NgbTableModule, NgbTableComponent as ɵa, NgbTableHeaderDirective as ɵb, NgbTableSelectActionsHeaderDirective as ɵc, NgbTableHeadDirective as ɵd, NgbTableBodyRowDirective as ɵe, NgbTableFooterRowDirective as ɵf, NgbTableFooterDirective as ɵg, CheckboxComponent as ɵh };
//# sourceMappingURL=ngb-table.js.map
