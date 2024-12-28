import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ADIContainerComponent } from './ADI-container.component';

describe('ADIContainerComponent', () => {
  let component: ADIContainerComponent;
  let fixture: ComponentFixture<ADIContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADIContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ADIContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
