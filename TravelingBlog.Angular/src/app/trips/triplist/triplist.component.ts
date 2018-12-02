import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from '../models/trip';
@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.scss']
})
export class TriplistComponent implements OnInit {

  trips:Trip[] = [];
  trip:Trip = new Trip();
  page:number = 1;
  constructor(private tripService:TripService) { }

  ngOnInit() {
    this.loadTrips();
  }
  loadTrips()
  {
    this.tripService.getTrips(this.page)
    .subscribe((resp:Trip[])=>this.trips = resp);
  }
  onSuccess(res:Trip[]){
    console.log(res);
    if(res!=undefined){
      this.trips = res;
    }
  }
  onScroll(){
    console.log("Scrolled");
    this.page = this.page+1;
    this.loadTrips();
  }
}
