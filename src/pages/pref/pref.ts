import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-pref',
  templateUrl: 'pref.html'
})
export class PrefPage {
  lat: any;
  lng: any;
  nlat: any;
  nlng: any;

  constructor(public navCtrl: NavController, public geo: Geolocation) {

  }

  ionViewDidLoad() {
    this.geo.getCurrentPosition().then(pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;

      this.nlat = this.lat.toFixed(6)
      this.nlng = this.lng.toFixed(6)

    }).catch(err => console.log(err));    
  }
}
