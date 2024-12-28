import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QaChartComponent } from './qa-chart.component';

describe('QaChartComponent', () => {
  let component: QaChartComponent;
  let fixture: ComponentFixture<QaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QaChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
