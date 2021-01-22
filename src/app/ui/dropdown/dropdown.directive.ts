import { AfterContentInit, ContentChild, Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown-toggle.directive';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterContentInit {

  constructor(
    private elem: ElementRef
  ) { }

  @ContentChild(DropdownToggleDirective, {
    read: DropdownToggleDirective
  }) toggle: DropdownToggleDirective = new DropdownToggleDirective();

  @ContentChild(DropdownMenuDirective, {
    read: DropdownMenuDirective
  })
  menu!: DropdownMenuDirective;

  @HostBinding('class.show')
  opened = false;

  @HostListener('document:keyup.escape')
  @HostListener('document:click', ['$event.path'])
  exitDropdown(path: Array<any> = []): void {
    const isOutside = path.indexOf(this.elem.nativeElement) === -1;

    if (isOutside) {
      this.close();
    }

  }

  open(): void {
    this.opened = true;
    this.menu.opened = this.opened;
  }

  close(): void {
    this.opened = false;
    this.menu.opened = this.opened;
  }

  toggleMenu(): void {
    this.opened ? this.close() : this.open();
  }


  ngAfterContentInit(): void {
    this.close();

    this.toggle.onToggle.subscribe(() =>
      this.toggleMenu()
    );

  }

}
