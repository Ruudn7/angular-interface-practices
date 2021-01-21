import { TabsNavComponent } from '../../ui/panel/tabs-nav.component';
import { AfterContentInit, ContentChild, Component, ContentChildren, QueryList } from '@angular/core';

import { PanelTabComponent } from './../panel-tab/panel-tab.component';
import { PanelSharedComponent } from './../shared/panel-shared.component';

@Component({
  selector: 'app-panel',
  templateUrl: `./panel.component.html`,
  styles: []
})
export class PanelComponent extends PanelSharedComponent implements AfterContentInit {

  @ContentChild(TabsNavComponent) nav: TabsNavComponent = new TabsNavComponent();
  @ContentChildren(PanelTabComponent) panels = new QueryList<PanelTabComponent>();

  ngAfterContentInit(): void {
    if (this.nav) {
      this.nav.panels = this.panels;
      this.nav.onOpen.subscribe((panel: PanelTabComponent) => {
        this.openTab(panel);
      });
    }
    setTimeout(() => {
      this.openTab(this.panels.first);
    }, 0);
    super.ngAfterContentInit();
  }

  openTab(panel: PanelTabComponent): void {
    if (this.panels.length) {
      this.panels.toArray().forEach(
        (el: PanelTabComponent) => el.open = false);
      panel.open = true;
    }

  }
}
