import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreeCheckComponent } from './agree-check.component';

describe('AgreeCheckComponent', () => {
  let component: AgreeCheckComponent;
  let fixture: ComponentFixture<AgreeCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreeCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
