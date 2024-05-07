import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisDashboardComponent } from './dis-dashboard.component';

describe('DisDashboardComponent', () => {
  let component: DisDashboardComponent;
  let fixture: ComponentFixture<DisDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
