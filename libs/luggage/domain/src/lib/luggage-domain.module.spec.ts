import { async, TestBed } from '@angular/core/testing';
import { LuggageDomainModule } from './luggage-domain.module';

describe('LuggageDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LuggageDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LuggageDomainModule).toBeDefined();
  });
});
