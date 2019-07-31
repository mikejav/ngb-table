import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgbTableService {
    constructor() { }
}
NgbTableService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgbTableService.ctorParameters = () => [];
/** @nocollapse */ NgbTableService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgbTableService_Factory() { return new NgbTableService(); }, token: NgbTableService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgbTableComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgbTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngb-ngbTable',
                template: `
    <p>
      ngb-table works!
    </p>
  `
            }] }
];
/** @nocollapse */
NgbTableComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgbTableModule {
}
NgbTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgbTableComponent],
                imports: [],
                exports: [NgbTableComponent]
            },] }
];

export { NgbTableComponent, NgbTableModule, NgbTableService };
//# sourceMappingURL=ngb-table.js.map
