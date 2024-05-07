import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLoginreglistComponent } from './ad-loginreglist.component';

describe('AdLoginreglistComponent', () => {
  let component: AdLoginreglistComponent;
  let fixture: ComponentFixture<AdLoginreglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdLoginreglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdLoginreglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
