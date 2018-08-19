import { Component, OnInit, ViewChild, Input ,EventEmitter,Output, SimpleChanges} from '@angular/core';
// import * as ace from 'brace';
// import 'brace/mode/json';
// import 'brace/theme/xcode';


@Component({
  selector: 'code-editor',
  templateUrl:'./code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})

export class CodeEditorComponent  {
/*  @Output() sourceJSONEE: EventEmitter<any> = new EventEmitter();
  @ViewChild('editor') editor;
  @Input() text: any;
 
    ngAfterViewInit() {
        this.editor.setTheme("xcode");
        this.editor.setMode('json')
        
        this.editor.getEditor().setOptions({
            // enableBasicAutocompletion: false
            wrap:true
        });
 
        this.editor.getEditor().commands.addCommand({
            name: "showOtherCompletions",
            bindKey: "Ctrl-.",
            exec: function (editor) {
 
            }
        })
    } 
    // ngOnChanges(changes: SimpleChanges) {
    //     console.log(this.text)
    // }
    onChange($event){
        this.sourceJSONEE.emit(this.text);
    }
*/
   
}
