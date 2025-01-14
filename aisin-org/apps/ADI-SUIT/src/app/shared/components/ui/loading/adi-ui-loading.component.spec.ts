import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdiUiLoadingComponent } from './adi-ui-loading.component';

describe('AdiUiLoadingComponent', () => {
  let component: AdiUiLoadingComponent;
  let fixture: ComponentFixture<AdiUiLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdiUiLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdiUiLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
