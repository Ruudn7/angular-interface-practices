import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { StaticCardComponent } from './../static-card/static-card.component';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.scss']
})
export class PopupMessageComponent extends StaticCardComponent {

  @Input() type = '';
  @Input() text = '';

  subscription = new Subscription();

  constructor() {
    super();
  }

  close(): void {
    setTimeout(() => {
      super.close();
    }, 150);
  }

}
