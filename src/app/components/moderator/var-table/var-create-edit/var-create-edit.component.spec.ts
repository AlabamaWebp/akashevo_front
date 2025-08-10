import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarCreateEditComponent } from './var-create-edit.component';

describe('VarCreateEditComponent', () => {
  let component: VarCreateEditComponent;
  let fixture: ComponentFixture<VarCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VarCreateEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
