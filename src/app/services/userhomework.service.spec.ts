import { TestBed } from '@angular/core/testing';

import { UserhomeworkService } from './userhomework.service';

describe('UserhomeworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserhomeworkService = TestBed.get(UserhomeworkService);
    expect(service).toBeTruthy();
  });
});
