import { Directive } from '@angular/core';
import { FlareButtonBaseDirective } from './button-base.directive';

@Directive({
  selector: 'button[f-text-button], a[f-text-button]',
  exportAs: 'fTextButton',
  standalone: true,
  host: {
    class: 'f-text-button',
  },
})
export class FlareTextButtonDirective extends FlareButtonBaseDirective {}
