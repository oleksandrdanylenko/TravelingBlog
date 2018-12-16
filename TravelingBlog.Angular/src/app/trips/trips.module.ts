import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriplistComponent } from './triplist/triplist.component';
import { FulltripComponent } from './fulltrip/fulltrip.component';
import { TripService } from './trip.service';
import { SharedModule } from '../shared/modules/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [TriplistComponent, FulltripComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports:[TriplistComponent,FulltripComponent],
  providers:[TripService]
})
export class TripsModule { }
