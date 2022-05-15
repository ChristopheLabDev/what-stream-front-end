import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewContentComponent } from './page-new-content.component';

describe('PageNewContentComponent', () => {
  let component: PageNewContentComponent;
  let fixture: ComponentFixture<PageNewContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNewContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
