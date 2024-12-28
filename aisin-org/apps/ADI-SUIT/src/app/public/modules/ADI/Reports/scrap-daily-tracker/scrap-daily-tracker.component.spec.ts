import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrapDailyTrackerComponent } from './scrap-daily-tracker.component';

describe('ScrapDailyTrackerComponent', () => {
  let component: ScrapDailyTrackerComponent;
  let fixture: ComponentFixture<ScrapDailyTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrapDailyTrackerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrapDailyTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
