import { async, TestBed } from '@angular/core/testing';
import { LuggageFeatureCheckinModule } from './luggage-feature-checkin.module';

describe('LuggageFeatureCheckinModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LuggageFeatureCheckinModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LuggageFeatureCheckinModule).toBeDefined();
  });
});
