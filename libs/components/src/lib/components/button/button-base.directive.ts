import { Directive, HostBinding, Input } from '@angular/core';
import { ElementSize } from '../core/common';
import { BooleanInput, coerceBooleanProperty } from '../core/coercion';

@Directive()
export class FlareButtonBaseDirective {
  @HostBinding('class.f-button-circular') get isCircular() {
    return this.circular;
  }

  @HostBinding('class') get addSize() {
    if (!this.size) return `f-button`;
    return `f-button f-button-${this.size}`;
  }

  @Input()
  size: ElementSize | undefined;

  #circular: boolean = false;
  @Input() get circular(): boolean {
    return this.#circular;
  }
  set circular(value: BooleanInput) {
    this.#circular = coerceBooleanProperty(value);
  }
}
