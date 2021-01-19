import { PanelCloseComponent } from './panel-close/panel-close.component';
import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: `./panel.component.html`,
  styles: []
})
export class PanelComponent implements OnInit, AfterContentInit {
  @Input() title = '';
  @Input() open = true;

  @ContentChild(PanelCloseComponent) closeBtn = new PanelCloseComponent();


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.closeBtn);
    if (this.closeBtn) {
      this.closeBtn.onClose.subscribe(() => {
        this.open = false;
      });
    }
  }

}
