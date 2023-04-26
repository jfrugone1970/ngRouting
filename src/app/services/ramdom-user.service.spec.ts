import { TestBed } from '@angular/core/testing';

import { RamdomUserService } from './ramdom-user.service';

describe('RamdomUserService', () => {
  let service: RamdomUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamdomUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
