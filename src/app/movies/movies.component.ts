import { Component, OnInit } from '@angular/core';
import {MovieDataService} from '../../app/movie-data.service'
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  mname:string;
  mmd:any;
  md:any;
  selectedMovie:any;
  movieData:any;
  constructor(private http:HttpClient) { 
    this.mname="batman";
    this.getuser();
    
   }
   getuser(){
    this.http.get("http://www.omdbapi.com/?apikey=4e29c677&s="+this.mname).subscribe((data)=>{
      debugger;
      
      this.md=data;
     
      console.log(this.md);
      this.mmd=((this.md).Search);
      this.movieData=this.mmd.slice(0,9);

    })
   }
   movieDetails(x){
     let id=x.imdbID;
     this.http.get("http://www.omdbapi.com/?apikey=4e29c677&i="+id).subscribe((result)=>{
       this.selectedMovie=result;
       
     })
     
   }

   
   
  
 
  ngOnInit() {
   
  }



}
