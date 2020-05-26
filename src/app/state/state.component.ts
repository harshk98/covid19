import {Component, OnInit, ViewChild} from '@angular/core';
import { Service } from '../shared/service.service';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
state;
name=[];
confirm=[];
active=[];
recover=[];
decease=[];
  constructor(private service:Service) {
   }

  ngOnInit() {
    this.getstate();
  }
  getstate(){
    this.service.testcount().subscribe(res=>{
      this.state=res['statewise'];
      for(let i=1;i<38;i++)
      {
      this.name[i-1]=this.state[i].state;
      this.confirm[i-1]=this.state[i].confirmed;
      this.active[i-1]=this.state[i].active;
      this.recover[i-1]=this.state[i].recovered;
      this.decease[i-1]=this.state[i].deaths;
      }
    });
  }
}