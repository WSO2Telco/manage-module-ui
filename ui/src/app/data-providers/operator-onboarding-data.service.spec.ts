import { TestBed, inject } from '@angular/core/testing';

import { OperatorOnboardingDataService } from './operator-onboarding-data.service';

describe('OperatorOnboardingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperatorOnboardingDataService]
    });
  });

  it('should be created', inject([OperatorOnboardingDataService], (service: OperatorOnboardingDataService) => {
    expect(service).toBeTruthy();
  }));
});
