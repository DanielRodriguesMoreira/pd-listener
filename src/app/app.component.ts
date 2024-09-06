import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NgOptimizedImage, FooterComponent]
})
export class AppComponent {
}
