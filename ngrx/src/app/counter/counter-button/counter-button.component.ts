import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
;

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  @Output() increment= new EventEmitter<any>()
  @Output() decrement= new EventEmitter<any>()
  @Output() reset= new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  onIncrement(){
  this.increment.emit()
  }
  onDecrement(){
    this.decrement.emit()
  }
  onReset(){
    this.reset.emit()
  }

}
