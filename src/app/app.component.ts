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
    <div [style.color]="'red'">Style binding</div>
    <div [style.color]="redColorVariable">Style binding</div>
    <div [style.color]="hasError? 'red' : 'green'">Style binding</div>
    <div [ngStyle]="titleStyles">Style binding</div>
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

  hasError = false;

  redColorVariable = 'red';
  titleStyles = {
    'color': 'red',
    'fontStyle': 'italic'
  };

}
