import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path:'trips', component:TripsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
