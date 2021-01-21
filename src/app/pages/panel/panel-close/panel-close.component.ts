import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel-close',
  templateUrl: './panel-close.component.html',
  styleUrls: ['./panel-close.component.scss']
})
export class PanelCloseComponent {
  @Output() onClose = new EventEmitter();

  close(): void {
    this.onClose.emit();
  }

}
