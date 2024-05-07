import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStocinComponent } from './ad-stocin.component';

describe('AdStocinComponent', () => {
  let component: AdStocinComponent;
  let fixture: ComponentFixture<AdStocinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdStocinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdStocinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
