import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbTableService = /** @class */ (function () {
    function NgbTableService() {
    }
    NgbTableService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgbTableService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgbTableService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgbTableService_Factory() { return new NgbTableService(); }, token: NgbTableService, providedIn: "root" });
    return NgbTableService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbTableComponent = /** @class */ (function () {
    function NgbTableComponent() {
    }
    /**
     * @return {?}
     */
    NgbTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgbTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngb-ngbTable',
                    template: "\n    <p>\n      ngb-table works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    NgbTableComponent.ctorParameters = function () { return []; };
    return NgbTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbTableModule = /** @class */ (function () {
    function NgbTableModule() {
    }
    NgbTableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgbTableComponent],
                    imports: [],
                    exports: [NgbTableComponent]
                },] }
    ];
    return NgbTableModule;
}());

export { NgbTableComponent, NgbTableModule, NgbTableService };
//# sourceMappingURL=ngb-table.js.map
