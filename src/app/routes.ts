import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MiddlecomponentComponent } from "./middlecomponent/middlecomponent.component";

export const appRoutes: Routes = [
    { path: '', component: MiddlecomponentComponent },
    { path: '', redirectTo: 'MiddlecomponentComponent', pathMatch: 'full' },
    { path: '**', redirectTo: 'MiddlecomponentComponent'}
  ];