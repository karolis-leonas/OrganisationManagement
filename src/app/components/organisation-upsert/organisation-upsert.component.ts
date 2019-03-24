import { OrganizationInformationService } from '../../services/organization-information/organization-information.service';
import { OrganizationModel } from './../../models/organization.model';
import { OrganizationCountryPhoneCodesModel } from './../../models/organization-country-phone-code.model';
import { OrganizationCountryModel } from './../../models/organization-country.model';
import { Component, OnInit } from '@angular/core';
import { OrganizationHttpService } from '../../services/organization-http/organization-http.service';
import { OrganizationType } from 'src/app/enums/organization-type.enum';
import { Router } from '@angular/router';
import { OrganisationAppConstants } from '../../constants/organisation-app-constants';

@Component({
  selector: 'app-organisation-upsert',
  templateUrl: './organisation-upsert.component.html',
  styleUrls: ['./organisation-upsert.component.css']
})
export class OrganisationUpsertComponent implements OnInit {
  readonly organisationAppConstants = OrganisationAppConstants;
  organisationCountries: OrganizationCountryModel[] = [];
  organisationCountryPhoneCodes: OrganizationCountryPhoneCodesModel[] = [];
  organisation: OrganizationModel;
  organisationType = OrganizationType;

  constructor(
    private _organizationHttpService : OrganizationHttpService,
    private _organizationInformationService : OrganizationInformationService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.organisation = new OrganizationModel();
    this.organisation.organizationType = OrganizationType.Business;

    this._organizationHttpService.getCountryData().subscribe(
      (organisationCountries: OrganizationCountryModel[]) => {
        this.organisationCountries = organisationCountries;
      }
    );

    this._organizationHttpService.getPhoneCodeData().subscribe(
      (organisationCountryPhoneCodes: OrganizationCountryPhoneCodesModel[]) => {
        this.organisationCountryPhoneCodes = organisationCountryPhoneCodes;
      }
    );

    this._organizationHttpService.getPaymentData().subscribe(data => {
      console.log(data);
    });

    this._organizationHttpService.getCurrentComputerIpData().subscribe((ipAddress: string) => {
      this.organisation.ipAddress = ipAddress;
    });
  }

  public onOrganizationSubmit(): void {
    this._organizationInformationService.saveOrganization(this.organisation).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.error(error);
      },
      () => {
        this._router.navigateByUrl('/organisations');
      }
    )
  }
}
