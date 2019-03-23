import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { OrganizationCountryModel } from '../models/organization-country.model';
import { OrganizationCountryPhoneCodesModel } from '../models/organization-country-phone-code.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizationInformationService {

  constructor(private http: HttpClient) { }

  public getCountryData(): Observable<OrganizationCountryModel[]> {
      return this.http.get('../../assets/countries.json').pipe(
        map((countries: any) => {
          const mappedCountries: OrganizationCountryModel[] = [];

          for (const country in countries) {
            if (countries.hasOwnProperty(country)) {
              const mappedCountry: OrganizationCountryModel = {
                key: country,
                value: countries[country]
              }

              mappedCountries.push(mappedCountry);
            }
          };

          return mappedCountries;
        })
      );
  }

  public getPhoneCodeData(): Observable<OrganizationCountryPhoneCodesModel[]> {
    return this.http.get('../../assets/phoneCodesByCountry.json').pipe(
      map((phoneCodeItems: any) => {
        const mappedPhoneCodeItems: OrganizationCountryPhoneCodesModel[] = [];

        phoneCodeItems.forEach(phoneCodeItem => {
          const mappedPhoneCodeItem: OrganizationCountryPhoneCodesModel = {
            name: phoneCodeItem.name,
            dialCode: phoneCodeItem.dial_code,
            code: phoneCodeItem.name
          };
          mappedPhoneCodeItems.push(mappedPhoneCodeItem);
        });

        return mappedPhoneCodeItems;
      })
    );
  }


  public getPaymentData(): Observable<any> {
    return this.http.get('https://pastebin.com/raw/AmVZEjFq');
  }

  public getCurrentComputerIpData(): Observable<string> {
    return this.http.get('http://ipinfo.io/json').pipe(
      map((ipInfo: any) => {
        return ipInfo.ip;
      })
    );
  }
}
