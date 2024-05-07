import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistBrandComponent } from './productlist-brand.component';

describe('ProductlistBrandComponent', () => {
  let component: ProductlistBrandComponent;
  let fixture: ComponentFixture<ProductlistBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductlistBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
