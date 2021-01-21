import { Component } from '@angular/core';

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

  addMenuItem(label: string): void{
    this.menu.items.push({
      label
    });
  }
}
