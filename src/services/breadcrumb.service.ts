
import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbs: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  setBreadcrumbs(breadcrumbs: string[]): void {
    this.breadcrumbs.next(breadcrumbs);
  }

  getBreadcrumbs(): Observable<string[]> {
    return this.breadcrumbs.asObservable();
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateBreadcrumbs(this.activatedRoute.root);
      }
    });
  }

  private updateBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: string[] = []): void {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      this.breadcrumbs.next(breadcrumbs);
      return;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }
      const breadcrumbData = child.snapshot.data as { breadcrumb: string };
      breadcrumbs.push(breadcrumbData.breadcrumb);
      this.updateBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
