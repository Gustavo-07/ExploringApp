import { TestBed } from '@angular/core/testing';

import { SitioturisticoService } from './sitioturistico.service';

describe('SitioturisticoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SitioturisticoService = TestBed.get(SitioturisticoService);
    expect(service).toBeTruthy();
  });
});
