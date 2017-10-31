import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';

@NgModule({
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ],
  declarations: [AdminModuleComponent]
})
export class AdminModule{ }
