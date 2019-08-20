/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
export class CheckboxComponent {
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
                styles: [".checkbox{position:relative;width:22px;height:22px;border:2px solid var(--secondary);opacity:.7;border-radius:3px}.checkbox:after{position:absolute;top:3px;left:6px;content:\"\";width:6px;height:11px;border-bottom:2px solid transparent;border-right:2px solid transparent;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.checkbox:hover:not(.disabled){opacity:1;cursor:pointer}.checkbox.checked{border-color:var(--primary);background:var(--primary);opacity:1}.checkbox.checked:after{border-bottom-color:var(--white);border-right-color:var(--white)}.checkbox.disabled{opacity:.5}"]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    checkChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.checked;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.checkChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdiLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNoRyxNQUFNLE9BQU8saUJBQWlCO0lBTTVCO1FBSFMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFFcEMsQ0FBQzs7OztJQUVqQixhQUFhO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsNktBQXdDO2dCQUV4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7O3NCQUdFLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxNQUFNOzs7O0lBRlAsb0NBQTBCOztJQUMxQixxQ0FBMEI7O0lBQzFCLHdDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nYi1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2hlY2tlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNoZWNrQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgdG9nZ2xlQ2hlY2tlZCgpIHtcbiAgICB0aGlzLmNoZWNrQ2hhbmdlLmVtaXQoIXRoaXMuY2hlY2tlZCk7XG4gIH1cbn1cbiJdfQ==