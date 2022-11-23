import { Component, OnInit } from '@angular/core';
import { WebcallsService } from '../services/webcalls.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  _webcallsObj:WebcallsService;

  constructor(_webcallsObjRef:WebcallsService){
    this._webcallsObj = _webcallsObjRef;
  } 
  

  ngOnInit(): void {
  }

}
