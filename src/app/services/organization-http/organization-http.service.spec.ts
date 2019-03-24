/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrganizationInformationService } from './organization-information.service';

describe('Service: OrganizationInformation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationInformationService]
    });
  });

  it('should ...', inject([OrganizationInformationService], (service: OrganizationInformationService) => {
    expect(service).toBeTruthy();
  }));
});
