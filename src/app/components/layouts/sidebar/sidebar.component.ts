import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,NgxSpinnerModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private _spinner:NgxSpinnerService,
   
  ){}
  callSpinner() {
    this._spinner.show(); 
    setTimeout(() => {
      this._spinner.hide(); 
    }, 2000); 
  }

}