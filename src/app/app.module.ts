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
import { HelpComponentComponent } from './help-component/help-component.component'
import { MeetingFormTwoComponent } from './meetingformtwo/meetingformtwo.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { SquareComponent } from './square/square.component';
import { GameService } from './game.service';
import { SharedService } from './shared.service';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

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
    HelpComponentComponent,
    MeetingFormTwoComponent,
    TicTacToeComponent,
    SquareComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OverlayModule,
    PortalModule,
  ],
  providers: [GameService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
