import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPaymentlistComponent } from './ad-paymentlist.component';

describe('AdPaymentlistComponent', () => {
  let component: AdPaymentlistComponent;
  let fixture: ComponentFixture<AdPaymentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPaymentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdPaymentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
