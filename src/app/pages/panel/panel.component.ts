import { Component, ContentChildren, QueryList } from '@angular/core';

import { PanelTabComponent } from './../panel-tab/panel-tab.component';
import { PanelSharedComponent } from './../shared/panel-shared.component';

@Component({
  selector: 'app-panel',
  templateUrl: `./panel.component.html`,
  styles: []
})
export class PanelComponent extends PanelSharedComponent {

  @ContentChildren(PanelTabComponent) panels = new QueryList<PanelTabComponent>();

}
