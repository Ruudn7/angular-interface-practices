import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DropdownComponent } from './pages/dropdowns/dropdown.component';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { PanelTabComponent } from './pages/panel-tab/panel-tab.component';
import { PanelCloseComponent } from './pages/panel/panel-close/panel-close.component';
import { PanelComponent } from './pages/panel/panel.component';
import { AppModuleRouting } from './routing.module';
import { CardCloseComponent } from './ui/card-close/card-close.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { TabsNavComponent } from './ui/panel/tabs-nav.component';
import { PopupMessageComponent } from './ui/popup-message/popup-message.component';
import { StaticCardComponent } from './ui/static-card/static-card.component';
import { DropdownDirective } from './ui/dropdown/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    StaticCardComponent,
    PopupMessageComponent,
    CardCloseComponent,
    PanelComponent,
    NavigationComponent,
    InputPageComponent,
    PanelCloseComponent,
    PanelTabComponent,
    TabsNavComponent,
    DropdownComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppModuleRouting,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
