import { OrganisationCreationTileComponent } from './components/organisation-creation-tile/organisation-creation-tile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { OrganisationViewComponent } from './components/organisation-view/organisation-view.component';
import { OrganisationUpsertComponent } from './components/organisation-upsert/organisation-upsert.component';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module.module';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationViewComponent,
    OrganisationUpsertComponent,
    OrganisationCreationTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
