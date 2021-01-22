import { Directive, EventEmitter, HostListener } from '@angular/core';
@Directive({
  selector: '[appDropdownToggle], .dropdown-toggle',
})

export class DropdownToggleDirective {

    onToggle = new EventEmitter();

    @HostListener('click')
    toggle(): void {
        this.onToggle.emit();
    }

}
