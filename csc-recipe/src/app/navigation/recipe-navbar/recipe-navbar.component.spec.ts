import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNavbarComponent } from './recipe-navbar.component';

describe('RecipeNavbarComponent', () => {
  let component: RecipeNavbarComponent;
  let fixture: ComponentFixture<RecipeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
