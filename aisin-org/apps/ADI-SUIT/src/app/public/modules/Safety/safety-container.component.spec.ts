import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SafetyContainerComponent } from './safety-container.component';

describe('SafetyContainerComponent', () => {
  let component: SafetyContainerComponent;
  let fixture: ComponentFixture<SafetyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafetyContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SafetyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
