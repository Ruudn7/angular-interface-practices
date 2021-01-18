import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-close',
  templateUrl: './card-close.component.html',
  styleUrls: ['./card-close.component.scss']
})
export class CardCloseComponent implements OnInit {

  @Output() onClose = new EventEmitter<void>();

  close(): void {
    this.onClose.emit();
  }

  ngOnInit(): void {
  }

}
