import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStaffComponent } from './ad-staff.component';

describe('AdStaffComponent', () => {
  let component: AdStaffComponent;
  let fixture: ComponentFixture<AdStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
