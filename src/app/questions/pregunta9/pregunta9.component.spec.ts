import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta9Component } from './pregunta9.component';

describe('Pregunta9Component', () => {
  let component: Pregunta9Component;
  let fixture: ComponentFixture<Pregunta9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pregunta9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
