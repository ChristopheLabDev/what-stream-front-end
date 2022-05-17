import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyContentsComponent } from './page-my-contents.component';

describe('PageMyContentsComponent', () => {
  let component: PageMyContentsComponent;
  let fixture: ComponentFixture<PageMyContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMyContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMyContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
