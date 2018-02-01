import { TestBed, inject } from '@angular/core/testing';

import { InterviewSettingService } from './interview-setting.service';

describe('InterviewSettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterviewSettingService]
    });
  });

  it('should be created', inject([InterviewSettingService], (service: InterviewSettingService) => {
    expect(service).toBeTruthy();
  }));
});
