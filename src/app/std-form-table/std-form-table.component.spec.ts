import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFormTableComponent } from './std-form-table.component';

describe('StdFormTableComponent', () => {
  let component: StdFormTableComponent;
  let fixture: ComponentFixture<StdFormTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdFormTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdFormTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
