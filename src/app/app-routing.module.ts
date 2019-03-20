import { OrganisationUpsertComponent } from './components/organisation-upsert/organisation-upsert.component';
import { OrganisationViewComponent } from './components/organisation-view/organisation-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationAppConstants } from './constants/organisation-app-constants';

const routes: Routes = [
  { path: OrganisationAppConstants.OrganisationViewLink,            component: OrganisationViewComponent },
  { path: OrganisationAppConstants.OrganisationCreationLink,     component: OrganisationUpsertComponent },
  { path: '',
    redirectTo: `/${OrganisationAppConstants.OrganisationViewLink}`,
    pathMatch: 'full'
  },
  { path: '**', redirectTo: `/${OrganisationAppConstants.OrganisationViewLink}` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
