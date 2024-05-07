import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStockinpendingComponent } from './ad-stockinpending.component';

describe('AdStockinpendingComponent', () => {
  let component: AdStockinpendingComponent;
  let fixture: ComponentFixture<AdStockinpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdStockinpendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdStockinpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
