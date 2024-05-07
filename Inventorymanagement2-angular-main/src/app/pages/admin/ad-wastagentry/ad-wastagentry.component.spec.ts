import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdWastagentryComponent } from './ad-wastagentry.component';

describe('AdWastagentryComponent', () => {
  let component: AdWastagentryComponent;
  let fixture: ComponentFixture<AdWastagentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdWastagentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdWastagentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
