import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyComponent } from './already.component';

describe('AlreadyComponent', () => {
  let component: AlreadyComponent;
  let fixture: ComponentFixture<AlreadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlreadyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlreadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
