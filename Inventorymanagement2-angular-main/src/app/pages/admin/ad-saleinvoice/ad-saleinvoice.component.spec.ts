import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSaleinvoiceComponent } from './ad-saleinvoice.component';

describe('AdSaleinvoiceComponent', () => {
  let component: AdSaleinvoiceComponent;
  let fixture: ComponentFixture<AdSaleinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSaleinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSaleinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
