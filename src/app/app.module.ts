import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StaticCardComponent } from './ui/static-card/static-card.component';
import { PopupMessageComponent } from './ui/popup-message/popup-message.component';
import { CardCloseComponent } from './ui/card-close/card-close.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticCardComponent,
    PopupMessageComponent,
    CardCloseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
