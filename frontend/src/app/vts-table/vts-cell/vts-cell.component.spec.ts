import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtsCellComponent } from './vts-cell.component';

describe('VtsCellComponent', () => {
  let component: VtsCellComponent;
  let fixture: ComponentFixture<VtsCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtsCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtsCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
