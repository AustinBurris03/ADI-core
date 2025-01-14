import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdiUiTableComponent } from './adi-ui-table.component';

describe('AdiUiTableComponent', () => {
  let component: AdiUiTableComponent;
  let fixture: ComponentFixture<AdiUiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdiUiTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdiUiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
