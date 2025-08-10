import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzComponent } from './analyz.component';

describe('AnalyzComponent', () => {
  let component: AnalyzComponent;
  let fixture: ComponentFixture<AnalyzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
