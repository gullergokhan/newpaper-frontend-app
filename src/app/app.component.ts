import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from 'src/services/app.service';


@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>`,
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AppComponent {
  constructor(
    private _app:AppService
  ){
    _app.get((res)=> {
      // console.log(res);
    })
  }
}
