(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngb-table', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ngb-table'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgbTableService = /** @class */ (function () {
        function NgbTableService() {
        }
        NgbTableService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgbTableService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgbTableService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgbTableService_Factory() { return new NgbTableService(); }, token: NgbTableService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [NgbTableComponent],
                        imports: [],
                        exports: [NgbTableComponent]
                    },] }
        ];
        return NgbTableModule;
    }());

    exports.NgbTableComponent = NgbTableComponent;
    exports.NgbTableModule = NgbTableModule;
    exports.NgbTableService = NgbTableService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngb-table.umd.js.map
