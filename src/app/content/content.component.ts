import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

import { interval, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  imports: [
    AsyncPipe,
    NgOptimizedImage
  ],
})
export class ContentComponent {
  data$: Observable<string[]>;

  constructor(private readonly httpClient: HttpClient) {
    this.data$ = interval(30000).pipe(switchMap(() => this.fetchData()));
  }

  private fetchData() {
    return this.httpClient.get<string[]>('');
  }
}
