import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSalesReportComponent } from './ad-sales-report.component';

describe('AdSalesReportComponent', () => {
  let component: AdSalesReportComponent;
  let fixture: ComponentFixture<AdSalesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSalesReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
