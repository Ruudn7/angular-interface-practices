import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DropdownComponent } from './pages/dropdowns/dropdown.component';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { PanelTabComponent } from './pages/panel-tab/panel-tab.component';
import { PanelCloseComponent } from './pages/panel/panel-close/panel-close.component';
import { PanelComponent } from './pages/panel/panel.component';
import { PostOutletDirective } from './pages/socialFeed/directives/post-outlet.directive';
import { PostTplDirective } from './pages/socialFeed/directives/post-tpl.directive';
import { SocialComponentComponent } from './pages/socialFeed/social-component/social-component.component';
import { NoResultsComponent } from './pages/socialFeed/social-component/social/no-results.component';
import { PostActionsComponent } from './pages/socialFeed/social-component/social/post-actions.component';
import { PostHeaderComponent } from './pages/socialFeed/social-component/social/post-header.component';
import { PostsFeedComponent } from './pages/socialFeed/social-component/social/posts-feed.component';
import { PostsFilterComponent } from './pages/socialFeed/social-component/social/posts-filter.component';
import { AppModuleRouting } from './routing.module';
import { CardCloseComponent } from './ui/card-close/card-close.component';
import { DropdownMenuDirective } from './ui/dropdown/dropdown-menu.directive';
import { DropdownToggleDirective } from './ui/dropdown/dropdown-toggle.directive';
import { DropdownDirective } from './ui/dropdown/dropdown.directive';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { TabsNavComponent } from './ui/panel/tabs-nav.component';
import { PopupMessageComponent } from './ui/popup-message/popup-message.component';
import { StaticCardComponent } from './ui/static-card/static-card.component';
import { RegularPostDirective } from './pages/socialFeed/social-component/regular-post.directive';
import { RegularPostComponent } from './pages/socialFeed/post/regular-post/regular-post.component';
import { MediaPostComponent } from './pages/socialFeed/post/media-post/media-post.component';
import { DynamicPostComponent } from './pages/socialFeed/post/dynamic-post/dynamic-post.component';
import { CommentsComponent } from './pages/socialFeed/comments/comments.component';

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
    PostsFilterComponent,
    PostTplDirective,
    PostOutletDirective,
    RegularPostDirective,
    RegularPostComponent,
    MediaPostComponent,
    DynamicPostComponent,
    CommentsComponent
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
