import { OrganizationPaymentMethodModel } from './../../models/organization-payment-method.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, } from 'rxjs';
import { map, share, catchError } from 'rxjs/operators';
import { OrganizationCountryModel } from '../../models/organization-country.model';
import { OrganizationCountryPhoneCodesModel } from '../../models/organization-country-phone-code.model';
import { OrganizationModel } from '../../models/organization.model';
import { OrganizationType } from '../../enums/organization-type.enum';

@Injectable({
  providedIn: 'root'
})
export class OrganizationHttpService {
  private _organisationCountries: OrganizationCountryModel[] = [];
  private _organisationCountryPhoneCodes: OrganizationCountryPhoneCodesModel[] = [];
  private _organisationPaymentMethods: OrganizationPaymentMethodModel[] = [];
  organizationCountriesObservable: Observable<OrganizationCountryModel[]>;
  organisationCountryPhoneCodesObservable: Observable<OrganizationCountryPhoneCodesModel[]>;
  organisationPaymentMethodsObservable: Observable<OrganizationPaymentMethodModel[]>;

  constructor(private _httpClient: HttpClient) { }

  public getCountryData(): Observable<OrganizationCountryModel[]> {
    if (this._organisationCountries && this._organisationCountries.length > 0) {
      return of(this._organisationCountries);
    } else if (this.organizationCountriesObservable) {
      return this.organizationCountriesObservable;
    } else {
      this.organizationCountriesObservable = this._httpClient.get('../../assets/countries.json').pipe(
        map((countries: any) => {
            const mappedCountries: OrganizationCountryModel[] = [];

            for (const country in countries) {
              if (countries.hasOwnProperty(country)) {
                const mappedCountry: OrganizationCountryModel = {
                  key: country,
                  value: countries[country]
                };

                mappedCountries.push(mappedCountry);
              }
            }

            this._organisationCountries = mappedCountries;

            return this._organisationCountries;
        }),
        share()
      );
      return this.organizationCountriesObservable;
    }
  }

  public getPhoneCodeData(): Observable<OrganizationCountryPhoneCodesModel[]> {
    if (this._organisationCountryPhoneCodes && this._organisationCountryPhoneCodes.length > 0) {
      return of(this._organisationCountryPhoneCodes);
    } else if (this.organisationCountryPhoneCodesObservable) {
      return this.organisationCountryPhoneCodesObservable;
    } else {
      this.organisationCountryPhoneCodesObservable = this._httpClient.get('../../assets/phoneCodesByCountry.json').pipe(
        map((phoneCodeItems: any) => {
          const mappedPhoneCodeItems: OrganizationCountryPhoneCodesModel[] = [];

          phoneCodeItems.forEach(phoneCodeItem => {
            const mappedPhoneCodeItem: OrganizationCountryPhoneCodesModel = {
              name: phoneCodeItem.name,
              dialCode: phoneCodeItem.dial_code,
              code: phoneCodeItem.code
            };
            mappedPhoneCodeItems.push(mappedPhoneCodeItem);
          });

          this._organisationCountryPhoneCodes = mappedPhoneCodeItems;

          return this._organisationCountryPhoneCodes;
        }),
        share()
      );

      return this.organisationCountryPhoneCodesObservable;
    }
  }

  public getPaymentData(): Observable<OrganizationPaymentMethodModel[]> {
    if (this._organisationCountryPhoneCodes && this._organisationPaymentMethods.length > 0) {
      return of(this._organisationPaymentMethods);
    } else if (this.organisationPaymentMethodsObservable) {
      return this.organisationPaymentMethodsObservable;
    } else {
      this.organisationPaymentMethodsObservable = this._httpClient.get('https://api.codetabs.com/v1/proxy?quest=https://pastebin.com/raw/AmVZEjFq').pipe(
        map((paymentMethods: any) => {
            const mappedPayments: OrganizationPaymentMethodModel[] = [];

            for (const paymentMethod in paymentMethods) {
              if (paymentMethods.hasOwnProperty(paymentMethod) && paymentMethods[paymentMethod] != null) {

                const mappedPaymentMethod: OrganizationPaymentMethodModel = {
                  key: paymentMethod,
                  name: paymentMethods[paymentMethod].name,
                  type: paymentMethods[paymentMethod].type,
                  isDefault: paymentMethods[paymentMethod].isDefault
                };

                mappedPayments.push(mappedPaymentMethod);
              }
            }

            this._organisationPaymentMethods = mappedPayments;

            return this._organisationPaymentMethods;
        }),
        share()
      );

      return this.organisationPaymentMethodsObservable;
    }
  }

  public getCurrentComputerIpData(): Observable<string> {
    return this._httpClient.get('http://ipinfo.io/json').pipe(
      map((ipInfo: any) => {
        return ipInfo.ip;
      })
    );
  }

  public saveOrganization(organization: OrganizationModel): Observable<OrganizationModel> {
    if (organization.organizationType === OrganizationType.Personal) {
      organization.VAT = null;
      organization.industry = null;
      organization.companyNumber = null;
    }

    return this._httpClient.post('heficed.com', organization).pipe(
      map(result => {
        return organization;
      }),
      catchError(
        error => of(organization))
    );
  }
}
