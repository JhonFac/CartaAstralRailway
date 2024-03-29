import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta14Component } from './pregunta14.component';

describe('Pregunta14Component', () => {
  let component: Pregunta14Component;
  let fixture: ComponentFixture<Pregunta14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pregunta14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
