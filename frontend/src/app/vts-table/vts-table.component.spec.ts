import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtsTableComponent } from './vts-table.component';

describe('VtsTableComponent', () => {
  let component: VtsTableComponent;
  let fixture: ComponentFixture<VtsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
