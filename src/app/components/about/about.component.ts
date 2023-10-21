import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbService } from 'src/services/breadcrumb.service';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showSidebar: boolean = false; 

  constructor(private appService: AppService, private breadcrumbService: BreadcrumbService) {
    
    this.breadcrumbService.setBreadcrumbs(['Home', 'About']);
  }

}
