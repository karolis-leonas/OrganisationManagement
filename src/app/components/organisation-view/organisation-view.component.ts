import { OrganizationModel } from './../../models/organization.model';
import { Component, OnInit } from '@angular/core';
import { OrganizationInformationService } from '../../services/organization-information/organization-information.service';

@Component({
  selector: 'app-organisation-view',
  templateUrl: './organisation-view.component.html',
  styleUrls: ['./organisation-view.component.css']
})
export class OrganisationViewComponent implements OnInit {
  organisations: OrganizationModel[] = [];

  constructor(
    private _organizationInformationService: OrganizationInformationService,
  ) { }

  ngOnInit() {
    this.organisations = this._organizationInformationService.getSavedOrganizations();
  }
}
