import { Directive, Input } from '@angular/core';
import { ElementSize } from '../core/size';

@Directive()
export class FlareButtonBaseDirective {
  @Input() size: ElementSize | undefined;
}
