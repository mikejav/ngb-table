import { NgModule } from '@angular/core';
import { NgbTableComponent } from './ngb-table.component';
import { NgbTableHeaderDirective } from './ngb-table-header.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgbTableFooterDirective } from './ngb-table-footer.directive';
import { NgbTableFooterRowDirective } from './ngb-table-footer-row.directive';
import { NgbTableHeadDirective } from './ngb-table-head.directive';
import { NgbTableBodyRowDirective } from './ngb-table-body-row.directive';



@NgModule({
  declarations: [
    NgbTableComponent,
    NgbTableHeaderDirective,
    NgbTableHeadDirective,
    NgbTableBodyRowDirective,
    NgbTableFooterDirective,
    NgbTableFooterRowDirective,
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
