import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisHomeComponent } from './dis-home.component';

describe('DisHomeComponent', () => {
  let component: DisHomeComponent;
  let fixture: ComponentFixture<DisHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
