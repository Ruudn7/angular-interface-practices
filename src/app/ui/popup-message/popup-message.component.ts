import { StaticCardComponent } from './../static-card/static-card.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.scss']
})
export class PopupMessageComponent extends StaticCardComponent implements OnInit {

  @Input() type = '';
  @Input() text = '';

  constructor() {
    super();
  }

  close(): void {
    setTimeout(() => {
      super.close();
    }, 1500);
  }

  ngOnInit(): void {
  }

}
