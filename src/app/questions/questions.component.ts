import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
  progress: number = 0;
  question: number = 10;

  avanzarProgreso() {
    if (this.progress < 100) {
      this.progress += 100 / this.question;
    }
  }

  retrocederProgreso() {
    if (this.progress > 0) {
      this.progress -= 100 / this.question;
    }
  }


}
