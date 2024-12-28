import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FifoReportsComponent } from './fifo-reports.component';

describe('FifoReportsComponent', () => {
  let component: FifoReportsComponent;
  let fixture: ComponentFixture<FifoReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FifoReportsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FifoReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
