// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'my-app';
//   str = "a";
//   arr = [1, 2, 3 ];

//   add() {
//     return this.title;
//   }


// }


import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1> Hello </h1>
   <input type="text" #myInput />
    <button (click)="myFunc(myInput)" >Hello there!</button>
  `,
  styles: [`
  .success {
    color:green;
  }
  .error {
    color:red;
  }
  .special {
    font-style: italic;
  }
  `]
})
export class AppComponent {
  myFunc = (input) => {
    console.log(input.value);
  }
}
