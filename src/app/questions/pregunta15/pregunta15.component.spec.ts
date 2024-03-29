import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta15Component } from './pregunta15.component';

describe('Pregunta15Component', () => {
  let component: Pregunta15Component;
  let fixture: ComponentFixture<Pregunta15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pregunta15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
