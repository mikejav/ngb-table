/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbTableComponent } from './ngb-table.component';
import { NgbTableHeaderDirective } from './children-selectors/ngb-table-header.directive';
import { NgbTableSelectActionsHeaderDirective } from './children-selectors/ngb-table-select-actions-header.directive';
import { NgbTableHeadDirective } from './children-selectors/ngb-table-head.directive';
import { NgbTableBodyRowDirective } from './children-selectors/ngb-table-body-row.directive';
import { NgbTableFooterDirective } from './children-selectors/ngb-table-footer.directive';
import { NgbTableFooterRowDirective } from './children-selectors/ngb-table-footer-row.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';
export class NgbTableModule {
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
                    BrowserModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nYi10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ2ItdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN0SCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQTRCbEUsTUFBTSxPQUFPLGNBQWM7OztZQXpCMUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIsb0NBQW9DO29CQUNwQyxxQkFBcUI7b0JBQ3JCLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2QiwwQkFBMEI7b0JBRTFCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2QixvQ0FBb0M7b0JBQ3BDLHFCQUFxQjtvQkFDckIsd0JBQXdCO29CQUN4Qix1QkFBdUI7b0JBQ3ZCLDBCQUEwQjtpQkFDM0I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IE5nYlRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2ItdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVTZWxlY3RBY3Rpb25zSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLXNlbGVjdC1hY3Rpb25zLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVIZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlsZHJlbi1zZWxlY3RvcnMvbmdiLXRhYmxlLWhlYWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nYlRhYmxlQm9keVJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1ib2R5LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdiVGFibGVGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NoaWxkcmVuLXNlbGVjdG9ycy9uZ2ItdGFibGUtZm9vdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2JUYWJsZUZvb3RlclJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vY2hpbGRyZW4tc2VsZWN0b3JzL25nYi10YWJsZS1mb290ZXItcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ2JUYWJsZUNvbXBvbmVudCxcbiAgICBOZ2JUYWJsZUhlYWRlckRpcmVjdGl2ZSxcbiAgICBOZ2JUYWJsZVNlbGVjdEFjdGlvbnNIZWFkZXJEaXJlY3RpdmUsXG4gICAgTmdiVGFibGVIZWFkRGlyZWN0aXZlLFxuICAgIE5nYlRhYmxlQm9keVJvd0RpcmVjdGl2ZSxcbiAgICBOZ2JUYWJsZUZvb3RlckRpcmVjdGl2ZSxcbiAgICBOZ2JUYWJsZUZvb3RlclJvd0RpcmVjdGl2ZSxcblxuICAgIENoZWNrYm94Q29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5nYlRhYmxlQ29tcG9uZW50LFxuICAgIE5nYlRhYmxlSGVhZGVyRGlyZWN0aXZlLFxuICAgIE5nYlRhYmxlU2VsZWN0QWN0aW9uc0hlYWRlckRpcmVjdGl2ZSxcbiAgICBOZ2JUYWJsZUhlYWREaXJlY3RpdmUsXG4gICAgTmdiVGFibGVCb2R5Um93RGlyZWN0aXZlLFxuICAgIE5nYlRhYmxlRm9vdGVyRGlyZWN0aXZlLFxuICAgIE5nYlRhYmxlRm9vdGVyUm93RGlyZWN0aXZlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nYlRhYmxlTW9kdWxlIHsgfVxuIl19