import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeaningRepresentation2Component } from './page-meaning-representation2.component';

describe('PageMeaningRepresentation2Component', () => {
  let component: PageMeaningRepresentation2Component;
  let fixture: ComponentFixture<PageMeaningRepresentation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageMeaningRepresentation2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMeaningRepresentation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
