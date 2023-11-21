import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectListTemplateComponent } from './subject-list-template.component';

describe('SubjectListTemplateComponent', () => {
  let component: SubjectListTemplateComponent;
  let fixture: ComponentFixture<SubjectListTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectListTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
