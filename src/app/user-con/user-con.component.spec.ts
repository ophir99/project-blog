import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConComponent } from './user-con.component';

describe('UserConComponent', () => {
  let component: UserConComponent;
  let fixture: ComponentFixture<UserConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
