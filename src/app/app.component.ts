import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { MeetingComponent } from './meeting/meeting.component';
import { AbComponent } from './ab/ab.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp';


  comp:any;
  detectComp(comp:any){
    console.log(comp)
    if(comp === "home"){
      this.comp = HomeComponent;
    }
    if(comp === "messages"){
      this.comp = MessagesComponent;
    }
    if(comp === "documentation"){
      this.comp = DocumentationComponent;
    }
    if(comp === "meeting"){
      this.comp = MeetingComponent;
    }
    if(comp === "ab"){
      this.comp = AbComponent;
    }
  }



}


