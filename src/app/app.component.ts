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

   <span [ngSwitch]="color">
   <p *ngSwitchCase="'red'">
    Red
   </p>
   <p *ngSwitchCase="'blue'">
    Blue
   </p>
   <p *ngSwitchDefault>
    Default
   </p>
   </span>

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
  name = false;
  color = 'red';

}
