import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSalesComponent } from './ad-sales.component';

describe('AdSalesComponent', () => {
  let component: AdSalesComponent;
  let fixture: ComponentFixture<AdSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
