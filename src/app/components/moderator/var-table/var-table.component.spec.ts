import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarTableComponent } from './var-table.component';

describe('VarTableComponent', () => {
  let component: VarTableComponent;
  let fixture: ComponentFixture<VarTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VarTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
