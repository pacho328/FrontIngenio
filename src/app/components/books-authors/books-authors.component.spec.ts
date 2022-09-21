import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAuthorsComponent } from './books-authors.component';

describe('BooksAuthorsComponent', () => {
  let component: BooksAuthorsComponent;
  let fixture: ComponentFixture<BooksAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksAuthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
