import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDesignComponent } from './header-design.component';

describe('HeaderDesignComponent', () => {
  let component: HeaderDesignComponent;
  let fixture: ComponentFixture<HeaderDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
