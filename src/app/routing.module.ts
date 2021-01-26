import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownComponent } from './pages/dropdowns/dropdown.component';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { PanelComponent } from './pages/panel/panel.component';
import { SocialComponentComponent } from './pages/socialFeed/social-component/social-component.component';

const routes: Routes = [
    {path: '', redirectTo: '/input-popup', pathMatch: 'full' },
    {path: 'input-popup', component: InputPageComponent},
    {path: 'panel', component: PanelComponent},
    {path: 'dropdown', component: DropdownComponent},
    {path: 'social', component: SocialComponentComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppModuleRouting {}
