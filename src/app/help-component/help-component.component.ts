import { Component, ElementRef, Input, OnInit, Renderer2, ChangeDetectorRef  } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-help-component',
  templateUrl: './help-component.component.html',
  styleUrls: ['./help-component.component.css']
})
export class HelpComponentComponent implements OnInit {
  @Input() content: any;
  @Input() receivedValue: any;

  showHelp = true;

  constructor(private sharedService: SharedService,
              private renderer: Renderer2,
              private el: ElementRef,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.sharedService.showHelp$.subscribe((value) => {
      console.log(this.showHelp);
      this.showHelp = value;
      console.log(this.showHelp);
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }

  // closeHelpTwo() {

  //   localStorage.removeItem('ishelpHidden');
  //   // this.showHelp = false;


  //   if (localStorage.getItem('ishelpHidden') == '1') {
  //     // this.showHelp = true;
  //   }else {
  //     // this.showHelp = false;
  //     localStorage.removeItem('ishelpHidden');
  //   }
  // }


  closeHelp() {

    // this.showHelp = false;

    localStorage.removeItem('ishelpHidden');
    this.showHelp = false;
    let element = document.querySelector('.l-body>.container') as HTMLElement;
      if (element) {
        element.classList.remove('container');
        element.classList.add('container-fluid');
        // this.showHelp = false;
      } else {
        element = document.querySelector('.l-body>.container-fluid') as HTMLElement
        element.classList.remove('container-fluid');
        element.classList.add('container');
        // this.showHelp = false;
      }

    //   console.log(element);
      // this.sharedService.setHelpBoxValue('0');


      // if (element && element.classList.contains('container-fluid')) {
      //   console.log('close this');

        // console.log(this.sharedService.getHelpBoxValue());

        // if (this.sharedService.getHelpBoxValue() == '0') {
        //   this.showHelp = false;
        // }

        this.sharedService.setShowHelp(false);


      // }


  }
}
