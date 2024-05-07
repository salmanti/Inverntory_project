import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareDashboardComponent } from './ware-dashboard.component';

describe('WareDashboardComponent', () => {
  let component: WareDashboardComponent;
  let fixture: ComponentFixture<WareDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WareDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
