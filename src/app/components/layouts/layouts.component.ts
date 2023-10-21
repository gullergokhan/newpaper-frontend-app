import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    RouterModule,
  ],
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent {
  showSidebar: boolean = true; 

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((val) => {
      if (this.router.url === '/' || this.router.url === '/about') {
        this.showSidebar = false;
      } else {
        this.showSidebar = true;
      }
    });
  }}