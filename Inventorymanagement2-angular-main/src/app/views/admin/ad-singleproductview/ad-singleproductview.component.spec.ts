import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSingleproductviewComponent } from './ad-singleproductview.component';

describe('AdSingleproductviewComponent', () => {
  let component: AdSingleproductviewComponent;
  let fixture: ComponentFixture<AdSingleproductviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSingleproductviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSingleproductviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
