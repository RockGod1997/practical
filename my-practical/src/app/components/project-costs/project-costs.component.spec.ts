import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCostsComponent } from './project-costs.component';

describe('ProjectCostsComponent', () => {
  let component: ProjectCostsComponent;
  let fixture: ComponentFixture<ProjectCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
