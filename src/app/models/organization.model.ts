import { OrganizationType } from '../enums/organization-type.enum';

export class OrganizationModel {
  organizationType: OrganizationType;
  name: string;
  countryCode: string;
  firstName: string;
  lastName: string;
  email: string;
  industry: string;
  VAT: number;
  country: string;
  stateRegion: string;
  city: string;
  address: string;
  zipCode: string;
  phone: number;
  companyNumber: number;
  ipAddress: string;
}
