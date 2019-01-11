// import { Component } from '@angular/core';
import { Component,OnInit,  } from '@angular/core';

import { log } from 'util';
import {MapService} from './service/map.service'
import {FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Coardinates } from './model/coardinates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MapService],
})
export class AppComponent {
  mapForm:FormGroup;
  title = 'map-location';
  coardinates: any;
  long:any;
  latt:any;
  timestamp:any;
  submitted = false;
  position=[];
  id:any;
  public t1: string;
  public t2: string;
  public t3: string;
  public t4: string;
  public t5: string;
  
 
  constructor(private map : MapService) 
{
    this.mapForm = new FormGroup(
		{
    		mapForm: new FormControl()
           });
           this.t1 = "18.5642","73.77713";
           this.t2 = "18.562694","73.783884";
           this.t2 ="18.560884","73.776696";
           this.t2 = "18.568579","73.775281";
           this.t2 = "18.570898","73.781117";
          
}

ngAfterViewInit()
{
    this.getLocation();
	this.id = setInterval(() => 
	{
		//this.showPosition(); 
		// this.onSubmit();
	
	}, 7000);  
}
ngOnInit()
{
	// console.log ("My Button Init");
} 
onSubmit()
{
    this.position=[];
    this.position.push(this.coardinates.coords.longitude)
    this.position.push(this.coardinates.coords.latitude)
    this.position.push(this.coardinates.timestamp);
   	this.map.getCoordinateInfo((this.position)).subscribe(
	data => 
	{
		console.log(data);
    },
	error => 
	{
      	console.log('error');
    });
}
  
getLocation() 
{
    if(navigator.geolocation) 
    {
      	navigator.geolocation.getCurrentPosition((pos)=>this.coardinates = pos)
    } 
	else 
	{
      console.log("Geo Location not supported by browser");
    }
}
showPosition() 
{
    this.getLocation();
    this.long = "";
    this.latt = "";
    this.timestamp = "";
    this.long = this.coardinates.coords.longitude
    this.latt = this.coardinates.coords.latitude   
    this.timestamp = this.coardinates.timestamp; 
    console.log(this.long);
    console.log(this.latt);
      
}
ngOnDestroy() 
{
	if (this.id)
	{
      clearInterval(this.id);
    }
}

}

