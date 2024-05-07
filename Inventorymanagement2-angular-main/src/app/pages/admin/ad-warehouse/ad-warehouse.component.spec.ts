import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdWarehouseComponent } from './ad-warehouse.component';

describe('AdWarehouseComponent', () => {
  let component: AdWarehouseComponent;
  let fixture: ComponentFixture<AdWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdWarehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
