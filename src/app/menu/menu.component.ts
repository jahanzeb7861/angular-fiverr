import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  activeRoute: any;
  @Output() buttonClick = new EventEmitter<string>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private overlay: Overlay) {
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

  openLoginModal() {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    });

    const portal = new ComponentPortal(LoginModalComponent);
    overlayRef.attach(portal);
  }

}
