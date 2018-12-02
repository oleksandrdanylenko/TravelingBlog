import { Component, OnInit,HostListener } from '@angular/core';
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
  isEmpty:boolean = false;
  constructor(private tripService:TripService) { }

  ngOnInit() {
    this.loadTrips();
  }
  loadTrips()
  {
    this.tripService.getTrips(this.page)
    .subscribe((resp:Trip[])=>this.onSuccess(resp));
  }
  @HostListener("window:scroll", [])
  onscroll():void{
    if(this.bottomReached()&&!this.isEmpty){
      this.page+=1;
      this.loadTrips();
    }
  }
  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }
  onSuccess(res:Trip[]) {  
    console.log(res);  
    if (res != undefined&&res.length!=0) {  
      res.forEach(item => {  
        this.trips.push(item);  
      });  
    }
    else
    {
      this.isEmpty = true;
    }  
  } 
  /*
  getPage(p:number){
    this.page = p;
    this.loadTrips();
  }*/
}
