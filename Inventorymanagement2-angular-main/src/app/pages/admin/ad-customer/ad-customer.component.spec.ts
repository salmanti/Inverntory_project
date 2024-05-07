import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCustomerComponent } from './ad-customer.component';

describe('AdCustomerComponent', () => {
  let component: AdCustomerComponent;
  let fixture: ComponentFixture<AdCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
