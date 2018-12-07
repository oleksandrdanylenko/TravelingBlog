import { Component, OnInit,HostListener } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from '../models/trip';
import { TripHalf } from '../models/TripHalf';
@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.scss']
})
export class TriplistComponent implements OnInit {

  trips:TripHalf[] = [];
  trip:TripHalf = new TripHalf();
  page:number = 1;
  isEmpty:boolean = false;
  total:number;
  constructor(private tripService:TripService) { }

  ngOnInit() {
    this.loadTrips();
  }
  loadTrips()
  {
    this.tripService.getTrips(this.page)
    .subscribe((resp:Trip)=>this.onSuccess(resp));
  }
  
 
  
  onSuccess(res:Trip) {  
    console.log(res);  
    if (res != undefined&&res.list.length!=0) {  
      res.list.forEach(item => {  
        this.trips.push(item);  
      });
      this.total = res.total;  
    }
    else
    {
      this.isEmpty = true;
    }  
  }

  //
  //-------- Pagination -------
  //

  getPage(num:number){
    if(!this.isEmpty){
      this.loadTripsForPagination(num);
    }    
    window.scrollTo(0,0);
  }
  loadTripsForPagination(num:number)
  {
    this.page = num;
    this.tripService.getTrips(this.page)
    .subscribe((resp:Trip)=>this.onSuccessForPagination(resp));
  }
  onSuccessForPagination(res:Trip) {  
    console.log(res);  
    if (res.list != undefined&&res.list.length!=0) {  
      this.trips = res.list;
      this.total = res.total;
    }
    else
    {
      this.isEmpty = true;
    }  
  }
  
  //
  //------- Scrolling -------
  //

  /*
  @HostListener("window:scroll", [])
  onscroll():void{
    if(this.bottomReached()&&!this.isEmpty){
      this.page+=1;
      this.loadTrips();
    }
  }
  
 bottomReached(): boolean {
  return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
 }*/
}
