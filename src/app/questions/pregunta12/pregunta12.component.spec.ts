import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta12Component } from './pregunta12.component';

describe('Pregunta12Component', () => {
  let component: Pregunta12Component;
  let fixture: ComponentFixture<Pregunta12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pregunta12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
