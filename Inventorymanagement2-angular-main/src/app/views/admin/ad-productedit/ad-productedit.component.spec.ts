import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdProducteditComponent } from './ad-productedit.component';

describe('AdProducteditComponent', () => {
  let component: AdProducteditComponent;
  let fixture: ComponentFixture<AdProducteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdProducteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdProducteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
