import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltripComponent } from './fulltrip.component';

describe('FulltripComponent', () => {
  let component: FulltripComponent;
  let fixture: ComponentFixture<FulltripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulltripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulltripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
