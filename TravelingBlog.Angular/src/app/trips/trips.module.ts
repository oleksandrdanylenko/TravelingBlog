import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriplistComponent } from './triplist/triplist.component';
import { FulltripComponent } from './fulltrip/fulltrip.component';

@NgModule({
  declarations: [TriplistComponent, FulltripComponent],
  imports: [
    CommonModule
  ],
  exports:[TriplistComponent,FulltripComponent]
})
export class TripsModule { }
