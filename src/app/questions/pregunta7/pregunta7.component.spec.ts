import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta7Component } from './pregunta7.component';

describe('Pregunta7Component', () => {
  let component: Pregunta7Component;
  let fixture: ComponentFixture<Pregunta7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pregunta7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
