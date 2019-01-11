import { Component,SimpleChanges, ElementRef, OnInit, ViewChild,Input } from '@angular/core';
import { Coardinates } from '../model/coardinates';
import { templateJitUrl } from '@angular/compiler';
// import{image} from '../../assets/truck.png'
declare var H: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  
})
export class MapComponent implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  @Input()
  public t1: any;
  @Input()
  public t2: any;
  @Input()
  public t3: any;
  @Input()
  public t4: any;
  @Input()
  public t5: any;
  constructor()  { }
  ngOnInit() {
   this.map = this.initializeMap();
  }

  initializeMap() {
    const platform = new H.service.Platform({
      "app_id": "KvR9H86HjeuX4BqHTCsR",
      "app_code": "EqvlDxDauvkc5DuLRVvOjA" ,
      useCIT: true,
      useHTTPS: true
    });
  console.log("this is t1:"+this.t1);
    const defaultLayers = platform.createDefaultLayers({
      // tileSize: 256 * Math.min(2, devicePixelRatio),
      // ppi: devicePixelRatio > 1 ? 320 : 72
    });
    const map = new H.Map(
      this.mapContainer.nativeElement,
      defaultLayers.normal.map,
      {
        center: { lat: 18.5641274, lng: 73.7798598},
        zoom: 16,
      }
    );
    // var test = "test1,test2";
    //  console.log((test.split(',')[0]));
    //  console.log('t1',this.t1);
     
    let t1Marker = new H.map.Marker({
      lat: "18.562694",
      lng: "73.783884"
      // lat: this.t1.split(",")[0],
      // lng: this.t1.split(",")[1]
  });

  // this.t2 ="18.560884","73.776696";
  //          this.t2 = "18.568579",
  //          this.t2 = "18.570898"
  let t2Marker = new H.map.Marker({
      lat: "18.560884",
      lng: "73.776696"
  });
  let t3Marker = new H.map.Marker({
    lat: "18.568579",
    lng: "73.775281"
  });
  let t4Marker = new H.map.Marker({
    lat: "18.570898",
    lng: "73.781117"
  });
  // let t5Marker = new H.map.Marker({
  //   lat: this.t5.split(",")[0],
  //   lng: this.t5.split(",")[1]
  // });
  var svgMarku = "../../assets/1truck.png"
  var icon = new H.map.Icon(svgMarku),
  coords = { lat: 18.5641274, lng: 73.7798598},
  marker = new H.map.Marker(coords, {icon: icon});
  map.addObject(marker);
  map.setCenter(coords);
  //this.map.addObjects([svgMarku, t1Marker,t2Marker,t3Marker,t4Marker,t5Marker]);
  map.addObjects([t1Marker]);
  map.addObjects([t2Marker]);
  map.addObjects([t3Marker]);
  map.addObjects([t4Marker]);

  //const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  //const ui = H.ui.UI.createDefault(map, defaultLayers);

    return map;
  }
}
