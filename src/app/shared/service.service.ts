import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Service {
  public url="https://api.covid19india.org/";
  constructor(public http:HttpClient) { }
    testcount(){
      return this.http.get(this.url+"data.json");
    }
    statewise(){
      return this.http.get(this.url+"v2/state_district_wise.json");
    }
    rawdatat(){
      return this.http.get(this.url+"raw_data.json");
    }
    travel_history(){
      return this.http.get(this.url+"travel_history.json");
    }
    states_daily_changes(){
      return this.http.get(this.url+"states_daily.json");
    }
    totworld(){
      return this.http.get("https://cors-anywhere.herokuapp.com/https://api.covid19api.com/summary");
    }
    world(){
      return this.http.get("https://cors-anywhere.herokuapp.com/https://corona.lmao.ninja/v2/countries?sort=country");
    }
    ip(){
      return this.http.get('https://cors-anywhere.herokuapp.com/https://api.ipify.org?format=json');
    }
    date(ip){
      return this.http.get('https://cors-anywhere.herokuapp.com/https://worldtimeapi.org/api/ip/'+ip);
    }
}
