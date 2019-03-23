import { OrganizationModel } from './../../models/organization.model';
import { OrganizationCountryPhoneCodesModel } from './../../models/organization-country-phone-code.model';
import { OrganizationCountryModel } from './../../models/organization-country.model';
import { Component, OnInit } from '@angular/core';
import { OrganizationInformationService } from 'src/app/services/organization-information.service';
import { OrganizationType } from 'src/app/enums/organization-type.enum';

@Component({
  selector: 'app-organisation-upsert',
  templateUrl: './organisation-upsert.component.html',
  styleUrls: ['./organisation-upsert.component.css']
})
export class OrganisationUpsertComponent implements OnInit {

  organisationCountries: OrganizationCountryModel[] = [];
  organisationCountryPhoneCodes: OrganizationCountryPhoneCodesModel[] = [];
  organisation: OrganizationModel;
  organisationType = OrganizationType;

  constructor(
    private _organizationInformationService : OrganizationInformationService
) { }

  ngOnInit() {
    this._organizationInformationService.getCountryData().subscribe(
      (organisationCountries: OrganizationCountryModel[]) => {
        this.organisationCountries = organisationCountries;
      }
    );

    this.organisation = new OrganizationModel();
    this.organisation.organizationType = OrganizationType.Business;

    this._organizationInformationService.getPhoneCodeData().subscribe(
      (organisationCountryPhoneCodes: OrganizationCountryPhoneCodesModel[]) => {
        this.organisationCountryPhoneCodes = organisationCountryPhoneCodes;
      }
    );

    this._organizationInformationService.getPaymentData().subscribe(data => {
      console.log(data);
    });

    this._organizationInformationService.getCurrentComputerIpData().subscribe((ipAddress: string) => {
      this.organisation.ipAddress = ipAddress;
    });
  }



}
