import { PostsFilterComponent } from './pages/socialFeed/social-component/social/posts-filter.component';
import { PostsFeedComponent } from './pages/socialFeed/social-component/social/posts-feed.component';
import { PostHeaderComponent } from './pages/socialFeed/social-component/social/post-header.component';
import { PostActionsComponent } from './pages/socialFeed/social-component/social/post-actions.component';
import { NoResultsComponent } from './pages/socialFeed/social-component/social/no-results.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DropdownComponent } from './pages/dropdowns/dropdown.component';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { PanelTabComponent } from './pages/panel-tab/panel-tab.component';
import { PanelCloseComponent } from './pages/panel/panel-close/panel-close.component';
import { PanelComponent } from './pages/panel/panel.component';
import { SocialComponentComponent } from './pages/socialFeed/social-component/social-component.component';
import { AppModuleRouting } from './routing.module';
import { CardCloseComponent } from './ui/card-close/card-close.component';
import { DropdownMenuDirective } from './ui/dropdown/dropdown-menu.directive';
import { DropdownToggleDirective } from './ui/dropdown/dropdown-toggle.directive';
import { DropdownDirective } from './ui/dropdown/dropdown.directive';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { TabsNavComponent } from './ui/panel/tabs-nav.component';
import { PopupMessageComponent } from './ui/popup-message/popup-message.component';
import { StaticCardComponent } from './ui/static-card/static-card.component';

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
    DropdownDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    SocialComponentComponent,
    NoResultsComponent,
    PostActionsComponent,
    PostHeaderComponent,
    PostsFeedComponent,
    PostsFilterComponent
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
