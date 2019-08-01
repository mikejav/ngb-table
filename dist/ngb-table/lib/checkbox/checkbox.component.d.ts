import { EventEmitter } from '@angular/core';
export declare class CheckboxComponent {
    checked: boolean;
    disabled: boolean;
    checkChange: EventEmitter<boolean>;
    constructor();
    toggleChecked(): void;
}
