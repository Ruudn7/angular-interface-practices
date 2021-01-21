import { Component, EventEmitter, QueryList } from '@angular/core';
import { PanelTabComponent } from 'src/app/pages/panel-tab/panel-tab.component';

@Component({
    selector: 'app-tabs-nav',
    templateUrl: './tabs-nav.component.html'
})

export class TabsNavComponent {

    onOpen = new EventEmitter();
    panels = new QueryList<PanelTabComponent>();

    openTab(panel: PanelTabComponent): void {
        this.onOpen.emit(panel);
    }
}
