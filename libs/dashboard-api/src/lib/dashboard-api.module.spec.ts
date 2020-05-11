import { async, TestBed } from '@angular/core/testing';
import { DashboardApiModule } from './dashboard-api.module';

describe('DashboardApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DashboardApiModule).toBeDefined();
  });
});
