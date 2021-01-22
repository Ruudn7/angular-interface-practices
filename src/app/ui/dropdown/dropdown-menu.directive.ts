import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownMenu], .dropdown-menu'
})
export class DropdownMenuDirective {


    @HostBinding('class.show')
    opened = false;

}
