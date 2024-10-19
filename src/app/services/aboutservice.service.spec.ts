/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AboutserviceService } from './aboutservice.service';

describe('Service: Aboutservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutserviceService]
    });
  });

  it('should ...', inject([AboutserviceService], (service: AboutserviceService) => {
    expect(service).toBeTruthy();
  }));
});
