import { Attribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-static-card',
  templateUrl: './static-card.component.html',
  styleUrls: ['./static-card.component.scss']
})
export class StaticCardComponent {

  @Input() open = false;
  @Input() text = '';

  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(
    @Attribute('type') public type: string
  ) { }

  close(): void {
    this.open = false;
    this.closeEvent.emit(this.open);
  }

}
