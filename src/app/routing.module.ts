import { PanelComponent } from './pages/panel/panel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputPageComponent } from './pages/input-page/input-page.component';

const routes: Routes = [
    {path: '', redirectTo: '/input-popup', pathMatch: 'full' },
    {path: 'input-popup', component: InputPageComponent},
    {path: 'panel', component: PanelComponent}
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
