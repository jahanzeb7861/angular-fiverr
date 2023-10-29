import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { MeetingComponent } from './meeting/meeting.component';
import { AbComponent } from './ab/ab.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { MeetingFormTwoComponent } from './meetingformtwo/meetingformtwo.component';

const routes: Routes = [
  {
    path: '', // This empty path will be the default route
    redirectTo: '/home', // Redirect to the 'home' path
    pathMatch: 'full' // Ensure a full match for the empty path
  },
  {
    component:HomeComponent,
  path:"home"
},
{
  component:MessagesComponent,
  path:"messages"
},
{
  component:DocumentationComponent,
  path:"documentation"
},
{
  component:MeetingComponent,
  path:"meeting"
},
{
  component:AbComponent,
  path:"ab"
},
{
  component:LoginComponent,
  path:"login"
},
{
  component:MeetingFormTwoComponent,
  path:"access-event"
},
{
  path: '**', // Wildcard route for unknown routes
  component: NotFoundComponent // Display the 404 not found component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
