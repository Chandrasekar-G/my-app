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


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1> Hello </h1>
    <button (click)="myFunc($event)">Hello there!</button>
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

  myFunc = (name, event) => {
    console.log(name);
    console.log(event);
  }
}
