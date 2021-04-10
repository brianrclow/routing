import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'default',
        redirectTo: '/(programsTab:programs/default//myWorkoutsTab:my-workouts/default//profileTab:profile/default)',
        pathMatch: 'full',
      },
      {
        path: 'programs',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/tabs/programs/programs.module').then(m => m.ProgramsModule),
        outlet: 'programsTab',
      },
      {
        path: 'my-workouts',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/tabs/my-workouts/my-workouts.module').then(m => m.MyWorkoutsModule),
        outlet: 'myWorkoutsTab',
      },
      {
        path: 'profile',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/tabs/profile/profile.module').then(m => m.ProfileModule),
        outlet: 'profileTab',
      },
    ],
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class TabsRoutingModule {}
