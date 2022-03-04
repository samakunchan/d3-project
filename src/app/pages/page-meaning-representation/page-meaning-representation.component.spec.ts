import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeaningRepresentationComponent } from './page-meaning-representation.component';

describe('PageMeaningRepresentationComponent', () => {
  let component: PageMeaningRepresentationComponent;
  let fixture: ComponentFixture<PageMeaningRepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageMeaningRepresentationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMeaningRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
