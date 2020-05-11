import { async, TestBed } from '@angular/core/testing';
import { BonusMilesModule } from './bonus-miles.module';

describe('BonusMilesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BonusMilesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BonusMilesModule).toBeDefined();
  });
});
