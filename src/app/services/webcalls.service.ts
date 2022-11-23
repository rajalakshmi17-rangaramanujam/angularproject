import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebcallsService {


  
  counter = 0;

  greetuser()
  {
    alert('welcome to my profile');
  }
  addCounter()
  {
    this.counter = this.counter + 1;
    return this.counter;
  }
  constructor() { }
}
