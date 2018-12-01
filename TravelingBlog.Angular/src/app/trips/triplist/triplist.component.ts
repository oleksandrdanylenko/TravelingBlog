import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.scss']
})
export class TriplistComponent implements OnInit {

  trips:Trip[];
  trip:Trip = new Trip();
  constructor(private tripService:TripService) { }

  ngOnInit() {
    this.loadTrips();
  }
  loadTrips()
  {
    this.tripService.getTrips(1)
    .subscribe((resp:Trip[])=>this.trips = resp);
  }
}
