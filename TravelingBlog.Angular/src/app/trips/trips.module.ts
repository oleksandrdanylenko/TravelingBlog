import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriplistComponent } from './triplist/triplist.component';
import { FulltripComponent } from './fulltrip/fulltrip.component';
import { TripService } from './trip.service';
import { SharedModule } from '../shared/modules/shared.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [TriplistComponent, FulltripComponent],
  imports: [
    CommonModule,
    SharedModule,
    InfiniteScrollModule
  ],
  exports:[TriplistComponent,FulltripComponent],
  providers:[TripService]
})
export class TripsModule { }
