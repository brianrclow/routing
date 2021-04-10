import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { MyWorkoutsRoutingModule } from './my-workouts-routing.module';
import { MyWorkoutsComponent } from './my-workouts.component';

@NgModule({
  imports: [NativeScriptCommonModule, MyWorkoutsRoutingModule],
  declarations: [MyWorkoutsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MyWorkoutsModule {}
