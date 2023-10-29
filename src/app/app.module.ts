import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { MeetingComponent } from './meeting/meeting.component';
import { AbComponent } from './ab/ab.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { HelpComponentComponent } from './help-component/help-component.component'
import { MeetingFormTwoComponent } from './meetingformtwo/meetingformtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    DocumentationComponent,
    MeetingComponent,
    AbComponent,
    MenuComponent,
    NotFoundComponent,
    LoginComponent,
    HelpComponentComponent,
    MeetingFormTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
