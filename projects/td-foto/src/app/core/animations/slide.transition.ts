import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export const slideTransition = trigger('slide', [
  state('left', style({ transform: 'translateX(0)' })),
  state('right', style({ transform: 'translateX(0)' })),
  transition('* => *', animate(300))
]);
