import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppHeaderComponent  } from './app-header/app-header.component';
import { StationsComponent } from './stations/stations.component';
import { StationDetailComponent } from './station-detail/station-detail.component';

import { gpRoutesMap } from '../domain/routes';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
    gpRoutesMap),
  ],
  declarations: [
    StationsComponent,
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],  
  bootstrap: [AppComponent],
})

export class AppModule 
{
    
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
