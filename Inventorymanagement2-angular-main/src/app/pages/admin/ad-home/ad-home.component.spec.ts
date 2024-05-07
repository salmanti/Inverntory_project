import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHomeComponent } from './ad-home.component';

describe('AdHomeComponent', () => {
  let component: AdHomeComponent;
  let fixture: ComponentFixture<AdHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
