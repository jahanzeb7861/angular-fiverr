import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SharedService } from '../shared.service';
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
              private sharedService: SharedService,
              private renderer: Renderer2,
              private overlay: Overlay,
              private el: ElementRef) {
    this.activeRoute = this.route.snapshot.firstChild?.routeConfig?.path || '';

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeRoute = this.route.snapshot.firstChild?.routeConfig?.path || '';
      });
  }

  ngOnInit(): void {
  }

  // onButtonClickTwo(value: any) {
  //   localStorage.setItem('ishelpHidden',value);
  // }


  onButtonClick(value: any) {

    this.sharedService.setShowHelp(true); // This sets the showHelp value to true in HelpComponent

    localStorage.setItem('ishelpHidden',value);
    const ishelpHidden = localStorage.getItem('ishelpHidden');
    if (ishelpHidden === '1') {
      let element = document.querySelector('.l-body>.container-fluid') as HTMLElement;
      if (element) {
        element.classList.remove('container-fluid');
        element.classList.add('container');
      }
    }



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
