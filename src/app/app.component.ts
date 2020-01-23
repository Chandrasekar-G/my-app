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
   <div *ngIf="name; else elseBlock">
     Name is displayed
   </div>
   <ng-template #elseBlock>
     Name is hidden
   </ng-template>


   <div *ngIf="name;then thenBlock; else elseBlock2">
   </div>

   <ng-template #thenBlock>
     Name is displayed
   </ng-template>
   
   <ng-template #elseBlock2>
     Name is hidden
   </ng-template>
   
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

}
