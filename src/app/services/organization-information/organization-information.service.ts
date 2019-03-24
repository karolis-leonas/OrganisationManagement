import { OrganizationCountryPhoneCodesModel } from './../../models/organization-country-phone-code.model';
import { OrganizationCountryModel } from './../../models/organization-country.model';
import { OrganizationModel } from './../../models/organization.model';
import { Injectable } from '@angular/core';
import { OrganizationHttpService } from '../organization-http/organization-http.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganizationInformationService {
  private _savedOrganizations: OrganizationModel[] = [];
  private _organisationCountries: OrganizationCountryModel[] = [];
  private _organisationCountryPhoneCodes: OrganizationCountryPhoneCodesModel[] = [];

  constructor(
    private _organizationHttpService : OrganizationHttpService
  ) { }

  public getSavedOrganizations(): OrganizationModel[] {
    return this._savedOrganizations;
  }

  public saveOrganization(organization: OrganizationModel): Observable<OrganizationModel> {
    return this._organizationHttpService.saveOrganization(organization).pipe(
      map(result => {
        this._savedOrganizations.push(result);

        return result;
      })
    );
  }
}
