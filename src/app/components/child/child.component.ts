import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() message;
  @Output() someOutput = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendOutput = () => {
    this.someOutput.emit('Message from Child -> Parent');
  }

}
