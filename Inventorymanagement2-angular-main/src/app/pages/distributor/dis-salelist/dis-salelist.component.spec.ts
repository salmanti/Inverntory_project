import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisSalelistComponent } from './dis-salelist.component';

describe('DisSalelistComponent', () => {
  let component: DisSalelistComponent;
  let fixture: ComponentFixture<DisSalelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisSalelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisSalelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
