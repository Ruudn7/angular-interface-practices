import { InputPageComponent } from './pages/input-page/input-page.component';
import { RouterModule } from '@angular/router';
import { AppModuleRouting } from './routing.module';
import { PanelComponent } from './pages/panel/panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StaticCardComponent } from './ui/static-card/static-card.component';
import { PopupMessageComponent } from './ui/popup-message/popup-message.component';
import { CardCloseComponent } from './ui/card-close/card-close.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { PanelCloseComponent } from './pages/panel/panel-close/panel-close.component';

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
