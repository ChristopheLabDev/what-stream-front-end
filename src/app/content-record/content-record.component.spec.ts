import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRecordComponent } from './content-record.component';

describe('ContentRecordComponent', () => {
  let component: ContentRecordComponent;
  let fixture: ComponentFixture<ContentRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
