import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenefitsLinksComponent } from './benefits-links.component';

describe('BenefitsLinksComponent', () => {
  let component: BenefitsLinksComponent;
  let fixture: ComponentFixture<BenefitsLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitsLinksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
