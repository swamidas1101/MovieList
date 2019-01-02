import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totaldata:any;
  data:any;
  totalpage:number;
  perpage:number=20;
  currpage:number=1;
  goto:any;
  isPrevTrue=true;
  isNext=false;
  
  constructor(public http:HttpClient){
    
    this.getdata();
}
  getdata(){
  this.http.get("http://jsonplaceholder.typicode.com/photos").subscribe((response)=>{
     debugger;
     this.totaldata=response;
     console.log(this.totaldata)
     this.totalpage=this.totaldata.length/this.perpage;
     this.data=this.totaldata.slice(0,20);
     console.log(this.data)
  })
}

prepareData(){
  var end=(this.perpage*this.currpage);
  var start= end - this.perpage;
  this.data=this.totaldata.slice(start,end);
};
 
fnNext(){
  if(this.currpage!=250){
  this.isPrevTrue=false;
  ++this.currpage;
  this.prepareData();
  }
 
};
fnPre(){
  if(this.currpage>1){
  --this.currpage;
  this.prepareData();
  }
  this.isPrevTrue=false;
 
};
fnGoto(){
  this.currpage=this.goto;
  this.prepareData();
};
formSub(dt){
if(dt.valid){

}
else{
  alert("Invalid Data");

}
}
ngOnInit(){

}

}