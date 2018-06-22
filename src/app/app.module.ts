
import { AppComponent } from './app.component';
//import { ErrorHandler } from '@angular/core';
import { HomeComponent } from './home/home.component';
//import { SettingsComponent } from './settings/settings.component';
//import { AclComponent } from './settings/acl/acl.component';
//import { UserComponent } from './settings/user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { CommonComponent } from './common/common.component';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggle } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { appRoutes } from './routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule } from '@angular/material';
import { MiddlecomponentComponent } from './middlecomponent/middlecomponent.component';
import {controlMessageComponent} from './middlecomponent/control-message.component';
import { HomeService } from './home/home.service';

/****************/



@NgModule({
  exports: [
    
    BrowserAnimationsModule,
   // CommonComponent,
    MiddlecomponentComponent,
    HomeComponent,
    MaterialModule
  ],
  providers: [
    HomeService
  ],

  imports: [
    
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],

  declarations:[ 
             // CommonComponent,
              controlMessageComponent,
              MiddlecomponentComponent,
              HomeComponent, 
              AppComponent,
              HeaderComponent, 
              FooterComponent, 
             
            ],
  bootstrap: [
	    AppComponent 
  ]
})

export class AppModule { }
/***************/

