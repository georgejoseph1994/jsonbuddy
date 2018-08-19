import { Component, OnInit, ViewChild, Input, Output ,EventEmitter, SimpleChanges} from '@angular/core';
import { JsonEditorOptions, JsonEditorComponent } from 'ang-jsoneditor';


@Component({
  selector: 'jeditor',
  templateUrl: './jeditor.component.html',
  styleUrls: ['./jeditor.component.css']
})
export class JeditorComponent  {

  public editorOptions: JsonEditorOptions;
  public data:any;
  @Input() inputToCode : string="{ }";
  @Output() sourceJSONEE: EventEmitter<any> = new EventEmitter();
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  private firstTimeFlag = 0;
  constructor() { 
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.editorOptions.mode = "code"; //set only one mode
     
    this.editorOptions.onChangeText = (input)=>{
      this.inputToCode = input;
      this.sourceJSONEE.emit(input);
      console.log(this.inputToCode);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
   try{
      JSON.parse(this.inputToCode)
      this.editor.set(JSON.parse(this.inputToCode))
      console.log("Inside ngOnChanges")
    }catch(e){
      if(this.firstTimeFlag != 0)
        alert("Invalid JSON Format");
      else
        this.firstTimeFlag =1;
    }
    
  }



}
