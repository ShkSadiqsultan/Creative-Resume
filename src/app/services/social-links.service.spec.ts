/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocialLinksService } from './social-links.service';

describe('Service: SocialLinks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialLinksService]
    });
  });

  it('should ...', inject([SocialLinksService], (service: SocialLinksService) => {
    expect(service).toBeTruthy();
  }));
});
