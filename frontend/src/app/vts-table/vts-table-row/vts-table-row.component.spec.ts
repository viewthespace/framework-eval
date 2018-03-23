import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtsTableRowComponent } from './vts-table-row.component';

describe('VtsTableRowComponent', () => {
  let component: VtsTableRowComponent;
  let fixture: ComponentFixture<VtsTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtsTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtsTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
