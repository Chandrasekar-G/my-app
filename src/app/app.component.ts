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
  <div [class]="successClass">This is a success block</div>
  <div class="error">This is a error block</div>
  <div class="special" [class]="successClass">class becomes dummy when we bind it.</div>
  <div [class.error]="isError">THis is an error!!</div>
  <div [ngClass]="messageClasses">This explains conditionally applying multiple classes</div>
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

  successClass = 'success';

  isError = false;
  isSpecial = true;

  // ng class directive for conditionally applying multiple classes
  messageClasses = {
    'success': !this.isError,
    'error': this.isError,
    'special': this.isSpecial
  };

}
