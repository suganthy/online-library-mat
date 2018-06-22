import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { MatSlideToggle } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { environment } from './environments/environment';


//extra import addeedd//


import 'hammerjs';

if (environment.production) {
    enableProdMode();
  }


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
