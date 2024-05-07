import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSaleslistComponent } from './ad-saleslist.component';

describe('AdSaleslistComponent', () => {
  let component: AdSaleslistComponent;
  let fixture: ComponentFixture<AdSaleslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSaleslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSaleslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
