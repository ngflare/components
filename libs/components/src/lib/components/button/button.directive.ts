import { Directive } from '@angular/core';
import { FlareButtonBaseDirective } from './button-base.directive';

@Directive({
  selector: 'button[f-button], a[f-button]',
  exportAs: 'fButton',
  standalone: true,
})
export class FlareButtonDirective extends FlareButtonBaseDirective {}
