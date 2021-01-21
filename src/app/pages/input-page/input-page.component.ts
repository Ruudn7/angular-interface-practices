import { Component } from '@angular/core';

import { StaticCardComponent } from './../../ui/static-card/static-card.component';

@Component({
    selector: 'app-input-page',
    templateUrl: './input-page.component.html',
})

export class InputPageComponent {
    title = 'angular-interface-practices';
    message = '';
    open = false;

    list = [
      'pierwszy',
      'drugi',
      'trzec'
    ];

    focus(elem: StaticCardComponent): void {
      elem.show();
    }
}

