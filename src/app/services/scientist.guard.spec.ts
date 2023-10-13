import { TestBed } from '@angular/core/testing';

import { ScientistGuard } from './scientist.guard';

describe('ScientistGuard', () => {
  let guard: ScientistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ScientistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
