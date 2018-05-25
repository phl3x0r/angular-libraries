import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  group
} from '@angular/animations';

export const slideOldTransition = trigger('slideOld', [
  state('left', style({ transform: 'translateX(0)' })),
  state('right', style({ transform: 'translateX(0)' })),
  transition('* => *', animate(300))
]);

export const slideTransition = trigger('slide', [
  transition(
    ':increment',
    group([
      query(':enter', [
        style({
          left: '100%'
        }),
        animate('0.5s ease-out', style('*'))
      ]),
      query(':leave', [
        animate(
          '0.5s ease-out',
          style({
            left: '-100%'
          })
        )
      ])
    ])
  ),
  transition(
    ':decrement',
    group([
      query(':enter', [
        style({
          left: '-100%'
        }),
        animate('0.5s ease-out', style('*'))
      ]),
      query(':leave', [
        animate(
          '0.5s ease-out',
          style({
            left: '100%'
          })
        )
      ])
    ])
  )
]);
