import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipeComponentComponent } from './edit-recipe-component.component';

describe('EditRecipeComponentComponent', () => {
  let component: EditRecipeComponentComponent;
  let fixture: ComponentFixture<EditRecipeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecipeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
