import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  activeRoute: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.activeRoute = this.route.snapshot.firstChild?.routeConfig?.path || '';

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeRoute = this.route.snapshot.firstChild?.routeConfig?.path || '';
      });
  }

  ngOnInit(): void {
  }

}
