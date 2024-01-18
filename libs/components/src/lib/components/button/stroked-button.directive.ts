import { Directive } from '@angular/core';
import { FlareButtonBaseDirective } from './button-base.directive';

@Directive({
  selector: 'button[f-stroked-button], a[f-stroked-button]',
  exportAs: 'fStrokedButton',
  standalone: true,
  host: {
    class: 'f-stroked-button',
  },
})
export class FlareStrokedButtonDirective extends FlareButtonBaseDirective {}
