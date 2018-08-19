import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeditorComponent } from './jeditor.component';

describe('JeditorComponent', () => {
  let component: JeditorComponent;
  let fixture: ComponentFixture<JeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
