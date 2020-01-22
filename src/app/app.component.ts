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
    <h2>Welcome {{ name}}</h2>
    <div>Inerpolation examples</div>
    <div> {{ 2+2 }} </div>
    <div>{{ "Welcome " + name }}</div>
    <div>{{ name.length}} </div>
    <div>{{ name.toUpperCase()}} </div>
    <div>{{ greetUser()}}</div>
    <!-- <div>{{ a = 'hello' }}</div> -->
    <!-- <div>{{window.location.href }}</div> -->
  `
})
export class AppComponent {

  title = 'App title';
  name = "Chan";

  greetUser = () => {
    return 'Greetings '+ this.name;
  }
}
