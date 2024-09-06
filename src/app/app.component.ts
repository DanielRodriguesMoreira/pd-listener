import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NgOptimizedImage, FooterComponent, ContentComponent]
})
export class AppComponent {
}
