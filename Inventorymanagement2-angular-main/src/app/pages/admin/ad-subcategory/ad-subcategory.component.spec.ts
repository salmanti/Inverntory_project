import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSubcategoryComponent } from './ad-subcategory.component';

describe('AdSubcategoryComponent', () => {
  let component: AdSubcategoryComponent;
  let fixture: ComponentFixture<AdSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSubcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
