(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ngb-table', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global['ngb-table'] = {}, global.ng.core, global.ng.platformBrowser));
}(this, function (exports, core, platformBrowser) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgbTableHeaderDirective = /** @class */ (function () {
        function NgbTableHeaderDirective() {
        }
        NgbTableHeaderDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngbTableHeader]'
                    },] }
        ];
        /** @nocollapse */
        NgbTableHeaderDirective.ctorParameters = function () { return []; };
        return NgbTableHeaderDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgbTableSelectActionsHeaderDirective = /** @class */ (function () {
        function NgbTableSelectActionsHeaderDirective() {
        }
        NgbTableSelectActionsHeaderDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngbTableSelectActionsHeader]'
                    },] }
        ];
        /** @nocollapse */
        NgbTableSelectActionsHeaderDirective.ctorParameters = function () { return []; };
        return NgbTableSelectActionsHeaderDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgbTableHeadDirective = /** @class */ (function () {
        function NgbTableHeadDirective() {
        }
        NgbTableHeadDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngbTableHead]'
                    },] }
        ];
        /** @nocollapse */
        NgbTableHeadDirective.ctorParameters = function () { return []; };
        return NgbTableHeadDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgbTableBodyRowDirective = /** @class */ (function () {
        function NgbTableBodyRowDirective() {
        }
        NgbTableBodyRowDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngbTableBodyRow]'
                    },] }
        ];
        /** @nocollapse */
        NgbTableBodyRowDirective.ctorParameters = function () { return []; };
        return NgbTableBodyRowDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgbTableFooterRowDirective = /** @class */ (function () {
        function NgbTableFooterRowDirective(templateRef) {
            this.templateRef = templateRef;
        }
        NgbTableFooterRowDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngbTableFooterRow]'
                    },] }
        ];
        /** @nocollapse */
        NgbTableFooterRowDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NgbTableFooterRowDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgbTableFooterDirective = /** @class */ (function () {
        function NgbTableFooterDirective() {
        }
        NgbTableFooterDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngbTableFooter]'
                    },] }
        ];
        /** @nocollapse */
        NgbTableFooterDirective.ctorParameters = function () { return []; };
        return NgbTableFooterDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgbTableComponent = /** @class */ (function () {
        function NgbTableComponent() {
            var _this = this;
            this.rowIdColumnName = 'id';
            this.selectable = false;
            this.selectedRowsIdsChange = new core.EventEmitter();
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
            var newSelectedRows = __spread(this.selectedRowsIds, [rowId]);
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
            var newSelectedRows = __spread(this.selectedRowsIds);
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
            { type: core.Component, args: [{
                        selector: 'ngb-table',
                        template: "<div\n  class=\"card ngbTableRoot\"\n  [ngClass]=\"{'border-primary': selectedRowsIds.length }\"\n>\n  <div\n    class=\"card-header\"\n    [ngClass]=\"{'bg-primary text-light': selectedRowsIds.length && selectActionsHeaderTemplate}\"\n    *ngIf=\"headerTemplate\"\n  >\n    <ng-container *ngIf=\"selectedRowsIds.length && selectActionsHeaderTemplate; else noRowsSelected\">\n      <ng-container *ngTemplateOutlet=\"selectActionsHeaderTemplate\"></ng-container>\n    </ng-container>\n    <ng-template #noRowsSelected>\n      <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n    </ng-template>\n  </div>\n\n  <table class=\"table m-0\">\n\n    <thead>\n      <tr>\n        <th class=\"w-01 align-top\" *ngIf=\"selectable\">\n          <ngb-checkbox [checked]=\"areAllRowsSelected\" [disabled]=\"!rows.length\" (checkChange)=\"toggleSelectAllRows()\"></ngb-checkbox>\n        </th>\n        <ng-container *ngTemplateOutlet=\"headTemplate\"></ng-container>\n      </tr>\n    </thead>\n\n    <tbody>\n      <ng-container *ngIf=\"rows.length\">\n        <ng-container *ngFor=\"let row of rows; trackBy: rowTracker\">\n          <tr [ngClass]=\"{'table-primary': isRowSelected(row)}\">\n            <td class=\"align-middle\" *ngIf=\"selectable\">\n              <ngb-checkbox [checked]=\"isRowSelected(row)\" (checkChange)=\"toggleRowSelection(row)\"></ngb-checkbox>\n            </td>\n            <ng-container *ngTemplateOutlet=\"bodyRowTemplate; context: { $implicit: row }\"></ng-container>\n          </tr>\n        </ng-container>\n        <ng-container *ngFor=\"let footerRowTemplate of footerRowTemplates\">\n          <tr>\n            <td *ngIf=\"selectable\"></td><!-- empty table cell to fill no checkbox space -->\n            <ng-container *ngTemplateOutlet=\"footerRowTemplate.templateRef\"></ng-container>\n          </tr>\n        </ng-container>\n      </ng-container>\n    </tbody>\n  \n  </table>\n\n  <div class=\"card-footer\" *ngIf=\"footerTemplate\">\n    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n  </div>\n\n</div>\n",
                        styles: [".w-01{width:1%}"]
                    }] }
        ];
        /** @nocollapse */
        NgbTableComponent.ctorParameters = function () { return []; };
        NgbTableComponent.propDecorators = {
            rows: [{ type: core.Input }],
            rowIdColumnName: [{ type: core.Input }],
            selectable: [{ type: core.Input }],
            selectedRowsIds: [{ type: core.Input }],
            selectedRowsIdsChange: [{ type: core.Output }],
            headerTemplate: [{ type: core.ContentChild, args: [NgbTableHeaderDirective, { static: false, read: core.TemplateRef },] }],
            selectActionsHeaderTemplate: [{ type: core.ContentChild, args: [NgbTableSelectActionsHeaderDirective, { static: false, read: core.TemplateRef },] }],
            headTemplate: [{ type: core.ContentChild, args: [NgbTableHeadDirective, { static: false, read: core.TemplateRef },] }],
            bodyRowTemplate: [{ type: core.ContentChild, args: [NgbTableBodyRowDirective, { static: false, read: core.TemplateRef },] }],
            footerRowTemplates: [{ type: core.ContentChildren, args: [NgbTableFooterRowDirective, { descendants: false },] }],
            footerTemplate: [{ type: core.ContentChild, args: [NgbTableFooterDirective, { static: false, read: core.TemplateRef },] }]
        };
        return NgbTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
            this.disabled = false;
            this.checkChange = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.toggleChecked = /**
         * @return {?}
         */
        function () {
            this.checkChange.emit(!this.checked);
        };
        CheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngb-checkbox',
                        template: "<div\n  class=\"checkbox\"\n  [ngClass]=\"{\n    'checked': checked,\n    'disabled': disabled\n  }\"\n  (click)=\"disabled ? null : toggleChecked()\"\n></div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".checkbox{position:relative;width:22px;height:22px;border:2px solid var(--secondary);opacity:.7;border-radius:3px}.checkbox:after{position:absolute;top:3px;left:6px;content:\"\";width:6px;height:11px;border-bottom:2px solid var(--white);border-right:2px solid var(--white);-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:.3s;transition:.3s}.checkbox:hover:not(.disabled){opacity:1;cursor:pointer}.checkbox.checked{border-color:var(--primary);background:var(--primary);opacity:1}.checkbox.disabled{opacity:.5}"]
                    }] }
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () { return []; };
        CheckboxComponent.propDecorators = {
            checked: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            checkChange: [{ type: core.Output }]
        };
        return CheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgbTableModule = /** @class */ (function () {
        function NgbTableModule() {
        }
        NgbTableModule.decorators = [
            { type: core.NgModule, args: [{
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
                            platformBrowser.BrowserModule,
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
        return NgbTableModule;
    }());

    exports.NgbTableModule = NgbTableModule;
    exports.ɵa = NgbTableComponent;
    exports.ɵb = NgbTableHeaderDirective;
    exports.ɵc = NgbTableSelectActionsHeaderDirective;
    exports.ɵd = NgbTableHeadDirective;
    exports.ɵe = NgbTableBodyRowDirective;
    exports.ɵf = NgbTableFooterRowDirective;
    exports.ɵg = NgbTableFooterDirective;
    exports.ɵh = CheckboxComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngb-table.umd.js.map
