import { TestBed } from '@angular/core/testing';

import { Select } from './select';

describe('Select', () => {
  let service: Select;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Select);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
