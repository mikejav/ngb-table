/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.disabled = false;
        this.checkChange = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'ngb-checkbox',
                    template: "<div\n  class=\"checkbox\"\n  [ngClass]=\"{\n    'checked': checked,\n    'disabled': disabled\n  }\"\n  (click)=\"disabled ? null : toggleChecked()\"\n></div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".checkbox{position:relative;width:22px;height:22px;border:2px solid var(--secondary);opacity:.7;border-radius:3px}.checkbox:after{position:absolute;top:3px;left:6px;content:\"\";width:6px;height:11px;border-bottom:2px solid transparent;border-right:2px solid transparent;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.checkbox:hover:not(.disabled){opacity:1;cursor:pointer}.checkbox.checked{border-color:var(--primary);background:var(--primary);opacity:1}.checkbox.checked:after{border-bottom-color:var(--white);border-right-color:var(--white)}.checkbox.disabled{opacity:.5}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        checkChange: [{ type: Output }]
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.checked;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.checkChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdiLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoRztJQVlFO1FBSFMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFFcEMsQ0FBQzs7OztJQUVqQix5Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qiw2S0FBd0M7b0JBRXhDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7OzBCQUdFLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxNQUFNOztJQU9ULHdCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FYWSxpQkFBaUI7OztJQUU1QixvQ0FBMEI7O0lBQzFCLHFDQUEwQjs7SUFDMUIsd0NBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdiLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBjaGVja2VkOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY2hlY2tDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB0b2dnbGVDaGVja2VkKCkge1xuICAgIHRoaXMuY2hlY2tDaGFuZ2UuZW1pdCghdGhpcy5jaGVja2VkKTtcbiAgfVxufVxuIl19