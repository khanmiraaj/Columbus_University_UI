import { TestBed } from '@angular/core/testing';

import { ColumbusService } from './columbus.service';

describe('ColumbusService', () => {
  let service: ColumbusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumbusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
