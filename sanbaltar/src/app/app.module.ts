import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core-module/core-module.module';
import { AdminModule } from './admin-module/admin-module.module';
import { InstructorsModule } from './instructors-module/instructors-module.module';
import { SharedModule } from './shared-module/shared-module.module';
import { StudentsModule } from './students-module/students-module.module';

//testUI modules..
import { Material2Module } from './material2-module/material2-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    HttpModule,
    FlexLayoutModule,
    Material2Module,
    CoreModule,
    AdminModule,
    InstructorsModule,
    SharedModule,
    StudentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
