import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HumanResourcesContainerComponent } from './human-resources-container.component';

describe('HumanResourcesContainerComponent', () => {
  let component: HumanResourcesContainerComponent;
  let fixture: ComponentFixture<HumanResourcesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanResourcesContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HumanResourcesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
