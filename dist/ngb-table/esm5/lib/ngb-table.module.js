/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgbTableComponent } from './ngb-table.component';
import { NgbTableHeaderDirective } from './children-selectors/ngb-table-header.directive';
import { NgbTableSelectActionsHeaderDirective } from './children-selectors/ngb-table-select-actions-header.directive';
import { NgbTableHeadDirective } from './children-selectors/ngb-table-head.directive';
import { NgbTableBodyRowDirective } from './children-selectors/ngb-table-body-row.directive';
import { NgbTableFooterDirective } from './children-selectors/ngb-table-footer.directive';
import { NgbTableFooterRowDirective } from './children-selectors/ngb-table-footer-row.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
var NgbTableModule = /** @class */ (function () {
    function NgbTableModule() {
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
    return NgbTableModule;
}());
export { NgbTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nYi10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ2ItdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQztJQUFBO0lBeUI4QixDQUFDOztnQkF6QjlCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3dCQUNqQix1QkFBdUI7d0JBQ3ZCLG9DQUFvQzt3QkFDcEMscUJBQXFCO3dCQUNyQix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsMEJBQTBCO3dCQUUxQixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHVCQUF1Qjt3QkFDdkIsb0NBQW9DO3dCQUNwQyxxQkFBcUI7d0JBQ3JCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2QiwwQkFBMEI7cUJBQzNCO2lCQUNGOztJQUM2QixxQkFBQztDQUFBLEFBekIvQixJQXlCK0I7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IE5nYlRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2ItdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVTZWxlY3RBY3Rpb25zSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLXNlbGVjdC1hY3Rpb25zLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVIZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWhlYWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nYlRhYmxlQm9keVJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1ib2R5LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtZm9vdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZUZvb3RlclJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1mb290ZXItcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdiVGFibGVDb21wb25lbnQsXG4gICAgTmdiVGFibGVIZWFkZXJEaXJlY3RpdmUsXG4gICAgTmdiVGFibGVTZWxlY3RBY3Rpb25zSGVhZGVyRGlyZWN0aXZlLFxuICAgIE5nYlRhYmxlSGVhZERpcmVjdGl2ZSxcbiAgICBOZ2JUYWJsZUJvZHlSb3dEaXJlY3RpdmUsXG4gICAgTmdiVGFibGVGb290ZXJEaXJlY3RpdmUsXG4gICAgTmdiVGFibGVGb290ZXJSb3dEaXJlY3RpdmUsXG5cbiAgICBDaGVja2JveENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5nYlRhYmxlQ29tcG9uZW50LFxuICAgIE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlLFxuICAgIE5nYlRhYmxlU2VsZWN0QWN0aW9uc0hlYWRlckRpcmVjdGl2ZSxcbiAgICBOZ2JUYWJsZUhlYWREaXJlY3RpdmUsXG4gICAgTmdiVGFibGVCb2R5Um93RGlyZWN0aXZlLFxuICAgIE5nYlRhYmxlRm9vdGVyRGlyZWN0aXZlLFxuICAgIE5nYlRhYmxlRm9vdGVyUm93RGlyZWN0aXZlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nYlRhYmxlTW9kdWxlIHsgfVxuIl19