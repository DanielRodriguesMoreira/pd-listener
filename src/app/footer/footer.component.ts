import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  animations: [
    trigger('slideInOut', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10px)' }), // Slight left shift
        animate('500ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })) // Slide in smoothly
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0, transform: 'translateX(10px)' })) // Slide out smoothly with opacity
      ])
    ])
  ]
})
export class FooterComponent implements OnInit, OnDestroy {
  readonly QUOTES = [
    'Be careful not to choke on your aspirations.',
    'From my point of view, the Jedi are evil.',
    'He will join us or die, my Master.',
    'He will not be permanently damaged.',
    'I find your lack of faith disturbing.',
    'The ability to destroy a planet is insignificant next to the power of the Force.',
    'You don’t know the power of the Dark Side! I must obey my Master.',
    'I am altering the deal. Pray I don’t alter it any further.',
    'When I left you, I was but the learner. Now I am the Master.',
    'You don\'t know the power of the Dark Side.',
    'If you\'re not with me, then you\'re my enemy!',
    'There is no escape! Don\'t make me destroy you!',
    'The Emperor is not as forgiving as I am.',
    'Your strength has returned, but the weakness still remains.',
    'You have failed me for the last time.',
    'Perhaps I can find new ways to motivate them.',
    'I sense something. A presence I’ve not felt since…'
  ];
  quote = this.QUOTES[0];
  show = true;

  private intervalId: ReturnType<typeof setInterval> | undefined;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.show = false;

      setTimeout(() => {
        this.quote = this.QUOTES[this.getRandomIndex()];
        this.show = true;
      }, 500);

    }, 10000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private getRandomIndex() {
    return Math.floor(Math.random() * this.QUOTES.length);
  }
}
