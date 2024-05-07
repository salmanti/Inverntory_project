import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdProductStockComponent } from './ad-product-stock.component';

describe('AdProductStockComponent', () => {
  let component: AdProductStockComponent;
  let fixture: ComponentFixture<AdProductStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdProductStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdProductStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
