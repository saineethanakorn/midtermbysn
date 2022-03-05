import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookAFlightComponent } from './book-a-flight/book-a-flight.component';
import { ServiceService } from './book-a-flight/service/service.service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import {MAT_DATE_LOCALE} from '@angular/material/core';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BookAFlightComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    MaterialExampleModule,
    // NgbModule,
    // NgbPaginationModule,
    // NgbAlertModule

  ],
  providers: [ServiceService,{ provide: MAT_DATE_LOCALE, useValue: "th-TH" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
