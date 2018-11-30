import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TriplistComponent } from './trips/triplist/triplist.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path:'trips',component:TriplistComponent },
  { path:'**',redirectTo:'',pathMatch:'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
