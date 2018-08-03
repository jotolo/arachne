import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import { SearchResultElementComponent } from './search-result-element/search-result-element.component';
import { ArachneApiService } from './services/arachne-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultListComponent,
    SearchResultElementComponent
  ],
  imports: [
    NgbModule.forRoot(),
    NgxDatatableModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ArachneApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
