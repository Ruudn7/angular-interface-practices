import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';

import { PanelCloseComponent } from './../panel/panel-close/panel-close.component';

@Component({
    selector: 'app-panel-shared',
    template: ''
})

export class PanelSharedComponent implements AfterContentInit {
    @Input() open = true;
    @Input() title = '';

    @ContentChild(PanelCloseComponent) closeBtn = new PanelCloseComponent();

    ngAfterContentInit(): void {
        this.subscribeClose();
    }

    subscribeClose(): void {
    if (this.closeBtn) {
        this.closeBtn.onClose.subscribe(() => {
            this.open = false;
        });
        }
    }
}
