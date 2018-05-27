import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';
import { SettingsComponent } from './settings/settings.component';
import { AclComponent } from './settings/acl/acl.component';
import { UserComponent } from './settings/user/user.component';

@NgModule({
  declarations: [
    HomeComponent,
    CommonComponent,
    SettingsComponent,
    AclComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
