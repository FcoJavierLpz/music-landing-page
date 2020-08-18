import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat:number;
  lng:number;

  constructor(){
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lng = pos.coords.longitude;
        this.lat = pos.coords.latitude;
      });
    }
  }
  ngOnInit(): void {
  }

}
