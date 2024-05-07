import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSalereturnComponent } from './ad-salereturn.component';

describe('AdSalereturnComponent', () => {
  let component: AdSalereturnComponent;
  let fixture: ComponentFixture<AdSalereturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSalereturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSalereturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
