import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MovieDataService} from '../app/movie-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieList';
  keys:any;
  mname:any;
  totaldata:any;
  data:any;
 
  movieSearch:boolean=true;

 
  constructor( public ms:MovieDataService){
   
}


ss(){
  this.movieSearch=false;
}
srchBox(){
  this.movieSearch=true;
}

ngOnInit(){

}
}