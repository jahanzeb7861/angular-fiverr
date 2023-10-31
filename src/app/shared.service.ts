import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isHelpVisible:any;
  private showHelpSource = new BehaviorSubject<boolean>(true);
  showHelp$ = this.showHelpSource.asObservable();

  constructor() {
  }

  // setHelpBoxValue(value:any){
  //   this.isHelpVisible = value;
  // }

  // getHelpBoxValue(){
  //   return this.isHelpVisible;
  // }


  setShowHelp(value: boolean) {
    this.showHelpSource.next(value);
  }

}
