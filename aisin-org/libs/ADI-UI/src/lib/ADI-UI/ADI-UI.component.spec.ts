import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ADIUIComponent } from './ADI-UI.component';

describe('ADIUIComponent', () => {
  let component: ADIUIComponent;
  let fixture: ComponentFixture<ADIUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADIUIComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ADIUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
