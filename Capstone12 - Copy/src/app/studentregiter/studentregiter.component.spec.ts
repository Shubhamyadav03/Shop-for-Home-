import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentregiterComponent } from './studentregiter.component';

describe('StudentregiterComponent', () => {
  let component: StudentregiterComponent;
  let fixture: ComponentFixture<StudentregiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentregiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentregiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
