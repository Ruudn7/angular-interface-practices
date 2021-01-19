import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel-close',
  templateUrl: './panel-close.component.html',
  styleUrls: ['./panel-close.component.scss']
})
export class PanelCloseComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.onClose.emit();
  }

}
