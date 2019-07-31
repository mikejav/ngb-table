import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbTableModule } from 'projects/ngb-table/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
