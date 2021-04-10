import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'tabs',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/tabs/tabs.module').then(m => m.TabsModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
