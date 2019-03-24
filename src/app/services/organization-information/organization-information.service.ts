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

  constructor(
    private _organizationHttpService : OrganizationHttpService
  ) { }

  // THIS LOGIC IS FOR TESTING ONLY
  // public addFakeTestOrganization(): void {
  //   const testOrganization: OrganizationModel = {
  //     organizationType: 0,
  //     name: 'Heficed',
  //     country: 'LT',
  //     firstName: 'John',
  //     lastName: 'Smith',
  //     email: 'john@heficed.com',
  //     industry: 'Whatever',
  //     VAT: 666,
  //     stateRegion: 'Kaunas',
  //     city: 'Kaunas',
  //     address: 'Savanoriu pr. 109',
  //     zipCode: 'LTX',
  //     phone: 89745,
  //     companyNumber: 54651321,
  //     ipAddress: '192.167.7.1',
  //     paymentMethod: 'creditcard'
  //   };
  //   this._savedOrganizations.push(testOrganization);
  //   this._savedOrganizations.push(testOrganization);
  //   this._savedOrganizations.push(testOrganization);
  // }

  public getSavedOrganizations(): OrganizationModel[] {
    // if (!this._savedOrganizations || this._savedOrganizations.length === 0) {
    //   this.addFakeTestOrganization();
    // }

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
