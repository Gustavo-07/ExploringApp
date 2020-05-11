import { TestBed } from '@angular/core/testing';

import { SitioInteresService } from './sitio-interes.service';

describe('SitioInteresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SitioInteresService = TestBed.get(SitioInteresService);
    expect(service).toBeTruthy();
  });
});
