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

   <div *ngFor="let color of colors; index as i">
     {{ i +  color.name }}
     {{ 'The hex code  is ' + color.hex}}
   </div>
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
  colors = [{ 'name': 'red', 'hex': '#f00' },
  { 'name': 'green', 'hex': '#0f0' },
  { 'name': 'blue', 'hex': '#00f' }];

}
