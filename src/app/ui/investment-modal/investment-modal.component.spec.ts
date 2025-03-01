import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentModalComponent } from './investment-modal.component';

describe('InvestmentModalComponent', () => {
  let component: InvestmentModalComponent;
  let fixture: ComponentFixture<InvestmentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentModalComponent]
    });
    fixture = TestBed.createComponent(InvestmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
