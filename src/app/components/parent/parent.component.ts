import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  messageFromParent = 'This is a message from parent ->  child';
  messageFromChild = '';
  constructor() { }

  ngOnInit() {
  }

  func = (event) => {
    console.log(event);
    this.messageFromChild = event;
  }

}
