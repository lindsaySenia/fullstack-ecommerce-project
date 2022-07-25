import { TestBed } from '@angular/core/testing';

import { FormDropDownService } from './form-drop-down.service';

describe('FormDropDownService', () => {
  let service: FormDropDownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDropDownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
