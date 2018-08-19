import { Component, OnInit, Input, ViewChild, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { JsonEditorOptions, JsonEditorComponent } from 'ang-jsoneditor';


@Component({
  selector: 'jeditor-tree',
  templateUrl: './jeditor-tree.component.html',
  styleUrls: ['./jeditor-tree.component.css']
})
export class JeditorTreeComponent {

  public editorOptions: JsonEditorOptions;
  public data:any;

  @Input() inputToTree: string = "{}";
  @Output() targetJSONEE: EventEmitter<any> = new EventEmitter();
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  private firstTimeFlag = 0;
  constructor() { 
    this.inputToTree= "{}";
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.editorOptions.mode = 'tree'; //set only one mode
    this.editorOptions.onChangeText = (input)=>{
      this.targetJSONEE.emit(input);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    try{
      JSON.parse(this.inputToTree)
      this.editor.set(JSON.parse(this.inputToTree))
    }catch(e){
      if(this.firstTimeFlag != 0)
        alert("Invalid JSON Format");
      else
        this.firstTimeFlag =1;
    }

    
  }
}
