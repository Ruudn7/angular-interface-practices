import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown-toggle.directive';
import { Directive, ElementRef, OnInit, Renderer2, AfterContentInit, ContentChild } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterContentInit {

  constructor(
    private elem: ElementRef,
    private renderer: Renderer2
  ) {
    console.log('Hello dropdown', this.elem);
  }

  @ContentChild(DropdownToggleDirective, {read: ElementRef}) toggle: ElementRef | undefined;
  @ContentChild(DropdownMenuDirective, {read: ElementRef}) menu: ElementRef | undefined;

  ngAfterContentInit(): void {
    console.log(this.toggle, this.menu);

    const toggle = this.toggle?.nativeElement;
    const menu = this.menu?.nativeElement;

    menu.hidden = true;

    this.renderer.setProperty(menu, 'hidden', true);
    this.renderer.listen(toggle, 'click', () => {
      this.renderer.setProperty(menu, 'hidden', !menu.hidden);
    });
  }

}
