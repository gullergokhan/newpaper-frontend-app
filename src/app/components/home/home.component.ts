import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { AppService } from 'src/services/app.service';
import { BreadcrumbService } from 'src/services/breadcrumb.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: any[] = [];
  currentPosts: any[] = [];
  currentPage = 1;
  postsPerPage = 20; 
  pages: number[] = [];
  searchTerm: string = '';

 
  constructor(private appService: AppService, private breadcrumbService: BreadcrumbService) {
    
    this.breadcrumbService.setBreadcrumbs(['Home', '']);
  }

  ngOnInit(): void {
    this.appService.get((data: any) => {
      this.news = data.articles;
      this.setPageNumbers();
      this.setCurrentPage(1); 
    });
  }
  

  setCurrentPage(page: number) {
    this.currentPage = page;
    const lastPostIndex = this.currentPage * this.postsPerPage;
    const firstPostIndex = lastPostIndex - this.postsPerPage;
    this.currentPosts = this.news.slice(firstPostIndex, lastPostIndex);
  }

  setPageNumbers() {
    this.pages = Array(Math.ceil(this.news.length / this.postsPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }
 
}
