import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ADICOREComponent } from './ADI-CORE.component';

describe('ADICOREComponent', () => {
  let component: ADICOREComponent;
  let fixture: ComponentFixture<ADICOREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADICOREComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ADICOREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
