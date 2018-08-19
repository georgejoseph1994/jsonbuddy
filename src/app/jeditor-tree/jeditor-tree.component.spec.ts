import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeditorTreeComponent } from './jeditor-tree.component';

describe('JeditorTreeComponent', () => {
  let component: JeditorTreeComponent;
  let fixture: ComponentFixture<JeditorTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeditorTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeditorTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
