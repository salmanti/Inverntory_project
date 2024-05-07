import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdReceivingComponent } from './ad-receiving.component';

describe('AdReceivingComponent', () => {
  let component: AdReceivingComponent;
  let fixture: ComponentFixture<AdReceivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdReceivingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdReceivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
