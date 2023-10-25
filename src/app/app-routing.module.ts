import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { MeetingComponent } from './meeting/meeting.component';
import { AbComponent } from './ab/ab.component';

const routes: Routes = [
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
