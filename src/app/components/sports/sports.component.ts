import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/services/app.service';
import { BreadcrumbService } from 'src/services/breadcrumb.service';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  news: any[] = [];
  currentPosts: any[] = [];
  currentPage = 1;
  postsPerPage = 12; 
  pages: number[] = [];

  constructor(private appService: AppService, private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setBreadcrumbs(['Home', 'Sports']);
  }

  ngOnInit() {
    this.appService.getNewsByCategory('sports', (res) => {
      this.news = res.articles; 
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