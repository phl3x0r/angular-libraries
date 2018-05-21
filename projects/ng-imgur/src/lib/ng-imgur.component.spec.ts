import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgImgurComponent } from './ng-imgur.component';

describe('NgImgurComponent', () => {
  let component: NgImgurComponent;
  let fixture: ComponentFixture<NgImgurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgImgurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgImgurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
