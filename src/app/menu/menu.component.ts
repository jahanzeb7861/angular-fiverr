import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  activeRoute: any;
  @Output() buttonClick = new EventEmitter<string>();

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

  onButtonClick(value: any) {
    localStorage.setItem('ishelpHidden',value);
  }

}
