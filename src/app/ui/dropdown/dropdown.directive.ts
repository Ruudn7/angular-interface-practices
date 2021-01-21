import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  constructor(
    private elem: ElementRef
  ) {
    console.log('Hello dropdown', this.elem);
  }

  ngOnInit(): void {
    const el = this.elem.nativeElement;

    const toggle = el.querySelector('.dropdown-toggle');
    const menu = el.querySelector('.dropdown-menu');

    console.log(toggle, menu);

    menu.hidden = true;
    toggle.addEventListener('click', () => {
      menu.hidden = !menu.hidden;
    });
  }
}
