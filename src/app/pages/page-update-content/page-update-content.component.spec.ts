import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdateContentComponent } from './page-update-content.component';

describe('PageUpdateContentComponent', () => {
  let component: PageUpdateContentComponent;
  let fixture: ComponentFixture<PageUpdateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUpdateContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUpdateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
