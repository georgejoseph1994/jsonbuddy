import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public sourceJSON:string;
  public targetJSON :string;
  public tempSourceJSON :string;
  public tempTargetJSON:string;
  constructor(){
    this.sourceJSON ="{}";
    this.targetJSON = "{}";
    this.tempSourceJSON = "{}";
    this.tempTargetJSON = "{}";
  }
  ngOnInit(){
    
  }
  title = 'app';
  heading = "{ jsonbuddy.com }";
  storeSourceJSON(sourceJSON){
    this.tempSourceJSON = sourceJSON
    //console.log("sourceJSON"+sourceJSON)
    // console.log(this.targetJSON);
    //console.log("storeSourceJSON")
  }
  // storeTargetJSON(targetJSON){
  //   this.tempTargetJSON = targetJSON;
  //   console.log("storeTargetJSON")
  // }
  targetToSource(){
   this.sourceJSON = this.tempTargetJSON;
    console.log("Inside targetToSource") 
    console.log(this.sourceJSON)
    // console.log(this.tempTargetJSON)
    
  }
  sourceToTarget(){
    console.log("Inside sourceToTarget")
    this.targetJSON=this.tempSourceJSON;
    console.log("target json = "+this.targetJSON);
  }
}
