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
   <input type="text" value="Chan" [id]="elementId" [disabled]="disabledInter"/>
   <input type="text" value="Chan" id="{{elementId}}" disabled="{{disabledInter}}"/>

  `
})
export class AppComponent {

  // Diff bw HTML property and attribute
  // Attributes - HTML (cannot change once done), Properties - DOM (change dynamically)
  // $0.getAttribute('value'); $0.value

  elementId = "my-input";

  disabledInter = false;
}
