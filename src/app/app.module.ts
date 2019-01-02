import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
let rts:Routes=[
              {path:"",component:HomeComponent},
              {path:"movies",component:MoviesComponent},
              {path:"home",component:HomeComponent}
            ]
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(rts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
