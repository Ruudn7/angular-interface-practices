import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCloseComponent } from './card-close.component';

describe('CardCloseComponent', () => {
  let component: CardCloseComponent;
  let fixture: ComponentFixture<CardCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
