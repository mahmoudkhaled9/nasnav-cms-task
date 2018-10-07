import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { GallaryComponent } from './gallary/gallary.component';
import {UsersService} from './users.service';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { SportComponent } from './sport/sport.component';

const appRoutes:Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'business',
    component:BusinessComponent,
  },
  {
    path:'tech',
    component:TechComponent,
  },
  {
    path:'sport',
    component:SportComponent,
  },
  {
    path:'gallary',
    component:GallaryComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    GallaryComponent,
    HomeComponent,
    BusinessComponent,
    TechComponent,
    SportComponent,
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
