import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsComponent } from './programs.component';

@NgModule({
  imports: [NativeScriptCommonModule, ProgramsRoutingModule],
  declarations: [ProgramsComponent, ItemDetailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProgramsModule {}
