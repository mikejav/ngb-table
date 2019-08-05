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
import { CommonModule } from '@angular/common';


@NgModule({
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
})
export class NgbTableModule { }
