import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelVarComponent } from './model-var.component';

describe('ModelVarComponent', () => {
  let component: ModelVarComponent;
  let fixture: ComponentFixture<ModelVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelVarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
