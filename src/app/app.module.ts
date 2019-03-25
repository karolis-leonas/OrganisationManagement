import { OrganisationCreationTileComponent } from './components/organisation-creation-tile/organisation-creation-tile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { OrganisationViewComponent } from './components/organisation-view/organisation-view.component';
import { OrganisationUpsertComponent } from './components/organisation-upsert/organisation-upsert.component';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module.module';
import { OrganisationViewTileComponent } from './components/organisation-view-tile/organisation-view-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationViewComponent,
    OrganisationUpsertComponent,
    OrganisationCreationTileComponent,
    OrganisationViewTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
