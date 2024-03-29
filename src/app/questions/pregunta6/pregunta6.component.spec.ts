import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta6Component } from './pregunta6.component';

describe('Pregunta6Component', () => {
  let component: Pregunta6Component;
  let fixture: ComponentFixture<Pregunta6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pregunta6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
