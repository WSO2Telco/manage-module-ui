/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApprovalRemoteDataService } from './approval-remote-data.service';

describe('ApprovalRemoteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApprovalRemoteDataService]
    });
  });

  it('should ...', inject([ApprovalRemoteDataService], (service: ApprovalRemoteDataService) => {
    expect(service).toBeTruthy();
  }));
});
