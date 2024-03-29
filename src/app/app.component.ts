import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './home/home.component'
import { QuestionsComponent } from './questions/questions.component'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, QuestionsComponent, HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'astrology';

  page: string = 'home';
  progress: number = 0;
  // avanzarProgreso() {
  //   this.progress += 5;
  // }

  botonClik = (page: string) => {
    console.log('¡Se ejecutó el botón!');
    this.page = page;
  }

  avanzarProgreso() {
    if (this.progress < 10) {
      this.progress += 5;
    }
  }

  retrocederProgreso() {
    if (this.progress > 0) {
      this.progress -= 5;
    }
  }


}
