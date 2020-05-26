import { Component, OnInit } from '@angular/core';
import { Service } from '../shared/service.service';
@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {
  publicIP;
  dat;
  date;
  time;
  constructor(private service:Service) { 
  }

  ngOnInit() {
    this.getdata();
  }
  getdata(){
    this.service.ip().subscribe(data=>{
      this.publicIP=data['ip'];
      this.service.date(this.publicIP).subscribe(dat=>{
        this.dat=dat['datetime'];
        this.date=this.dat.split("T",2);
        this.time=this.date[1].split(".",1);
        this.date=this.date[0];
      })
    })
  }

}
