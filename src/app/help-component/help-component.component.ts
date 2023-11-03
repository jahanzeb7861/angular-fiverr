import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-component',
  templateUrl: './help-component.component.html',
  styleUrls: ['./help-component.component.css']
})
export class HelpComponentComponent implements OnInit {
  @Input() content: any;
  @Input() receivedValue: any;

  showHelp = true;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('ishelpHidden'));
  }

  closeHelp() {

    console.log('close clicked');
    localStorage.removeItem('ishelpHidden');
    console.log(localStorage.getItem('ishelpHidden'));
    this.showHelp = false;


    if (localStorage.getItem('ishelpHidden') == '1') {
      this.showHelp = true;
    }else {
      this.showHelp = false;
      localStorage.removeItem('ishelpHidden');
    }
  }
}
