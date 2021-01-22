import { Component } from '@angular/core';
import { DropdownDirective } from 'src/app/ui/dropdown/dropdown.directive';

@Component({
  selector: 'app-root',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
  title = 'app';

  menu = {
    items: [
      { label: 'Pierwsza opcja' },
      { label: 'Druga opcja' },
      { label: 'Jeszcze jedna...' },
    ]
  };

  open(ref: DropdownDirective): void {
      ref.toggleMenu();
  }

  addMenuItem(label: string): void{
    this.menu.items.push({
      label
    });
  }
}
