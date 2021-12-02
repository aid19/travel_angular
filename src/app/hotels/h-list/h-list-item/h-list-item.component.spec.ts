import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HListItemComponent } from './h-list-item.component';

describe('HListItemComponent', () => {
  let component: HListItemComponent;
  let fixture: ComponentFixture<HListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
