import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdProductlistComponent } from './ad-productlist.component';

describe('AdProductlistComponent', () => {
  let component: AdProductlistComponent;
  let fixture: ComponentFixture<AdProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdProductlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
