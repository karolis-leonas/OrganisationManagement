import { OrganizationType } from './../../enums/organization-type.enum';
import { OrganisationAppConstants } from './../../constants/organisation-app-constants';
import { OrganizationCountryPhoneCodesModel } from './../../models/organization-country-phone-code.model';
import { OrganizationCountryModel } from './../../models/organization-country.model';
import { OrganizationModel } from './../../models/organization.model';
import { Component, OnInit, Input } from '@angular/core';
import { OrganizationHttpService } from '../../services/organization-http/organization-http.service';
import { OrganizationPaymentMethodModel } from 'src/app/models/organization-payment-method.model';

@Component({
  selector: 'app-organisation-view-tile',
  templateUrl: './organisation-view-tile.component.html',
  styleUrls: ['./organisation-view-tile.component.css']
})
export class OrganisationViewTileComponent implements OnInit {
  @Input() organisation: OrganizationModel;
  organisationCountry: string = '';
  organisationCountryCode: string = '';
  organisationPaymentMethod: string = '';
  readonly organisationAppConstants = OrganisationAppConstants;
  organisationType = OrganizationType;

  constructor(
    private _organizationHttpService: OrganizationHttpService,
  ) { }

  ngOnInit() {
    this._organizationHttpService.getCountryData().subscribe(
      (organisationCountries: OrganizationCountryModel[]) => {
        this.organisationCountry =
          organisationCountries.find(country => country.key === this.organisation.country).value;
      }
    );

    this._organizationHttpService.getPhoneCodeData().subscribe(
      (organisationCountryPhoneCodes: OrganizationCountryPhoneCodesModel[]) => {
        this.organisationCountryCode =
          organisationCountryPhoneCodes.find(phoneCode => phoneCode.code === this.organisation.country).dialCode;
      }
    );

    this._organizationHttpService.getPaymentData().subscribe(
      (paymentMethods: OrganizationPaymentMethodModel[]) => {
        this.organisationPaymentMethod = paymentMethods.find(paymentMethod => paymentMethod.key === this.organisation.paymentMethod).name;
      }
    );
  }
}
