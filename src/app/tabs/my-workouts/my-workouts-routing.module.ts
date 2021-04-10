import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { MyWorkoutsComponent } from './my-workouts.component';

const routes: Routes = [{ path: 'default', component: MyWorkoutsComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class MyWorkoutsRoutingModule {}
