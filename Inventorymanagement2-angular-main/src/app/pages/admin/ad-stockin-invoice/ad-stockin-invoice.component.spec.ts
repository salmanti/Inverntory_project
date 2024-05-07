import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStockinInvoiceComponent } from './ad-stockin-invoice.component';

describe('AdStockinInvoiceComponent', () => {
  let component: AdStockinInvoiceComponent;
  let fixture: ComponentFixture<AdStockinInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdStockinInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdStockinInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
