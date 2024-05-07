import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDistributorComponent } from './ad-distributor.component';

describe('AdDistributorComponent', () => {
  let component: AdDistributorComponent;
  let fixture: ComponentFixture<AdDistributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDistributorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
