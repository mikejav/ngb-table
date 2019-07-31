import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbTableComponent } from './ngb-table.component';
import { NgbTableHeaderDirective } from './children-selectors/ngb-table-header.directive';
import { NgbTableFooterDirective } from './children-selectors/ngb-table-footer.directive';
import { NgbTableFooterRowDirective } from './children-selectors/ngb-table-footer-row.directive';
import { NgbTableHeadDirective } from './children-selectors/ngb-table-head.directive';
import { NgbTableBodyRowDirective } from './children-selectors/ngb-table-body-row.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [
    NgbTableComponent,
    NgbTableHeaderDirective,
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
    NgbTableHeadDirective,
    NgbTableBodyRowDirective,
    NgbTableFooterDirective,
    NgbTableFooterRowDirective,
  ]
})
export class NgbTableModule { }
