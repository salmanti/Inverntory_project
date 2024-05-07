import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSupplierComponent } from './ad-supplier.component';

describe('AdSupplierComponent', () => {
  let component: AdSupplierComponent;
  let fixture: ComponentFixture<AdSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
