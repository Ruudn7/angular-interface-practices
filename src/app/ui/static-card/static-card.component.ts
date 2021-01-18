import { Attribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-static-card',
  templateUrl: './static-card.component.html',
  styleUrls: ['./static-card.component.scss']
})
export class StaticCardComponent {

  @Input() open = false;
  @Input() text = '';
  @Input() type = '';

  constructor() { }

  close(): void {
    this.open = false;
  }

  show(): void {
    this.open = true;
  }

}
