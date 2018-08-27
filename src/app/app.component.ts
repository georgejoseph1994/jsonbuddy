import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';


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
  public closeResult: string;

  private fileText;
 
  constructor(private modalService: NgbModal,private activeModalService:NgbActiveModal,private http: HttpClient){
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
  storeTargetJSON(targetJSON){
    this.tempTargetJSON = targetJSON;
  //   console.log("storeTargetJSON")
  }
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

  fileUpload(event) {
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
      me.fileText = reader.result;
    }
  }

  displayUploadedFile(){
    this.sourceJSON = this.fileText;
    this.targetJSON = this.fileText;
    this.tempSourceJSON = this.fileText;
    this.tempTargetJSON = this.fileText;
  }
  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      //If file is not selected
      if(!this.fileText){
        alert("Select a file to upload")
      }
      else{//Checking if it is a vaid json
        try{
          JSON.parse(this.fileText)
          this.displayUploadedFile()
        }
        catch(e){
          alert("Invalid JSON")
        }
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  openURL(urlFileUpload){
    this.modalService.open(urlFileUpload, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(result){
        this.http.get(result).subscribe((res:Response) => {
          try{
            this.fileText = JSON.stringify(res);
            this.displayUploadedFile();
          }catch(e){
            alert("Url responded with an invalid JSON")
          }
        },error=>{
          alert("Invalid URL");
        });
      }
      console.log(result)
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
