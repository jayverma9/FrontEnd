import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalClassListDialogComponent } from './global-class-list-dialog.component';

describe('GlobalClassListDialogComponent', () => {
  let component: GlobalClassListDialogComponent;
  let fixture: ComponentFixture<GlobalClassListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalClassListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalClassListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
