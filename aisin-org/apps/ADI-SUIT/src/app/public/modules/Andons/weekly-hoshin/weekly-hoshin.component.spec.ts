import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeeklyHoshinComponent } from './weekly-hoshin.component';

describe('WeeklyHoshinComponent', () => {
  let component: WeeklyHoshinComponent;
  let fixture: ComponentFixture<WeeklyHoshinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyHoshinComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyHoshinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
