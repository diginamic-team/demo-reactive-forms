import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoReactiveFormsComponent } from './demo-reactive-forms.component';

describe('DemoReactiveFormsComponent', () => {
  let component: DemoReactiveFormsComponent;
  let fixture: ComponentFixture<DemoReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
