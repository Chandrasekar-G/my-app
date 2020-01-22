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
    <h1>Hi there!</h1>
    <div>{{ title }}</div>
  `,
  styles: [
    `
    div {
      color: red;
    }
    `
  ]
})
export class AppComponent {

  title = 'App title';
}
