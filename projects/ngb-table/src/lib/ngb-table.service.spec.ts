import { TestBed } from '@angular/core/testing';

import { NgbTableService } from './ngb-table.service';

describe('NgbTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgbTableService = TestBed.get(NgbTableService);
    expect(service).toBeTruthy();
  });
});
