import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbTableComponent } from './ngb-table.component';
import { NgbTableHeaderDirective } from './children-selectors/ngb-table-header.directive';
import { NgbTableSubheaderDirective } from './children-selectors/ngb-table-subheader.directive';
import { NgbTableSelectActionsHeaderDirective } from './children-selectors/ngb-table-select-actions-header.directive';
import { NgbTableHeadDirective } from './children-selectors/ngb-table-head.directive';
import { NgbTableBodyRowDirective } from './children-selectors/ngb-table-body-row.directive';
import { NgbTableFooterDirective } from './children-selectors/ngb-table-footer.directive';
import { NgbTableFooterRowDirective } from './children-selectors/ngb-table-footer-row.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [
    NgbTableComponent,
    NgbTableHeaderDirective,
    NgbTableSubheaderDirective,
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
    NgbTableSubheaderDirective,
    NgbTableSelectActionsHeaderDirective,
    NgbTableHeadDirective,
    NgbTableBodyRowDirective,
    NgbTableFooterDirective,
    NgbTableFooterRowDirective,
  ]
})
export class NgbTableModule { }
