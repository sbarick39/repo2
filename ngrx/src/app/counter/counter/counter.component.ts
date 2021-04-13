import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  public counter:number=0

  ngOnInit(): void {
  this.increment()
  this.decrement()
  this.reset()
  }
  increment(){
    this.counter++
  }
  decrement(){
    this.counter--
  }
  reset(){
    this.counter=0
  }
}
