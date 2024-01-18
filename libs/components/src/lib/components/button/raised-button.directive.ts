import { Directive } from '@angular/core';
import { FlareButtonBaseDirective } from './button-base.directive';

@Directive({
  selector: 'button[f-raised-button], a[f-raised-button]',
  exportAs: 'fRaisedButton',
  standalone: true,
  host: {
    class: 'f-raised-button',
  },
})
export class FlareRaisedButtonDirective extends FlareButtonBaseDirective {}
