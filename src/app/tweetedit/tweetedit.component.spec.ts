import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweeteditComponent } from './tweetedit.component';

describe('TweeteditComponent', () => {
  let component: TweeteditComponent;
  let fixture: ComponentFixture<TweeteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweeteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweeteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
