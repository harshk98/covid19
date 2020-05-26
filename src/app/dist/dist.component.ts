import { Component, OnInit } from '@angular/core';
import { Service } from '../shared/service.service';
@Component({
  selector: 'app-dist',
  templateUrl: './dist.component.html',
  styleUrls: ['./dist.component.css']
})
export class DistComponent implements OnInit {
  cnt;
  constructor(private service:Service) { }

  ngOnInit() {
    this.getdist();
  }
  getdist(){
    this.service.statewise().subscribe(res=>{
      //console.log(res);
      this.cnt=res;
      console.log(this.cnt);
    });
  }

}