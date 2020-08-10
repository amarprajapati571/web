import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowusComponent } from './followus.component';

describe('FollowusComponent', () => {
  let component: FollowusComponent;
  let fixture: ComponentFixture<FollowusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
