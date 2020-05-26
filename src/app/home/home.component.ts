import { Component, OnInit } from '@angular/core';
import { Service } from '../shared/service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  confirm;
  active;
  recover;
  deceased;
  rrate;
  drate;
  lup;
  constructor(private service:Service) { }

  ngOnInit() {
    this.getconfirm();
  }
  getconfirm(){
    this.service.testcount().subscribe(res=>{
      console.log(res['statewise']);
      this.confirm=res['statewise']['0'].confirmed;
      this.active=res['statewise']['0'].active;
      this.recover=res['statewise']['0'].recovered;
      this.deceased=res['statewise']['0'].deaths;
      this.rrate=(Math.round(this.recover * 100) / this.confirm).toFixed(2);
      this.drate=(Math.round(this.deceased * 100) / this.confirm).toFixed(2);
      this.lup=(res['statewise']['0'].lastupdatedtime);
      // this.lup=this.lup.replace("\/",""); 
      // this.lup=this.lup.replace("\/","");
      // this.lup=this.lup.replace(" ","");
      // this.lup=this.lup.replace(":","");
      // this.lup=this.lup.replace(":","");
    });
  }
}
