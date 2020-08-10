import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SerComponent } from './ser/ser.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FollowusComponent } from './followus/followus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"services",component:SerComponent},
  {path:"contact-us",component:ContactusComponent},
  {path:"follow-us",component:FollowusComponent},
  {path:"about-us",component:AboutusComponent},
  {path:"**",component:PagenotfoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SerComponent,
    ContactusComponent,
    FollowusComponent,
    AboutusComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
