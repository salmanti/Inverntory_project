import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisStockininvoiceComponent } from './dis-stockininvoice.component';

describe('DisStockininvoiceComponent', () => {
  let component: DisStockininvoiceComponent;
  let fixture: ComponentFixture<DisStockininvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisStockininvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisStockininvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
