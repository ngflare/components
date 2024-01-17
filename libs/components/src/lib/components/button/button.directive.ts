import { Directive } from '@angular/core';
import { FlareButtonBaseDirective } from './button-base.directive';

@Directive({
  selector: 'button[f-button], a[f-button]',
  exportAs: 'fButton',
  standalone: true,
  host: {
    '[class]': 'classes',
  },
})
export class FlareButtonDirective extends FlareButtonBaseDirective {
  get classes(): string {
    let str: string = 'f-button';
    if (this.size) {
      str += ` f-button-${this.size}`;
    }
    return str;
  }
}
