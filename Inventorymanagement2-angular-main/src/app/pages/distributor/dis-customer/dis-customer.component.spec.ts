import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisCustomerComponent } from './dis-customer.component';

describe('DisCustomerComponent', () => {
  let component: DisCustomerComponent;
  let fixture: ComponentFixture<DisCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
