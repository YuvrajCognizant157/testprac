import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tsk } from './tsk';

describe('Tsk', () => {
  let component: Tsk;
  let fixture: ComponentFixture<Tsk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tsk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tsk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
