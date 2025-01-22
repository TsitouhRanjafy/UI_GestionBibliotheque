import { TestBed } from '@angular/core/testing';

import { GetEmpruntService } from './get-emprunt.service';

describe('GetEmpruntService', () => {
  let service: GetEmpruntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEmpruntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
