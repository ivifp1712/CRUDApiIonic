import { TestBed } from '@angular/core/testing';

import { libreriaService } from './libreria.service';

describe('PostServiceService', () => {
  let service: libreriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(libreriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
