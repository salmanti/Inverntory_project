import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBrandComponent } from './ad-brand.component';

describe('AdBrandComponent', () => {
  let component: AdBrandComponent;
  let fixture: ComponentFixture<AdBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
