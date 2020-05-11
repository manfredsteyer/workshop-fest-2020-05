import { async, TestBed } from '@angular/core/testing';
import { LuggageFeatureReportLossModule } from './luggage-feature-report-loss.module';

describe('LuggageFeatureReportLossModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LuggageFeatureReportLossModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LuggageFeatureReportLossModule).toBeDefined();
  });
});
