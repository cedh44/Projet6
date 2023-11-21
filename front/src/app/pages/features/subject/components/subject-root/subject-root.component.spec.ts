import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectRootComponent } from './subject-root.component';

describe('SubjectComponent', () => {
  let component: SubjectRootComponent;
  let fixture: ComponentFixture<SubjectRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
