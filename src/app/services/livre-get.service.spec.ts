import { TestBed } from '@angular/core/testing';

import { LivreGetService } from './livre-get.service';

describe('LivreGetService', () => {
  let service: LivreGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
