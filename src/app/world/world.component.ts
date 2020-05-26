import { Component, OnInit } from '@angular/core';
import { Service } from '../shared/service.service';
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  totdata;
active;
recover;
death;
case;
data;
SearchText:string="";
p:number=1;
  constructor(private service:Service) { }

  ngOnInit() {
    this.getdata();
  }
  getdata(){
    this.service.totworld().subscribe(res=>{
      //this.active=res[''].rows[0].active_cases;
      this.recover=res['Global'].TotalRecovered;
      this.death=res['Global'].TotalDeaths;
      this.case=res['Global'].TotalConfirmed;
      this.active=this.case-this.recover-this.death;
      this.totdata=res['Global'];
      console.log(this.totdata);
    });
    this.service.world().subscribe(res=>{
      this.data=res;
      console.log(this.data.sort((a,b)=>{
        return b.active-a.active;
      }));
    });
  }
}
